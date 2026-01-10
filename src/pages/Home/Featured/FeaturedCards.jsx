import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ContentCard from "../../../components/ContentCard";

const FeaturedCards = () => {
  const axiosSecure = useAxiosSecure();

  const { data: featuredLessons = [], isLoading } = useQuery({
    queryKey: ["featuredLessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons/featured");
      return res.data.data;
    },
  });
 console.log(featuredLessons)
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredLessons.map((featured) => (
          <ContentCard
            key={featured._id}
            {...featured}
            detailsLink={`/lession-details/${featured._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
