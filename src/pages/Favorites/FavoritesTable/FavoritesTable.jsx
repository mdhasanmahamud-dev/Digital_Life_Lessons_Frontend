import React from "react";
import { NavLink } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const FavoritesTable = ({ favorites, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleRemoveFavorite = async (id) => {
    console.log(id)
    try {
      const response = await axiosSecure.delete(`/favorites/${id}`);

      if (response.data.success) {
        toast.success(
          response.data.message || "Favorite lesson removed successfully!"
        );
        refetch();
      } else {
        toast.error(response.data.message || "Failed to remove favorite.");
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!favorites || favorites.length === 0) {
    return (
      <p className="text-slate-400 text-center mt-6">
        No favorite lessons found
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-slate-800 text-sm text-slate-300">
        <thead className="bg-slate-900">
          <tr>
            <th className="px-4 py-3 border border-slate-800">#</th>
            <th className="px-4 py-3 border border-slate-800">Title</th>
            <th className="px-4 py-3 border border-slate-800">Category</th>
            <th className="px-4 py-3 border border-slate-800">Action</th>
          </tr>
        </thead>

        <tbody>
          {favorites.map((fav, index) => (
            <tr key={fav._id} className="hover:bg-slate-900 transition">
              <td className="px-4 py-2 border border-slate-800">{index + 1}</td>
              <td className="px-4 py-2 border border-slate-800">
                {fav.lesson?.title}
              </td>
              <td className="px-4 py-2 border border-slate-800">
                {fav.lesson?.category}
              </td>
              <td className="px-4 py-3 border border-slate-800">
                <div className="flex items-center justify-center gap-3">
                  {/* Details Button */}
                  <NavLink
                    to={`/lession-details/${fav?.lesson?._id}`}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    Details
                  </NavLink>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFavorite(fav?._id)}
                    className="px-4 py-2 text-sm font-medium bg-red-500  rounded-lg hover:bg-red-600 text-white transition duration-200 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesTable;
