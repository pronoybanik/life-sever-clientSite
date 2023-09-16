import React, { useState } from "react";
import Error from "../../../Shared/error/Error";

const UserDataItem = ({ data }) => {
  const [error, setError] = useState("");

  const handleStatusChange = (event) => {
    const status = event.target.value;

    fetch(`http://localhost:5000/api/v1/user/${data?._id}`, {
      method: "PATCH",
      headers: {
        // Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData?.statusbar === 200) {
          fetch(
            `http://localhost:5000/api/v1/doctorProfile/details/${data?.doctorId[0]}`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ status }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setError(responseData?.message);
              if (data?.statusbar === 200) {
                setError("");
                alert(data?.message);
                window.location.reload();
              }
            });
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
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{data?.Role}</td>
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
        {error && <Error>{error}</Error>}
      </tr>
    </>
  );
};

export default UserDataItem;