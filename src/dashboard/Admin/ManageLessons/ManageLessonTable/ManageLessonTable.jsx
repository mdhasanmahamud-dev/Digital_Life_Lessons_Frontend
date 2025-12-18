import { FiTrash2, FiStar, FiCheck } from "react-icons/fi";
import useLessonHook from "../../../../hooks/useLessonHook";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageLessonTable = ({ lessons, refetch }) => {
  const { deleteLesson } = useLessonHook();
  const axiosSecure = useAxiosSecure();

  //...................Handle delete a favorite function.......................//
  const handleDelete = async (id) => {
    try {
      await deleteLesson(id);
      refetch();
    } catch (error) {
      console.error("Failed to delete lesson:", error);
    }
  };

  const handleUpdateFeatured = async (id, currentStatus) => {
    console.log(id, currentStatus)
    try {
      const response = await axiosSecure.put(`/lessons/featured/${id}`, {
        featured: !currentStatus,
      });

      if (response.data.success) {
        toast.success("Featured updated successfully");
        refetch(); 
      } else {
        toast.error("Failed to update featured");
      }
    } catch (error) {
      console.error("Error updating featured:", error);
      toast.error("Error updating featured:", error);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm bg-slate-900">
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead className="bg-slate-900/60 text-slate-300">
            <tr>
              <th className="p-4 text-left w-12">#</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Creator</th>
              <th className="p-4 text-left w-36">Category</th>
              <th className="p-4 text-left w-32">Visibility</th>
              <th className="p-4 text-left w-32">Status</th>
              <th className="p-4 text-left w-64">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {lessons.map((lesson, index) => (
              <tr
                key={lesson._id}
                className="border-t border-slate-800 hover:bg-slate-900/40"
              >
                <td className="p-4">{index + 1}</td>

                <td className="p-4 font-medium">{lesson.title}</td>

                <td className="p-4">{lesson.creator?.name || "Unknown"}</td>

                <td className="p-4">{lesson.category}</td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      lesson.privacy === "public"
                        ? "bg-emerald-100/10 text-emerald-300 border-emerald-700"
                        : "bg-sky-100/10 text-sky-300 border-sky-700"
                    }`}
                  >
                    {lesson.privacy}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex flex-col gap-1">
                    {lesson.isFeatured ? (
                      <span className="inline-flex items-center gap-1 text-amber-300">
                        <FiStar /> Featured
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-slate-400">
                        Not Featured
                      </span>
                    )}
                  </div>
                </td>

                <td className="p-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleDelete(lesson._id)}
                    className="flex items-center gap-1 px-3 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white text-sm cursor-pointer"
                  >
                    <FiTrash2 /> Delete
                  </button>

                  <button
                    onClick={() =>
                      handleUpdateFeatured(lesson._id, lesson.isFeatured)
                    }
                    className="flex items-center gap-1 px-3 py-1 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 text-sm cursor-pointer"
                  >
                    <FiStar /> Make Featured
                  </button>

                  <button className="flex items-center gap-1 px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-slate-950 text-sm cursor-pointer">
                    <FiCheck /> Mark Reviewed
                  </button>
                </td>
              </tr>
            ))}

            {lessons.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  No lessons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageLessonTable;
