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

  // Not logged in - redirect to login
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  // Logged in as Patient - allow access
  if (user?.Role === "Patient") {
    return children;
  }

  // Logged in but wrong role - redirect to home
  return <Navigate to="/" replace />;
};

export default PrivateRouter;
