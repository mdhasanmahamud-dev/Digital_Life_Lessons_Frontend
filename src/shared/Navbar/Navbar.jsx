import { NavLink } from "react-router";
import { CiMenuFries } from "react-icons/ci";
import { CiLight, CiDark } from "react-icons/ci";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import NavLogo from "../../assets/NavLogo.png";
import useUserHook from "../../hooks/useUserHook";
import ProfileDropDown from "./ProfileDropDown";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { user } = useUserHook();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const closeMenu = () => setShowMobileMenu(false);
  const closeProfile = () => setShowMobileMenu(false);

  console.log(theme);
  const navItems = [
    { name: "Home", path: "/", isLogin: false },
    { name: "Add Lesson", path: "/dashboard/add-lesson", isLogin: true },
    { name: "My Lession", path: "/dashboard/my-lession", isLogin: true },
    { name: "Public Lession", path: "/public-lession", isLogin: false },
    { name: "Upgrade ", path: "/upgrade", isLogin: false },
    { name: "About ", path: "/about", isLogin: false },
    { name: "Contact ", path: "/contact", isLogin: false },
  ];

  return (
    <header
      className="sticky top-0 z-50 shadow-sm
    bg-gray-50 dark:bg-slate-950
    transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          <img className="h-12" src={NavLogo} alt="logo" />
        </NavLink>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-4 text-gray-800 dark:text-gray-200">
          {navItems
            .filter((item) => (item.isLogin ? user : true))
            .map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-600 font-semibold border-b-2 pb-1 transition-all duration-200"
                      : "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
        </ul>

        {/* User & Theme Toggle + Dark Mode (Always Visible) */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle (Always Visible) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 cursor-pointer"
          >
            {theme === "light" ? (
              <CiDark className="text-2xl text-black" />
            ) : (
              <CiLight className="text-2xl text-white" />
            )}
          </button>

          {/* User Profile or Login */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-neutral-300 dark:border-gray-600 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
              >
                <img
                  className="rounded-full h-8 w-8"
                  src={user?.photoURL ? user.photoURL : "avatarImg"}
                  alt="profile"
                />
              </div>
              {isOpen && <ProfileDropDown />}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 border bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-neutral-300 dark:border-gray-600 flex items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <img
                className="rounded-full h-8 w-8"
                src={user?.photoURL ? user.photoURL : "avatarImg"}
                alt="profile"
              />
            </div>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
            >
              {showMobileMenu ? <RxCross2 /> : <CiMenuFries />}
            </button>
          </div>

          {isOpen && <ProfileDropDown closeProfile />}
        </div>
      </div>

      {showMobileMenu && (
        <MobileNavbar navItems={navItems} closeMenu={closeMenu} />
      )}
    </header>
  );
};

export default Navbar;
