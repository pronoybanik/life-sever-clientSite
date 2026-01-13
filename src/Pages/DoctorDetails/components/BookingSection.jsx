import React, { memo, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

const BookingSection = memo(
  ({
    selectedStatus,
    setSelectedStatus,
    selectedTime,
    setSelectedTime,
    workingHour,
    perHourCharge,
  }) => {
    // Memoize time slots
    const timeSlots = useMemo(
      () => ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
      []
    );

    // Memoize handlers
    const handleStatusChange = useCallback(
      (e) => {
        setSelectedStatus(e.target.value);
      },
      [setSelectedStatus]
    );

    const handleTimeChange = useCallback(
      (e) => {
        setSelectedTime(e.target.value);
      },
      [setSelectedTime]
    );

    return (
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Book Appointment</h2>
            <p className="text-sm text-gray-500">
              Schedule your visit with the doctor
            </p>
          </div>
        </div>

        <form className="space-y-6">
          {/* Appointment Type */}
          <AppointmentTypeSelector
            selectedStatus={selectedStatus}
            onChange={handleStatusChange}
          />

          {/* Available Time Slots */}
          <TimeSlotSelector
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            onChange={handleTimeChange}
            workingHour={workingHour}
          />

          {/* Price Summary */}
          <PriceSummary fee={perHourCharge} />

          {/* Book Button */}
          <Link to="/bookAppointment" className="block">
            <button
              type="button"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Appointment Now
            </button>
          </Link>
        </form>
      </div>
    );
  }
);

// Appointment Type Selector Component
const AppointmentTypeSelector = memo(({ selectedStatus, onChange }) => {
  const appointmentTypes = useMemo(
    () => [
      {
        value: "new",
        title: "New Patient",
        subtitle: "First time visit",
        iconColor: "bg-blue-100",
        icon: (
          <svg
            className="w-5 h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        ),
      },
      {
        value: "followup",
        title: "Follow-up",
        subtitle: "Returning patient",
        iconColor: "bg-green-100",
        icon: (
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-3">
        Appointment Type
      </label>
      <div className="grid grid-cols-2 gap-4">
        {appointmentTypes.map((type) => (
          <label key={type.value} className="relative cursor-pointer">
            <input
              type="radio"
              name="appointmentType"
              value={type.value}
              checked={selectedStatus === type.value}
              onChange={onChange}
              className="peer sr-only"
            />
            <div className="p-4 rounded-2xl border-2 border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all hover:border-gray-300">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl ${type.iconColor} flex items-center justify-center`}
                >
                  {type.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{type.title}</p>
                  <p className="text-xs text-gray-500">{type.subtitle}</p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
});

// Time Slot Selector Component
const TimeSlotSelector = memo(
  ({ timeSlots, selectedTime, onChange, workingHour }) => {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Available Time Slots
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {timeSlots.map((time, idx) => (
            <label key={idx} className="relative cursor-pointer">
              <input
                type="radio"
                name="timeSlot"
                value={time}
                checked={selectedTime === time}
                onChange={onChange}
                className="peer sr-only"
              />
              <div className="p-3 rounded-xl border-2 border-gray-200 text-center peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all hover:border-gray-300">
                <p className="font-semibold text-gray-900 peer-checked:text-blue-600">
                  {time}
                </p>
              </div>
            </label>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-500 flex items-center gap-2">
          <svg
            className="w-4 h-4 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          Working Hours: {workingHour}
        </p>
      </div>
    );
  }
);

// Price Summary Component
const PriceSummary = memo(({ fee }) => {
  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Consultation Fee</p>
          <p className="text-2xl font-bold text-gray-900">${fee}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Payment on visit</p>
          <p className="text-sm text-green-600 font-medium">No booking fee</p>
        </div>
      </div>
    </div>
  );
});

BookingSection.displayName = "BookingSection";
AppointmentTypeSelector.displayName = "AppointmentTypeSelector";
TimeSlotSelector.displayName = "TimeSlotSelector";
PriceSummary.displayName = "PriceSummary";

export default BookingSection;
