import React from "react";
import { Link } from "react-router-dom";
import { LiaMobileAltSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";

const OurDoctorsList = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="my-10">
        <p className="text-[#60A3D9]">Professionals</p>
        <p className="text-xl"> Our Doctors</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2">
        <Link className="block border ">
          <img
            alt="Art"
            src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-64 w-full object-cover  lg:h-60"
          />

          <div className="my-4 mx-4">
            <p className="text-xl text-[#60A3D9]">Dr. Michael Linden</p>
            <p>Throat Specialist</p>
          </div>
          <p className="border"></p>

          <div className="my-2 mx-2">
            <div className="flex">
              <div className="text-2xl text-[#BFD7ED]">
                <LiaMobileAltSolid />
              </div>
              <p className="ml-2">01609522552</p>
            </div>

            <div className="flex mt-2">
              <div className="text-2xl text-[#BFD7ED]">
                <CgMail />
              </div>
              <p className="ml-2">pronoy@mail.com</p>
            </div>
          </div>
        </Link>
        <Link className="block border ">
          <img
            alt="Art"
            src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-64 w-full object-cover  lg:h-60"
          />

          <div className="my-4 mx-4">
            <p className="text-xl text-[#60A3D9]">Dr. Michael Linden</p>
            <p>Throat Specialist</p>
          </div>
          <p className="border"></p>

          <div className="my-2 mx-2">
            <div className="flex">
              <div className="text-2xl text-[#BFD7ED]">
                <LiaMobileAltSolid />
              </div>
              <p className="ml-2">01609522552</p>
            </div>

            <div className="flex mt-2">
              <div className="text-2xl text-[#BFD7ED]">
                <CgMail />
              </div>
              <p className="ml-2">pronoy@mail.com</p>
            </div>
          </div>
        </Link>
        <Link className="block border ">
          <img
            alt="Art"
            src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-64 w-full object-cover  lg:h-60"
          />

          <div className="my-4 mx-4">
            <p className="text-xl text-[#60A3D9]">Dr. Michael Linden</p>
            <p>Throat Specialist</p>
          </div>
          <p className="border"></p>

          <div className="my-2 mx-2">
            <div className="flex">
              <div className="text-2xl text-[#BFD7ED]">
                <LiaMobileAltSolid />
              </div>
              <p className="ml-2">01609522552</p>
            </div>

            <div className="flex mt-2">
              <div className="text-2xl text-[#BFD7ED]">
                <CgMail />
              </div>
              <p className="ml-2">pronoy@mail.com</p>
            </div>
          </div>
        </Link>
        <Link className="block border ">
          <img
            alt="Art"
            src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600"
            className="h-64 w-full object-cover  lg:h-60"
          />

          <div className="my-4 mx-4">
            <p className="text-xl text-[#60A3D9]">Dr. Michael Linden</p>
            <p>Throat Specialist</p>
          </div>
          <p className="border"></p>

          <div className="my-2 mx-2">
            <div className="flex">
              <div className="text-2xl text-[#BFD7ED]">
                <LiaMobileAltSolid />
              </div>
              <p className="ml-2">01609522552</p>
            </div>

            <div className="flex mt-2">
              <div className="text-2xl text-[#BFD7ED]">
                <CgMail />
              </div>
              <p className="ml-2">pronoy@mail.com</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OurDoctorsList;
