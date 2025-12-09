import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import NavLogo from "../../assets/NavLogo.png";
import useUserHook from "../../hooks/useUserHook";
import ProfileDropDown from "./ProfileDropDown";
const Navbar = () => {
  const { user, logOutUser } = useUserHook();
  console.log(user);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setShowMobileMenu(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Add Lesson", path: "/add-lession" },
    { name: "My Lession", path: "/my-lession" },
    { name: "Public Lession", path: "/public-lession" },
    { name: "Upgrade ", path: "/upgrade" },
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

        {user ? (
          <div className="relative hidden md:block">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-neutral-300 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
            >
              {/* Avatar */}
              <img
                className="rounded-full h-8 w-8"
                src={user?.photoURL ? user?.photoURL : "avatarImg"}
                alt="profile"
              />
            </div>

            {/* Dropdown Menu */}
            {isOpen && <ProfileDropDown />}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="px-4 py-2 border bg-indigo-600 text-white rounded hover:bg-indigo-700 hidden md:flex"
          >
            Login
          </NavLink>
        )}

        <div className="md:hidden relative">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-neutral-300 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <img
                className="rounded-full h-8 w-8"
                src={user?.photoURL ? user?.photoURL : "avatarImg"}
                alt="profile"
              />
            </div>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl text-gray-800 focus:outline-none cursor-pointer"
            >
              {showMobileMenu ? <RxCross2 /> : <CiMenuFries />}
            </button>
          </div>

          {/* Mobile Profile Dropdown */}
          {isOpen && (
           <ProfileDropDown/>
          )}
        </div>
      </div>
      {showMobileMenu && (
        <MobileNavbar navItems={navItems} closeMenu={closeMenu} />
      )}
    </header>
  );
};

export default Navbar;
