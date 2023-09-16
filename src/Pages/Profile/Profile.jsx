import React, { useContext } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import { CgMail } from "react-icons/cg";
import { LiaMobileAltSolid } from "react-icons/lia";
import SecondaryButton from "../../Shared/SecondaryButton";

const Profile = () => {
  const { user } = useContext(authContext);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-5xl p-8 rounded-lg shadow-md">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-32 h-32 mx-auto rounded-full"
          />
          <SecondaryButton>Edit</SecondaryButton>
          <h2 className="text-xl font-semibold mt-4">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-600 text-lg font-medium ">
            Role: {user?.Role}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec ligula eget nunc egestas fringilla.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <ul className="mt-2">
            <li className="flex items-center space-x-2 text-gray-600">
              <div className="text-3xl text-blue-400 ">
                <CgMail />
              </div>
              {user?.email}
            </li>
            <li className="flex items-center space-x-2 text-gray-600 mt-2">
              <div className="text-3xl text-blue-400 ">
                <LiaMobileAltSolid />
              </div>
              (123) 456-7890
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Social Media</h3>
          <ul className="mt-2">
            <li className="flex items-center space-x-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 3a1 1 0 00-1 1v3.586L8.707 9.293a1 1 0 00-1.414 1.414l3.999 3.999a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L13 11.586V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Twitter: @johndoe
            </li>
            <li className="flex items-center space-x-2 text-gray-600 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm-1 5.414l2.293 2.293a1 1 0 001.414 0L13 6.414V10a1 1 0 11-2 0V7H6a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 010 2H6a3 3 0 01-3-3V7.414z"
                  clipRule="evenodd"
                />
              </svg>
              LinkedIn: /johndoe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
