import { FaRegStar } from "react-icons/fa";
import useUserHook from "../../hooks/useUserHook";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";

const Profile = () => {
  const { user: firebaseUser } = useUserHook();
  const axiosSecure = useAxiosSecure();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user", firebaseUser?.email],
    queryFn: async () => {
      if (!firebaseUser?.email) return null;
      const res = await axiosSecure.get(`/user/${firebaseUser.email}`);
      return res.data.user;
    },
    enabled: !!firebaseUser?.email,
  });

  const isPemium = true;
  if (isLoading) return <LoadingSpinner />;
  console.log(userData);
  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="max-w-5xl mx-auto bg-slate-900 p-8 rounded-2xl hover:shadow-xl hover:shadow-slate-900 border border-gray-700">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-700 pb-6">
          <img
            src={userData?.photo}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-600"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              {userData?.name || "User Name"}
              {isPemium && (
                <p className=" bg-yellow-500 text-black text-sm font-semibold px-3 py-1 rounded-full flex items-center justify-between gap-2">
                  <FaRegStar size={20} className="text-red-600" /> Premium User
                </p>
              )}
            </h2>
            <p className="text-gray-400 mb-2 text-sm">{userData?.email}</p>
            <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full capitalize">
              {userData?.role || "User Role"}
            </span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-slate-800 p-6 rounded-xl text-center border border-gray-700 hover:border-green-500 transition">
            <h3 className="text-3xl font-bold text-white">12</h3>
            <p className="text-gray-400 font-semibold mt-1">Lessons Created</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-gray-700 hover:border-blue-500 transition">
            <h3 className="text-3xl font-bold text-white">34</h3>
            <p className="text-gray-400 font-semibold mt-1">Favorites</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-400 transition">
            <h3 className="text-3xl font-bold text-yellow-300">Premium</h3>
            <p className="text-gray-400 font-semibold mt-1">Plan Status</p>
          </div>
        </div>

        {/* Public Lessons Section */}
        <h3 className="text-2xl font-bold mt-10 mb-4">All Public Lessons</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 shadow border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition">
            <h4 className="text-xl font-semibold">
              How to Stay Focused in Life
            </h4>
            <p className="text-gray-400 mt-2 text-sm">
              A short lesson about staying disciplined in work and study.
            </p>
            <span className="text-xs px-2 py-1 bg-blue-700 rounded mt-2 inline-block">
              Personal Growth
            </span>
          </div>

          <div className="bg-slate-800 shadow border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition">
            <h4 className="text-xl font-semibold">
              Importance of Digital Learning
            </h4>
            <p className="text-gray-400 mt-2 text-sm">
              Why digital skills are essential for the modern world.
            </p>
            <span className="text-xs px-2 py-1 bg-blue-700 rounded mt-2 inline-block">
              Career
            </span>
          </div>

          <div className="bg-slate-800 shadow border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition">
            <h4 className="text-xl font-semibold">Career Growth Tips</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Improve your personal and professional life with small habits.
            </p>
            <span className="text-xs px-2 py-1 bg-blue-700 rounded mt-2 inline-block">
              Career
            </span>
          </div>

          <div className="bg-slate-800 shadow border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition">
            <h4 className="text-xl font-semibold">Healthy Digital Habits</h4>
            <p className="text-gray-400 mt-2 text-sm">
              Maintain balance while using technology every day.
            </p>
            <span className="text-xs px-2 py-1 bg-blue-700 rounded mt-2 inline-block">
              Mindset
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
