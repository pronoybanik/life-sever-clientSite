import React, { useEffect, useState, useContext, useRef } from "react";
import axiosInstance from "../../../utils/axiosInterceptor";
import { authContext } from "../../AuthProvider/AuthProvider";
import Error from "../../../Shared/error/Error";
import DoctorUserItem from "../DoctorUserItem/DoctorUserItem";
import AdminTableLoader from "../../../Shared/Loading/AdminTableLoader";

const tableName = [
  { name: "Name" },
  { name: "Doctor Personal Email" },
  { name: "user Email" },
  { name: "Doctor Type" },
  { name: "Status" },
  { name: "Role" },
  { name: "confirm Doctor role" },
  { name: "view profile" },
  { name: "Delete doctor user" },
  { name: "Change status" },
];

const DoctorUsers = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useContext(authContext);
  const hasFetched = useRef(false);

  const fetchDoctors = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(`/api/v1/doctorProfile`);
      
      if (response.data.status === "success") {
        setDoctors(response.data.data);
        setError("");
      } else {
        setError(response.data.error || "Failed to fetch doctors");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && !hasFetched.current) {
      hasFetched.current = true;
      fetchDoctors();
    }
  }, [user]);

  // Update doctor in local state
  const updateDoctorInList = (updatedDoctor) => {
    setDoctors(prevDoctors => 
      prevDoctors.map(doctor => 
        doctor._id === updatedDoctor._id ? { ...doctor, ...updatedDoctor } : doctor
      )
    );
  };

  // Delete user
  const deleteUserHandler = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.delete(
        `/api/v1/doctorProfile/details/${id}`
      );
      
      if (response.data.statusbar === 200 || response.status === 200) {
        alert(response.data.message || "Doctor deleted successfully");
        setDoctors(doctors.filter((doctor) => doctor._id !== id));
      } else {
        setError(response.data.error || "Failed to delete doctor");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to delete doctor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              {tableName?.map((data) => (
                <th className="whitespace-nowrap px-4 py-2 font-bold text-xs text-gray-900 uppercase">
                  {data.name}
                </th>
              ))}

              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y mx-20 divide-gray-200">
            {isLoading ? (
              <AdminTableLoader />
            ) : (
              doctors?.map((doctor) => (
                <DoctorUserItem
                  deleteUserHandler={deleteUserHandler}
                  doctor={doctor}
                  key={doctor?._id}
                  onUpdate={updateDoctorInList}
                ></DoctorUserItem>
              ))
            )}
          </tbody>
        </table>
        {error && <Error>{error}</Error>}
      </div>
    </section>
  );
};

export default DoctorUsers;
