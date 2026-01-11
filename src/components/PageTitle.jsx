import React from "react";

const PageTitle = ({ title, sub_title }) => {
  return (
    <div className="text-center py-10 font-playfair">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white drop-shadow-sm">
        {title}
      </h1>

      {/* Subtitle */}
      {sub_title && (
        <p className="text-slate-800 dark:text-gray-300 mt-2 text-sm md:text-base max-w-xl mx-auto">
          {sub_title}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
