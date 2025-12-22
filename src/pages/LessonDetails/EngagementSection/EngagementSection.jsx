import React from "react";
import { FaHeart, FaBookmark, FaEye } from "react-icons/fa";
import useLessonHook from "../../../hooks/useLessonHook";

const EngagementSection = ({like}) => {
  const {favoriteCount} = useLessonHook()

  const stats = {
    likes: like,
    favorites: favoriteCount,
    
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3">
      <Stat icon={FaHeart} label="Likes" value={stats.likes} />
      <Stat icon={FaBookmark} label="Favorites" value={stats.favorites} />
    </div>
  );
};

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="flex items-center gap-2 text-slate-400">
      <Icon /> {label}
    </span>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

export default EngagementSection;
