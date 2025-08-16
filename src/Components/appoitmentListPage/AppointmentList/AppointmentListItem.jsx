
import React, { useEffect, useState } from "react";
import { FaUserMd, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaNotesMedical, FaVenusMars } from "react-icons/fa";

const AppointmentListItem = ({ data }) => {
  const [doctorInfo, setDoctorsInfo] = useState({});
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

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${doctorDetails.doctorId}`
    )
      .then((res) => res.json())
      .then((data) => setDoctorsInfo(data.data));
  }, []);

  return (
    <div className="mx-4 my-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-3xl mx-auto">
        {/* Header: Patient Avatar, Name, Status */}
        <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-blue-50 to-blue-100 border-b">
          <img
            className="w-28 h-28 rounded-full border-4 border-blue-200 shadow"
            src={patientProfileImage}
            alt={patientName}
          />
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-1">
              <FaUser className="text-blue-500" />
              <span className="text-xl font-bold text-gray-800">{patientName}</span>
              <span className={`ml-3 px-3 py-1 rounded-full text-xs font-semibold 
                ${status === "Confirmed" ? "bg-green-100 text-green-700" : status === "Done" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
              >
                {status}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaEnvelope /> {patientEmail}
              <FaPhone className="ml-4" /> {phoneNumber}
              <FaVenusMars className="ml-4" /> {gender}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Doctor Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <FaUserMd className="text-indigo-500" />
              <span className="font-semibold">Doctor:</span>
              <span>{doctorInfo?.FirstName} {doctorInfo?.LastName}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-indigo-400" />
              <span className="font-semibold">Email:</span>
              <span>{doctorInfo?.Email}</span>
            </div>
          </div>

          {/* Appointment Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <FaCalendarAlt className="text-pink-500" />
              <span className="font-semibold">Date:</span>
              <span>{appointmentDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-green-500" />
              <span className="font-semibold">Location:</span>
              <span>{appointmentType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FaClock className="text-yellow-500" />
              <span className="font-semibold">Duration:</span>
              <span>{durationTime} Minutes</span>
            </div>
          </div>
        </div>

        {/* Notes & Status */}
        <div className="px-8 pb-6">
          <div className="flex items-center gap-2 text-gray-700 mb-2">
            <FaNotesMedical className="text-red-400" />
            <span className="font-semibold">Health Note:</span>
            <span>{reason}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="font-semibold">Appointment Status:</span>
            <span className={`px-2 py-1 rounded text-xs font-bold 
              ${status === "Confirmed" ? "bg-green-100 text-green-700" : status === "Done" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
            >
              {status === "Confirmed"
                ? "Confirmed - Please check your email."
                : status === "Done"
                ? "Done"
                : "Pending"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentListItem;
