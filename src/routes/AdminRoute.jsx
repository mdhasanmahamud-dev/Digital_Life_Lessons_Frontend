import { Navigate, useLocation } from "react-router";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/LoadingSpinner";


const AdminRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole(); 
  const location = useLocation();

  if (isRoleLoading) return <LoadingSpinner/>

  if (role !== "admin") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
