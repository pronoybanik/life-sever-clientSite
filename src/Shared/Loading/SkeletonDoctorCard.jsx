
const SkeletonDoctorCard = () => (
  <div className="bg-white rounded-xl shadow p-4 animate-pulse flex flex-col items-center gap-4 min-h-[320px]">
    <div className="w-24 h-24 bg-gray-200 rounded-full mb-2" />
    <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
    <div className="h-3 w-20 bg-gray-100 rounded mb-2" />
    <div className="h-3 w-24 bg-gray-100 rounded mb-2" />
    <div className="h-8 w-28 bg-gray-200 rounded mt-4" />
  </div>
);

export default SkeletonDoctorCard;
