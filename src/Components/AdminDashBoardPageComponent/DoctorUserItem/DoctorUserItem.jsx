import React, { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../../Shared/error/Error";
import SecondaryButton from "../../../Shared/SecondaryButton";

const DoctorUserItem = ({ doctor, deleteUserHandler }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // admin role set
  const handleAdmin = (id) => {
    setIsLoading(true);
    fetch(`https://life-sever-serversite.vercel.app/api/v1/doctorProfile/details/${id}`, {
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
          fetch(`https://life-sever-serversite.vercel.app/api/v1/user/${doctor?.userId[0]}`, {
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
                window.location.reload();
              }
            });
        }
      });
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;

    fetch(`https://life-sever-serversite.vercel.app/api/v1/doctorProfile/details/${doctor?._id}`, {
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
          window.location.reload();
        } 
      });
  };

  return (
    <>
      <tr className="max-w-lg">
        <td className="whitespace-nowrap   px-4 py-2 font-medium text-gray-900">
          {doctor?.FirstName} {doctor?.LastName}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {doctor?.LoginUserEmail}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {doctor?.Email}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {doctor?.DoctorType}
        </td>
        <td className="whitespace-nowrap font-bold text-red-500  px-4 py-2">
          {doctor?.status}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {doctor?.Role}
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          {doctor?.Role === "Doctor" ? (
            <button className="disabled bg-slate-400 text-white px-8 py-2">
              Role set
            </button>
          ) : (
            <div onClick={() => handleAdmin(doctor._id)}>
              <SecondaryButton>
                {isLoading ? <p>Loading...</p> : <p>select Doctor</p>}
              </SecondaryButton>
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
            {isLoading ? <p>Loading</p> : <p>Delete user</p>}
          </button>
        </td>
        <select
          onChange={handleStatusChange}
          className="h-8 w-72 my-2 rounded border-gray-300 bg-gray-200  p-0 text-center text-lg text-gray-800 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          id="nameSelect"
          name="selectedName"
        >
          <option className="bg-gray-300">status</option>
          <option className="font-semibold" value="active">
            Active
          </option>
          <option className="font-semibold" value="inactive">
            inActive
          </option>
          <option className="font-semibold" value="blocked">
            Blocked
          </option>
        </select>
        <br />
        {error && <Error>{error}</Error>}
      </tr>
    </>
  );
};

export default DoctorUserItem;
