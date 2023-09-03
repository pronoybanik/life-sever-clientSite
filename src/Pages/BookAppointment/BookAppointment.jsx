import React from "react";
import usePostRequest from "../../Shared/usePostReq";

const BookAppointment = () => {
  const appointmentHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.patientName.value;
    const patientEmail = form.patientEmail.value;
    const phoneNumber = form.phone.value;
    const doctorDetails = { name: form.doctorDetails.value };
    const gender = form.gender.value;
    const appointmentStatus = form.appointmentStatus.value;
    const appointmentDate = form.appointmentDate.value;
    const durationTime = Number(form.durationTime.value);
    const reason = form.reason.value;
    const appointmentType = form.appointmentType.value;
    const status = "Pending";
    const notes = form.message.value;

    const BookAppointment = {
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
    };
    console.log(BookAppointment);
    usePostRequest("api/v1/appointment", BookAppointment);
    console.log(BookAppointment);
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
                      name="doctorDetails"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled>Select Doctor</option>
                      <option value="Dr.Pronoy">Dr.Pronoy</option>
                      <option value="Dr.Ashim">Dr.Ashim</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">select Department</span>
                    </label>
                    <select
                      name="role"
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option disabled>Department</option>
                      <option value="OutpatientSurgery">
                        Outpatient Surgery
                      </option>
                      <option value="GynaecologicalClinic">
                        Gynaecological Clinic
                      </option>
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
                      <option disabled>Gender</option>
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
                      <option disabled>Duration Time</option>
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
                      <option disabled>Appointment Type</option>
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

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
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
