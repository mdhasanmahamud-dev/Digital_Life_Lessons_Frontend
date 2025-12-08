import React from "react";

const SectionTitle = ({title, sub_title}) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
       {title}
      </h2>
      <p className="text-gray-400 md:text-lg">
        {sub_title}
      </p>
    </div>
  );
};

export default SectionTitle;
