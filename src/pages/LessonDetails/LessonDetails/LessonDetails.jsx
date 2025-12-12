import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useUserHook from "../../../hooks/useUserHook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import LessonInformation from "../LessonInformation/LessonInformation";
const LessonDetails = () => {
  const { user } = useUserHook();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {
    data: lesson,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["lessonDetails", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/${id}`);
      return res.data.lesson;
    },
    enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(lesson);
  return (
    <div>
      <LessonInformation lesson={lesson}/>
    </div>
  );
};

export default LessonDetails;
