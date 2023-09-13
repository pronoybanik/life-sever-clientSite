import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Components/AuthProvider/AuthProvider";

const DoctorPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user?.Role === "Doctor") {
    return children;
  }

  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default DoctorPrivateRoute;
