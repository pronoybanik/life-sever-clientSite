import Banner from "../../Components/HomePageComponent/Banner/Banner";
import Services from "../../Components/HomePageComponent/Services/Services";
import ContactInfo from "../../Components/HomePageComponent/ContactInfo/ContactInfo";
import ServiceTimeInfo from "../../Components/HomePageComponent/ServiceTimeInfo/ServiceTimeInfo";
import OurDoctorsList from "../../Components/HomePageComponent/ourDoctorsList/OurDoctorsList";
import AboutUs from "../../Components/HomePageComponent/AboutUs/AboutUs";
import PatientReview from "../../Components/HomePageComponent/patientReviews/PatientReviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContactInfo />
      <ServiceTimeInfo />
      <Services />
      <PatientReview />
      <OurDoctorsList />
      <AboutUs />
      <PatientReview />
      {/* <Info></Info> */}
      {/* <HealthTips></HealthTips> */}
    </div>
  );
};

export default Home;
