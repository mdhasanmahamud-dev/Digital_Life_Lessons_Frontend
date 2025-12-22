import AnalyticsCards from "../AnalyticsCards/AnalyticsCards";
import ActiveContributors from "../ActiveContributors/ActiveContributors";

const AdminOverview = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 ">
      <div className="container max-w-7xl mx-auto space-y-10">
        <AnalyticsCards />
        <ActiveContributors />
        
        {/* Graph Placeholder */}
        <div className="bg-slate-900 border border-dashed border-slate-700 rounded-2xl p-10 text-center">
          <h3 className="text-lg font-semibold mb-2">Analytics Graphs</h3>
          <p className="text-slate-400">
            Lesson Growth & User Growth charts will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
