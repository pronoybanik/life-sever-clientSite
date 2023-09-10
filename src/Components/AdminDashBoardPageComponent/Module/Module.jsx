import React, { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import usePostRequest from "../../../Shared/usePostReq";

const Module = () => {
  const { user } = useContext(authContext);

  const { post, loading, data, error } = usePostRequest();
  const handleSendEmail = async (event) => {
    event.preventDefault();
    const from = event.target;
    const userEmail = user.email;
    const patientEmail = {
      email: from.email.value,
      message: from.message.value,
    };

    const messageData = {
      userEmail,
      patientEmail,
    };
    console.log(messageData);
    await post("api/v1/conversation", messageData);
  };

  return (
    <div>
      <div className="font-serif">
        <input type="checkbox" id="mobile-model" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="mobile-model"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold my-4">name</h3>
            <form onSubmit={handleSendEmail}>
              <input
                name="email"
                type="email"
                placeholder="Type patient Email"
                className="input input-bordered w-full  mb-2"
              />
              <input
                name="message"
                type="text"
                placeholder="Message"
                className="input input-bordered w-full py-10  mb-2"
              />
              <input
                type="submit"
                className="btn w-1/2 ml-24 mt-2 text-warning"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
