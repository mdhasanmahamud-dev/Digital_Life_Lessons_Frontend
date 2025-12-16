import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router";
const FeaturedCard = ({ featured }) => {
  const { title, category, emotionalTone, creator, createdAt } = featured;
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
      {/* Header Section */}
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
        {title}
      </h2>
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
      <Link
        to={`/lession-details/${featured._id}`}
        className="mt-auto text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default FeaturedCard;
