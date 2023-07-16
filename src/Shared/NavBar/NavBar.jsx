import { useContext, useState } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import siteLogo from "../../imges/siteImage/340800268_560723189381106_5880403428875795146_n.png"
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";


const NavBar = () => {
  const { user, logOut } = useContext(authContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then()
      .catch()
  }


  const menu = <>
    <Link to='/' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#991827]   before:transition hover:before:scale-x-100">
      Home
    </Link>
    <Link to='/ourDoctors' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
      Our Doctors
    </Link>
    <Link to='/about' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
      About
    </Link>

    <Link to='/patientAccount' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
      Patient Account
    </Link>
    <Link to='/adminDashBoard' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
      Admin DashBoard
    </Link>
  </>

  const MobileDevice = <>

    <Link
      to='/'
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
    >
      Home
    </Link>
    <Link
      to='/ourDoctors'
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
    >
      ourDoctors
    </Link>
    <Link
      to='/about'
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200"
    >
      About
    </Link>
    <Link to='/patientAccount' className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200">
      Patient Account
    </Link>

  </>

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-white">
        <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a to='' className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={siteLogo} alt="" />
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
          <Popover.Group className="hidden lg:flex lg:gap-x-12">

            {menu}

          </Popover.Group>


          <div className="hidden lg:flex lg:flex-1 lg:justify-end">


            <div>
              {
                !user ?
                  <>


                    <Link to='/logIn' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
                      Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </>
                  :
                  <PrimaryButton handler={handleLogout}>log out </PrimaryButton>

              }
            </div>

          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a to='' className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={siteLogo}
                  alt=""
                />
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
                <div className="space-y-2 py-6">

                  {MobileDevice}
                </div>
                <div className="py-6">

                  {
                    !user ?
                      <>


                        <Link to='/logIn' className="text-sm font-semibold leading-6 text-gray-900 relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-[#a71123] before:transition hover:before:scale-x-100">
                          Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </>
                      :
                      <PrimaryButton handler={handleLogout}>log out </PrimaryButton>

                  }
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
};

export default NavBar;
