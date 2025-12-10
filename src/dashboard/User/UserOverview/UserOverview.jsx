import { FiBook, FiHeart, FiClock, FiZap } from "react-icons/fi";

// UserOverview.jsx - Dashboard Home (User)
// TailwindCSS ব্যবহার করা হয়েছে। কপি-পেস্ট করে project এ ব্যবহার করো।

function UserOverview() {
  const stats = [
    { id: 1, label: "Total Lessons", value: 24, icon: <FiBook size={20} /> },
    { id: 2, label: "Saved Lessons", value: 12, icon: <FiHeart size={20} /> },
    { id: 3, label: "Recent Activity", value: 5, icon: <FiClock size={20} /> },
    { id: 4, label: "Quick Actions", value: 4, icon: <FiZap size={20} /> },
  ];

  const recentLessons = [
    { id: 1, title: "React এর পরিচিতি", desc: "ভিত্তি ও Component" },
    { id: 2, title: "JavaScript Closure", desc: "Closure কি ও কিভাবে কাজ করে" },
    { id: 3, title: "Tailwind দিয়ে ডিজাইন", desc: "Utility-first CSS" },
  ];

  const shortcuts = [
    "নতুন Lesson তৈরি করো",
    "Lesson Edit করো",
    "Saved Lesson দেখো",
    "Settings এ যাও",
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="container max-w-7xl mx-auto">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s) => (
            <div
              key={s.id}
              className="bg-slate-800 rounded-2xl p-4 shadow-sm border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">{s.label}</p>
                  <p className="text-2xl font-semibold text-white">{s.value}</p>
                </div>
                <div className="text-gray-400">{s.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Lessons */}
          <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">
              Recently Added Lessons
            </h2>

            <ul className="space-y-3">
              {recentLessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-900"
                >
                  <div className="shrink-0">
                    <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                      L
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">{lesson.title}</p>
                    <p className="text-sm text-gray-400">{lesson.desc}</p>
                  </div>
                  <div className="text-sm text-gray-400">3 days ago</div>
                </li>
              ))}
            </ul>

            {/* Placeholder Analytics Chart */}
            <div className="mt-6">
              <div className="h-32 rounded-lg bg-linear-to-r from-slate-900 to-slate-800 border border-dashed border-gray-700 flex items-center justify-center text-sm text-gray-400">
                Analytics Chart (Weekly/Monthly Reflections)
              </div>
            </div>
          </div>

          {/* Quick Shortcuts & Favorites */}
          <div className="bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Shortcuts
            </h3>
            <ul className="space-y-2">
              {shortcuts.map((sc, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">•</span>
                  <button className="text-sm text-gray-300 text-left w-full hover:underline">
                    {sc}
                  </button>
                </li>
              ))}
            </ul>

            <hr className="my-4 border-gray-700" />

        
          </div>
        </div>

        {/* Footer small help */}
        <div className="mt-6 text-sm text-gray-400">
          Tip: এখানে আপনি Chart বা recent filters যোগ করতে পারো।
        </div>
      </div>
    </div>
  );
}

export default UserOverview;
