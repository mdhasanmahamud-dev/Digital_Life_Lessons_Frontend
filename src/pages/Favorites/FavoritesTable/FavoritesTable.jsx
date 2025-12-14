import React from "react";
import { NavLink } from "react-router";

const FavoritesTable = ({ favorites }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <p className="text-slate-400 text-center mt-6">
        No favorite lessons found
      </p>
    );
  }
console.log(favorites)
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
              <td className="px-4 py-2 border border-slate-800">
                <NavLink
                  to={`/dashboard/lession-details/${fav?.lesson?._id}`}
                  className="mt-auto block w-full text-center bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Details
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritesTable;
