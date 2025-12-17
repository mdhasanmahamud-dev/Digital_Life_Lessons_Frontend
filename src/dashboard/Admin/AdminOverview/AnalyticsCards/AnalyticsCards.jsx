import { useQuery } from "@tanstack/react-query";
import {
  FaBookOpen,
  FaFire,
  FaFlag,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const AnalyticsCards = () => {
  const axiosSecure = useAxiosSecure();

  const { data: userCountData, isLoading: userCountLoading } = useQuery({
    queryKey: ["userCountData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/count");
      return res.data.count;
    },
  });

  const { data: publicLessonCounts, isLoading: publicLessonCountsLoading } = useQuery({
      queryKey: ["publicLessonCounts"],
      queryFn: async () => {
        const res = await axiosSecure.get("/lessons/public/total-count");
        return res.data.count;
      },
  });

  const { data: todayLessonCount, isLoading: todayLessonLoading } = useQuery({
    queryKey: ["todayLessonCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons/analytics/today-count");
      return res.data.count;
    },
  });

  const { data: activeContributors , isLoading : activeContributorsLoading } = useQuery({
  queryKey: ["activeContributors"],
  queryFn: async () => {
    const res = await axiosSecure.get(
      "/lessons/analytics/active-contributors"
    );
    return res.data.count;
  },
  });


  if (userCountLoading || publicLessonCountsLoading || todayLessonLoading || activeContributorsLoading) return <LoadingSpinner />;

  return (
    <div>
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Total Users */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Total Users</p>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-2xl font-bold">{userCountData}</h2>
            <FaUsers className="text-blue-500 text-3xl" />
          </div>
        </div>

        {/* Public Lessons */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Public Lessons</p>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-2xl font-bold">{publicLessonCounts}</h2>
            <FaBookOpen className="text-green-500 text-3xl" />
          </div>
        </div>

        {/* Reported Lessons */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Reported Lessons</p>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-2xl font-bold">12</h2>
            <FaFlag className="text-red-500 text-3xl" />
          </div>
        </div>

        {/* Today's Lessons */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Today’s New Lessons</p>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-2xl font-bold">{todayLessonCount}</h2>
            <FaFire className="text-orange-500 text-3xl" />
          </div>
        </div>

        {/* Active Contributors */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">Active Contributors</p>
          <div className="flex items-center justify-between mt-3">
            <h2 className="text-2xl font-bold">{activeContributors}</h2>
            <FaUserShield className="text-purple-500 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCards;
