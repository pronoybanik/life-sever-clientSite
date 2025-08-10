import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SecondaryButton from "../../Shared/SecondaryButton";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";

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
    <div>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:ml-20 lg:mt-20">
                <img
                  alt="Les Paul"
                  src={DoctorProfileImage}
                  className="aspect-square w-[400px] rounded-xl object-cover"
                />

                {/* <div className="grid grid-cols-2 gap-4 lg:mt-4">
                              <img
                                  alt="Les Paul"
                                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                  className="aspect-square w-full rounded-xl object-cover"
                              />

                              <img
                                  alt="Les Paul"
                                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                  className="aspect-square w-full rounded-xl object-cover"
                              />

                              <img
                                  alt="Les Paul"
                                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                  className="aspect-square w-full rounded-xl object-cover"
                              />

                              <img
                                  alt="Les Paul"
                                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                  className="aspect-square w-full rounded-xl object-cover"
                              />
                          </div> */}
              </div>

              <div className="sticky top-0">
                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text- font-medium tracking-wide text-blue-600">
                  Per Hour Charge - {PerHourCharge}
                </strong>

                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {FirstName}
                      {LastName}
                    </h1>

                    <p className="text-lg font-semibold">{DoctorType}</p>
                    <p className="text-sm font-semibold">
                      MobileNumber: {MobileNumber}
                    </p>

                    {/* starts */}
                    <div className="-ms-0.5 flex">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  {/* <p className="text-lg font-bold uppercase">Per Hour Charge - {PerHourCharge}</p> */}
                </div>

                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p>{About}</p>
                  </div>

                  {/* <button className="mt-2 text-sm font-medium underline">Read More</button> */}
                </div>

                <form className="mt-8">
                  <fieldset>
                    <legend className="mb-2 text-lg font-medium">
                      Appointment status
                    </legend>

                    <div className="flex flex-wrap gap-1">
                      <label htmlFor="color_tt" className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          new appointment
                        </span>
                      </label>

                      <label htmlFor="color_fr" className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          old appointment
                        </span>
                      </label>

                      {/* <label htmlFor="color_cb" className="cursor-pointer">
                                          <input
                                              type="radio"
                                              name="color"
                                              id="color_cb"
                                              className="peer sr-only"
                                          />

                                          <span
                                              className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                          >
                                              Cobalt Blue
                                          </span>
                                      </label> */}
                    </div>
                  </fieldset>

                  <fieldset className="mt-4">
                    <legend className="mb-2 text-lg font-medium">
                      Appointment time
                    </legend>

                    <div className="flex flex-wrap gap-1">
                      <label htmlFor="size_xs" className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          className="peer sr-only"
                        />

                        <span className="group w-36 inline-flex h-8  items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          {WorkingHour}
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <Link to="/bookAppointment" className="mt-8 flex gap-4">
                    <SecondaryButton>set appointment</SecondaryButton>
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
