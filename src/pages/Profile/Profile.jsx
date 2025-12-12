import { FaRegStar } from "react-icons/fa";
import useUserHook from "../../hooks/useUserHook";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProfilePublicLesson from "./ProfilePublicLesson";
import useLessonHook from "../../hooks/useLessonHook";

const Profile = () => {
  const { user: firebaseUser } = useUserHook();
  const {userData, isLoading} = useLessonHook()
  const axiosSecure = useAxiosSecure();

  //------------------------Lessons data count fetch--------------------------------//
  const { data: lessonCountData, isLoading: countLoading } = useQuery({
    queryKey: ["lessonCount", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/count/${firebaseUser.email}`);
      return res.data.count;
    },
    enabled: !!firebaseUser?.email,
  });

  //------------------------Fetch Lessons data by email------------------------------//
  const { data: lessonData, isLoading: lessonLoading } = useQuery({
    queryKey: ["lessonData", firebaseUser?.email],
    queryFn: async () => {
      if (!firebaseUser?.email) return [];

      const res = await axiosSecure.get(
        `/lessons/public/${firebaseUser.email}`
      );
      return res.data.lessons;
    },
    enabled: !!firebaseUser?.email,
  });

  if (isLoading || countLoading || lessonLoading) return <LoadingSpinner />;

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
              {userData?.isPremium === true && (
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
            <h3 className="text-3xl font-bold text-white">
              {lessonCountData || 0}
            </h3>
            <p className="text-gray-400 font-semibold mt-1">Lessons Created</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-gray-700 hover:border-blue-500 transition">
            <h3 className="text-3xl font-bold text-white">34</h3>
            <p className="text-gray-400 font-semibold mt-1">Favorites</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl text-center border border-gray-700 hover:border-yellow-400 transition">
            <h3
              className={`text-3xl font-bold ${
                userData?.isPremium ? "text-yellow-300" : "text-gray-300"
              }`}
            >
              {userData?.isPremium ? "Premium" : "Free"}
            </h3>
            <p className="text-gray-400 font-semibold mt-1">Plan Status</p>
          </div>
        </div>

        {/* Public Lessons Section */}
        <h3 className="text-2xl font-bold mt-10 mb-4">All Public Lessons</h3>
        <ProfilePublicLesson lessonData={lessonData} />
      </div>
    </div>
  );
};

export default Profile;
