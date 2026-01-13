import React, { memo } from "react";

const DoctorProfileCard = memo(({ doctor }) => {
  const {
    DoctorProfileImage,
    FirstName,
    LastName,
    DoctorType,
    MobileNumber,
    WorkingHour,
    PerHourCharge,
  } = doctor;

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 overflow-hidden sticky top-8">
      {/* Profile Header with Gradient */}
      <div className="relative h-32 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-400/20 text-white backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available
          </span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative px-6 pb-6">
        <div className="relative -mt-16 mb-4">
          <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img
              alt={FirstName + " " + LastName}
              src={DoctorProfileImage}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Dr. {FirstName} {LastName}
          </h1>
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            {DoctorType}
          </p>
        </div>

        {/* Stats Grid */}
        <DoctorStats />

        {/* Contact Info */}
        <ContactInfo
          phone={MobileNumber}
          workingHour={WorkingHour}
          fee={PerHourCharge}
        />
      </div>
    </div>
  );
});

// Stats Grid Component
const DoctorStats = memo(() => {
  const stats = [
    { value: "10+", label: "Years Exp", color: "blue" },
    { value: "500+", label: "Patients", color: "green" },
    { value: "4.9", label: "Rating", color: "amber" },
  ];

  const colorClasses = {
    blue: "from-blue-50 to-indigo-50 text-blue-600",
    green: "from-green-50 to-emerald-50 text-green-600",
    amber: "from-amber-50 to-orange-50 text-amber-600",
  };

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`text-center p-3 rounded-2xl bg-gradient-to-br ${colorClasses[stat.color]}`}
        >
          <p className="text-2xl font-bold">{stat.value}</p>
          <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
});

// Contact Info Component
const ContactInfo = memo(({ phone, workingHour, fee }) => {
  const contactItems = [
    {
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: phone,
      bgColor: "bg-blue-100",
    },
    {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Working Hours",
      value: workingHour,
      bgColor: "bg-green-100",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Consultation Fee",
      value: (
        <>
          ${fee} <span className="text-gray-400 font-normal">/ hour</span>
        </>
      ),
      bgColor: "bg-indigo-100",
    },
  ];

  return (
    <div className="space-y-3">
      {contactItems.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          <div
            className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center`}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-xs text-gray-500">{item.label}</p>
            <p className="text-sm font-semibold text-gray-900">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

DoctorProfileCard.displayName = "DoctorProfileCard";
DoctorStats.displayName = "DoctorStats";
ContactInfo.displayName = "ContactInfo";

export default DoctorProfileCard;
