import React from "react";
import { FaBookmark, FaHeart, FaShareAlt, FaFlag } from "react-icons/fa";

const InteractionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 border-t border-slate-800 pt-6">
      <Action icon={FaBookmark} label="Save" />
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
