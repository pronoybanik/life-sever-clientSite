import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";

const PatientList = () => {
  const { user } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user && user.doctorId && user.doctorId.length > 0) {
      fetch(
        `https://life-sever-serversite.vercel.app/api/v1/appointment/doctorId/${user?.doctorId[0]._id}`
      )
        .then((res) => res.json())
        .then((res) => {
          setError(res.error);
          if (res.status === "success") {
            setPatientData(res.data);
            setError("");
          }
        })
        
    }
  }, [user]);

  console.log(patientData);

  return <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2 my-6">
    {patientData?.map((data) => {
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
        <div className="mx-4" key={_id}>
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
                  <dt className="font-medium text-gray-900">
                    Appointment Date
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 font-medium">
                    {appointmentStatus}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">
                    Appointment Status
                  </dt>
                  <dd className="text-gray-700 sm:col-span-2 font-medium">
                    {appointmentDate}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">
                    Appointment Location
                  </dt>
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
                  <dd className="text-gray-700 sm:col-span-2">
                    {patientEmail}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">
                    Patent PhoneNumber
                  </dt>
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
                    {status === "Done" && (
                      <p className="text-md font-bold ">Done</p>
                    )}
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
        </div>
      );
    })}
    {error && <Error>{error}</Error>}
  </section>;
};

export default PatientList;
