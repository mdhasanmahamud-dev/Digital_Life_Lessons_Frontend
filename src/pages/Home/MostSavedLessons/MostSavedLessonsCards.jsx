import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import MostSavedLessonsCard from "./MostSavedLessonsCard";

const MostSavedLessonsCards = () => {
  const axiosSecure = useAxiosSecure();

  const { data: lessons = [], isLoading } = useQuery({
    queryKey: ["most-saved-lessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons/most-saved");
      return res.data.lessons;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container max-w-7xl mx-auto px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson, index) => (
          <MostSavedLessonsCard key={index} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default MostSavedLessonsCards;
