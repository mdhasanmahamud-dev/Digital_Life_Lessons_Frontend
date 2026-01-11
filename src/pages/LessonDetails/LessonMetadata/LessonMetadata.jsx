import React from "react";

const LessonMetadata = ({ lesson }) => {
  const formatDate = (date) => date ? new Date(date).toLocaleDateString() : "N/A";

  return (
    <div className="dark:bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-3 text-sm capitalize">
      <p  className="text-xs uppercase dark:text-slate-500 mb-3">Meta data</p>
      <div className="flex justify-between">
        <span className="dark:text-slate-400">Created Date</span>
        <span className="dark:text-white">{formatDate(lesson?.createdAt)}</span>
      </div>

      <div className="flex justify-between">
        <span className="dark:text-slate-400">Last Updated</span>
        <span className="dark:text-white">{formatDate(lesson?.updatedAt)}</span>
      </div>

      <div className="flex justify-between">
        <span className="dark:text-slate-400">Visibility</span>
        <span className="dark:text-white">{lesson?.privacy || "Public"}</span>
      </div>
    </div>
  );
};

export default LessonMetadata;
