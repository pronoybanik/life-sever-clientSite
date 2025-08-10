import React, { useEffect, useState } from "react";
import usePostRequest from "../../Shared/usePostReq";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../Shared/SecondaryButton";
import { toast } from "react-hot-toast";
import uploadToCloudinary from "../../utils/uploadToCloudinary";
import {
  CalendarIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { FaStethoscope } from "react-icons/fa";

const BookAppointment = () => {
  const [doctorType, setDoctorType] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const id = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();
  const { post, data, loading, error } = usePostRequest();

  useEffect(() => {
    if (data?.statusbar === 200) {
      toast.success(data.message);
      navigate("/appointmentList");
    }
  }, [data, navigate]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/doctorProfile?sort=PerHourCharge&fields=DoctorType,FirstName,LastName,status`
        );
        setDoctorType(response.data.data);
      } catch (err) {
        toast.error("Failed to fetch doctors");
        console.error("Error fetching doctors:", err);
      }
    };

    fetchDoctors();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    try {
      setUploadingImage(true);
      const imageUrl = await uploadToCloudinary(file);
      if (imageUrl) {
        setImgUrl(imageUrl);
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  // create appointment to doctor
  const appointmentHandle = async (event) => {
    event.preventDefault();

    if (!imgUrl) {
      toast.error("Please upload a profile image");
      return;
    }

    setFormSubmitting(true);

    try {
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
        patientProfileImage: imgUrl,
      };

      await post("api/v1/appointment", BookAppointment);
    } catch (error) {
      toast.error("Failed to book appointment");
      console.error("Error:", error);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50">
      {/* Banner section start  */}
      <section className="relative h-[400px] bg-[url(https://images.pexels.com/photos/8941903/pexels-photo-8941903.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>

        <div className="relative flex items-center justify-center h-full max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-block p-2 rounded-full bg-blue-500/20 backdrop-blur-sm mb-4">
              <FaStethoscope className="text-3xl text-white" />
            </div>
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Book Your Appointment
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto">
              Schedule a consultation with our expert healthcare professionals
            </p>
          </div>
        </div>
      </section>
      {/* Banner section End */}

      {/* Appointment Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column - Information */}
            <div className="lg:col-span-4 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Qualified Doctors</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Our team consists of certified healthcare professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Flexible Scheduling</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Book appointments that fit your schedule
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Contact Us</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Call us at{" "}
                      <span className="font-medium">0151 475 4450</span>
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      282 Kevin Brook, Imogeneborough, CA 58517
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-white/70">
                  Need immediate assistance?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-2 text-white hover:text-blue-200 transition"
                >
                  <span className="text-lg font-medium">
                    Chat with our support team
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-8 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Patient Information
              </h2>

              <form onSubmit={appointmentHandle} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                    <UserCircleIcon className="h-5 w-5 mr-2 text-blue-600" />
                    Personal Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="patientName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="patientName"
                        id="patientName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="patientEmail"
                        id="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Gender
                      </label>
                      <select
                        name="gender"
                        id="gender"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Profile Image Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Image
                      </label>
                      <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Preview"
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center">
                              <UserCircleIcon className="h-12 w-12 text-gray-400" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          <label
                            htmlFor="profileImage"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                          >
                            {uploadingImage ? "Uploading..." : "Choose Image"}
                          </label>
                          <p className="mt-1 text-xs text-gray-500">
                            JPG, PNG or GIF (Max. 2MB)
                          </p>
                          {imgUrl && (
                            <p className="text-xs text-green-600 mt-1">
                              ✓ Image uploaded successfully
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                    Appointment Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="doctorName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Select Doctor
                      </label>
                      <select
                        name="doctorName"
                        id="doctorName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Doctor</option>
                        {doctorType.map((data) => {
                          return data.status === "active" ? (
                            <option
                              key={data._id}
                              value={`${data.FirstName} ${data.LastName}`}
                            >
                              {data.FirstName} {data.LastName}
                            </option>
                          ) : null;
                        })}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="doctorId"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Department
                      </label>
                      <select
                        name="doctorId"
                        id="doctorId"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Department</option>
                        {doctorType.map((data) => {
                          return data.status === "active" ? (
                            <option key={data._id} value={data._id}>
                              {data?.DoctorType}
                            </option>
                          ) : null;
                        })}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="appointmentDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        name="appointmentDate"
                        id="appointmentDate"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="durationTime"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Duration
                      </label>
                      <select
                        name="durationTime"
                        id="durationTime"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Duration</option>
                        <option value="20">20 minutes</option>
                        <option value="40">40 minutes</option>
                        <option value="60">60 minutes</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="appointmentType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Appointment Type
                      </label>
                      <select
                        name="appointmentType"
                        id="appointmentType"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Type</option>
                        <option value="onLine">Online Consultation</option>
                        <option value="onHospital">In-Person Visit</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Reason for Visit
                      </label>
                      <input
                        type="text"
                        name="reason"
                        id="reason"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Brief reason for appointment"
                      />
                    </div>
                  </div>
                </div>

                {/* Patient Status */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                    Patient Status
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="radio"
                        id="option1"
                        name="appointmentStatus"
                        value="NewPatient"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="option1"
                        className="block w-full p-4 text-center bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium">New Patient</span>
                        <p className="mt-1 text-xs text-gray-500">
                          First time visiting our facility
                        </p>
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="radio"
                        id="option2"
                        name="appointmentStatus"
                        value="ReturningPatients"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option2"
                        className="block w-full p-4 text-center bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium">
                          Returning Patient
                        </span>
                        <p className="mt-1 text-xs text-gray-500">
                          Previous patient returning for care
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide any additional information that might be relevant for your appointment..."
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-md bg-red-50 p-4 border-l-4 border-red-500">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-red-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Error
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end">
                  <SecondaryButton>
                    {loading || formSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      "Book Appointment"
                    )}
                  </SecondaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookAppointment;
