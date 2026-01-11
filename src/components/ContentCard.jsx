import React from "react";
import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router";

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
  const isPremiumLesson = accessLevel === "premium";
  const isUserPremium = userData?.isPremium === true;
  const showUpgrade = isPremiumLesson && !isUserPremium;

  return (
    <div
      className="
        group relative
        bg-white dark:bg-slate-800
        rounded-md overflow-hidden
        border border-gray-200 dark:border-slate-800
        flex flex-col justify-between
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
        
      "
    >
      {/* Image */}
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-md">
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
        <h2
          className="
          text-xl font-bold leading-snug mb-2
          text-gray-900 dark:text-slate-100
          group-hover:text-black dark:group-hover:text-white
        "
        >
          {title}
        </h2>

        {/* Category + Tone */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {category && (
            <span
              className="
              flex items-center gap-1 text-sm
              bg-blue-100 text-blue-700
              dark:bg-blue-900/40 dark:text-blue-300
              px-3 py-1 rounded-full
              border border-blue-200 dark:border-blue-800
            "
            >
              <MdOutlineCategory /> {category}
            </span>
          )}

          {emotionalTone && (
            <span
              className="
              flex items-center gap-1 text-sm
              bg-pink-100 text-pink-700
              dark:bg-pink-900/40 dark:text-pink-300
              px-3 py-1 rounded-full
              border border-pink-200 dark:border-pink-800
            "
            >
              <BsEmojiSmile /> {emotionalTone}
            </span>
          )}
        </div>

        {/* Creator Section */}
        {creator && (
          <div
            className="
            flex items-center justify-between
            border-t border-gray-200 dark:border-slate-700
            pt-4 mb-4
          "
          >
            <div className="flex items-center gap-3">
              <img
                src={creator.photo || image}
                alt={creator.name}
                className="
                  w-10 h-10 rounded-full
                  border border-gray-300 dark:border-slate-700
                "
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-slate-200">
                  {creator.name}
                </p>
                {createdAt && (
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {new Date(createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <span className="text-lg text-gray-600 dark:text-slate-300">
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
                className="
                  mt-auto text-center
                  bg-yellow-500 text-white
                  text-sm font-semibold
                  px-4 py-2 rounded-lg
                  hover:bg-yellow-600 transition
                "
              >
                Upgrade to Premium
              </Link>
            ) : (
              <Link
                to={detailsLink}
                className="
                  mt-auto text-center
                  bg-blue-600 text-white
                  text-sm font-semibold
                  px-4 py-2 rounded-lg
                  hover:bg-blue-700 transition
                "
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
