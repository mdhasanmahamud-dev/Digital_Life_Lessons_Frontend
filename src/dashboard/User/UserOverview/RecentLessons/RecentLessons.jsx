import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUserHook from "../../../../hooks/useUserHook";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const RecentLessons = () => {
  const axiosSecure = useAxiosSecure();
  const { user: firebaseUser } = useUserHook();
  
  const { data: recentLessons = [], isLoading } = useQuery({
    queryKey: ["recentLessons", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/lessons/recent/${firebaseUser?.email}`
      );
      return res.data.recentLessons;
    },
    enabled: !!firebaseUser?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">
        Recently Added Lessons
      </h2>

      <ul className="space-y-3">
        {recentLessons.map((lesson) => (
          <li
            key={lesson.id}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-900"
          >
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                L
              </div>
            </div>
            <div className="flex-1">
              <p className="font-medium text-white">{lesson.title}</p>
              <p className="text-sm text-gray-400 my-1">
                {lesson.description.length > 50
                  ? lesson.description.slice(0, 120) + "..."
                  : lesson.description}
              </p>
            </div>
            <div className="text-sm text-gray-400">
              {lesson.createdAt
                ? new Date(lesson.createdAt).toLocaleDateString()
                : "N/A"}
            </div>
          </li>
        ))}
      </ul>

      {/* Placeholder Analytics Chart */}
      <div className="mt-6">
        <div className="h-32 rounded-lg bg-linear-to-r from-slate-900 to-slate-800 border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-400">
          Analytics Chart (Weekly/Monthly Reflections)
        </div>
      </div>
    </div>
  );
};

export default RecentLessons;
