import React, { createContext } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
export const LessonsContext = createContext(null);
const LessonsProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();

  //....................Delete a lesson by id.........................//
  const deleteLesson = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lesson?"
    );
    if (!confirmDelete) return false;

    try {
      const response = await axiosSecure.delete(`lessons/${id}`);
      console.log(response);
      return response
    } catch (error) {}
  };
  const lessonValue = { deleteLesson };
  return (
    <LessonsContext.Provider value={lessonValue}>
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsProvider;
