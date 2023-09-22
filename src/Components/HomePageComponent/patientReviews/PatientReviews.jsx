import axios from "axios";
import React, { useEffect, useState } from "react";
import userIcon from "../../../imges/userIcon/icons8-male-user.gif";
import Loading from "../../../Shared/Loading/Loading";

const PatientReviews = () => {
  const [feedBack, setFeedBack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://life-sever-serversite.vercel.app/api/v1/userFeedBack")
      .then((data) => {
        setIsLoading(false);
        setFeedBack(data.data.data);
      });
  }, []);

  return (
    <section className="my-20 relative bg-[url(https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-3-1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
        {" "}
      </div>
      <div className="relative pt-32">
        <div className=" max-w-screen-2xl mx-auto mb-32 mt32">
          <div className=" text-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {isLoading ? (
              <Loading />
            ) : (
              feedBack?.map((data) => (
                <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
                  <div className="flex items-center gap-4">
                    {!data.image ? (
                      <img
                        alt="Developer"
                        src={userIcon}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    ) : (
                      <img
                        alt="Developer"
                        src={data?.image}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    )}

                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {data?.userName}
                      </h3>

                      <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                          <li className="p-1 leading-none">
                            <a
                              href="#"
                              className="text-xs font-medium text-gray-300"
                            >
                              {" "}
                              Twitter{" "}
                            </a>
                          </li>

                          <li className="p-1 leading-none">
                            <a
                              href="#"
                              className="text-xs font-medium text-gray-300"
                            >
                              {" "}
                              GitHub{" "}
                            </a>
                          </li>

                          <li className="p-1 leading-none">
                            <a
                              href="#"
                              className="text-xs font-medium text-gray-300"
                            >
                              Website
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
                      >
                        <strong className="font-medium text-white">
                          {data?.email}
                        </strong>

                        <p className="mt-1 text-xs font-medium text-gray-300">
                          {data?.message}
                        </p>
                      </a>
                    </li>
                  </ul>
                </article>
              ))
            )}
          </div>
        </div>

        <div className="relative w-full  lg:-mb-32 text-white  bg-[#60A3D9]  py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto max-w-6xl gap-28">
            <div className="text-center">
              <p className="text-2xl">100 %</p>
              <p className="text-sm">Quality</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">20</p>
              <p className="text-sm">Patients a year</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">78</p>
              <p className="text-sm">Years of experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl">40</p>
              <p className="text-sm">Happy Smiles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;
