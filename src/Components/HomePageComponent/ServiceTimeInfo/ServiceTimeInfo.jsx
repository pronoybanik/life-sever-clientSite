import React from "react";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { LiaMobileAltSolid } from "react-icons/lia";

const ServiceTimeInfo = () => {
  return (
    <section>
      <section
        data-aos="zoom-out-down"
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto -mt-10 "
      >
        <div className="bg-[#60A3D9] max-w-md py-6 px-10 border">
          <p className="text-white py-2 font-semibold text-2xl">Top Doctors</p>
          <p className="text-white py-2 font-light max-w-xs ">
            Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro
            vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
          </p>
          <button className="text-white border py-2 px-4">
            Make A Appointment
          </button>
        </div>
        <div className="bg-[#0074B7] max-w-md py-6 px-10">
          <p className="text-white py-2 font-semibold text-2xl">
            24 Hours Service
          </p>
          <p className="text-white py-2 font-light max-w-xs ">
            Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro
            vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
          </p>
          <button className="text-white border py-2 px-4">
            Make A Appointment
          </button>
        </div>
        <div className="bg-[#003B73] max-w-md py-6 px-10 border">
          <p className="font-sans text-2xl text-white font-semibold">
            Opening Hours
          </p>
          <div className="flex gap-4  mt-6 border-b">
            <div className="text-2xl text-blue-100 mb-2">
              <LiaMobileAltSolid />
            </div>
            <p className="text-stone-50 ">01609520719</p>
          </div>
          <div className="flex gap-4 mt-6 border-b">
            <div className="text-2xl text-blue-100 mb-2">
              <CgMail />
            </div>
            <p className="text-stone-50 ">lifesever007@gmail.com</p>
          </div>
          <div className="flex gap-4 mt-6 border-b">
            <div className="text-2xl text-blue-100 mb-2">
              <CiLocationOn />
            </div>
            <p className="text-stone-50">227 Marion street</p>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div>
          <p className="lg:text-4xl mt-20 lg:ml-80 md:ml-4 ml-2 font-sans text-[#60A3D9]">
            Awesome Theme for Medical and Health Websites
          </p>
          <p className="text-gray-500 font-sans lg:text-2xl md:ml-4 ml-2 lg:ml-80 mt-2">
            Medical Clinic WordPress theme was created to offer a perfect
            solution for medical websites.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl mx-auto mb-2">
          <div className=" py-6 px-2 ml-4 ">
            <p>image</p>
            <p className="text-xl font-sans mt-4">Medical Treatment</p>
            <p className="text-sm mt-4 font-sans">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className=" py-6 px-2 ml-4">
            <p>image</p>
            <p className="text-xl font-sans mt-4">Emergency Help</p>
            <p className="text-sm mt-4 font-sans">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>

          <div className=" py-6 px-2 ml-4">
            <p>image</p>
            <p className="text-xl font-sans mt-4">Qualified Doctors</p>
            <p className="text-sm mt-4 font-sans">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>

          <div className=" py-6 px-2 ml-4">
            <p>image</p>
            <p className="text-xl font-sans mt-4">Medical professionals</p>
            <p className="text-sm mt-4 font-sans">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceTimeInfo;
