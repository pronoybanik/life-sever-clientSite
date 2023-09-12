import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import UseGetRequest from "../../../Shared/UseGetRequest";
import PatientItem from "../PatientItem/PatientItem";

const PatientAppointment = () => {
  const { user } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  // const {
  //   data: appointmentData,
  //   error,
  //   loading,
  // } = UseGetRequest(`api/v1/appointment/doctorId/${user.doctorId[0]}`);

  useEffect(() => {
    if (user && user.doctorId && user.doctorId.length > 0) {
      axios
        .get(
          `http://localhost:5000/api/v1/appointment/doctorId/${user.doctorId[0]}`
        )
        .then((res) => setPatientData(res.data.data))
        .catch((error) => {
          // Handle the error here
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);
  console.log(patientData);

  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2 my-6">
      {patientData?.map((data) => (
        <PatientItem key={data._id} data={data}></PatientItem>
      ))}
    </section>
  );
};

export default PatientAppointment;
