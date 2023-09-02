import { useContext, useState } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import siteLogo from "../../imges/siteImage/340800268_560723189381106_5880403428875795146_n.png";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import { MdDataSaverOn } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(authContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut().then().catch();
  };

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
        Department
      </Link>
      <Link
        to="/about"
        className="text-sm font-semibold leading-2  text-white relative before:absolute before:-bottom-0.5 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
      >
        About
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
    </>
  );

  const MobileDevice = (
    <>
      <Link
        to="/"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
      >
        Home
      </Link>
      <Link
        to="/ourDoctors"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
      >
        ourDoctors
      </Link>
      <Link
        to="/about"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
      >
        About
      </Link>
      <Link
        to="/patientAccount"
        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
      >
        Patient Account
      </Link>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-[#0074B7] lg:h-20">
        <nav
          className="mx-auto flex  items-center justify-between p-6 max-w-7xl"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src={siteLogo} alt="" /> */}
              <div className="flex text-white">
                <div className="text-3xl 2">
                  <MdDataSaverOn />
                </div>
                <div className="flex -mt-1 ml-2">
                  <p className="text-3xl font-sans font-bold mr-4">Life</p>
                  <p className="text-3xl font-sans mr-4">Sever</p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="lg:flex gap-4 ">
            <Popover.Group className="hidden lg:flex lg:gap-x-6 ">
              {menu}
            </Popover.Group>
            <div>
              {!user ? (
                <div className="lg:-mt-1">
                  <Link
                    to="/logIn"
                    className="text-sm font-semibold leading-6  text-white relative before:absolute before:-bottom-2 before:h-0.5 before:w-full before:scale-x-0 before:bg-slate-100 before:transition hover:before:scale-x-100"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              ) : (
                <PrimaryButton handler={handleLogout}>log out </PrimaryButton>
              )}
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a to="" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={siteLogo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">{MobileDevice}</div>
                <div className="py-6">
                  {!user ? (
                    <>
                      <Link
                        to="/logIn"
                        className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100"
                      >
                        Log in <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </>
                  ) : (
                    <PrimaryButton handler={handleLogout}>
                      log out{" "}
                    </PrimaryButton>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default NavBar;
