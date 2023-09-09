import { Link } from "react-router-dom";
import siteLogo from "../../imges/siteImage/340800268_560723189381106_5880403428875795146_n.png";
import { useContext } from "react";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import SecondaryButton from "../../Shared/SecondaryButton";

const PatientAccount = () => {
  const { user } = useContext(authContext);

  return (
    <section className="font-serif ">
      {/* some details in covid-19  (start)*/}
      <div className="bg-[#60A3D9] text-white">
        <div className="max-w-screen-xl text-left p-10">
          {" "}
          <strong>Don't delay your care at Mayo Clinic</strong>
          <br />
          <h1 className="text-2xl">
            Schedule your appointment now for safe in-person care.
          </h1>
          <h1 className="text-2xl">
            {" "}
            <strong>Learn more:</strong> Mayo Clinic facts about coronavirus
            disease 2019 <br />
            (COVID-19)Our COVID-19 patient and plus trusted health information
          </h1>
          <h1 className="text-2xl">
            Latest on COVID-19 vaccination by site:
            <Link className="border-b-2 border-stone-800 mx-2">Feni</Link>
            <Link className="border-b-2 border-stone-800 mx-2">Dhaka</Link>
            <Link className="border-b-2 border-stone-800 mx-2">Cumila</Link>
          </h1>
        </div>
      </div>
      {/* some details in covid-19  (End)*/}

      {/* log and register part (start)*/}
      <div className="max-w-[1240px] mx-auto mt-4 ">
        <img src={siteLogo} className="w-52" alt="" />
        <h1 className="text-[#0074B7] mt-8 font-bold">
          PATIENT ONLINE SERVICES
        </h1>

        <div className="mt-14 ">
          <h1 className="text-6xl mb-1">Log in</h1>
          <h1 className="text-xl">Or create new account</h1>

          <div className="mt-4 flex gap-2">
            {user?.email ? (
              <div>
                <Link to="/applyToAppointDoctor">
                  <SecondaryButton>request to appoint doctor</SecondaryButton>
                </Link>
                <br />
                <Link to="/">
                  <SecondaryButton> select doctor</SecondaryButton>
                </Link>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/logIn">
                  <SecondaryButton>Log in</SecondaryButton>
                </Link>

                <Link to="/register">
                  <SecondaryButton>register</SecondaryButton>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientAccount;
