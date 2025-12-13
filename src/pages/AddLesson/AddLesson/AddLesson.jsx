import React from "react";
import { useForm } from "react-hook-form";
import useUserHook from "../../../hooks/useUserHook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
function AddLesson() {
  const { user } = useUserHook();
  const axiosSecure = useAxiosSecure();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.creator = {
      name: user?.displayName || user?.name,
      photoURL: user?.photoURL,
      email: user?.email,
    };

    const response = await axiosSecure.post("/lessons", data);

    if (response.data.success) {
      toast.success(response.data.message);
      navigate("/dashboard/my-lession")
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-5xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-700">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Add Lesson
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Lesson Title (Full width) */}
          <div className="lg:col-span-2">
            <label className="text-white block mb-1">Lesson Title</label>
            <input
              type="text"
              {...register("title", { required: "Lesson Title is required" })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Full Description (Full width) */}
          <div className="lg:col-span-2">
            <label className="text-white block mb-1">
              Full Description / Story / Insight
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={5}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="text-white block mb-1">Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            >
              <option value="">Select Category</option>
              <option value="Personal Growth">Personal Growth</option>
              <option value="Career">Career</option>
              <option value="Relationships">Relationships</option>
              <option value="Mindset">Mindset</option>
              <option value="Mistakes Learned">Mistakes Learned</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Emotional Tone */}
          <div>
            <label className="text-white block mb-1">Emotional Tone</label>
            <select
              {...register("emotionalTone", {
                required: "Emotional Tone is required",
              })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            >
              <option value="">Select Emotional Tone</option>
              <option value="Motivational">Motivational</option>
              <option value="Sad">Sad</option>
              <option value="Realization">Realization</option>
              <option value="Gratitude">Gratitude</option>
            </select>
            {errors.emotionalTone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.emotionalTone.message}
              </p>
            )}
          </div>

          {/* Privacy */}
          <div>
            <label className="text-white block mb-1">Privacy</label>
            <select
              {...register("privacy", {
                required: "Privacy selection is required",
              })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
            {errors.privacy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.privacy.message}
              </p>
            )}
          </div>

          {/* Access Level */}
          <div>
            <label className="text-white block mb-1">Access Level</label>
            <select
              {...register("accessLevel", {
                required: "Access Level is required",
              })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            >
              <option value="Free">Free</option>
              <option
                value="premium"
                title="Upgrade to Premium to create paid lessons"
              >
                Premium
              </option>
            </select>
            {errors.accessLevel && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accessLevel.message}
              </p>
            )}
          </div>

          {/* Submit button (Full width) */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-800 text-white px-4 py-2 rounded-sm shadow cursor-pointer"
            >
              Submit Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddLesson;
