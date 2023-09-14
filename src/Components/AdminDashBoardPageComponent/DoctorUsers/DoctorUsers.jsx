import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SecondaryButton from "../../../Shared/SecondaryButton";
import Error from "../../../Shared/error/Error";

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
        console.log("data", responseData.data);
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
        console.log("error", error);
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

  // admin role set
  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/api/v1/doctorProfile/details/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Role: "Doctor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.statusbar === 200) {
        //   alert(data.message);
        //   window.location.reload();
        // }
      });

    fetch(`http://localhost:5000/api/v1/user/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Role: "Doctor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.statusbar === 200) {
          alert(data.message);
          window.location.reload();
        }
      });
  };

  return (
    <section className="flex justify-center">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Doctor Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y mx-20 divide-gray-200">
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              doctors?.map((doctor) => (
                <>
                  <tr key={doctor?._id} className="max-w-lg">
                    <td className="whitespace-nowrap  px-4 py-2 font-medium text-gray-900">
                      {doctor?.FirstName} {doctor?.LastName}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {doctor?.Email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {doctor?.DoctorType}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {doctor?.status}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {doctor?.PerHourCharge}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      {doctor?.Role === "Doctor" ? (
                        <button className="disabled bg-slate-400 text-white px-8 py-2">
                          Role set
                        </button>
                      ) : (
                        <div onClick={() => handleAdmin(doctor._id)}>
                          <SecondaryButton>select by doctor</SecondaryButton>
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link
                        to={`/DoctorDetails/${doctor?._id}`}
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View details
                      </Link>
                    </td>
                    <td
                      onClick={() => deleteUserHandler(doctor?._id)}
                      className="whitespace-nowrap px-4 py-2"
                    >
                      <button className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        delete user
                      </button>
                    </td>
                  </tr>
                </>
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
