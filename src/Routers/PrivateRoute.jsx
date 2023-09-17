import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Components/AuthProvider/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user?.Role === "Patient") {
    return children;
  }
  return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
