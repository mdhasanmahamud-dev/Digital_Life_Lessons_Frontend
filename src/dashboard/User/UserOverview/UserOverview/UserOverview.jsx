import RecentLessons from "../RecentLessons/RecentLessons";
import QuickShortcuts from "../QuickShortcuts/QuickShortcuts";
import StatCards from "../StatCards/StatCards";

function UserOverview() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="container max-w-7xl mx-auto">
        {/* Stat cards */}
        <StatCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-700">
            <RecentLessons />
          </div>

          {/* Quick Shortcuts & Favorites */}
          <div className="bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-700">
            <QuickShortcuts />
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
