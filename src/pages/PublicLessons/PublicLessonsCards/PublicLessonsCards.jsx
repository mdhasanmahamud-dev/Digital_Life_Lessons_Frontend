import React from "react";
import PublicLessonsCard from "../PublicLessonsCard/PublicLessonsCard";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PublicLessonsCards = () => {
  const axiosSecure = useAxiosSecure()
  const { data: lessons = [], isLoading } = useQuery({
    queryKey: ["publicLessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons");
      return res.data.lessons; 
    },
  });


  if(isLoading) return <LoadingSpinner/>
  
  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <PublicLessonsCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default PublicLessonsCards;
