import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDataItem from "../userItem/UserDataItem";
import Loading from "../../../Shared/Loading/Loading";

const tableName = [
  { name: "Name" },
  { name: "Email" },
  { name: "Role" },
  { name: "Status" },
  { name: "Change status" },
];

const AllUser = () => {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responseData) => {
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
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

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
              <Loading />
            ) : (
              userData.map((data) => (
                <UserDataItem key={data?._id} data={data}></UserDataItem>
              ))
            )}
          </tbody>
        </table>
        {error && <Error>{error}</Error>}
      </div>
    </section>
  );
};

export default AllUser;
