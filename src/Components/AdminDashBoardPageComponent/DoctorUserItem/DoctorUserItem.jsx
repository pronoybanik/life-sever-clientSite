import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../../Shared/error/Error";
import SecondaryButton from "../../../Shared/SecondaryButton";

const DoctorUserItem = ({ doctor, deleteUserHandler, onUpdate }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localDoctor, setLocalDoctor] = useState(doctor);

  // admin role set
  const handleAdmin = (id) => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ Role: "Doctor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setError(data.error);
        if (data.statusbar === 200) {
          fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${doctor?.userId[0]}`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "application/json",
            },
            body: JSON.stringify({ Role: "Doctor" }),
          })
            .then((res) => res.json())
            .then((data) => {
              setIsLoading(false);
              setError(data.error);
              if (data.statusbar === 200) {
                alert(data.message);
                // Update local state with new role
                const updatedDoctor = { ...localDoctor, Role: "Doctor" };
                setLocalDoctor(updatedDoctor);
                if (onUpdate) onUpdate(updatedDoctor);
              }
            });
        }
      });
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${doctor?._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setError(responseData.error);
        if (responseData.statusbar === 200) {
          alert(responseData.message);
          setError("");
          // Update local state with new status
          const updatedDoctor = { ...localDoctor, status };
          setLocalDoctor(updatedDoctor);
          if (onUpdate) onUpdate(updatedDoctor);
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
    if (role === 'Doctor') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-700">
          🩺 Doctor
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
        {role || 'Pending'}
      </span>
    );
  };

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-150">
        <td className="whitespace-nowrap px-6 py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {localDoctor?.FirstName?.charAt(0)}{localDoctor?.LastName?.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">
                {localDoctor?.FirstName} {localDoctor?.LastName}
              </p>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <p className="text-sm text-gray-700">{localDoctor?.LoginUserEmail}</p>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <p className="text-sm text-gray-600">{localDoctor?.Email}</p>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700">
            {localDoctor?.DoctorType}
          </span>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {getStatusBadge(localDoctor?.status)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {getRoleBadge(localDoctor?.Role)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {localDoctor?.Role === "Doctor" ? (
            <button 
              disabled
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500 text-sm font-medium cursor-not-allowed flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Role Set
            </button>
          ) : (
            <button
              onClick={() => handleAdmin(doctor._id)}
              disabled={isLoading}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors duration-150 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Approve
                </>
              )}
            </button>
          )}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <Link
            to={`/DoctorDetails/${doctor?._id}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors duration-150 shadow-sm hover:shadow"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </Link>
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          <button
            onClick={() => deleteUserHandler(doctor?._id)}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors duration-150 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            )}
            Delete
          </button>
        </td>
        <td className="px-6 py-4">
          <select
            onChange={handleStatusChange}
            defaultValue=""
            className="block w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 cursor-pointer"
          >
            <option value="" disabled>Change Status</option>
            <option value="active" className="font-medium">✓ Active</option>
            <option value="inactive" className="font-medium">⏸ Inactive</option>
            <option value="blocked" className="font-medium">✕ Blocked</option>
          </select>
        </td>
      </tr>
      {error && (
        <tr>
          <td colSpan="10" className="px-6 py-2">
            <Error>{error}</Error>
          </td>
        </tr>
      )}
    </>
  );
};

export default DoctorUserItem;
