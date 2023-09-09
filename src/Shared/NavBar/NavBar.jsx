import { useContext, useState , Fragment} from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { MdDataSaverOn } from "react-icons/md";



const NavBar = () => {
  const { user } = useContext(authContext);
  console.log("navbar", user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("Token");
    window.location.reload();
  };
  console.log(mobileMenuOpen);

  const menu = (
    <>
      <Link
        to="/"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Home
      </Link>
      <Link
        to="/ourDoctors"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Our Doctors
      </Link>
      <Link
        to="/bookAppointment"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Appointment
      </Link>

      <Link
        to="/patientAccount"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Patient Account
      </Link>
      <Link
        to="/adminDashBoard"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Admin DashBoard
      </Link>
      <Link
        to="/doctorDashBoard"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        Doctor DashBoard
      </Link>
    </>
  );

  const MobileDevice = (
    <>
      <Link
        to="/"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Home
      </Link>
      <Link
        to="/ourDoctors"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Our Doctors
      </Link>
      <Link
        to="/bookAppointment"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Appointment
      </Link>

      <Link
        to="/patientAccount"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Patient Account
      </Link>
      <Link
        to="/adminDashBoard"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Admin DashBoard
      </Link>
      <Link
        to="/doctorDashBoard"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
      >
        Doctor DashBoard
      </Link>
    </>
  );

  return (
    <section className="sticky top-0 z-50">
      <Disclosure as="nav" className="bg-[#0074B7]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex text-white">
                      <div className="lg:text-3xl text-2xl">
                        <MdDataSaverOn />
                      </div>
                      <div className="flex -mt-1 ml-2">
                        <p className="lg:text-3xl text-2xl font-sans font-bold mr-4">
                          Life
                        </p>
                        <p className="lg:text-3xl text-2xl font-sans mr-4">
                          Sever
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 lg:mt-2">{menu}</div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!user?._id ? (
                    <div className="lg:-mt-1">
                      <Link
                        to="/logIn"
                        className="text-sm font-semibold leading-6  text-white relative before:absolute before:-bottom-2 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  ) : (
                    <PrimaryButton handler={handleLogout}>
                      Log Out{" "}
                    </PrimaryButton>
                    // <div>Log out</div>
                  )}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {!user?._id ? null : (
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      )}
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {/* <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div> */}

              {MobileDevice}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
};

export default NavBar;
