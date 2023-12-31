import { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  const [border, setBorder] = useState("settings");
  return (
    <div>
      <nav className="lg:mx-80 mt-6">
        <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 border-b border-gray-100">
          <li className="flex-1">
            <Link
              onClick={() => setBorder("AllDoctor")}
              to="/adminDashBoard/allDoctorUser"
              className="relative block p-4"
            >
              <span
                className={`absolute inset-x-0 -bottom-px h-px w-full ${
                  border === "AllDoctor" ? "bg-pink-600" : "bg-slate-50"
                }`}
              ></span>

              <div className="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>

                <span className="text-sm font-medium text-gray-900">
                  {" "}
                  All Doctor{" "}
                </span>
              </div>
            </Link>
          </li>
          <li className="flex-1">
            <Link
              onClick={() => setBorder("AllUser")}
              to="/adminDashBoard/allUser"
              className="relative block p-4"
            >
              <span
                className={`absolute inset-x-0 -bottom-px h-px w-full ${
                  border === "AllUser" ? "bg-pink-600" : "bg-slate-50"
                }`}
              ></span>

              <div className="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>

                <span className="text-sm font-medium text-gray-900">
                  {" "}
                  All User{" "}
                </span>
              </div>
            </Link>
          </li>

          {/* <li className="flex-1">
                        <Link onClick={() => setBorder('message')} to="/adminDashBoard/message" className="relative block p-4">
                            <span
                                className={`absolute inset-x-0 -bottom-px h-px w-full ${border === "message" ? "bg-pink-600" : "bg-slate-50"}`}
                            ></span>

                            <div className="flex items-center justify-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                    />
                                </svg>

                                <span className="text-sm font-medium text-gray-900"> Messages </span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex-1">
                        <Link onClick={() => setBorder('Archive')} to="" className="relative block p-4">
                            <span
                                className={`absolute inset-x-0 -bottom-px h-px w-full ${border === "Archive" ? "bg-pink-600" : "bg-slate-50"}`}
                            ></span>
                            <div className="flex items-center justify-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    />
                                </svg>

                                <span className="text-sm font-medium text-gray-900"> Archive </span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex-1">
                        <Link onClick={() => setBorder('Notification')} to="" className="relative block p-4">
                            <span
                                className={`absolute inset-x-0 -bottom-px h-px w-full ${border === "Notification" ? "bg-pink-600" : "bg-slate-50"}`}
                            ></span>
                            <div className="flex items-center justify-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>

                                <span className="text-sm font-medium text-gray-900"> Notifications </span>
                            </div>
                        </Link>
                    </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavBar;
