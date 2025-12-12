import { NavLink } from "react-router";
import {
  FiHome,
  FiPlusCircle,
  FiBookOpen,
  FiHeart,
  FiStar,
} from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
const Sidebar = () => {
  const menuItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    {name: "Add Lesson",path: "/dashboard/add-lesson",icon: <FiPlusCircle />,},
    { name: "My Lesson", path: "/dashboard/my-lession", icon: <FiBookOpen /> },
    { name: "My Favorites", path: "/dashboard/favorite-lession", icon: <FiStar /> },
    { name: "Profile", path: "/dashboard/my-profile", icon: <FaUserAlt /> },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-gray-200 p-6 border-r border-gray-800 hidden md:block sticky top-0 left-0">
      <h2 className="text-2xl font-bold mb-5 text-white">Dashboard</h2>
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
  );
};

export default Sidebar;
