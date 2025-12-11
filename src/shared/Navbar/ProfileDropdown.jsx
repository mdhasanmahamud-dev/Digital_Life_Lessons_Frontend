import React from "react";
import { NavLink } from "react-router";
import useUserHook from "../../hooks/useUserHook";

const ProfileDropDown = ({closeProfile}) => {
  const {logOutUser } = useUserHook();
  return (
    <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 px-2 z-50 font-playfair">
      <NavLink
        to="/dashboard/my-profile"
        className="block px-4 py-2 hover:bg-gray-100 border-b"
        onClick={closeProfile}
      >
        My Profile
      </NavLink>

      <NavLink
        to="/dashboard"
        className="block px-4 py-2 hover:bg-gray-100 border-b"
        onClick={closeProfile}
      >
        Dashboard
      </NavLink>

      <button
        onClick={logOutUser}
        className="block w-full text-center px-4 py-2 hover:bg-red-700 cursor-pointer bg-red-600 rounded-full text-white mt-2"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileDropDown;
