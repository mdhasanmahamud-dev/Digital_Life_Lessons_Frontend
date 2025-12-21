import React, { useState } from "react";
import PublicLessonsCard from "../PublicLessonsCard/PublicLessonsCard";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SearchFilterSort from "../SearchFilterSort/SearchFilterSort";

const PublicLessonsCards = () => {
  const axiosSecure = useAxiosSecure();
  const [localSearch, setLocalSearch] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [emotion, setEmotion] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    setSearch(localSearch);
  };

  // Reset function
  const handleReset = () => {
    setLocalSearch("");
    setSearch("");
    setCategory("");
    setEmotion("");
    setSort("");
  };
  
  const {
    data: lessons = [],
    isLoading,
  } = useQuery({
    queryKey: ["publicLessons", search, category, emotion, sort],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons", {
        params: { search, category, emotion, sort },
      });
      return res.data.lessons;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      <SearchFilterSort
        localSearch={localSearch}
        setLocalSearch={setLocalSearch}
        onSearch={handleSearch}
        category={category}
        setCategory={setCategory}
        emotion={emotion}
        setEmotion={setEmotion}
        sort={sort}
        setSort={setSort}
        onReset={handleReset}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.length === 0 ? (
          <div className="col-span-full text-center py-20 text-slate-400">
            No public lessons found
          </div>
        ) : (
          lessons.map((lesson) => (
            <PublicLessonsCard key={lesson._id} lesson={lesson} />
          ))
        )}
      </div>
    </div>
  );
};

export default PublicLessonsCards;