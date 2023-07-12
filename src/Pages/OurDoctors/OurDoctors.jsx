import DoctorsPageLeftSite from "../../Components/DoctorsPageLeftSite/DoctorsPageLeftSite";
import DoctorsPageRightSite from "../../Components/DoctorsPageRightSite/DoctorsPageRightSite";
import DoctorsPageBannerImage from "../../imges/doctor-page/pexels-rfstudio-3825444.jpg"

const OurDoctors = () => {
    return (
        <div>
            {/* <section className=" h-96 text-white backdrop-blur-sm" style={{ backgroundImage: `url(${DoctorsPageBannerImage})` }}>
                <h1>p</h1>
            </section> */}
            

            <div className="flex flex-row  mt-10 border-t-2  border-gray-700">
                <div className="basis-1/3  border-r-2 border-gray-600">
                    <DoctorsPageLeftSite></DoctorsPageLeftSite>
                </div>
                <div className="basis-full ">
                    <DoctorsPageRightSite></DoctorsPageRightSite>
                </div>
            </div>
        </div>
    );
};

export default OurDoctors;