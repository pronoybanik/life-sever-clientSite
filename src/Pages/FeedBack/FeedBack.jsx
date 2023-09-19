import React, { useContext } from "react";
import SecondaryButton from "../../Shared/SecondaryButton";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import usePostRequest from "../../Shared/usePostReq";
import Error from "../../Shared/error/Error";
import Loading from "../../Shared/Loading/Loading";

const FeedBack = () => {
  const { user } = useContext(authContext);
  const { post, data, error, loading } = usePostRequest();

  if (data.statusbar === 201) {
    alert(data.message);
    navigate("/");
  }

  const handleFeedBack = async (event) => {
    event.preventDefault();
    const from = event.target;
    const email = user?.email;
    const userName = (user?.firstName || "") + " " + (user?.lastName || "");
    const message = from.message.value;
    const feedBackValue = {
      email,
      userName,
      message,
    };
    await post("api/v1/feedBack", feedBackValue);
  };
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

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleFeedBack} action="" className="space-y-4">
          <div>
            <label htmlFor="name">Patient Email:</label>
            <input
              className="w-full font-bold  rounded-lg border-gray-200 border p-3 text-sm"
              placeholder="patientEmail"
              type="text"
              disabled
              value={user?.email}
              name="patientEmail"
              id="patientName"
            />
          </div>
          <div>
            <label htmlFor="name">Patient Name:</label>
            <input
              className="w-full  rounded-lg border-gray-200 border p-3 text-sm"
              placeholder="patientName"
              type="text"
              value={(user?.firstName || "") + " " + (user?.lastName || "")}
              name="patientName"
              id="patientName"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              className="w-full rounded-lg border-gray-200 border p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>
          <div className="mt-4">
            <SecondaryButton>
              {loading ? <p>Loading...</p> : <p> submit</p>}
            </SecondaryButton>
          </div>
        </form>
        {error && <Error>{error}</Error>}
      </div>
    </section>
  );
};

export default FeedBack;
