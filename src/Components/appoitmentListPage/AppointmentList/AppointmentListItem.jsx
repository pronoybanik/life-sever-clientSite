import React from "react";

const AppointmentListItem = ({ data }) => {
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

  return (
    <div className="mx-4">
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-52 h-52 rounded-full my-6"
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

              {status === "Confirmed" ? (
                <p className="text-md font-bold ">
                  Your Appointment is Confirmed and please check out Email
                </p>
              ) : (
                <p>Appointment is pending</p>
              )}
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default AppointmentListItem;
