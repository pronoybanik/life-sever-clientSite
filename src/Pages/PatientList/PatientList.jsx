
import React, { useContext, useEffect, useState, useRef } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import { FaUserMd, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone, FaNotesMedical, FaVenusMars } from "react-icons/fa";
import SecondaryButton from "../../Shared/SecondaryButton";
import Error from "../../Shared/error/Error";

const PatientList = () => {
  const { user, loading: authLoading } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (authLoading) return;
    
    const doctorId = user?.doctorId?.[0]?._id || user?.doctorId?.[0];
    
    // Check if we have valid user and doctorId
    if (!user || !doctorId) {
      setLoading(false);
      return;
    }

    // Prevent duplicate fetches
    if (hasFetched.current) return;
    hasFetched.current = true;

    // Get token safely
    const tokenStr = localStorage.getItem("Token");
    if (!tokenStr) {
      setLoading(false);
      setError("Authentication required");
      return;
    }

    let token;
    try {
      token = JSON.parse(tokenStr);
    } catch (e) {
      setLoading(false);
      setError("Invalid token");
      return;
    }

    fetch(
      `${import.meta.env.VITE_API_URL}/api/v1/appointment/doctorId/${doctorId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          setPatientData(res.data);
          setError("");
        } else {
          setError(res.error || "Failed to fetch appointments");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || "Error fetching data");
      });
  }, [user, authLoading]);



  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2 my-6">
      {loading ? (
        <Loading />
      ) : (
        patientData?.map((data) => {
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
            <div className="mx-4 my-6" key={_id}>
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
                        ${status === "Confirmed" ? "bg-green-100 text-green-700" : status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}
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
                      <span>{doctorDetails?.name}</span>
                    </div>
                  </div>

                  {/* Appointment Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaCalendarAlt className="text-pink-500" />
                      <span className="font-semibold">Date:</span>
                      <span>{appointmentStatus}</span>
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
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <span className="font-semibold">Appointment Status:</span>
                    {status === "Pending" && (
                      <select
                        className="h-8 w-48 rounded border-gray-200 bg-gray-50 p-0 text-center text-sm text-gray-600 focus:outline-none"
                        id="nameSelect"
                        name="selectedName"
                      >
                        <option className="font-bold">Select status</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    )}
                    {status === "Confirmed" && (
                      <span className="text-green-700 font-bold">Confirmed at {appointmentDate}</span>
                    )}
                    {status === "Done" && <span className="text-blue-700 font-bold">Done</span>}
                    {status === "Confirmed" && (
                      <div className="ml-4">
                        <SecondaryButton>Done</SecondaryButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      {error && <Error>{error}</Error>}
    </section>
  );
};

export default PatientList;
