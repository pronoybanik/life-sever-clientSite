import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SecondaryButton from "../../Shared/SecondaryButton";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";
import PrimaryButton from "../../Shared/PrimaryButton";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    DoctorProfileImage,
    FirstName,
    LastName,
    About,
    DoctorType,
    PerHourCharge,
    WorkingHour,
    MobileNumber,
  } = doctorDetails;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${id}`
      )
      .then((data) => {
        setIsLoading(false);
        setDoctorDetails(data.data.data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10">
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg mb-4">
                <img
                  alt={FirstName + ' ' + LastName}
                  src={DoctorProfileImage}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-2xl font-bold text-blue-900 mb-1 text-center">
                Dr. {FirstName} {LastName}
              </h1>
              <p className="text-blue-600 text-base font-semibold mb-2 text-center uppercase tracking-wide">
                {DoctorType}
              </p>
              <p className="text-gray-500 text-sm mb-2 text-center">{About}</p>
              <div className="flex flex-col gap-2 w-full mt-2">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="font-medium">Working:</span>
                  <span className="text-blue-700 font-semibold">{WorkingHour}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="font-medium">Mobile:</span>
                  <span className="text-blue-700 font-semibold">{MobileNumber}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="font-medium">Fee:</span>
                  <span className="text-blue-700 font-semibold">${PerHourCharge}</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="bg-blue-50 rounded-2xl p-6 shadow-inner">
                <h2 className="text-lg font-bold text-blue-800 mb-4">Book an Appointment</h2>
                <form>
                  <fieldset>
                    <legend className="mb-2 text-base font-medium text-gray-700">
                      Appointment status
                    </legend>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <label htmlFor="color_tt" className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="peer sr-only"
                        />
                        <span className="group inline-block rounded-full border px-4 py-1 text-xs font-medium peer-checked:bg-blue-700 peer-checked:text-white transition-colors">
                          New appointment
                        </span>
                      </label>
                      <label htmlFor="color_fr" className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="peer sr-only"
                        />
                        <span className="group inline-block rounded-full border px-4 py-1 text-xs font-medium peer-checked:bg-blue-700 peer-checked:text-white transition-colors">
                          Old appointment
                        </span>
                      </label>
                    </div>
                  </fieldset>
                  <fieldset className="mb-4">
                    <legend className="mb-2 text-base font-medium text-gray-700">
                      Appointment time
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      <label htmlFor="size_xs" className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          className="peer sr-only"
                        />
                        <span className="group w-36 inline-flex h-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-blue-700 peer-checked:text-white transition-colors">
                          {WorkingHour}
                        </span>
                      </label>
                    </div>
                  </fieldset>
                  <Link to="/bookAppointment" className="mt-4 flex gap-4">
                    <SecondaryButton>Set Appointment</SecondaryButton>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DoctorDetails;
