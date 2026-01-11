import React from "react";
import { FaUserShield, FaEnvelope, FaEdit } from "react-icons/fa";
import useLessonHook from "../../../hooks/useLessonHook";

const AdminProfile = ({ admin }) => {
  const { userData, UsrDataLoading } = useLessonHook();

  // fallback/demo data
  const adminData = admin || {
    name: "John Doe",
    email: "admin@example.com",
    photo:
      "https://images.unsplash.com/photo-1603415526960-f9e3b6f5d4aa?auto=format&fit=crop&w=400&q=80",
    role: "admin",
    created_at: "2023-06-15",
    last_loggedIn: "2025-12-17",
  };

  // use userData if available, else fallback
  const profile = userData || adminData;

  return (
    <div className="min-h-screen p-6 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          Admin Profile
        </h2>

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:flex md:items-center gap-8 transition-colors">
          {/* Photo */}
          <div className="shrink-0">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-gradient-to-tr from-emerald-400 to-sky-400 object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            {/* Name & Role */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {profile.name}
              </h3>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-700 text-sm font-medium">
                <FaUserShield /> {profile.role.toUpperCase()}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
              <FaEnvelope className="text-slate-400 dark:text-slate-500" />{" "}
              {profile.email}
            </div>

            {/* Joined & Last Login */}
            <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400 text-sm">
              <p>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Joined:{" "}
                </span>
                {profile.created_at
                  ? new Date(profile.created_at).toLocaleDateString()
                  : "N/A"}
              </p>
              <p>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  Last Login:{" "}
                </span>
                {profile.last_loggedIn
                  ? new Date(profile.last_loggedIn).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4">
              <button className="flex items-center gap-2 px-5 py-2 bg-emerald-500 text-slate-100 dark:text-slate-950 rounded-xl font-medium hover:bg-emerald-600 transition">
                <FaEdit /> Edit Profile
              </button>
            </div>
          </div>
        </div>
        {/* Account Details Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl  p-6 space-y-4 transition-colors">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Account Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-inner transition-colors">
              <p className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                Name
              </p>
              <p>{profile.name}</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-inner transition-colors">
              <p className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                Email
              </p>
              <p>{profile.email}</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-inner transition-colors">
              <p className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                Role
              </p>
              <p>{profile.role}</p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl shadow-inner transition-colors">
              <p className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                Joined
              </p>
              <p>
                {profile.created_at
                  ? new Date(profile.created_at).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
