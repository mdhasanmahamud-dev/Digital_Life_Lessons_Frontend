import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../../components/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const EditLessonsForm = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [updating, setUpdating] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      emotionalTone: "",
      privacy: "",
      accessLevel: "",
    },
  });

  // ------------------- Fetch Single Lesson ----------------------------//
  const {data: lesson,isLoading,refetch,} = useQuery({
    queryKey: ["Lesson", id],
    queryFn: async () => {
      if (!id) return [];
      const res = await axiosSecure.get(`/lessons/${id}`);
      return res?.data?.lesson;
    },
    enabled: !!id,
  });

  // ------------------ Set Default Values Once Data Loaded ---------------//
  useEffect(() => {
    if (lesson) {
      reset({
        title: lesson.title,
        description: lesson.description,
        category: lesson.category,
        emotionalTone: lesson.emotionalTone,
        privacy: lesson.privacy,
        accessLevel: lesson.accessLevel,
      });
    }
  }, [lesson, reset]);

  // ------------------------- Handle Lesson Update-------------------------//
  const onSubmit = async (data) => {
    setUpdating(true);
    try {
      const response = await axiosSecure.patch(`/lessons/${id}`, data);
      if (response.data?.success) {
        toast.success(response.data?.message || "Lesson updated successfully!");
        refetch;
        navigate("/dashboard/my-lession");
      } else {
        toast.error(response.data?.message || "Update failed! Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setUpdating(false);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-5xl mx-auto bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-700">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Update Lesson
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="lg:col-span-2">
            <label className="text-white block mb-1">Lesson Title</label>
            <input
              type="text"
              {...register("title", { required: "Lesson Title is required" })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="text-white block mb-1">
              Full Description / Story / Insight
            </label>
            <textarea
              rows={5}
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-2 rounded-lg bg-slate-900 text-white border border-gray-700"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
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
              <option value="premium">Premium</option>
            </select>
          </div>

          {/* Submit */}
          <div className="lg:col-span-2">
            <button
              disabled={updating}
              type="submit"
              className="w-full bg-blue-800 text-white px-4 py-2 rounded-sm shadow cursor-pointer"
            >
              {updating ? "Updating..." : "Update Lesson"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLessonsForm;
