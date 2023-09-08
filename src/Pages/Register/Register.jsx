import { Link, useNavigate } from "react-router-dom";
import siteLogo from "../../imges/siteImage/340800268_560723189381106_5880403428875795146_n.png";
import bgImage from "../../imges/siteImage/pexels-skylar-kang-6207368.jpg";
import { useContext, useState } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import usePostRequest from "../../Shared/usePostReq";

const Register = () => {
  //   const { createAccount, googleLogin } = useContext(authContext);
  const [checkBox, setCheckBox] = useState(false);
  //   const [error, setError] = useState("");
  //   const [user, setUser] = useState("");
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
    <div className="max-w-screen-2xl mt-8  mx-auto">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-4/5 xl:col-span-6">
            <img
              alt="Night"
              src={bgImage}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <Link className="block text-white">
                <span className="sr-only">Home</span>

                <img src={siteLogo} alt="" className="w-72 mr-10" />
              </Link>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Life Sever 😊
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                patient registration page! We are committed to providing you
                with the highest level of care and attention. Please fill out
                the following information to help us better understand your
                needs and provide you with the best possible care.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div>
              {/* register filed */}
              <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                  <Link className="block text-white" to="/">
                    <span className="sr-only">Home</span>

                    <img src={siteLogo} alt="" className="w-40 mr-10 " />
                  </Link>

                  <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Welcome to Squid 🦑
                  </h1>

                  <p className="mt-4 leading-relaxed text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                  </p>
                </div>

                <div>
                  <p className="text-2xl  font-sans uppercase font-semibold">
                    please signUp:
                  </p>

                  <div>
                    {/* error  */}

                    {error && (
                      <div
                        role="alert"
                        className="rounded border-s-4 mt-4 w-full w border-red-500 bg-red-50 p-4"
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

                          <strong className="block font-medium">
                            {" "}
                            {error}{" "}
                          </strong>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6  lg:mb-36 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      name="firstName"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      name="lastName"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      name="email"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>

                    <input
                      type="password"
                      id="Password"
                      name="password"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Password Confirmation
                    </label>

                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="passwordConfirmation"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-4  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="col-span-6">
                    <label className="flex gap-4">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketingAccept"
                        required
                        className="h-5 w-5 bg-white border rounded-lg shadow-sm focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onClick={() => {
                          setCheckBox(!checkBox);
                        }}
                      />

                      <span className="text-sm text-gray-700">
                        I want to receive emails about events, product updates
                        and company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-gray-500">
                      By creating an account, you agree to our
                      <Link to="" className="text-gray-700 underline">
                        terms and conditions
                      </Link>
                      and
                      <Link to="" className="text-gray-700 underline">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 text-xl py-3 pl-2text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      {loading ? <p>Loading...</p> : <p>create a account</p>}
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Link
                        to="/logIn"
                        className="text-gray-700 ml-2 underline"
                      >
                        Log in
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Register;
