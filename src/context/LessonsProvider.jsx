import { createContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useUserHook from "../hooks/useUserHook";
export const LessonsContext = createContext(null);

const LessonsProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const { user: firebaseUser } = useUserHook();

  //-----------------------------User data fetch by email---------------------------//
  const { data: userData, UsrDataLoading } = useQuery({
    queryKey: ["user", firebaseUser?.email],
    queryFn: async () => {
      if (!firebaseUser?.email) return null;
      const res = await axiosSecure.get(`/user/${firebaseUser.email}`);
      return res.data.user;
    },
    enabled: !!firebaseUser?.email,
  });

  //------------------------Lessons data count fetch--------------------------------//
  const {
    data: lessonCountData,
    isLoading: countLoading,
    refetch: lessonCountRefetch,
  } = useQuery({
    queryKey: ["lessonCount", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/count/${firebaseUser.email}`);
      return res.data.count;
    },
    enabled: !!firebaseUser?.email,
  });

  //------------------------public Lessons data count fetch-------------------------//
  const { data: publicLessonCounts, isLoading: publicLessonCountsLoading } =
    useQuery({
      queryKey: ["publicLessonCounts"],
      queryFn: async () => {
        const res = await axiosSecure.get("/lessons/public/total-count");
        return res.data.count;
      },
    });

  //------------------------private Lessons data count fetch-------------------------//
  const { data: privateLessonCounts, isLoading: privateLessonCountsLoading } =
    useQuery({
      queryKey: ["privateLessonCounts"],
      queryFn: async () => {
        const res = await axiosSecure.get("/lessons/private/total-count");
        return res.data.count;
      },
    });
  //------------------------Favorites data count fetch------------------------------//
  const {
    data: favoriteCount,
    isLoading: favoriteCountLoading,
    refetch: favoriteCountRefetch,
  } = useQuery({
    queryKey: ["favoriteCount", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/favorites/count/${firebaseUser?.email}`
      );
      return res.data.count;
    },
    enabled: !!firebaseUser?.email,
  });

  //.............................Delete a lesson by id.............................//
  const deleteLesson = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });

      if (!result.isConfirmed) return;

      const response = await axiosSecure.delete(`lessons/${id}`);

      Swal.fire(
        response.data.success ? "Deleted!" : "Failed!",
        response.data.message,
        response.data.success ? "success" : "error"
      );

      return response;
    } catch (error) {
      console.error(error);
      Swal.fire("Error!", "Something went wrong.");
    }
  };

  const lessonValue = {
    countLoading,
    UsrDataLoading,
    userData,
    lessonCountData,
    favoriteCount,
    publicLessonCounts,
    privateLessonCounts,
    lessonCountRefetch,
    favoriteCountRefetch,
    publicLessonCountsLoading,
    privateLessonCountsLoading,
    deleteLesson,
  };
  return (
    <LessonsContext.Provider value={lessonValue}>
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsProvider;
