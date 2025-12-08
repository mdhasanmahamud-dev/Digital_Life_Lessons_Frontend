import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import NavLogo from "../../assets/NavLogo.png"
import useUserHook from "../../hooks/useUserHook";
const Navbar = () => {
  const {user} = useUserHook()
  console.log(user)
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const closeMenu = () => setShowMobileMenu(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Add Lesson", path: "/add-lession" },
    { name: "My Lession", path: "/my-lession" },
    { name: "Public Lession", path: "/public-lession" },
    { name: "My Favorites", path: "/my-favorites" },
  ];

  return (
    <header className="bg-gray-50  sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          <img className="h-12" src={NavLogo} alt="" />
        </NavLink>

        <ul className="hidden md:flex items-center space-x-4 text-gray-800">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600  font-semibold border-b-2 pb-1 transition-all duration-200"
                    : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/login"
          className="px-4 py-2 border bg-indigo-600 text-white  rounded hover:bg-indigo-700 transition-colors hidden md:flex"
        >
          Login
        </NavLink>

        <div className="md:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-2xl text-gray-800 focus:outline-none cursor-pointer"
          >
            {showMobileMenu ? <RxCross2 /> : <CiMenuFries />}
          </button>
        </div>

       
      </div>
       {showMobileMenu && (
          <MobileNavbar navItems={navItems} closeMenu={closeMenu} />
        )}
    </header>
  );
};

export default Navbar;
