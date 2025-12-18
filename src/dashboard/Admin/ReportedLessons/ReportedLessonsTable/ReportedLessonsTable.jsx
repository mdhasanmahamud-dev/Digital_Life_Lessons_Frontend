import { FaTrash, FaEye, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ReportedLessonsTable = ({ handleOpenModal }) => {
  const axiosSecure = useAxiosSecure();

  const {data: reports = [],isLoading, refetch} = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reportes");
      console.log(res.data.data)
      return res.data.data;
    },
  });
  
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
                  onClick={handleOpenModal}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg flex items-center gap-1"
                >
                  <FaEye /> View
                </button>
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-1">
                  <FaTrash /> Delete
                </button>
                <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-lg flex items-center gap-1">
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
