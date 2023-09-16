import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import PatientAccount from "../Pages/PatientAccount/PatientAccount";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AboutUs from "../Components/HomePageComponent/AboutUs/AboutUs";
import OurDoctors from "../Pages/OurDoctors/OurDoctors";
import RequestToAppointDoctor from "../Pages/RequestToAppointDoctor/RequestToAppointDoctor";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import AdminDashBoard from "../LayOut/AdminDashBoard";
import AdminSettings from "../Pages/Admin/AdminSettings";
import BookAppointment from "../Pages/BookAppointment/BookAppointment";
import Profile from "../Pages/Profile/Profile";
import Chat from "../Pages/chat/Chat";
import DoctorDashBoard from "../LayOut/DoctorDashBoard";
import PatientList from "../Pages/PatientList/PatientList";
import PatientAppointment from "../Components/DoctorDashBoardPageComponent/patientAppointment/PatientAppointment";
import AppointmentList from "../Pages/appointmentList/AppointmentList";
import PrivateRouter from "./PrivateRoute";
import DoctorPrivateRoute from "./DoctorPrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import DoctorUsers from "../Components/AdminDashBoardPageComponent/DoctorUsers/DoctorUsers";
import AllUser from "../Components/AdminDashBoardPageComponent/AllUser/AllUser";

const allRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/patientAccount",
        element: <PatientAccount />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/appointmentList",
        element: (
          // <PrivateRouter>
            <AppointmentList />
          // </PrivateRouter>
        ),
      },
      {
        path: "/ourDoctors",
        element: <OurDoctors />,
      },
      {
        path: "/DoctorDetails/:id",
        element: <DoctorDetails />,
      },
      {
        path: "/applyToAppointDoctor",
        element: <RequestToAppointDoctor />,
      },
      {
        path: "/bookAppointment",
        element: (
          // <PrivateRouter>
            <BookAppointment />
          // </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // {
      //   path: "/message",
      //   element: <Chat />,
      // },
    ],
  },
  {
    path: "/adminDashBoard",
    element: (
      // <AdminPrivateRoute>
        <AdminDashBoard />
      // </AdminPrivateRoute>
    ),
    children: [
      {
        path: "/adminDashBoard/allDoctorUser",
        element: (
          // <AdminPrivateRoute>
            <DoctorUsers />
          // </AdminPrivateRoute>
        ),
      },
      {
        path: "/adminDashBoard/allUser",
        element: (
          // <AdminPrivateRoute>
            <AllUser />
          // </AdminPrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/doctorDashBoard",
    element: (
      // <DoctorPrivateRoute>
        <DoctorDashBoard />
      // </DoctorPrivateRoute>
    ),
    children: [
      {
        path: "/doctorDashBoard/patientAppointment",
        element: <PatientAppointment />,
      },
      {
        path: "/doctorDashBoard/message",
        element: <Chat />,
      },
      {
        path: "/doctorDashBoard/patientList",
        element: <PatientList />,
      },
    ],
  },
]);

export default allRouter;
