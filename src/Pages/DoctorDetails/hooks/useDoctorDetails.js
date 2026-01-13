import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

/**
 * Custom hook for fetching doctor details with memoization and caching
 * @param {string} id - Doctor ID
 * @returns {object} - { doctorDetails, isLoading, error, refetch }
 */
const useDoctorDetails = (id) => {
  const [doctorDetails, setDoctorDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctorDetails = useCallback(async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/doctorProfile/details/${id}`
      );
      setDoctorDetails(response.data.data);
    } catch (err) {
      setError(err.message || "Failed to fetch doctor details");
      console.error("Error fetching doctor details:", err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDoctorDetails();
  }, [fetchDoctorDetails]);

  // Memoize the return object to prevent unnecessary re-renders
  const result = useMemo(
    () => ({
      doctorDetails,
      isLoading,
      error,
      refetch: fetchDoctorDetails,
    }),
    [doctorDetails, isLoading, error, fetchDoctorDetails]
  );

  return result;
};

export default useDoctorDetails;
