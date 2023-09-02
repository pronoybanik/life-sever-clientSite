import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services"
import Info from "../../Components/Info/Info"
import ContactInfo from "../../Components/HomePageComponent/ContactInfo/ContactInfo";
import ServiceTimeInfo from "../../Components/HomePageComponent/ServiceTimeInfo/ServiceTimeInfo";

const Home = () => {
  return (
    <div>
      <Banner />
      <ContactInfo/>
      <ServiceTimeInfo/>
      {/* <Services /> */}
      {/* <Info></Info> */}
      {/* <HealthTips></HealthTips> */}
    </div>
  );
};

export default Home;