import React from "react";

const SectionTitle = ({ title, sub_title }) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 text-center mb-10">
      <h2
        className="
          text-3xl md:text-4xl font-bold mb-4
          text-gray-900
          dark:text-white
          transition-colors duration-300
        "
      >
        {title}
      </h2>

      <p
        className="
          text-gray-600 md:text-lg
          dark:text-gray-400
          transition-colors duration-300
        "
      >
        {sub_title}
      </p>
    </div>
  );
};

export default SectionTitle;
