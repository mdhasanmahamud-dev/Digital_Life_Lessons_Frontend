import React from "react";
import useLessonHook from "../../../../hooks/useLessonHook";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const ManageLessonStats = () => {
  const {
    publicLessonCounts,
    privateLessonCounts,
    publicLessonCountsLoading,
    privateLessonCountsLoading,
  } = useLessonHook();
  if (publicLessonCountsLoading ||  privateLessonCountsLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-col items-center">
        <span className="text-sm text-slate-400">Public Lessons</span>
        <span className="text-2xl font-bold text-emerald-300">
          {publicLessonCounts}
        </span>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-col items-center">
        <span className="text-sm text-slate-400">Private Lessons</span>
        <span className="text-2xl font-bold text-sky-300">
          {privateLessonCounts}
        </span>
      </div>
      <div className="bg-slate-800 p-4 rounded-xl shadow flex flex-col items-center">
        <span className="text-sm text-slate-400">Flagged Content</span>
        <span className="text-2xl font-bold text-rose-400">2</span>
      </div>
    </div>
  );
};

export default ManageLessonStats;
