import React from "react";
import { Link } from "react-router";

const RecommendedLessonsCard = ({ lesson }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:shadow-lg hover:border-blue-600 transition-all duration-300 flex flex-col">
      
      {/* Lesson Title */}
      <h3 className="font-bold text-white text-lg line-clamp-2 mb-2">
        {lesson.title}
      </h3>

      {/* Truncated Description (flex-grow) */}
      <p className="text-sm text-slate-400 grow line-clamp-3">
        {lesson?.description}
      </p>

      {/* View Details Button (always bottom) */}
      <Link
        to={`/lession-details/${lesson._id}`}
        className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
};

export default RecommendedLessonsCard;
