import React from "react";
import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router"; // react-router-dom নিশ্চিত হও

const ContentCard = ({
  title,
  category,
  emotionalTone,
  creator,
  createdAt,
  image,
  detailsLink = "#",
  buttonText = "View Details",
  showButton = true,
  accessLevel,
  userData,
  upgradeLink = "/upgrade",
}) => {
  // Premium logic
  const isPremiumLesson = accessLevel === "premium";
  const isUserPremium = userData?.isPremium === true;
  const showUpgrade = isPremiumLesson && !isUserPremium;

  return (
    <div
      className="
        group
        relative
        bg-slate-800
        rounded-2xl
        overflow-hidden
        border border-slate-800
        flex flex-col justify-between
        shadow-md
        transition-transform 
        duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
      "
    >
      {/* Image */}
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-xl font-bold text-slate-100 leading-snug mb-2 group-hover:text-white">
          {title}
        </h2>

        {/* Category + Tone */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          {category && (
            <span className="flex items-center gap-1 text-sm bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full border border-blue-800">
              <MdOutlineCategory /> {category}
            </span>
          )}
          {emotionalTone && (
            <span className="flex items-center gap-1 text-sm bg-pink-900/40 text-pink-300 px-3 py-1 rounded-full border border-pink-800">
              <BsEmojiSmile /> {emotionalTone}
            </span>
          )}
        </div>

        {/* Creator Section */}
        {creator && (
          <div className="flex items-center justify-between border-t border-slate-700 pt-4 mb-4">
            <div className="flex items-center gap-3">
              <img
                src={creator.photo || image}
                alt={creator.name}
                className="w-10 h-10 rounded-full border border-slate-700"
              />
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  {creator.name}
                </p>
                {createdAt && (
                  <p className="text-xs text-slate-400">
                    {new Date(createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <span className="text-lg">
              {isPremiumLesson ? <FaLock /> : <FaUnlockAlt />}
            </span>
          </div>
        )}

        {/* Button */}
        {showButton && (
          <>
            {showUpgrade ? (
              <Link
                to={upgradeLink}
                className="mt-auto text-center bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Upgrade to Premium
              </Link>
            ) : (
              <Link
                to={detailsLink}
                className="mt-auto text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {buttonText}
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
