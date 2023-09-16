import React, { useState } from "react";
import SecondaryButton from "../../../Shared/SecondaryButton";

const PatientItem = ({ data }) => {
  const [error, setError] = useState("");
  const {
    _id,
    appointmentStatus,
    doctorDetails,
    appointmentDate,
    appointmentType,
    durationTime,
    notes,
    gender,
    patientEmail,
    patientName,
    patientProfileImage,
    phoneNumber,
    status,
    reason,
  } = data;

  const handleStatusChange = (data) => {
    const status = data.target.value;

    fetch(`http://localhost:5000/api/v1/appointment/${_id}`, {
      method: "PATCH",
      headers: {
        // Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setError(responseData.message);
        if (responseData.statusbar === 200) {
          alert(responseData.message);
          setError("");
          window.location.reload();
        }
      });
  };

  const handleDone = () => {
    fetch(`http://localhost:5000/api/v1/appointment/${_id}`, {
      method: "PATCH",
      headers: {
        // Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Done" }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setError(responseData.message);
        if (responseData.statusbar === 200) {
          alert(responseData.message);
          setError("");
          window.location.reload();
        }
      });
  };

  return !status === "Done" ? (
    <div className="mx-4">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-44 h-44 rounded-full my-6"
            src={patientProfileImage}
            alt=""
          />
        </div>
        <dl className=" divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Doctor Name</dt>
            <dd className="text-gray-700 sm:col-span-2 font-medium">
              {doctorDetails?.name}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Appointment Date</dt>
            <dd className="text-gray-700 sm:col-span-2 font-medium">
              {appointmentStatus}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Appointment Status</dt>
            <dd className="text-gray-700 sm:col-span-2 font-medium">
              {appointmentDate}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Appointment Location</dt>
            <dd className="text-gray-700 sm:col-span-2 font-medium">
              {appointmentType}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900"> Duration Time</dt>
            <dd className="text-gray-700 sm:col-span-2 font-medium">
              {durationTime} Minutes
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Patient Name</dt>
            <dd className="text-gray-700 sm:col-span-2">{patientName}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Patient Email</dt>
            <dd className="text-gray-700 sm:col-span-2">{patientEmail}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Patent PhoneNumber</dt>
            <dd className="text-gray-700 sm:col-span-2">{phoneNumber}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Sex</dt>
            <dd className="text-gray-700 sm:col-span-2">{gender}</dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900"> Note Health</dt>
            <dd className="text-gray-700 sm:col-span-2">{reason}</dd>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900"> status</dt>
              {status === "Pending" && (
                <select
                  onChange={handleStatusChange}
                  className="h-8 w-72 rounded border-gray-200 bg-gray-50 p-0 text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  id="nameSelect"
                  name="selectedName"
                >
                  <option className="font-bold">product status</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">canceled</option>
                </select>
              )}
              {status === "Confirmed" && (
                <p className="text-md font-bold ">
                  confirm Appointment At {appointmentDate}
                </p>
              )}
              {status === "Done" && <p className="text-md font-bold ">Done</p>}
              {status === "Confirmed" && (
                <div onClick={handleDone} value="value">
                  <SecondaryButton>Done</SecondaryButton>
                </div>
              )}
            </div>
          </div>
        </dl>
      </div>
    </div>
  ) : null;
};

export default PatientItem;
