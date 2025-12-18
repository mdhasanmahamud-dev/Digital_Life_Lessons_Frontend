import React from "react";

const ReportModal = ({handleCloseModal}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xs"></div>
      {/* Modal Box */}
      <div className="z-10 bg-slate-900 rounded-xl shadow-2xl w-96 p-6">
        <h2 className="text-xl font-semibold text-white mb-4">
          " Reports for "
        </h2>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={handleCloseModal} className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
