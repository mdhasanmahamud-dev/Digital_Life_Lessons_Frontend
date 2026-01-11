import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import LessonInformation from "../LessonInformation/LessonInformation";
import InteractionButtons from "../InteractionButtons/InteractionButtons";
import CreatorSection from "../CreatorSection/CreatorSection";
import LessonMetadata from "../LessonMetadata/LessonMetadata";
import EngagementSection from "../EngagementSection/EngagementSection";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import RecommendedLessons from "../RecommendedLessons/RecommendedLessons";
import { useEffect, useState } from "react";

const LessonDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [like, setLike] = useState(0);
  // ------------------- Fetch Single Lesson ----------------------------//

  const {
    data: lesson,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Lesson", id],
    enabled: !!id,
    queryFn: async () => {
      if (!id) return [];
      const res = await axiosSecure.get(`/lessons/${id}`);
      return res?.data?.lesson;
    },
  });

  useEffect(() => {
    if (lesson) {
      setLike(lesson.like || 0);
    }
  }, [lesson]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen dark:bg-slate-950 text-black dark:text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-14">
        <LessonInformation lesson={lesson} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <InteractionButtons lessonId={lesson?._id} setLike={setLike} />
            <RecommendedLessons lessonId={lesson?._id} />
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            <CreatorSection lesson={lesson} />
            <LessonMetadata lesson={lesson} />
            <EngagementSection lesson={lesson} like={like} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
