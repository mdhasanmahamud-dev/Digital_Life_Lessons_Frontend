import { useContext } from "react";
import { LessonsContext } from "../context/LessonsProvider";

const useLessonHook = () => {
  const context = useContext(LessonsContext);
  if (!context) {
    throw new Error("useUserHook must be used within AuthProvider");
  }
  return context;
};

export default useLessonHook;
