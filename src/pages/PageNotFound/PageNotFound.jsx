import React from "react";
import { NavLink } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-6">
      <h1 className="text-9xl font-playfair font-bold text-indigo-600 animate-bounce">
        404
      </h1>
      <p className="mt-4 text-2xl md:text-3xl font-roboto text-gray-100 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="mt-2 text-gray-200 text-center max-w-md">
        Maybe the page has been moved or deleted. Please check the URL or go
        back to the homepage.
      </p>
      <NavLink
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded shadow-lg hover:bg-indigo-500 transition-all"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
