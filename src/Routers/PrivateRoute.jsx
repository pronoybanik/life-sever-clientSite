import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Components/AuthProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(authContext);
  console.log(user, loading);
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user?.Role === "Patient") {
    return children;
  }
//   if (user?.Role === "Doctor") {
//     return children;
//   }
//   if (user?.Role === "Admin") {
//     return children;
//   }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
