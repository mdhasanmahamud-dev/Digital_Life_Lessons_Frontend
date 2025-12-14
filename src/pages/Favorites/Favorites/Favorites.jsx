import FavoritesTable from "../FavoritesTable/FavoritesTable";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserHook from "../../../hooks/useUserHook";
import { useState } from "react";
const categories = [
  "All",
  "Personal Growth",
  "Career",
  "Relationships",
  "Mindset",
];

const Favorites = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: favorites = [], isLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorites?email=${user?.email}`);
      console.log(res);
      return res.data.favorites;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  console.log(favorites);

  const filteredFavorites =
    selectedCategory === "All"
      ? favorites
      : favorites.filter((fav) => fav.lesson?.category === selectedCategory);
  return (
    <div>
      <div className="mb-4">
        <label className="text-2xl text-white mr-2">Filter by Category :</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 rounded-lg bg-slate-800 text-slate-200"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <FavoritesTable favorites={filteredFavorites} />
    </div>
  );
};

export default Favorites;
