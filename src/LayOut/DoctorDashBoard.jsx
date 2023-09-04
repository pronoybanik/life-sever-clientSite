import React from "react";
import DoctorNavbar from "../Shared/DoctorNavbar/DoctorNavbar";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const DoctorDashBoard = () => {
  return (
    <div>
      <NavBar />
      <DoctorNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DoctorDashBoard;
