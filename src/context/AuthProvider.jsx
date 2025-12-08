import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userloading, setUserLoading] = useState(true);

  // Register a new user
  const createUser = async (email, password) => {
    setUserLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("User created successfully!");
      return userCredential;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!");
      } else {
        toast.error("Failed to create user!");
      }
      console.error("Error creating user:", error);
      console.error("Error creating user:", error);
    } finally {
      setUserLoading(false);
    }
  };

  // Login a user with email and password
  const loginUser = async (email, password) => {
    setUserLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("User Logging successfully!");
      return userCredential;
    } catch (error) {
      toast.error(error.message || "Failed to login!");
      console.error("Error logging in:", error);
    } finally {
      setUserLoading(false);
    }
  };

  // Logout user
  const logOutUser = async () => {
    try {
      setUserLoading(true);
      await signOut(auth);
      toast.success("User Logout successfull");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setUserLoading(false);
    }
  };

  //Sign In With Google
  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      setUserLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google!");
      console.log(result.user);
      return result.user;
    } catch (error) {
      toast.error("Google login failed!");
      console.error("Error signing in with Google:", error);
    } finally {
      setUserLoading(false);
    }
  };

  //Update User Profile
  const updateUser = async (updatedUserData) => {
    setUserLoading(true);
    try {
      const result = await updateProfile(auth.currentUser, updatedUserData);
      console.log("Update result:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    setUserLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    userloading,
    setUserLoading,
    createUser,
    loginUser,
    logOutUser,
    signInWithGoogle,
    updateUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;