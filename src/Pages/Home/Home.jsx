import Banner from "../../Components/HomePageComponent/Banner/Banner";
import Services from "../../Components/HomePageComponent/Services/Services";
import ContactInfo from "../../Components/HomePageComponent/ContactInfo/ContactInfo";
import ServiceTimeInfo from "../../Components/HomePageComponent/ServiceTimeInfo/ServiceTimeInfo";
import OurDoctorsList from "../../Components/HomePageComponent/ourDoctorsList/OurDoctorsList";
import AboutUs from "../../Components/HomePageComponent/AboutUs/AboutUs";
import PatientReview from "../../Components/HomePageComponent/patientReviews/PatientReviews";
import { Link } from "react-router-dom";
import SecondaryButton from "../../Shared/SecondaryButton";
import { useContext } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <Banner />
      <ContactInfo />
      <ServiceTimeInfo />
      <Services />
      <PatientReview />
      <br />
      <div className="flex justify-center items-center mt-10">
        {user?.email && (
          <Link to="/feedBack">
            <SecondaryButton>Please Give Your FeedBack </SecondaryButton>
          </Link>
        )}
      </div>
      <OurDoctorsList />
      <AboutUs />
    </div>
  );
};

export default Home;
