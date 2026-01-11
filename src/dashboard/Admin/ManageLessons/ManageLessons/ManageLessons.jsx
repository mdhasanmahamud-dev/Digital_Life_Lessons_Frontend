import { useState } from "react";
import ManageLessonStats from "../ManageLessonStats/ManageLessonStats";
import ManageLessonTable from "../ManageLessonTable/ManageLessonTable";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageLessons = () => {
  const axiosSecure = useAxiosSecure();
  const [category, setCategory] = useState("");
  const [privacy, setPrivacy] = useState("");

  const {
    data: lessons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["lessons", category, privacy],
    queryFn: async () => {
      const params = {};
      if (category) params.category = category;
      if (privacy) params.privacy = privacy;

      const res = await axiosSecure.get("/all-lessons", { params });
      return res.data.lessons;
    },
  });

  return (
    <div className="min-h-screen p-6 dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold">Manage Lessons</h2>
        <div className="space-x-2 flex flex-wrap gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-slate-200 border border-gray-300 dark:border-slate-700 focus:outline-none focus:border-slate-500 transition-colors duration-300"
          >
            <option value="">All Categories</option>
            <option value="Personal Growth">Personal Growth</option>
            <option value="Career">Career</option>
            <option value="Relationships">Relationships</option>
            <option value="Mindset">Mindset</option>
            <option value="Mistakes Learned">Mistakes Learned</option>
          </select>

          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="px-3 py-2 rounded-md bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-slate-200 border border-gray-300 dark:border-slate-700 focus:outline-none focus:border-slate-500 transition-colors duration-300"
          >
            <option value="">All Privacy</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>

          <button
            onClick={() => {
              setCategory("");
              setPrivacy("");
            }}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-slate-200 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Stats */}
      <ManageLessonStats />

      {/* Lessons Table */}
      <ManageLessonTable lessons={lessons} refetch={refetch} />
    </div>
  );
};

export default ManageLessons;
