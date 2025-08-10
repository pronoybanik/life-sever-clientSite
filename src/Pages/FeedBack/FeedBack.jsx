import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import SecondaryButton from "../../Shared/SecondaryButton";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import usePostRequest from "../../Shared/usePostReq";
import Error from "../../Shared/error/Error";

const FeedBack = () => {
  const { user } = useContext(authContext);
  const { post, data, error, loading } = usePostRequest();
  const navigate = useNavigate();

  if (data?.statusbar === 201) {
    toast.success(data.message);
    navigate("/");
  }

  const handleFeedBack = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const userName = (user?.firstName || "") + " " + (user?.lastName || "");
    const message = form.message.value;

    if (!message.trim()) {
      toast.error("Feedback message cannot be empty.");
      return;
    }

    const feedBackValue = {
      email,
      userName,
      message,
    };
    await post("api/v1/userFeedBack", feedBackValue);
    form.reset();
  };

  return (
    <section className="bg-gray-50">
      {/* Banner section start */}
      <div className="relative h-80 bg-[url(https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-3-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/70"></div>
        <div className="relative flex flex-col justify-center items-center h-full max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-sans font-bold mb-2">
            Share Your Feedback
          </h1>
          <p className="text-white/90 md:text-lg max-w-2xl">
            We value your opinion. Help us improve our services by sharing your experience.
          </p>
        </div>
      </div>
      {/* Banner section End */}

      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Feedback Form
          </h2>
          <form onSubmit={handleFeedBack} className="space-y-6">
            {/* Patient Name */}
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="patientName"
                  id="patientName"
                  disabled
                  value={(user?.firstName || "") + " " + (user?.lastName || "") || user?.displayName || "N/A"}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Patient Email */}
            <div>
              <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="patientEmail"
                  id="patientEmail"
                  disabled
                  value={user?.email || "N/A"}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="6"
                  className="w-full pl-10 pr-3 py-2 border bg-white text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Please share your thoughts, suggestions, or concerns..."
                ></textarea>
              </div>
            </div>

            {/* Error Message */}
            {error && <Error>{error}</Error>}

            {/* Submit Button */}
            <div className="text-center">
              <SecondaryButton>
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Feedback"
                )}
              </SecondaryButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
