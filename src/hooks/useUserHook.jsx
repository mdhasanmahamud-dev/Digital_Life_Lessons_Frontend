import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useUserHook = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserHook must be used within AuthProvider");
  }
  return context;
};

export default useUserHook;