import { NavLink } from "react-router";

const MobileNavbar = ({ navItems, closeMenu }) => {
  return (
    <div className="md:hidden bg-gray-50  border-t border-gray-200 dark:border-zinc-800">
      <ul className="flex flex-col px-5 py-3 space-y-1 transition-colors">
        {/* Nav Items */}
        {navItems.map((item) => (
          <li
            key={item.path}
            className="border-b border-gray-200 last:border-none text-center"
          >
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 text-base transition ${
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
        <div className="pt-2">
          <div className="flex flex-col space-y-3">
           
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="w-full text-center py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
            >
              Login
            </NavLink>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileNavbar;
