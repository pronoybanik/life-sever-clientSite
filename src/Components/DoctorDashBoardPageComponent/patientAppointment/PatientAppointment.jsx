import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import PatientItem from "../PatientItem/PatientItem";
import Error from "../../../Shared/error/Error";
import Loading from "../../../Shared/Loading/Loading";

const PatientAppointment = () => {
  const { user } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("Token"));

  useEffect(() => {
    setLoading(true);
    if (user && user.doctorId && user.doctorId.length > 0) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/appointment/doctorId/${user?.doctorId[0]._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        patientData?.map((data) => (
          <PatientItem key={data._id} data={data}></PatientItem>
        ))
      )}
      {error && <Error>{error}</Error>}
    </section>
  );
};

export default PatientAppointment;
