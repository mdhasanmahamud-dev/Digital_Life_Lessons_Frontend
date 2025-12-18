import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CreatorProfileCard from "./CreatorProfileCard";
import { useQuery } from "@tanstack/react-query";

const CreatorProfileCards = ({ email }) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: lessons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["creatorLessons", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/user/${email}`);
      return res.data.lessons;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  console.log(lessons);
  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <CreatorProfileCard key={index} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default CreatorProfileCards;
