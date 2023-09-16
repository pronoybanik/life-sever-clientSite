import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SecondaryButton from "../../../Shared/SecondaryButton";
import Error from "../../../Shared/error/Error";
import DoctorUserItem from "../DoctorUserItem/DoctorUserItem";

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
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("Token"));
  // const { data, loading, error } = UseGetRequest("api/v1/doctorProfile");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Data
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/doctorProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responseData) => {
        if (responseData.data.status === "success") {
          setDoctors(responseData.data.data);
          setIsLoading(false);
          setError("");
        } else {
          setIsLoading(false);
          setError(responseData.data.error);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [isLoading, error]);

  // Delete user
  const deleteUserHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/doctorProfile/details/${id}`, {
        method: "DELETE",
      })
      // .then(res => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert(`Delete user`);
          const remaining = doctors.filter((doctor) => doctor._id !== id);
          setDoctors(remaining);
        }
      });
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
              <p>Loading....</p>
            ) : (
              doctors?.map((doctor) => (
                <DoctorUserItem
                  deleteUserHandler={deleteUserHandler}
                  doctor={doctor}
                  key={doctor?._id}
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
