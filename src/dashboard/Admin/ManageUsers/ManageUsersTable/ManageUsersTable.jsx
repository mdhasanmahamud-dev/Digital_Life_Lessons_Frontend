import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageUsersTable = ({ users, refetch }) => {
  const axiosSecure = useAxiosSecure();

  // Role update handler
  const handleRoleChange = async (userId, newRole) => {
    try {
      const res = await axiosSecure.patch(`/user/role/${userId}`, {
        role: newRole,
      });
      if (res.data.success) {
        toast.success("Role updated successfully!");
        refetch();
      } else {
        toast.error("Failed to update role!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen p-6  dark:bg-slate-950 text-gray-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-full mx-auto">
        <div className="rounded-2xl overflow-hidden border border-gray-300 dark:border-slate-800  bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100 dark:bg-slate-900/60 text-gray-700 dark:text-slate-300">
                <tr>
                  <th className="p-4 text-left w-12">#</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left w-36">Role</th>
                  <th className="p-4 text-left w-36">Total Lessons</th>
                  <th className="p-4 text-left w-64">Actions</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {users && users.length > 0 ? (
                  users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="border-t border-gray-300 dark:border-slate-800 hover:bg-gray-200/40 dark:hover:bg-slate-900/40 transition-colors duration-300"
                    >
                      {/* Serial */}
                      <td className="p-4">{index + 1}</td>

                      {/* Name */}
                      <td className="p-4">{user.name}</td>

                      {/* Email */}
                      <td className="p-4">{user.email}</td>

                      {/* Role */}
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium capitalize border ${
                            user.role === "admin"
                              ? "bg-green-100/10 dark:bg-green-900/20 text-green-600 dark:text-green-300 border-green-700 dark:border-green-600"
                              : "bg-blue-100/10 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 border-blue-700 dark:border-blue-600"
                          } transition-colors duration-300`}
                        >
                          {user.role}
                        </span>
                      </td>

                      {/* Total Lessons */}
                      <td className="p-4 text-center">
                        {user.totalLessons || 0}
                      </td>

                      {/* Actions */}
                      <td className="p-4 flex flex-wrap gap-2">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleRoleChange(user._id, e.target.value)
                          }
                          className="bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white text-sm rounded px-2 py-1 w-full transition-colors duration-300"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 dark:text-gray-400"
                    >
                      No users found.
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

export default ManageUsersTable;
