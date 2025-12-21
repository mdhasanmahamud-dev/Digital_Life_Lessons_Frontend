import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserHook from "../../../hooks/useUserHook";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useLessonHook from "../../../hooks/useLessonHook";
import { toast } from "react-toastify";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const MyLessonsTable = () => {
  const { user: firebaseUser } = useUserHook();
  const { deleteLesson, userData } = useLessonHook();
  const axiosSecure = useAxiosSecure();
  console.log(userData);

  const {
    data: lessons,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myLessons", firebaseUser?.email],
    queryFn: async () => {
      if (!firebaseUser?.email) return [];
      const res = await axiosSecure.get(`/lessons/user/${firebaseUser.email}`);
      return res.data.lessons || [];
    },
    enabled: !!firebaseUser?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  //..................Delete a lesson from db by id.......................//
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981", 
      cancelButtonColor: "#EF4444", 
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      const deleted = await deleteLesson(id);
      if (deleted) {
        toast.success("Lesson deleted successfully");
        refetch();
      } else {
        toast.error("Failed to delete lesson");
      }
    }
  };

  //..............Handle visibility change a lesson from db by id..............//
  const handleVisibilityChange = async (lessonId, newVisibility) => {
    try {
      const res = await axiosSecure.put(`/lessons/visibility/${lessonId}`, {
        privacy: newVisibility,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Failed to update visibility");
    }
  };

  //..............Handle access lavel change a lesson from db by id..............//

  //..............Handle visibility change a lesson from db by id..............//
  const handleAccessLavelChange = async (lessonId, newAccessLevel) => {
    try {
      const res = await axiosSecure.put(`/lessons/access/${lessonId}`, {
        accessLevel: newAccessLevel,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Failed to update access level");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-6">My Lessons</h2>

        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-sm bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-slate-900/60 text-slate-300">
                <tr>
                  <th className="p-4 text-left w-12">#</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left w-36">Visibility</th>
                  <th className="p-4 text-left w-36">Access</th>
                  <th className="p-4 text-left w-64">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {lessons && lessons.length > 0 ? (
                  lessons?.map((lesson, index) => (
                    <tr
                      key={lesson._id}
                      className="border-t border-slate-800 hover:bg-slate-900/40"
                    >
                      {/* Serial with black circle */}
                      <td className="p-4 align-top">
                        <span className="inline-flex items-center gap-2">
                          <span className="text-slate-300">{index + 1}</span>
                        </span>
                      </td>

                      {/* Title & description */}
                      <td className="p-4">
                        <div className="font-medium text-slate-100">
                          {lesson.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {lesson.description}
                        </div>
                      </td>

                      {/* Visibility */}
                      <td className="p-4">
                        <div className="inline-flex items-center gap-2">
                          <span
                            className={`px-2 py-1 capitalize rounded-full text-xs font-medium border ${
                              lesson.privacy === "public"
                                ? "bg-emerald-100/10 text-emerald-300 border-emerald-700"
                                : "bg-sky-100/8 text-sky-300 border-sky-700"
                            }`}
                          >
                            {lesson.privacy}
                          </span>

                          <select
                            value={lesson.privacy}
                            onChange={(e) =>
                              handleVisibilityChange(lesson._id, e.target.value)
                            }
                            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-1"
                          >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                      </td>

                      {/* Access Level */}
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 rounded-full capitalize text-xs font-medium border ${
                              lesson.accessLevel === "premium"
                                ? "bg-amber-100/5 text-amber-300 border-amber-700"
                                : "bg-emerald-100/10 text-emerald-300 border-emerald-700"
                            }`}
                          >
                            {lesson.accessLevel}
                          </span>

                          <select
                            value={lesson.accessLevel}
                            onChange={(e) =>
                              handleAccessLavelChange(
                                lesson._id,
                                e.target.value
                              )
                            }
                            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-md px-2 py-1"
                          >
                            <option value="free">Free</option>
                            <option
                              value="premium"
                              disabled={!userData?.isPremium}
                              className={
                                !userData?.isPremium ? "cursor-not-allowed" : ""
                              }
                            >
                              Premium
                            </option>
                          </select>
                        </div>
                      </td>

                      {/* Action Buttons */}
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          <NavLink
                            to={`/lession-details/${lesson._id}`}
                            className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-200 text-sm"
                          >
                            Details
                          </NavLink>

                          <NavLink to={`/dashboard/edit-lession/${lesson._id}`}>
                            <button className="px-3 py-1 rounded-md bg-emerald-500 text-slate-950 text-sm font-medium cursor-pointer">
                              Edit
                            </button>
                          </NavLink>

                          <button
                            onClick={() => handleDelete(lesson._id)}
                            className="px-3 py-1 rounded-md bg-rose-600 text-white text-sm cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-6 text-gray-400">
                      No lessons found. Start creating your first lesson!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLessonsTable;
