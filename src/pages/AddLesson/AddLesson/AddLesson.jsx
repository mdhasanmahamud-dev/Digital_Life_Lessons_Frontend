import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useUserHook from "../../../hooks/useUserHook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useLessonHook from "../../../hooks/useLessonHook";
import Lottie from "lottie-react";
import successAnimation from "../../../assets/success.json";

function AddLesson() {
  const { user } = useUserHook();
  const { lessonCountRefetch } = useLessonHook();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

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
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/dashboard/my-lession");
      }, 1500);
      lessonCountRefetch();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="min-h-screen  dark:bg-slate-950 p-6 transition-colors duration-300 relative">
      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 flex justify-center z-50">
          <div className="w-72 text-center">
            <Lottie animationData={successAnimation} loop={true} />
          </div>
        </div>
      )}
      <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-300 dark:border-gray-700 transition-colors duration-300">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Add Lesson
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Lesson Title */}
          <div className="lg:col-span-2">
            <label className="block mb-1 text-gray-900 dark:text-white">
              Lesson Title
            </label>
            <input
              type="text"
              {...register("title", { required: "Lesson Title is required" })}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="block mb-1 text-gray-900 dark:text-white">
              Full Description / Story / Insight
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={5}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-gray-900 dark:text-white">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
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
            <label className="block mb-1 text-gray-900 dark:text-white">
              Emotional Tone
            </label>
            <select
              {...register("emotionalTone", {
                required: "Emotional Tone is required",
              })}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
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
            <label className="block mb-1 text-gray-900 dark:text-white">
              Privacy
            </label>
            <select
              {...register("privacy", {
                required: "Privacy selection is required",
              })}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
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
            <label className="block mb-1 text-gray-900 dark:text-white">
              Access Level
            </label>
            <select
              {...register("accessLevel", {
                required: "Access Level is required",
              })}
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
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

          {/* Image URL */}
          <div className="lg:col-span-2">
            <label className="block mb-1 text-gray-900 dark:text-white">
              Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              placeholder="https://example.com/image.jpg"
              className="w-full p-2 rounded-lg bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition-colors duration-300"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-800 dark:bg-blue-700 text-white px-4 py-2 rounded-sm shadow cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
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
