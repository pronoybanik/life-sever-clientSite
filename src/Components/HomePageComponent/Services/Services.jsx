import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useMemo } from "react";
import { FaHeartbeat, FaChild, FaStethoscope, FaUserMd } from "react-icons/fa";

// Inline demo data (could be moved to a separate file or API later)
const demoDepartments = [
  "Outpatient Surgery",
  "Cardiac Clinic",
  "Ophthalmology Clinic",
  "Gynaecological Clinic",
  "Outpatient Rehabilitation",
  "Laryngological Clinic",
  "Pediatric Clinic",
];

const demoServices = [
  {
    id: 1,
    title: "Comprehensive Eye Care",
    department: "Ophthalmology Clinic",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Advanced diagnostics & treatment for cataracts, glaucoma, and vision disorders using cutting-edge optical equipment.",
  },
  {
    id: 2,
    title: "Cardiac Monitoring & Rehab",
    department: "Cardiac Clinic",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Preventive cardiology, non-invasive imaging, and personalized rehabilitation to strengthen heart health.",
  },
  {
    id: 3,
    title: "Same‑Day Surgical Care",
    department: "Outpatient Surgery",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Minimally invasive procedures with rapid recovery pathways and enhanced pain management protocols.",
  },
  {
    id: 4,
    title: "Pediatric Growth & Wellness",
    department: "Pediatric Clinic",
    image: "https://images.unsplash.com/photo-1535483102974-fa1e64d0ca86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Holistic child health support: immunizations, development tracking, nutrition & behavioral guidance.",
  },
  {
    id: 5,
    title: "Voice & ENT Diagnostics",
    department: "Laryngological Clinic",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Comprehensive ear, nose & throat evaluation including endoscopy, voice analysis, and allergy screening.",
  },
  {
    id: 6,
    title: "Post‑Operative Rehabilitation",
    department: "Outpatient Rehabilitation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description:
      "Customized physical & occupational therapy programs to restore mobility, strength, and confidence.",
  },
];

const deptIcon = (name) => {
  if (name.includes("Cardiac")) return <FaHeartbeat className="text-red-500" />;
  if (name.includes("Pediatric")) return <FaChild className="text-pink-500" />;
  if (name.includes("Surgery")) return <FaStethoscope className="text-sky-500" />;
  return <FaUserMd className="text-blue-400" />;
};

const Services = () => {
  const [activeDept, setActiveDept] = useState("All");

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1280 }, items: 3, partialVisibilityGutter: 24 },
    tablet: { breakpoint: { max: 1280, min: 768 }, items: 2, partialVisibilityGutter: 24 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, partialVisibilityGutter: 40 },
  };

  const filteredServices = useMemo(
    () => (activeDept === "All" ? demoServices : demoServices.filter(s => s.department === activeDept)),
    [activeDept]
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="departments">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-[#60A3D9] uppercase tracking-wide">Innovation & Care</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Hospital Departments</h2>
            <p className="text-gray-500 mt-3 max-w-2xl text-sm md:text-base">
              Explore our specialized units delivering evidence‑based treatment, patient‑centered care, and modern diagnostics.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            <button
              onClick={() => setActiveDept("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border ${activeDept === 'All' ? 'bg-[#0074B7] text-white border-[#0074B7]' : 'bg-white text-gray-600 hover:text-[#0074B7] border-gray-200'}`}
            >All</button>
            {demoDepartments.map(dep => (
              <button
                key={dep}
                onClick={() => setActiveDept(dep)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition border flex items-center gap-1 ${activeDept === dep ? 'bg-[#0074B7] text-white border-[#0074B7]' : 'bg-white text-gray-600 hover:text-[#0074B7] border-gray-200'}`}
                title={dep}
              >{deptIcon(dep)}<span className="hidden sm:inline">{dep}</span></button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3500}
            pauseOnHover
            arrows
            showDots
            keyBoardControl
            containerClass="pb-10"
            itemClass="px-2 md:px-3"
            dotListClass="!bottom-0"
            renderDotsOutside
          >
            {filteredServices.map(service => (
              <article
                key={service.id}
                className="bg-white rounded-xl shadow-sm ring-1 ring-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group/card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium text-[#0074B7] shadow">
                    {service.department}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    {deptIcon(service.department)}
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.description.length > 140 ? service.description.slice(0, 140) + '…' : service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <button className="text-sm font-medium text-[#0074B7] hover:text-blue-600 flex items-center gap-1">
                      Details <span aria-hidden>→</span>
                    </button>
                    <button className="text-xs uppercase tracking-wide bg-[#0074B7] text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
                      Book
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
