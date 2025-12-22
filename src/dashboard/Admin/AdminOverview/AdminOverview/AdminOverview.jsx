import AnalyticsCards from "../AnalyticsCards/AnalyticsCards";
import ActiveContributors from "../ActiveContributors/ActiveContributors";
import SimpleAnalyticsGraph from "../SimpleAnalyticsGraph/SimpleAnalyticsGraph";

const AdminOverview = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 ">
      <div className="container max-w-7xl mx-auto space-y-10">
        <AnalyticsCards />
        <ActiveContributors />
        <SimpleAnalyticsGraph />
      </div>
    </div>
  );
};

export default AdminOverview;
