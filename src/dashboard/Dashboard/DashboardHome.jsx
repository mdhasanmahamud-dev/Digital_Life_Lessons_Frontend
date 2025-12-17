import LoadingSpinner from "../../components/LoadingSpinner";
import useRole from "../../hooks/useRole";
import AdminOverview from "../Admin/AdminOverview/AdminOverview/AdminOverview";
import UserOverview from "../User/UserOverview/UserOverview/UserOverview";

const DashboardHome = () => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <LoadingSpinner />;

  return <div>{role === "admin" ? <AdminOverview/> : <UserOverview />}</div>;
 
};

export default DashboardHome;
