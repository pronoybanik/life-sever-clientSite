import { memo, useMemo } from "react";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctorProfile }) => {
    const { _id, FirstName, LastName, DoctorImage, About } = doctorProfile;
    return (
        <div >
            <Link to={`/DoctorDetails/${_id}`} className="group relative block bg-black">
                <img
                    alt="Developer"
                    src={DoctorImage}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8 -mt-5">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Doctor
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{FirstName} {LastName}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                {About}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DoctorsCard;