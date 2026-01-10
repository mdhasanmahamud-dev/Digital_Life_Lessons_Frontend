import React from "react";
import { NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const ProfileDropDown = ({ closeProfile }) => {
  const { logOutUser } = useUserHook();

  return (
    <div
      className="absolute right-0 mt-3 w-40 
        bg-white dark:bg-slate-800 
        shadow-lg rounded-lg py-2 px-2 z-50 font-playfair
        transition-colors duration-300"
    >
      <NavLink
        to="/dashboard/my-profile"
        onClick={closeProfile}
        className="block px-4 py-2 border-b border-gray-200 dark:border-gray-700 
            text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        My Profile
      </NavLink>

      <NavLink
        to="/dashboard"
        onClick={closeProfile}
        className="block px-4 py-2 border-b border-gray-200 dark:border-gray-700 
            text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        Dashboard
      </NavLink>

      <button
        onClick={logOutUser}
        className="block w-full text-center px-4 py-2 mt-2 
          bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 
          text-white rounded-full cursor-pointer transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropDown;
