import React, { useEffect, useState } from "react";
import AppointmentListItem from "../../Components/appoitmentListPage/AppointmentList/AppointmentListItem";
import Error from "../../Shared/error/Error";
import Loading from "../../Shared/Loading/Loading";
import {
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaStethoscope } from "react-icons/fa";

const AppointmentList = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const token = JSON.parse(localStorage.getItem("Token"));
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(appointments);

  // Fetch appointments data
  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/appointment/userId/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.statusbar === 200) {
        setAppointments(response.data.data);
        setFilteredAppointments(response.data.data);
        setError("");
      } else {
        setError(response.data.error || "Failed to fetch appointments");
      }
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("Failed to load your appointments. Please try again later.");
      toast.error("Failed to load appointments");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [userId, token]);

  return (
    <section>
      {/* Banner section start  */}
      <section className="relative h-[400px] bg-[url(https://images.pexels.com/photos/8941903/pexels-photo-8941903.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-fixed bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30"></div>

        <div className="relative flex items-center justify-center h-full max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-block p-2 rounded-full bg-blue-500/20 backdrop-blur-sm mb-4">
              <FaStethoscope className="text-3xl text-white" />
            </div>
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Your Application Info
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto">
              Dedicated professionals committed to your health and well-being
            </p>
          </div>
        </div>
      </section>
      {/* Banner section End */}

      <div className="grid grid-cols-1 max-w-7xl mx-auto gap-4 my-4">
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {error ? (
                <Error>{error}</Error>
              ) : (
                appointments.map((data) => (
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
