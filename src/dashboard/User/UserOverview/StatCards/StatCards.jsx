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
      {stats.map((s) => (
        <div
          key={s.id}
          className="bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">{s.label}</p>
              <p className="text-2xl font-semibold text-white mt-2">
                {s.value}
              </p>
            </div>
            <div className="text-gray-400">{s.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
