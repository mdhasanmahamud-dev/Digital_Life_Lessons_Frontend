import React from "react";
import { NavLink } from "react-router";

const QuickShortcuts = () => {
  const shortcuts = [
    { name: "নতুন Lesson তৈরি করো", path: "/dashboard/add-lesson" },
    { name: "Saved Lesson দেখো", path: "/dashboard/favorite-lession" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3  dark:text-white">Quick Shortcuts</h3>
      <ul className="space-y-2">
        {shortcuts.map((sc, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <span className="text-xs  dark:text-gray-400">•</span>
            <NavLink to={sc.path} className="text-sm text-black dark:text-gray-300 hover:underline">
              {sc.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr className="my-4 border-gray-700" />
    </div>
  );
};

export default QuickShortcuts;
