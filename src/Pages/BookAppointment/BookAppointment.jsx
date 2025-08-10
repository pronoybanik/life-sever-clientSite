import React, { useEffect, useState } from "react";
import usePostRequest from "../../Shared/usePostReq";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../Shared/SecondaryButton";

const BookAppointment = () => {
  const [doctorType, setDoctorType] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const { post, data, loading, error } = usePostRequest();

  if (data?.statusbar === 200) {
    alert(data.message);
    navigate("/appointmentList");
  }

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile?sort=PerHourCharge&fields=DoctorType,FirstName,LastName, status`
      )
      .then((data) => setDoctorType(data.data.data));
  }, []);

  // create appointment to doctor
  const appointmentHandle = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userId = id;
    const patientName = form.patientName.value;
    const patientEmail = form.patientEmail.value;
    const phoneNumber = form.phone.value;
    const doctorDetails = {
      name: form.doctorName.value,
      doctorId: form.doctorId.value,
    };
    const gender = form.gender.value;
    const appointmentStatus = form.appointmentStatus.value;
    const appointmentDate = form.appointmentDate.value;
    const durationTime = Number(form.durationTime.value);
    const reason = form.reason.value;
    const appointmentType = form.appointmentType.value;
    const status = "Pending";
    const notes = form.message.value;

    // upload patient image
    const DoctorImage = imgUrl;
    const formData = new FormData();
    formData.append("image", DoctorImage);

    const url =
      "https://api.imgbb.com/1/upload?key=99f58a547dc4b1d269148eb1b605ef29";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgData) => {
        const patientProfileImage = imgData.data.url;
        const BookAppointment = {
          userId,
          patientName,
          patientEmail,
          phoneNumber,
          doctorDetails,
          gender,
          appointmentStatus,
          appointmentDate,
          durationTime,
          reason,
          appointmentType,
          status,
          notes,
          patientProfileImage,
        };
        await post("api/v1/appointment", BookAppointment);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section>
      <div className="relative lg:h-[350px] md:h-[300px] h-80 bg-[url(https://images.pexels.com/photos/8941903/pexels-photo-8941903.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/60  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
          {" "}
        </div>

        <div className="relative flex justify-center items-center h-full">
          <p className="lg:text-5xl md:text-3xl text-xl text-white font-sans font-bold">
            Book An Appointment
          </p>
        </div>
      </div>

      <section className=" bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                onSubmit={appointmentHandle}
                action=""
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name">Patient Name:</label>
                  <input
                    className="w-full  rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="patientName"
                    type="text"
                    name="patientName"
                    id="patientName"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email">patient Email:</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="patientEmail"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Select Doctor</span>
                    </label>
                    <select
                      name="doctorName"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option>Select Doctor</option>
                      {doctorType.map((data) => {
                        return data.status === "active" ? (
                          <option
                            key={data._id}
                            value={(data.FirstName, data.LastName)}
                          >
                            {data.FirstName} {data.LastName}
                          </option>
                        ) : null;
                      })}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">select Department</span>
                    </label>
                    <select
                      name="doctorId"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option>Department</option>
                      {doctorType.map((data) => {
                        return data.status === "active" ? (
                          <option key={data._id} value={data._id}>
                            {data?.DoctorType}
                          </option>
                        ) : null;
                      })}
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">sex</span>
                    </label>
                    <select
                      name="gender"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">other</option>
                    </select>
                  </div>

                  <div className="lg:mt-3">
                    <label htmlFor="email">Appointment Date</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Email address"
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Duration Time</span>
                    </label>
                    <select
                      name="durationTime"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option>Duration Time</option>
                      <option value="20">20 minutes</option>
                      <option value="40">40 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Appointment Type</span>
                    </label>
                    <select
                      name="appointmentType"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option>Appointment Type</option>
                      <option value="onLine">onLine</option>
                      <option value="onHospital">onHospital</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email">reason:</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Email address"
                      type="text"
                      id="reason"
                      name="reason"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Please give your Image</label>
                    <input
                      onChange={(e) => setImgUrl(e.target.files[0])}
                      type="file"
                      required
                      className="file-input file-input-bordered file-input-md w-full max-w-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      value="NewPatient"
                      name="appointmentStatus"
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200  p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> New Patients </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                      value="ReturningPatients"
                      name="appointmentStatus"
                    />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-gray-200  p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> Returning patients </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message">Message:</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded border-s-4 -mt-32 w-full w border-red-500 bg-red-50 p-4"
                  >
                    <div className="flex items-center gap-2 text-red-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <strong className="block font-medium"> {error} </strong>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <SecondaryButton>
                    {loading ? <p>Loading..</p> : <p>Submit</p>}
                  </SecondaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookAppointment;
