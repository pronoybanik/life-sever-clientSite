import React, { useState } from "react";
import Error from "../../../Shared/error/Error";
import { json } from "react-router-dom";
import PrimaryButton from "../../../Shared/PrimaryButton";
import SecondaryButton from "../../../Shared/SecondaryButton";

const UserDataItem = ({ data, onUpdate, onDelete }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [error, setError] = useState("");
  const [localData, setLocalData] = useState(data);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = (event) => {
    const status = event.target.value;
    
    if (!status || status === localData.status) {
      return;
    }
    
    setIsUpdating(true);

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${data?._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData?.statusbar === 200) {
          // If user has doctorId, update doctor profile too
          if (data?.doctorId && data?.doctorId[0]) {
            fetch(
              `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${data?.doctorId[0]}`,
              {
                method: "PATCH",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "content-type": "application/json",
                },
                body: JSON.stringify({ status }),
              }
            )
              .then((res) => res.json())
              .then((doctorData) => {
                setIsUpdating(false);
                if (doctorData?.statusbar === 200) {
                  setError("");
                  alert(doctorData?.message || "Status updated successfully");
                  // Update local state with new status
                  const updatedData = { ...localData, status };
                  setLocalData(updatedData);
                  if (onUpdate) onUpdate(updatedData);
                } else {
                  setError(doctorData?.error || "Failed to update doctor profile");
                }
              })
              .catch((err) => {
                setIsUpdating(false);
                setError("Failed to update doctor profile");
              });
          } else {
            // No doctor profile, just update user
            setIsUpdating(false);
            setError("");
            alert(responseData?.message || "Status updated successfully");
            const updatedData = { ...localData, status };
            setLocalData(updatedData);
            if (onUpdate) onUpdate(updatedData);
          }
        } else {
          setIsUpdating(false);
          setError(responseData?.error || "Failed to update status");
        }
      })
      .catch((err) => {
        setIsUpdating(false);
        setError("Failed to update status");
      });
  };

  const handleDelete = (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.statusbar === 200) {
          setError("");
          alert(data?.message);
          // Call parent callback to remove user from list
          if (onDelete) onDelete(userId);
        }
      });
  };

  const getStatusBadge = (status) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === 'active') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Active
        </span>
      );
    } else if (statusLower === 'inactive') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Inactive
        </span>
      );
    } else if (statusLower === 'blocked') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Blocked
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200">
        {status}
      </span>
    );
  };

  const getRoleBadge = (role) => {
    const roleColors = {
      'Patient': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Doctor': 'bg-blue-100 text-blue-700 border-blue-200',
      'Admin': 'bg-purple-100 text-purple-700 border-purple-200',
    };
    const colorClass = roleColors[role] || 'bg-gray-100 text-gray-700 border-gray-200';
    
    return (
      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${colorClass}`}>
        {role}
      </span>
    );
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-150">
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {localData?.firstName?.charAt(0)}{localData?.LastName?.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">
                {localData?.firstName} {localData?.LastName}
              </p>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <p className="text-sm text-gray-700">{localData?.email}</p>
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {getRoleBadge(localData?.Role)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {getStatusBadge(localData?.status)}
        </td>
        <td className="px-6 py-4">
          <select
            onChange={handleStatusChange}
            value=""
            key={localData?.status}
            disabled={isUpdating}
            className="block w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 cursor-pointer min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="" disabled>{isUpdating ? "Updating..." : "Change Status"}</option>
            <option value="active" className="font-medium">✓ Active</option>
            <option value="inactive" className="font-medium">⏸ Inactive</option>
            <option value="blocked" className="font-medium">✕ Blocked</option>
          </select>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <button
            onClick={() => handleDelete(data?._id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors duration-150 shadow-sm hover:shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </td>
      </tr>
      {error && (
        <tr>
          <td colSpan="6" className="px-6 py-2">
            <Error>{error}</Error>
          </td>
        </tr>
      )}
    </>
  );
};

export default UserDataItem;
