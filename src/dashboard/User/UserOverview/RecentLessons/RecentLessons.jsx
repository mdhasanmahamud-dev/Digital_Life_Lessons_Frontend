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

  console.log(recentLessons);

  return (
    <div>
      <h2 className="text-xl text-slate-900  font-semibold dark:text-white mb-4">
        Recently Added Lessons
      </h2>

      <ul className="space-y-3">
        {recentLessons.map((lesson) => (
          <li
            key={lesson.id}
            className="flex items-start gap-4 p-3 bg-gray-200 dark:bg-slate-900 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-900"
          >
            
            <div className="flex-1">
              <p className="font-medium text-black dark:text-white">{lesson.title}</p>
              <p className="text-sm text-black dark:text-gray-400 my-1">
                {lesson.description.length > 50
                  ? lesson.description.slice(0, 120) + "..."
                  : lesson.description}
              </p>
            </div>
            <div className="text-sm dark:text-gray-400">
              {lesson.createdAt
                ? new Date(lesson.createdAt).toLocaleDateString()
                : "N/A"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentLessons;
