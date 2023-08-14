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
    PerHourCharge
  } = doctorProfile;

  return Role === "admin" ? (
    // <section>
    //   <div>
    //     <Link
    //       to={`/DoctorDetails/${_id}`}
    //       className="group relative block bg-black h-96 mt-6"
    //     >
    //       <img
    //         alt="Developer"
    //         src={DoctorProfileImage}
    //         className="absolute inset-0 h-96 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //       />

    //       <div className="relative p-4 sm:p-6 lg:p-8 -mt-5">
    //         <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
    //           Doctor
    //         </p>

    //         <p className="text-xl font-bold text-white sm:text-2xl">
    //           {FirstName} {LastName}
    //         </p>

    //         <div className="mt-32 sm:mt-48 lg:mt-64">
    //           <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    //             <p className="text-sm text-white">{About}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </section>
    <Link
      to={`/DoctorDetails/${_id}`}
      className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
    >
      <img
        alt="Home"
        src={DoctorProfileImage}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">price: {PerHourCharge}</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Parking</p>

              <p className="font-medium">2 spaces</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <svg
              className="h-4 w-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Bathroom</p>

              <p className="font-medium">2 rooms</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ) : null;
};

export default DoctorsCard;
