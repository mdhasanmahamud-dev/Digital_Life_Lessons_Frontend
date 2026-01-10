import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SearchFilterSort from "../SearchFilterSort/SearchFilterSort";
import useUserHook from "../../../hooks/useUserHook";
import ContentCard from "../../../components/ContentCard";

const PublicLessonsCards = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook(); // Logged-in user info

  const [localSearch, setLocalSearch] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [emotion, setEmotion] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  // Search button click
  const handleSearch = () => {
    setSearch(localSearch);
    setPage(1);
  };

  // Reset filters
  const handleReset = () => {
    setLocalSearch("");
    setSearch("");
    setCategory("");
    setEmotion("");
    setSort("");
    setPage(1);
  };

  // Fetch lessons
  const { data, isLoading } = useQuery({
    queryKey: ["publicLessons", search, category, emotion, sort, page],
    queryFn: async () => {
      const res = await axiosSecure.get("/lessons", {
        params: { search, category, emotion, sort, page },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="container max-w-7xl mx-auto px-6 py-8">
      {/* Search + Filter */}
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

      {/* Lessons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data?.lessons?.length === 0 ? (
          <div className="col-span-full text-center py-20 text-slate-400">
            No public lessons found
          </div>
        ) : (
          data.lessons.map((lesson) => (
            <ContentCard
              key={lesson._id}
              title={lesson.title}
              category={lesson.category}
              emotionalTone={lesson.emotionalTone}
              creator={lesson.creator}
              createdAt={lesson.createdAt}
              image={lesson.image} // Lesson image
              accessLevel={lesson.accessLevel} // free or premium
              userData={user} // Logged-in user for premium check
              detailsLink={`/lession-details/${lesson._id}`}
              upgradeLink="/upgrade"
              buttonText="View Details"
              showButton={true}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {data?.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 rounded bg-slate-800 text-white disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(data.totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-4 py-2 rounded ${
                page === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={page === data.totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded bg-slate-800 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PublicLessonsCards;
