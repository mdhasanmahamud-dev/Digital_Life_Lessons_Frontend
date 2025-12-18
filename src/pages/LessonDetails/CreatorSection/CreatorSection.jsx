import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { NavLink } from "react-router";

const CreatorSection = ({ lesson }) => {
  const axiosSecure = useAxiosSecure();

  //------------------------Lessons data count fetch--------------------------------//
  const { data: lessonCountData, isLoading: countLoading } = useQuery({
    queryKey: ["lessonCount", lesson?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/lessons/count/${lesson?.creator?.email}`
      );
      return res.data.count;
    },
  });

  if (countLoading) return <LoadingSpinner />;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <p className="text-xs uppercase text-slate-500 mb-3">Lesson Creator</p>

      <div className="flex items-center gap-4">
        <img
          className="size-10 text-slate-400 rounded-full"
          src={lesson?.creator?.photoURL}
          alt=""
        />
        <div>
          <p className="font-semibold text-white">{lesson?.creator?.name}</p>
          <p className="text-sm text-slate-400">
            Total Lessons: {lessonCountData}
          </p>
        </div>
      </div>

      <NavLink
        to={`/creator/${lesson?.creator?.email}`}
        className="mt-4 block w-full text-sm text-center py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
      >
        View all lessons
      </NavLink>
    </div>
  );
};

export default CreatorSection;
