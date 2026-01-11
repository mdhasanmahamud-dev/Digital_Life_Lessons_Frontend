import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import RecommendedLessonsCard from "./RecommendedLessonsCard";

const RecommendedLessons = ({ lessonId }) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["recommendedLessons", lessonId],
    enabled: !!lessonId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/recommended/${lessonId}`);
      return res.data.lessons;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (!data || !data.length) return <div>No recommended lessons found.</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold dark:text-white">Recommended Lessons</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((lesson, index) => (
          <RecommendedLessonsCard key={index} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedLessons;
