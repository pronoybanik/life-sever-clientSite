import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUser = () => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/user")
      .then((responseData) => {
        console.log("data", responseData);
        if (responseData.data.status === "success") {
          setUserData(responseData.data.data);
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
  }, []);
  console.log(userData);
  return (
    <div>
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {userData.map((data) => (
              <tr key={data?._id}>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {data?.firstName}{data?.LastName}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data?.email}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data?.Role}
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
