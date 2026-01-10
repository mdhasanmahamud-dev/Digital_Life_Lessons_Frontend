import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
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
}) => {
  return (
    <div
      className="
        group
        relative
        bg-slate-800
        rounded-md
        p-6
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
      {/* Title */}
      <h2
        className="
          text-xl
          font-bold
          text-slate-100
          leading-snug
          mb-2
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {title}
      </h2>

      {/* Category + Tone */}
      <div className="flex items-center gap-3 mb-5">
        {category && (
          <span
            className="
              flex items-center gap-1
              text-sm
              bg-blue-900/40
              text-blue-300
              px-3 py-1
              rounded-full
              border border-blue-800
            "
          >
            <MdOutlineCategory /> {category}
          </span>
        )}

        {emotionalTone && (
          <span
            className="
              flex items-center gap-1
              text-sm
              bg-pink-900/40
              text-pink-300
              px-3 py-1
              rounded-full
              border border-pink-800
            "
          >
            <BsEmojiSmile /> {emotionalTone}
          </span>
        )}
      </div>

      {/* Creator Section */}
      {creator && (
        <div className="flex items-center justify-between border-t border-slate-800 pt-4 mb-4">
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
        </div>
      )}

      {/* Button */}
      {showButton && (
        <Link
          to={detailsLink}
          className="
            mt-auto
            text-center
            bg-blue-600
            text-white
            text-sm
            font-semibold
            px-4 py-2
            rounded-lg
            transition-all
            duration-300
            hover:bg-blue-500
            group-hover:shadow-lg
          "
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default ContentCard;
