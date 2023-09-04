import { useState } from "react";
import { Link } from "react-router-dom";

const DoctorNavbar = () => {
    const [border, setBorder] = useState("settings");
    return (
        <div>
            <nav className="lg:mx-32" >
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 border-b border-gray-100">
                   

                    <li className="flex-1">
                        <Link onClick={() => setBorder('message')} to="/doctorDashBoard/message" className="relative block p-4">
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
                                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    />
                                </svg>

                                <span className="text-sm font-medium text-gray-900"> Message </span>
                            </div>
                        </Link>
                    </li>

                    <li className="flex-1">
                        <Link onClick={() => setBorder('Notification')} to="/doctorDashBoard/notification" className="relative block p-4">
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
                    </li>
                    <li className="flex-1">
                        <Link onClick={() => setBorder('PatientList')} to="/doctorDashBoard/patientList" className="relative block p-4">
                            <span
                                className={`absolute inset-x-0 -bottom-px h-px w-full ${border === "PatientList" ? "bg-pink-600" : "bg-slate-50"}`}
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

                                <span className="text-sm font-medium text-gray-900"> Patient List </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    );
};

export default DoctorNavbar;