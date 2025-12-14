import React, { createContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useUserHook from "../hooks/useUserHook";
export const LessonsContext = createContext(null);

const LessonsProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const { user: firebaseUser } = useUserHook();

  //----------------------User data fetch by email-------------------//
  const { data: userData, isLoading } = useQuery({
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

  //------------------------Favorites data count fetch------------------------------//
  const {data: favoriteCount,isLoading: favoriteCountLoading,refetch: favoriteCountRefetch,} = useQuery({
    queryKey: ["favoriteCount", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/favorites/count/${firebaseUser?.email}`
      );
      return res.data.count;
    },
    enabled: !!firebaseUser?.email,
  });

  //....................Delete a lesson by id.........................//
  const deleteLesson = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lesson?"
    );
    if (!confirmDelete) return false;

    try {
      const response = await axiosSecure.delete(`lessons/${id}`);
      console.log(response);
      return response;
    } catch (error) {}
  };

  const lessonValue = {
    countLoading,
    userData,
    lessonCountData,
    favoriteCount,
    lessonCountRefetch,
    favoriteCountRefetch,
    deleteLesson,
  };
  return (
    <LessonsContext.Provider value={lessonValue}>
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsProvider;
