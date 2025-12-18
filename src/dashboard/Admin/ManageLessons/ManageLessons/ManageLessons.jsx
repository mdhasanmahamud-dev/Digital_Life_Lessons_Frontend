import { FiFilter } from "react-icons/fi";
import ManageLessonStats from "../ManageLessonStats/ManageLessonStats";
import ManageLessonTable from "../ManageLessonTable/ManageLessonTable";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageLessons = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: lessons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-lessons");
      return res.data.lessons;
    },
  });

  return (
    <div className="min-h-screen  p-6 bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold">Manage Lessons</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm">
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      {/* Stats */}
      <ManageLessonStats />
      {/* Lessons Table */}
      <ManageLessonTable lessons={lessons} />
    </div>
  );
};

export default ManageLessons;
