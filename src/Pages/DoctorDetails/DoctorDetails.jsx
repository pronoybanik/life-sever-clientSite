import { useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useDoctorDetails from "./hooks/useDoctorDetails";
import {
  DoctorProfileCard,
  AboutDoctor,
  BookingSection,
  WhyChooseDoctor,
  Breadcrumb,
} from "./components";

const DoctorDetails = () => {
  const { id } = useParams();
  const { doctorDetails, isLoading, error } = useDoctorDetails(id);
  const [selectedStatus, setSelectedStatus] = useState("new");
  const [selectedTime, setSelectedTime] = useState("");

  // Memoize handlers to prevent unnecessary re-renders
  const handleStatusChange = useCallback((value) => {
    setSelectedStatus(value);
  }, []);

  const handleTimeChange = useCallback((value) => {
    setSelectedTime(value);
  }, []);

  // Memoize doctor info for child components
  const doctorInfo = useMemo(
    () => ({
      FirstName: doctorDetails.FirstName,
      LastName: doctorDetails.LastName,
      About: doctorDetails.About,
      DoctorType: doctorDetails.DoctorType,
      WorkingHour: doctorDetails.WorkingHour,
      PerHourCharge: doctorDetails.PerHourCharge,
    }),
    [doctorDetails]
  );

  // Background blobs component (memoized since it's static)
  const BackgroundBlobs = useMemo(
    () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>
    ),
    []
  );

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Background Pattern */}
      {BackgroundBlobs}

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <Breadcrumb
              firstName={doctorDetails.FirstName}
              lastName={doctorDetails.LastName}
            />

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Doctor Profile Card */}
              <div className="lg:col-span-1">
                <DoctorProfileCard doctor={doctorDetails} />
              </div>

              {/* Right Column - Details & Booking */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <AboutDoctor doctor={doctorInfo} />

                {/* Booking Section */}
                <BookingSection
                  selectedStatus={selectedStatus}
                  setSelectedStatus={handleStatusChange}
                  selectedTime={selectedTime}
                  setSelectedTime={handleTimeChange}
                  workingHour={doctorDetails.WorkingHour}
                  perHourCharge={doctorDetails.PerHourCharge}
                />

                {/* Why Choose Section */}
                <WhyChooseDoctor firstName={doctorDetails.FirstName} />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default DoctorDetails;
