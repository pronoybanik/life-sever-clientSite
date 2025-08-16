import { Link } from "react-router-dom";

const DoctorsCard = ({ doctorProfile }) => {

  const {
    _id,
    FirstName,
    LastName,
    DoctorProfileImage,
    About,
    Role,
    WorkingHour,
    PerHourCharge,
    DoctorType,
    status,
  } = doctorProfile;

  return Role === "Doctor" && status === "active" ? (
    <Link
      to={`/DoctorDetails/${_id}`}
      className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-0 group border border-gray-100 hover:border-blue-200"
    >
      <div className="flex flex-col items-center p-5">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 shadow-md -mt-10 mb-3 bg-white">
          <img
            src={DoctorProfileImage}
            alt={FirstName + ' ' + LastName}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-center w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            Dr. {FirstName} {LastName}
          </h2>
          <p className="text-blue-600 text-sm font-semibold mb-2 uppercase tracking-wide">
            {DoctorType}
          </p>
          <p className="text-gray-500 text-xs mb-2 line-clamp-2 min-h-[32px]">{About}</p>
          <div className="flex justify-between items-center text-xs text-gray-600 bg-blue-50 rounded-lg px-3 py-2 mt-2">
            <span className="font-medium">Working: <span className="text-blue-700 font-semibold">{WorkingHour}</span></span>
            <span className="font-medium">Fee: <span className="text-blue-700 font-semibold">${PerHourCharge}</span></span>
          </div>
        </div>
      </div>
    </Link>
  ) : null;
};

export default DoctorsCard;
