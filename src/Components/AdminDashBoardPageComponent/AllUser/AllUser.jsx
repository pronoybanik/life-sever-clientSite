import axiosInstance from "../../../utils/axiosInterceptor";
import React, { useEffect, useState } from "react";
import UserDataItem from "../userItem/UserDataItem";
import Loading from "../../../Shared/Loading/Loading";
import AdminTableLoader from "../../../Shared/Loading/AdminTableLoader";
import Error from "../../../Shared/error/Error";

const tableName = [
  { name: "Name" },
  { name: "Email" },
  { name: "Role" },
  { name: "Status" },
  { name: "Change status" },
  { name: "User Delete" },
];

const AllUser = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`/api/v1/user`);
        
        if (response.data.status === "success") {
          setUserData(response.data.data);
          setError("");
        } else {
          setError(response.data.error || "Failed to fetch users");
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Update user in local state
  const handleUpdateUser = (updatedUser) => {
    setUserData(prevUsers => 
      prevUsers.map(user => 
        user._id === updatedUser._id ? { ...user, ...updatedUser } : user
      )
    );
  };

  // Remove user from local state
  const handleDeleteUser = (userId) => {
    setUserData(prevUsers => prevUsers.filter(user => user._id !== userId));
  };

  return (
    <section className="flex justify-center">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              {tableName?.map((data, index) => (
                <th key={index} className="whitespace-nowrap px-4 py-2 font-bold text-xs text-gray-900 uppercase">
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
              userData.map((data) => (
                <UserDataItem 
                  key={data?._id} 
                  data={data}
                  onUpdate={handleUpdateUser}
                  onDelete={handleDeleteUser}
                ></UserDataItem>
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
