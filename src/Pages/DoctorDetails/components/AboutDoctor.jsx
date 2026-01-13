import React, { memo, useMemo } from "react";

const AboutDoctor = memo(({ doctor }) => {
  const { FirstName, LastName, About, DoctorType } = doctor;

  // Memoize the about text to prevent recalculation
  const aboutText = useMemo(() => {
    return (
      About ||
      `Dr. ${FirstName} ${LastName} is a highly experienced medical professional specializing in ${DoctorType}. With years of dedicated service and a commitment to patient care, they provide comprehensive medical solutions with a patient-centered approach.`
    );
  }, [About, FirstName, LastName, DoctorType]);

  // Memoize specializations array
  const specializations = useMemo(
    () => [
      "General Consultation",
      "Preventive Care",
      "Diagnosis",
      "Treatment Planning",
      "Follow-up Care",
    ],
    []
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">About Doctor</h2>
          <p className="text-sm text-gray-500">
            Professional background & expertise
          </p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{aboutText}</p>

      {/* Specializations */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Specializations
        </h3>
        <div className="flex flex-wrap gap-2">
          {specializations.map((item, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

AboutDoctor.displayName = "AboutDoctor";

export default AboutDoctor;
