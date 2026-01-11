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
    <div className="mb-10 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-2xl p-6 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        {/* Search */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search lessons by title or keyword..."
            className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-200 
              border border-gray-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500 
              placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
          />
          <button
            onClick={onSearch}
            className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-slate-200 rounded-md hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            Search
          </button>
        </div>

        {/* Category Filter */}
        <div className="w-full lg:w-52">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-200 
              border border-gray-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
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
            className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-200 
              border border-gray-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
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
            className="w-full px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-200 
              border border-gray-300 dark:border-slate-800 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
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
            className="px-6 py-2.5 rounded-xl bg-gray-200 dark:bg-slate-800 text-gray-900 dark:text-slate-200 
              hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSort;
