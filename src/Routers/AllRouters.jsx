import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import PatientAccount from "../Pages/PatientAccount/PatientAccount";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AboutUs from "../Pages/AboutUs/AboutUs";
import OurDoctors from "../Pages/OurDoctors/OurDoctors";
import RequestToAppointDoctor from "../Pages/RequestToAppointDoctor/RequestToAppointDoctor";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";

const allRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/patientAccount',
                element: <PatientAccount></PatientAccount>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/logIn',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/ourDoctors',
                element: <OurDoctors></OurDoctors>
            },
            {
                path: '/DoctorDetails/:id',
                element: <DoctorDetails/>
            },
            {
                path: '/applyToAppointDoctor',
                element: <RequestToAppointDoctor></RequestToAppointDoctor>
            },
        ]
    }
]);

export default allRouter;