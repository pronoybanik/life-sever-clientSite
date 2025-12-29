import { Link, useNavigate } from "react-router-dom";
import siteLogo from "../../imges/siteImage/siteLogo.png";
import { useState } from "react";
import usePostRequest from "../../Shared/usePostReq";
import SecondaryButton from "../../Shared/SecondaryButton";
import { FaUserPlus, FaLock, FaEnvelope, FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [checkBox, setCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { post, data, error, loading } = usePostRequest();
  const navigate = useNavigate();

  if (data?.statusbar === 201) {
    alert(data.message);
    navigate("/logIn");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const from = event.target;
    const firstName = from.firstName.value;
    const lastName = from.lastName.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.passwordConfirmation.value;

    const registerData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    await post("api/v1/user/signup", registerData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <section className="max-w-7xl mx-auto overflow-hidden shadow-xl rounded-3xl bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-[#0074B7] lg:col-span-5 lg:h-full xl:col-span-5">
            <img
              alt="Medical professionals"
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0074B7]/90 to-[#0074B7]/60"></div>

            <div className="relative z-10 lg:block lg:p-12">
              <Link to="/" className="block text-white">
                <img
                  src={siteLogo}
                  alt="Life Sever Logo"
                  className="w-56 mb-6"
                />
              </Link>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Welcome to Life Sever{" "}
                <span className="text-yellow-300">Healthcare</span>
              </h2>

              <p className="mt-6 leading-relaxed text-white/90 text-lg">
                Join our healthcare community where we prioritize your
                wellbeing. Complete your registration to access personalized
                care, appointment scheduling, and health resources all in one
                place.
              </p>

              <div className="mt-12 flex flex-wrap gap-3">
                <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-white">
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-white">
                  <span className="text-sm">Online Consultation</span>
                </div>
                <div className="flex items-center rounded-full bg-white/20 px-4 py-2 text-white">
                  <span className="text-sm">Expert Doctors</span>
                </div>
              </div>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-10 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-7"
          >
            <div className="w-full max-w-xl">
              {/* register filed */}
              <div className="relative -mt-16 block lg:hidden">
                <Link className="inline-block" to="/">
                  <img src={siteLogo} alt="Life Sever Logo" className="h-16" />
                </Link>

                <h1 className="mt-4 text-2xl font-bold text-[#0074B7] sm:text-3xl">
                  Create Your Account
                </h1>

                <p className="mt-2 text-sm text-gray-600">
                  Join Life Sever healthcare platform for personalized medical
                  services
                </p>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    Sign Up <span className="text-[#0074B7]">Now</span>
                  </h2>
                  <Link
                    to="/logIn"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#0074B7] hover:text-blue-700 transition-colors"
                  >
                    Already have an account?
                  </Link>
                </div>

                {/* Error alert */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border-l-4 mt-4 border-red-500 bg-red-50 p-4"
                  >
                    <div className="flex items-center gap-2 text-red-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <strong className="block font-medium">{error}</strong>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUserAlt className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="FirstName"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-[#0074B7] focus:ring-[#0074B7] focus:outline-none focus:ring focus:ring-opacity-20"
                        required
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUserAlt className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="LastName"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-[#0074B7] focus:ring-[#0074B7] focus:outline-none focus:ring focus:ring-opacity-20"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="Email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-[#0074B7] focus:ring-[#0074B7] focus:outline-none focus:ring focus:ring-opacity-20"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="Password"
                        name="password"
                        placeholder="Password"
                        className="w-full pl-10 pr-10 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-[#0074B7] focus:ring-[#0074B7] focus:outline-none focus:ring focus:ring-opacity-20"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="PasswordConfirmation"
                        name="passwordConfirmation"
                        placeholder="Confirm Password"
                        className="w-full pl-10 pr-10 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:border-[#0074B7] focus:ring-[#0074B7] focus:outline-none focus:ring focus:ring-opacity-20"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketingAccept"
                        required
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#0074B7]"
                        onClick={() => {
                          setCheckBox(!checkBox);
                        }}
                      />
                    </div>
                    <label
                      htmlFor="MarketingAccept"
                      className="ml-2 text-sm text-gray-600"
                    >
                      I want to receive emails about events, product updates and
                      company announcements.
                    </label>
                  </div>

                  <div className="text-sm text-gray-500">
                    By creating an account, you agree to our{" "}
                    <Link to="" className="text-[#0074B7] hover:underline">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="" className="text-[#0074B7] hover:underline">
                      privacy policy
                    </Link>
                    .
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center px-6 py-3 text-white bg-[#0074B7] rounded-lg hover:bg-[#005d94] focus:outline-none focus:ring-2 focus:ring-[#0074B7] focus:ring-opacity-50 transition-colors disabled:bg-gray-300 gap-2"
                    >
                      <FaUserPlus className={loading ? "animate-pulse" : ""} />
                      {loading ? "Creating Account..." : "Create Account"}
                    </button>

                    <p className="text-sm text-gray-600">
                      Already have an account?{" "}
                      <Link
                        to="/logIn"
                        className="text-[#0074B7] font-medium hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Trust indicators */}
      <div className="max-w-7xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-[#0074B7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Data</h3>
              <p className="text-sm text-gray-600 mt-1">
                Your medical information is protected with industry-standard
                encryption
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-[#0074B7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <h3 className="font-semibold text-gray-900">HIPAA Compliant</h3>
              <p className="text-sm text-gray-600 mt-1">
                We follow all healthcare privacy regulations to protect your
                information
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-[#0074B7]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-sm text-gray-600 mt-1">
                Our healthcare professionals are available around the clock
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
