import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const ReportModal = ({ lessonId, handleCloseModal }) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryKey: ["lessonReports", lessonId],
    enabled: !!lessonId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/reportes/lesson/${lessonId}`);
      return res.data;
    },
  });

  const reports = data?.reports || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={handleCloseModal}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      ></div>

      {/* Modal */}
      <div className="z-10 bg-slate-900 rounded-xl shadow-2xl w-[420px] p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Lesson Reports ({reports.length})
        </h2>

        {/* Content */}
        <div className="max-h-80 overflow-y-auto space-y-3">
          {isLoading && <LoadingSpinner />}
          {reports.map((report) => (
            <div key={report?._id} className="p-3 bg-slate-800 rounded-lg">
              <p className="text-white text-lg font-medium">
                Reason :  {report.reason.replaceAll("_", " ")}
              </p>

              <p className="text-gray-300 text-sm mt-1">{report.description}</p>

              <p className="text-xs text-gray-500 my-2">
                {new Date(report?.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleCloseModal}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
