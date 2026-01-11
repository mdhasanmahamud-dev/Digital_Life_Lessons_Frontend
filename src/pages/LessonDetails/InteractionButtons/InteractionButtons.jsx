import { useState } from "react";
import { FaBookmark, FaHeart, FaShareAlt, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserHook from "../../../hooks/useUserHook";
import useLessonHook from "../../../hooks/useLessonHook";
import ReportModal from "../ReportModal/ReportModal";

const InteractionButtons = ({ lessonId, setLike }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook();
  const { favoriteCountRefetch } = useLessonHook();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const handleFavorite = async () => {
    if (!user) return toast("Please login first!");
    setIsFavorite(true);
    try {
      const response = await axiosSecure.post("/favorites", {
        lessonId,
        userEmail: user?.email,
      });
      // backend message capture
      if (response.data.success) {
        toast.success(response.data.message);
        favoriteCountRefetch();
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message);
    } finally {
      setIsFavorite(false);
    }
  };

  const handleUpdateLike = async () => {
    if (!user) return toast("Please login first!");
    try {
      const response = await axiosSecure.patch(`/lessons/like/${lessonId}`);
      console.log(response);
      if (response.data.success) {
        toast.success("Liked!");
        setLike(response?.data?.like);
      }
    } catch (error) {
      const message = error?.response?.data?.message || "Failed to like";
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 border-t border-gray-200 dark:border-slate-800 pt-6">
      {/* Save Button */}
      <button
        disabled={isFavorite}
        onClick={handleFavorite}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition text-sm font-medium cursor-pointer"
      >
        <FaBookmark /> {isFavorite ? "Saving..." : "Save"}
      </button>

      {/* Report Button */}
      <button
        onClick={() => setIsReportOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition text-sm font-medium cursor-pointer"
      >
        <FaFlag /> Report
      </button>

      {/* Like Button */}
      <button
        onClick={() => handleUpdateLike()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition text-sm font-medium cursor-pointer"
      >
        <FaHeart /> Like
      </button>

      {/* Report Modal */}
      <ReportModal
        lessonId={lessonId}
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />
    </div>
  );
};

export default InteractionButtons;
