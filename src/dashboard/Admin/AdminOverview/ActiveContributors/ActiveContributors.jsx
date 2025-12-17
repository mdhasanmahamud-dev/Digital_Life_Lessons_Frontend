import React from "react";

const ActiveContributors = () => {
  return (
    <div>
      {/* Most Active Contributors Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Most Active Contributors</h3>

        <div className="space-y-3 text-slate-300">
          <div className="flex justify-between">
            <span>Jhankar Mahbub</span>
            <span className="text-slate-400">42 lessons</span>
          </div>
          <div className="flex justify-between">
            <span>Hasan Mahamud</span>
            <span className="text-slate-400">29 lessons</span>
          </div>
          <div className="flex justify-between">
            <span>Sumaiya Islam</span>
            <span className="text-slate-400">21 lessons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveContributors;
