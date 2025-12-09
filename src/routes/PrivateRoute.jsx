import LoadingSpinner from "../components/LoadingSpinner";
import { Navigate, useLocation } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const PrivateRoute = ({ children }) => {
  const { user } = useUserHook();
  const location = useLocation();

  if (loading) return <LoadingSpinner />;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;
