import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import UseGetRequest from "../../../Shared/UseGetRequest";
import PatientItem from "../PatientItem/PatientItem";
import Error from "../../../Shared/error/Error";

const PatientAppointment = () => {
  const { user } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState("");
  const token = JSON.parse(localStorage.getItem("Token"));

  useEffect(() => {
    if (user && user.doctorId && user.doctorId.length > 0) {
      fetch(
        `https://life-sever-serversite.vercel.app/api/v1/appointment/doctorId/${user?.doctorId[0]._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res.data);
          setError(res.error);
          if (res.status === "success") {
            setPatientData(res.data);
            setError("");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
        });
    }
  }, [user]);

  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2 my-6">
      {patientData?.map((data) => (
        <PatientItem key={data._id} data={data}></PatientItem>
      ))}
      {error && <Error>{error}</Error>}
    </section>
  );
};

export default PatientAppointment;
