import  { useState } from "react";
import { FaBookmark, FaHeart, FaShareAlt, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserHook from "../../../hooks/useUserHook";
import useLessonHook from "../../../hooks/useLessonHook";

const InteractionButtons = ({ lessonId }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook();
  const { favoriteCountRefetch } = useLessonHook();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = async () => {
    if (!user) return toast("Please login first!");
    setIsFavorite(true)
    try {
      const response = await axiosSecure.post("/favorites", {
        lessonId,
        userEmail: user?.email,
      });
      // backend message capture
      if (response.data.success) {
        toast.success(response.data.message); 
        favoriteCountRefetch()
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message); 
    }finally{
      setIsFavorite(false)
    }
  };

  return (
    <div className="flex flex-wrap gap-4 border-t border-slate-800 pt-6">
      <button
        disabled={isFavorite}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-sm font-medium cursor-pointer"
        onClick={handleFavorite}
      >
        <FaBookmark />  {isFavorite ? "Saving..." : "Save"}
      </button>

      <Action icon={FaHeart} label="Like" />
      <Action icon={FaShareAlt} label="Share" />
      <Action icon={FaFlag} label="Report" />
    </div>
  );
};

const Action = ({ icon: Icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-sm font-medium">
    <Icon /> {label}
  </button>
);

export default InteractionButtons;
