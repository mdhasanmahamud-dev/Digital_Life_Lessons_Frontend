import { NavLink } from "react-router";
import {
  FiHome,
  FiPlusCircle,
  FiBookOpen,
  FiStar,
  FiUsers,
  FiLayers,
  FiAlertTriangle,
  FiPieChart,
} from "react-icons/fi";
import { FaUserAlt, FaShieldAlt } from "react-icons/fa";
import useRole from "../../hooks/useRole";
import LoadingSpinner from "../../components/LoadingSpinner";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [role, isRoleLoading] = useRole();

  const userItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    {
      name: "Add Lesson",
      path: "/dashboard/add-lesson",
      icon: <FiPlusCircle />,
    },
    { name: "My Lesson", path: "/dashboard/my-lession", icon: <FiBookOpen /> },
    {
      name: "My Favorites",
      path: "/dashboard/favorite-lession",
      icon: <FiStar />,
    },
    { name: "Profile", path: "/dashboard/my-profile", icon: <FaUserAlt /> },
  ];

  const adminItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FiPieChart /> },
    {
      name: "Manage Users",
      path: "/dashboard/manage-users",
      icon: <FiUsers />,
    },
    {
      name: "Manage Lessons",
      path: "/dashboard/manage-lessons",
      icon: <FiLayers />,
    },
    {
      name: "Reported Lessons",
      path: "/dashboard/reported-lessons",
      icon: <FiAlertTriangle />,
    },
    {
      name: "Admin Profile",
      path: "/dashboard/profile",
      icon: <FaShieldAlt />,
    },
  ];

  if (isRoleLoading) return <LoadingSpinner />;

  const menuItems = role === "admin" ? adminItems : userItems;

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen bg-slate-900 text-gray-200 p-6
          border-r border-gray-800
          transition-all duration-300 ease-in-out transform
          ${isOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full"}
          md:static md:w-64 md:translate-x-0
          overflow-hidden
        `}
      >
        <h2 className="text-2xl font-bold mb-3 text-center text-white">
          {role === "admin" ? "Admin" : "Dashboard"}{" "}
        </h2>
        <hr className="my-2" />
        <ul className="space-y-3">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                ${isActive ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
