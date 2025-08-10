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
      .get(`${import.meta.env.VITE_API_URL}/api/v1/userFeedBack`)
      .then((data) => {
        setIsLoading(false);
        setFeedBack(data.data.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching feedback:", error);
      });
  }, []);

  return (
    <section className="py-24 relative bg-[url(https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-300">
            What our patients say about us
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {feedBack?.map((data, index) => (
              <article
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      alt="Patient"
                      src={data.image || userIcon}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-400/50"
                    />
                    <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {data?.userName}
                    </h3>
                    <p className="text-sm text-blue-300">{data?.email}</p>
                  </div>
                </div>

                <blockquote className="relative">
                  <span className="absolute top-0 left-0 text-6xl text-blue-400/30">
                    "
                  </span>
                  <p className="pt-8 px-4 text-gray-300 italic">
                    {data?.message}
                  </p>
                  <span className="absolute bottom-0 right-4 text-6xl text-blue-400/30">
                    "
                  </span>
                </blockquote>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>Verified Patient</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-24 relative w-full text-white">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto max-w-7xl gap-8 px-4">
            {[
              { number: "100%", label: "Satisfaction Rate" },
              { number: "1000+", label: "Patients Yearly" },
              { number: "25+", label: "Years Experience" },
              { number: "98%", label: "Recovery Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviews;
