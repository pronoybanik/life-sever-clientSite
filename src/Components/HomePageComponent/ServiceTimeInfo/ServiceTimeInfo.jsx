import React from "react";

const ServiceTimeInfo = () => {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto lg:-mt-10 ">
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
        <p className="text-white py-2 font-semibold text-2xl">24 Hours Service</p>
        <p className="text-white py-2 font-light max-w-xs ">
          Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro
          vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
        </p>
        <button className="text-white border py-2 px-4">
          Make A Appointment
        </button>
      </div>
      <div className="bg-[#003B73] max-w-md py-6 px-10 border">
        <p className="text-white py-2 font-semibold text-2xl">opening Hours</p>
        <p className="text-white py-2 font-light max-w-xs ">
          Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro
          vel nibh et elit mollis commodo et nec augue tristique sed volutpat.
        </p>
        <button className="text-white border py-2 px-4">
          Make A Appointment
        </button>
      </div>
    </section>
  );
};

export default ServiceTimeInfo;
