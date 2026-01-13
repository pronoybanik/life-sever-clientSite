import React, { memo, useMemo } from "react";

const WhyChooseDoctor = memo(({ firstName }) => {
  // Memoize features array
  const features = useMemo(
    () => [
      {
        icon: "🎓",
        title: "Expert Qualifications",
        desc: "Board certified specialist",
      },
      {
        icon: "⏰",
        title: "Flexible Timing",
        desc: "Appointments that fit your schedule",
      },
      {
        icon: "💬",
        title: "Patient Care",
        desc: "Personalized treatment plans",
      },
      {
        icon: "🏆",
        title: "Proven Results",
        desc: "High patient satisfaction rate",
      },
    ],
    []
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Why Choose Dr. {firstName}?
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
});

// Feature Card Component
const FeatureCard = memo(({ icon, title, desc }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
});

WhyChooseDoctor.displayName = "WhyChooseDoctor";
FeatureCard.displayName = "FeatureCard";

export default WhyChooseDoctor;
