import { FaTrash, FaEye, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Swal from "sweetalert2";

const ReportedLessonsTable = ({ handleOpenModal }) => {
  const axiosSecure = useAxiosSecure();

  // Fetch reports
  const {
    data: reports = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reportes");
      return res.data.data;
    },
  });

  // Delete lesson
  const handleDeleteLesson = async (lessonId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This lesson will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/lessons/${lessonId}`);
      if (res.data.success) {
        Swal.fire({
          title: "Deleted!",
          text: "Lesson has been deleted successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete lesson.",
        icon: "error",
      });
    }
  };

  // Ignore lesson
  const handleIgnoreLesson = async (lessonId) => {
    try {
      const res = await axiosSecure.put(`/lessons/ignore/${lessonId}`);
      if (res.data.success) {
        Swal.fire({
          title: "Ignored!",
          text: "Report has been ignored successfully.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to ignore report.",
        icon: "error",
      });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="overflow-x-auto rounded-xl dark:bg-slate-950 transition-colors duration-300">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-slate-700">
        <thead className="bg-gray-100 dark:bg-slate-900">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 dark:text-slate-300">
              Lesson Title
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 dark:text-slate-300">
              Report Count
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 dark:text-slate-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y  divide-gray-200 dark:divide-slate-700">
          {reports.length > 0 ? (
            reports.map((report) => (
              <tr
                key={report.id}
                className="bg-gray-50 hover:bg-gray-200 dark:hover:bg-slate-900/40 transition-colors duration-300"
              >
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                  {report?.lessonTitle}
                </td>
                <td className="px-6 py-4 text-center font-medium text-gray-800 dark:text-gray-300">
                  {report.reportCount}
                </td>
                <td className="px-6 py-4 flex justify-center gap-2 flex-wrap">
                  <button
                    onClick={() => handleOpenModal(report?.lessonId)}
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-gray-950 dark:text-slate-950 rounded-lg flex items-center gap-1 transition"
                  >
                    <FaEye /> View
                  </button>
                  <button
                    onClick={() => handleDeleteLesson(report?.lessonId)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-1 transition"
                  >
                    <FaTrash /> Delete
                  </button>
                  <button
                    onClick={() => handleIgnoreLesson(report?.lessonId)}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-lg flex items-center gap-1 transition"
                  >
                    <FaTimes /> Ignore
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="text-center py-6 text-gray-500 dark:text-gray-400"
              >
                No reports found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedLessonsTable;
