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

  return Role === "Doctor" && status === "Active" ? (
    <Link
      to={`/DoctorDetails/${_id}`}
      className="block rounded-lg p-4 shadow-sm  shadow-indigo-100"
    >
      <div className="mx-2 group hover:scale-105 transform transition-transform duration-300 ease-in-out">
        <img src={DoctorProfileImage} alt="" className="w-96 h-36" />
        <br />

        <p className="text-xl text-[#60A3D9] group-hover:text-blue-500">
          {DoctorType}
        </p>
        {/* <p>{About}</p> */}
        <p className="border-b mt-2"></p>
        <div className="text-lg font-medium mt-1">
          Name: {FirstName}
          {LastName}
        </div>
        <div className="text-sm font-medium mt-1">
          Working Hour: {WorkingHour}
        </div>
        <div className="text-sm font-medium mt-1">Price: {PerHourCharge}</div>
      </div>
    </Link>
  ) : null;
};

export default DoctorsCard;
