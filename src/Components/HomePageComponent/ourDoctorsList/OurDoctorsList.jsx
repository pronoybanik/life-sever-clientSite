import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaMobileAltSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaStethoscope } from "react-icons/fa";
import Loading from "../../../Shared/Loading/Loading";

const OurDoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/doctorProfile?limit=4`);
        const data = await response.json();
        setDoctors(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setIsLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
          <FaStethoscope className="text-4xl text-[#60A3D9]" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Doctors</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our team of dedicated healthcare professionals is committed to providing you with the highest quality medical care.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
        {doctors.map((doctor, index) => (
          <Link 
            key={doctor._id || index} 
            to={`/DoctorDetails/${doctor._id}`}
            className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img
                alt={doctor.name || "Doctor"}
                src={doctor.DoctorProfileImage || "https://images.pexels.com/photos/7579828/pexels-photo-7579828.jpeg"}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#60A3D9] group-hover:text-[#003B73] transition-colors">
                  {doctor.name || "Dr. Name"}
                </h3>
                <p className="text-gray-600">{doctor.specialty || "Specialist"}</p>
                <div className="h-0.5 w-16 bg-[#60A3D9] mt-3"></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600 group-hover:text-[#60A3D9] transition-colors">
                  <LiaMobileAltSolid className="text-xl" />
                  <span className="ml-3 text-sm">{doctor.phone || "Contact Number"}</span>
                </div>

                <div className="flex items-center text-gray-600 group-hover:text-[#60A3D9] transition-colors">
                  <CgMail className="text-xl" />
                  <span className="ml-3 text-sm">{doctor.email || "Email Address"}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[#60A3D9] hover:text-[#003B73] transition-colors">
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {doctors.length === 0 && !isLoading && (
        <div className="text-center py-20">
          <div className="text-gray-500 text-xl">
            No doctors available at the moment.
          </div>
        </div>
      )}
      
      {doctors.length > 4 && (
        <div className="text-center mt-12">
          <Link
            to="/ourDoctors"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#60A3D9] rounded-md hover:bg-[#003B73] transition-colors duration-300"
          >
            View All Doctors
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};

export default OurDoctorsList;
