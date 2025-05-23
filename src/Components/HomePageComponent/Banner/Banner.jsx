import PrimaryButton from "../../../Shared/PrimaryButton";
import SecondaryButton from "../../../Shared/SecondaryButton";

const Banner = () => {
  return (
    <div className="bg-white ">
      <section className="relative lg:h-[600px] md:h-[400px]  h-80 bg-[url(https://images.pexels.com/photos/6520047/pexels-photo-6520047.jpeg?auto=compress&cs=tinysrgb&w=2000&lazy=load)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/20  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex  items-center lg:ml-80 md:ml-6 ml-6  h-full"
        >
          <div className="relative">
            <p className="text-white font-sans lg:text-2xl md:text-2xl text-xl ">
              Entrust Your Health Our Doctors
            </p>
            <p className="text-white lg:text-4xl md:text-3xl text-2xl font-semibold mt-4 max-w-sm sm:text-xl/relaxed">
              Medical Excellence Every Day.
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-8">
              <PrimaryButton>Make A Appointment</PrimaryButton>
              <PrimaryButton>View Department</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
