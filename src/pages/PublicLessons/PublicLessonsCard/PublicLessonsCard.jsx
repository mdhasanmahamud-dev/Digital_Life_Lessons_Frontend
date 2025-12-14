import React from "react";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router";
import useLessonHook from "../../../hooks/useLessonHook";

const PublicLessonsCard = ({ lesson }) => {
  const { userData } = useLessonHook();
  const {
    _id,
    title,
    shortDescription,
    category,
    emotionalTone,
    creator,
    createdAt,
    accessLevel,
  } = lesson;

  // Lesson premium?
  const isPremiumLesson = accessLevel === "premium";
  // User premium?
  const isUserPremium = userData?.isPremium === true;
  // Should show upgrade button?
  const showUpgrade = isPremiumLesson && !isUserPremium;

  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
      {/* Header Section */}
      <span className="text-lg text-gray-700">
        {showUpgrade ? <FaLock /> : <FaUnlockAlt />}
      </span>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>

      {/* Category + Tone */}
      <div className="flex items-center gap-3 mb-5">
        <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          <MdOutlineCategory /> {category}
        </span>

        <span className="flex items-center gap-1 text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
          <BsEmojiSmile /> {emotionalTone}
        </span>
      </div>

      {/* Creator Section */}
      <div className="flex items-center justify-between border-t pt-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={creator?.photo}
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
      {showUpgrade ? (
        <Link
          to="/upgrade"
          className="mt-auto text-center bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Upgrade to Premium
        </Link>
      ) : (
        <Link
          to={`/lession-details/${lesson._id}`}
          className="mt-auto text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      )}
    </div>
  );
};

export default PublicLessonsCard;
