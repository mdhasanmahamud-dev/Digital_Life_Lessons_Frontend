import React from "react";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router";

const MostSavedLessonsCard = ({ lesson }) => {
  const lessonData = lesson.lesson;

  const {
    _id,
    title,
    category,
    emotionalTone,
    creator,
    createdAt,
    accessLevel,
  } = lessonData;

  const totalSaved = lesson.totalSaved;

  // Premium logic
  const isPremiumLesson = accessLevel?.toLowerCase() === "premium";

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
      {/* Header: Premium lock + Total Saves */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg text-gray-700">
          {isPremiumLesson ? <FaLock /> : <FaUnlockAlt />}
        </span>
        <span className="text-sm font-medium text-gray-600">
          {totalSaved} Saves
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3">
        {title}
      </h2>

      {/* Category + Tone */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          <MdOutlineCategory /> {category}
        </span>
        <span className="flex items-center gap-1 text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
          <BsEmojiSmile /> {emotionalTone}
        </span>
      </div>

      {/* Creator Info */}
      <div className="flex items-center justify-between border-t pt-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={creator?.photoURL || creator?.photo}
            alt={creator?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {creator?.name}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <Link
        to={`/upgrade`}
        className={`mt-auto text-center text-sm font-semibold px-4 py-2 rounded-lg transition 
          ${
            isPremiumLesson
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
      >
        {isPremiumLesson ? "Upgrade to Premium" : "View Details"}
      </Link>
    </div>
  );
};

export default MostSavedLessonsCard;
