import React, { useState } from "react";
import Error from "../../../Shared/error/Error";
import { json } from "react-router-dom";
import PrimaryButton from "../../../Shared/PrimaryButton";
import SecondaryButton from "../../../Shared/SecondaryButton";

const UserDataItem = ({ data }) => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [error, setError] = useState("");

  const handleStatusChange = (event) => {
    const status = event.target.value;

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${data?._id}`, {
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
        if (responseData?.statusbar === 200) {
          fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${data?.doctorId[0]}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
              },
              body: JSON.stringify({ status }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setError(responseData.error);
              if (data?.statusbar === 200) {
                setError("");
                alert(data?.message);
                window.location.reload();
              }
            });
        }
      });
  };

  const handleDelete = (userId) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/v1/user/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.statusbar === 200) {
          setError("");
          alert(data?.message);
          window.location.reload();
        }
      });
  };

  return (
    <>
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {data?.firstName}
          {data?.LastName}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{data?.email}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700 font-bold">
          {data?.Role}
        </td>
        <td class="whitespace-nowrap px-4 text-red-500 font-semibold py-2">
          {data?.status}
        </td>
        <select
          onChange={handleStatusChange}
          className="h-8 w-72 my-2 rounded border-gray-200 bg-gray-50 p-0 text-center text-lg text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
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
        <td>
          <SecondaryButton onClick={() => handleDelete(data?._id)}>
            Delete
          </SecondaryButton>
        </td>

        {error && <Error>{error}</Error>}
      </tr>
    </>
  );
};

export default UserDataItem;
