import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const ActiveContributors = () => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["top-contributors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons/analytics/top-contributors");
      return res.data.contributors;
    },
  });

  if (isLoading) return <LoadingSpinner/>

  return (
    <div className="dark:bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-black dark:text-slate-200">Most Active Contributors</h3>

      <div className="space-y-3 text-slate-300">
        {data?.map((user) => (
          <div key={user._id} className="flex justify-between">
            <span className="text-black dark:text-gray-100">{user.name || user._id}</span>
            <span className="text-slate-900 dark:text-slate-400">{user.totalLessons} lessons</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveContributors;
