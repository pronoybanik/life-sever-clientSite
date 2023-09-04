import React from "react";
import { LiaMobileAltSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

const ContactInfo = () => {
  return (
    <section className="bg-white  border-b-2 border-gray-500-500 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto pb-24">
        <div className="flex mt-10">
          <div className="text-5xl text-blue-400 mt-4">
            <LiaMobileAltSolid />
          </div>
          <div className="ml-4">
            <p className=" font-sans font-medium text-sm text-gray-500">
              Give Us A Call
            </p>
            <p className="font-sans font-normal lg:text-2xl text-xl mt-2">01609520719</p>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="text-5xl text-blue-400 mt-4">
            <CgMail />
          </div>
          <div className="ml-4">
            <p className=" font-sans font-medium text-sm text-gray-500">
              Send us a Message
            </p>
            <p className="font-sans font-normal lg:text-2xl text-xl mt-2">
              lifesever007@gmail.com
            </p>
          </div>
        </div>

        <div className="flex mt-10 md:ml-8 ">
          <div className="text-4xl text-blue-600 mt-4">
            <CiLocationOn />
          </div>
          <div className="ml-4">
            <p className=" font-sans font-medium text-sm text-gray-500">
              Visit our Location
            </p>
            <p className="font-sans font-normal text-2xl mt-2">
              {" "}
              <p className="font-sans font-normal lg:text-2xl text-xl mt-2">227 Marion street</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
