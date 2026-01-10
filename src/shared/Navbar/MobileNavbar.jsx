import { NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const MobileNavbar = ({ navItems, closeMenu }) => {
  const { user } = useUserHook();

  return (
    <div
      className="md:hidden
      bg-gray-50 dark:bg-slate-900
      border-t border-gray-200 dark:border-gray-700
      transition-colors duration-300"
    >
      <ul className="flex flex-col px-5 py-3 space-y-1">
        {/* Nav Items with conditional display */}
        {navItems
          .filter((item) => (item.isLogin ? user : true))
          .map((item) => (
            <li
              key={item.path}
              className="border-b border-gray-200 dark:border-gray-700 last:border-none text-center transition-colors duration-300"
            >
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 text-base transition-colors duration-300 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        {/* Auth Section */}
        {!user && (
          <div className="pt-2">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="w-full text-center py-2 
                  bg-indigo-600 dark:bg-indigo-500 
                  text-white dark:text-gray-900 
                  rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 
                  transition-colors duration-300"
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MobileNavbar;
