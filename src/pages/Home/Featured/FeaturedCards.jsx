import React from "react";
import FeaturedCard from "./FeaturedCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";

const FeaturedCards = () => {
  const axiosSecure = useAxiosSecure();

  const { data: featuredLessons = [], isLoading } = useQuery({
    queryKey: ["featuredLessons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons/featured");
      return res.data.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredLessons.map((featured, index) => (
          <FeaturedCard key={index} featured={featured} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;
