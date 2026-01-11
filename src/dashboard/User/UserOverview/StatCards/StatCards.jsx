import { FiBook, FiHeart, FiClock, FiZap } from "react-icons/fi";
import useLessonHook from "../../../../hooks/useLessonHook";

const StatCards = () => {
  const { lessonCountData, favoriteCount } = useLessonHook();
  const stats = [
    {
      id: 1,
      label: "Total Lessons",
      value: lessonCountData,
      icon: <FiBook size={20} />,
    },
    {
      id: 2,
      label: "Saved Lessons",
      value: favoriteCount,
      icon: <FiHeart size={20} />,
    },
    { id: 3, label: "Recent Activity", value: 5, icon: <FiClock size={20} /> },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {stats.map((s, index) => (
        <div
          key={s.id}
          className={`dark:bg-slate-800 rounded-2xl p-4 shadow-sm border ${
            index === 0
              ? "hover:border-yellow-500 transition-all duration-300 ease-in-out"
              : index === 1
              ? "hover:border-green-500 transition-all duration-300 ease-in-out"
              : index === 2
              ? "hover:border-blue-500 transition-all duration-300 ease-in-out"
              : "border-gray-700"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-black dark:text-gray-400">{s.label}</p>
              <p className="text-2xl text-zinc-950  font-semibold dark:text-white mt-2">
                {s.value}
              </p>
            </div>
            <div className="dark:text-gray-400">{s.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
