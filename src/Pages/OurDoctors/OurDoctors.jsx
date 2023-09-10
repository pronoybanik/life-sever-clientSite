import DoctorsPageBannerImage from "../../imges/doctor-page/pexels-rfstudio-3825444.jpg";
import { useEffect, useState } from "react";
import UseGetRequest from "../../Shared/UseGetRequest";
import DoctorsCard from "../../Components/OurDoctorpageComponent/DoctorsCard/DoctorsCard";
import { LiaMobileAltSolid } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "", label: "All", checked: false },
      {
        value: "DoctorType=Heart-Doctor",
        label: "Heart Doctor",
        checked: false,
      },
      { value: "DoctorType=Brin-Doctor", label: "Brin Doctor", checked: false },
      {
        value: "DoctorType=pregnancy-Doctor",
        label: "pregnancy Doctor",
        checked: false,
      },
    ],
  },
  {
    id: "size",
    name: "price",
    options: [
      {
        label: "Price: Low to High",
        value: "sort=PerHourCharge",
        current: false,
      },
      {
        label: "Price: High to Low",
        value: "sort=-PerHourCharge",
        current: false,
      },
    ],
  },
];

const OurDoctors = () => {
  const [category, setCategory] = useState("");
  const [doctors, setDoctors] = useState([]);
  // const [getData] = UseGetRequest(`api/v1/doctorProfile?${category}`);
  // console.log(getData);

  // get all doctors
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/doctorProfile?${category}`)
      .then((res) => setDoctors(res.data.data));
  }, []);

  return (
    <section>
      {/* Banner section start  */}
      <section className="relative lg:h-[500px] md:h-[400px] h-80 bg-[url(https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-3-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/20  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
          {" "}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex  items-center justify-center h-full"
        >
          <div className="relative">
            <p className="text-white font-sans lg:text-2xl md:text-2xl text-xl ">
              Entrust Your Health Our Doctors
            </p>
            <p className="text-white lg:text-4xl md:text-3xl text-2xl font-semibold mt-4  sm:text-xl/relaxed">
              Medical Excellence Every Day.
            </p>
          </div>
        </div>
      </section>
      {/* Banner section End */}

      <div>
        <p className="relative border mt-1 " />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 max-w-7xl mx-auto mt-20 ">
          <div>
            <div className="bg-[#003B73] px-6 py-10">
              <p className="font-sans text-3xl text-white pt-2 font-semibold">
                Filtering...
              </p>
              {filters.map((section) => (
                <div
                  key={section.id}
                  className="border-b border-gray-200 pb-6 "
                >
                  <div className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            defaultValue={option.value}
                            type="checkbox"
                            onChange={(e) => setCategory(e.target.defaultValue)}
                            defaultChecked={option.checked}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label className="ml-3 text-sm text-gray-100 ">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Opening Hours section Start */}
            <div className="bg-[#0074B7] px-6 py-10">
              <p className="font-sans text-2xl text-white font-semibold">
                Opening Hours
              </p>
              <div className="flex justify-between mt-6 border-b">
                <p className="text-stone-50 pb-2">Monday - Friday:</p>
                <p className="text-stone-50 ">8.00 - 17.00</p>
              </div>
              <div className="flex justify-between mt-6 border-b">
                <p className="text-stone-50 pb-2">Saturday::</p>
                <p className="text-stone-50 ">9.30 - 18.30</p>
              </div>
              <div className="flex justify-between mt-6 border-b">
                <p className="text-stone-50 pb-2">Sunday:</p>
                <p className="text-stone-50 ">9.30 - 18.30</p>
              </div>
            </div>
            {/* Opening Hours End  */}

            {/*  Contacts Section start */}
            <div className="bg-[#60A3D9] px-6 py-10">
              <p className="font-sans text-2xl text-white font-semibold">
                Contacts
              </p>
              <div className="flex gap-4  mt-6 border-b">
                <div className="text-2xl text-blue-100 mb-4">
                  <LiaMobileAltSolid />
                </div>
                <p className="text-stone-50 ">01609520719</p>
              </div>
              <div className="flex gap-4 mt-6 border-b">
                <div className="text-2xl text-blue-100 mb-4">
                  <CgMail />
                </div>
                <p className="text-stone-50 ">lifesever007@gmail.com</p>
              </div>
              <div className="flex gap-4 mt-6 border-b">
                <div className="text-2xl text-blue-100 mb-4">
                  <CiLocationOn />
                </div>
                <p className="text-stone-50">227 Marion street</p>
              </div>
            </div>
            {/*  Contacts Section End */}
          </div>

          <div className="lg:col-span-3">
            <div>
              <p className="text-sm md:ml-6 ml-2 text-[#60A3D9]">Innovation</p>
              <p className="text-2xl font-semibold md:ml-6 ml-2">Our Doctors</p>
            </div>
            <div className="mt-4">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                {doctors?.map((doctor) => (
                  <DoctorsCard
                    key={doctor?._id}
                    doctorProfile={doctor}
                  ></DoctorsCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* pagination code start */}
        <ol className="flex justify-center gap-1 text-xs font-bold mt-8">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-300 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
        {/* pagination End */}
      </div>
    </section>
  );
};

export default OurDoctors;
