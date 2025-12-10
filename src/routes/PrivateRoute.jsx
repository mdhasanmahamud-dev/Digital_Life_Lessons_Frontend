import LoadingSpinner from "../components/LoadingSpinner";
import { Navigate, useLocation } from "react-router";
import useUserHook from "../hooks/useUserHook";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, userloading } = useUserHook();
  if (userloading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;
