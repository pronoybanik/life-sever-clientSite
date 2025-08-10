import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usePostRequest from "../../Shared/usePostReq";
import Error from "../../Shared/error/Error";
import SecondaryButton from "../../Shared/SecondaryButton";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import siteLogo from "../../imges/siteImage/siteLogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { post, data, loading, error } = usePostRequest();
  const navigate = useNavigate();
  const location = useLocation();
  const navigateForm = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      email,
      password,
    };
    await post("api/v1/user/login", loginData);
  };

  if (data?.status === "success") {
    localStorage.setItem("userId", JSON.stringify(data?.data?.user._id));
    localStorage.setItem("Token", JSON.stringify(data?.data?.token));
    alert(data?.message);
    navigate(navigateForm, { replace: true } , "");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  console.log("login", data);
  console.log("login Error", error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row rounded-3xl shadow-xl overflow-hidden bg-white">
          {/* Left Panel */}
          <div className="md:w-1/2 lg:w-2/5 relative bg-[#0074B7]">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Healthcare professionals"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0074B7]/90 to-[#0074B7]/60"></div>

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              <Link to="/" className="block">
                <img src={siteLogo} alt="Life Sever Logo" className="h-14" />
              </Link>

              <div className="mt-auto mb-12">
                <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                <p className="mt-4 text-white/80 text-lg">
                  Access your healthcare account to manage appointments, view
                  medical records, and connect with your healthcare providers.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-white/10 rounded-full">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>View and manage your appointments</span>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-white/10 rounded-full">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>Access your health records securely</span>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-white/10 rounded-full">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>Communicate with your doctors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="md:w-1/2 lg:w-3/5 p-8 md:p-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <form
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleSubmit}
              >
                <p className="text-center text-lg font-medium">
                  Sign in to your account out put
                </p>

                <div>
                  <label className="sr-only">Email</label>

                  <div className="relative">
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="sr-only">Password</label>

                  <div className="relative">
                    <input
                      type="password"
                      required
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center h-full">
                  <SecondaryButton>
                    {loading ? <p>Loading....</p> : <p>Sign in</p>}
                  </SecondaryButton>
                </div>

                <p className="text-center text-sm text-gray-500">
                  No account?
                  <Link to="/register" className="underline" href="">
                    Sign up
                  </Link>
                </p>
                {error ? (
                  <Error>{error?.message || String(error)}</Error>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
