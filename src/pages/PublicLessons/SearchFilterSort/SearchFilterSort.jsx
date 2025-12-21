import React from "react";

const SearchFilterSort = ({
  localSearch,
  setLocalSearch,
  onSearch,
  category,
  setCategory,
  emotion,
  setEmotion,
  sort,
  setSort,
  onReset,
}) => {
          
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="mb-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        {/* Search */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search lessons by title or keyword..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 
            border border-slate-800 focus:outline-none focus:border-slate-600 
            placeholder-slate-500"
          />
          <button
            onClick={onSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-slate-800 text-slate-200 rounded-md hover:bg-slate-700"
          >
            Search
          </button>
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-52">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 
            border border-slate-800 focus:outline-none focus:border-slate-600"
          >
            <option value="">All Categories</option>
            <option value="Personal Growth">Personal Growth</option>
            <option value="Career">Career</option>
            <option value="Relationships">Relationships</option>
            <option value="Mindset">Mindset</option>
          </select>
        </div>

        {/* Emotional Tone Filter */}
        <div className="w-full lg:w-52">
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 
            border border-slate-800 focus:outline-none focus:border-slate-600"
          >
            <option value="">All Emotions</option>
            <option value="Gratitude">Gratitude</option>
            <option value="Motivation">Motivation</option>
            <option value="Realization">Realization</option>
            <option value="Happiness">Happiness</option>
          </select>
        </div>

        {/* Sort */}
        <div className="w-full lg:w-44">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 text-slate-200 
            border border-slate-800 focus:outline-none focus:border-slate-600"
          >
            <option value="">Sort By</option>
            <option value="newest">Newest</option>
            <option value="mostSaved">Most Saved</option>
          </select>
        </div>

        {/* Reset */}
        <div>
          <button
            onClick={onReset}
            className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 
            hover:bg-slate-700 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSort;
