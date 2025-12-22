import { FaTrash, FaEye, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import Swal from "sweetalert2";
const ReportedLessonsTable = ({ handleOpenModal }) => {
  const axiosSecure = useAxiosSecure();

  const {data: reports = [],isLoading,refetch} = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reportes");
      console.log(res.data.data);
      return res.data.data;
    },
  });

  const handleDeleteLesson = async (lessonId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This lesson will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626", // red
      cancelButtonColor: "#64748b", // gray
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

  

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="overflow-x-auto bg-slate-800 rounded-xl shadow-md">
      <table className="min-w-full divide-y divide-slate-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-white">
              Lesson Title
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-white">
              Report Count
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {reports.map((report) => (
            <tr
              key={report.id}
              className="hover:bg-slate-700 transition-colors"
            >
              <td className="px-6 py-4 text-white">{report?.lessonTitle}</td>
              <td className="px-6 py-4 text-center text-white font-medium">
                {report.reportCount}
              </td>
              <td className="px-6 py-4 flex justify-center gap-2">
                <button
                  onClick={() => handleOpenModal(report?.lessonId)}
                  className="px-3 py-1 bg-amber-500 cursor-pointer hover:bg-amber-600 text-slate-950 rounded-lg flex items-center gap-1"
                >
                  <FaEye /> View
                </button>
                <button
                  onClick={() => handleDeleteLesson(report?.lessonId)}
                  className="px-3 py-1 bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-lg flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>
                <button onClick={() => handleIgnoreLesson()} className="px-3 py-1 bg-gray-600 cursor-pointer hover:bg-gray-500 text-white rounded-lg flex items-center gap-1">
                  <FaTimes /> Ignore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedLessonsTable;
