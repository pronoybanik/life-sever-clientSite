import axios from "axios";
import React, { useEffect, useState } from "react";
import AppointmentListItem from "../../Components/appoitmentListPage/AppointmentList/AppointmentListItem";
import UseGetRequest from "../../Shared/UseGetRequest";
import Error from "../../Shared/error/Error";

const AppointmentList = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("Token"));
  const [userIdData, setUserIdData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/appointment/userId/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((responseData) => {
        if (responseData.data.status === "success") {
          setUserIdData(responseData.data.data);
          setIsLoading(false);
          setError("");
        } else {
          setIsLoading(false);
          setError(responseData.data.error);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [userId, token]);

  return (
    <section>
      <div className="relative lg:h-[500px] md:h-[400px] h-80 bg-[url(https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-3-1.jpg)] bg-cover bg-center bg-no-repeat">
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
      </div>
      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4 my-4">
        <div>
          {isLoading ? (
            <p className="text-4xl text-center">Loading..</p>
          ) : (
            <>
              {error ? (
                <Error>{error}</Error>
              ) : (
                userIdData.map((data) => (
                  <AppointmentListItem
                    key={data?._id}
                    data={data}
                  ></AppointmentListItem>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentList;
