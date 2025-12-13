import React from "react";
import { Link } from "react-router";

const RecommendedLessonsCard = ({ lesson }) => {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:shadow-lg hover:border-blue-600 transition-all duration-300 space-y-4">
      {/* Lesson Title */}
      <h3 className="font-bold text-white text-lg line-clamp-2">
        {lesson.title}
      </h3>

      {/* Truncated Description */}
      <p className="text-sm text-slate-400">{lesson?.description}</p>

      {/* View Details Button */}
      <Link
        to={`/dashboard/lession-details/${lesson._id}`}
        className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
};

export default RecommendedLessonsCard;
