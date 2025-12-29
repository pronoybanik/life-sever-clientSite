import axios from "axios";
import React, { useContext, useEffect, useState, useRef } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import PatientItem from "../PatientItem/PatientItem";
import Error from "../../../Shared/error/Error";
import Loading from "../../../Shared/Loading/Loading";

const PatientAppointment = () => {
  const { user, loading: authLoading } = useContext(authContext);
  const [patientData, setPatientData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Wait for auth to finish loading
    if (authLoading) return;
    
    // Get doctorId safely
    const doctorId = user?.doctorId?.[0]?._id || user?.doctorId?.[0];
    
    // Check if we have valid user and doctorId
    if (!user || !doctorId) {
      setLoading(false);
      return;
    }

    // Prevent duplicate fetches
    if (hasFetched.current) return;
    hasFetched.current = true;

    // Get token safely
    const tokenStr = localStorage.getItem("Token");
    if (!tokenStr) {
      setLoading(false);
      setError("Authentication required");
      return;
    }

    let token;
    try {
      token = JSON.parse(tokenStr);
    } catch (e) {
      setLoading(false);
      setError("Invalid token");
      return;
    }

    fetch(
      `${import.meta.env.VITE_API_URL}/api/v1/appointment/doctorId/${doctorId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.status === "success") {
          setPatientData(res.data);
          setError("");
        } else {
          setError(res.error || "Failed to fetch appointments");
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || "Error fetching data");
      });
  }, [user, authLoading]);

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
