import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserHook from "../../../hooks/useUserHook";
import useLessonHook from "../../../hooks/useLessonHook";

const reportReasons = [
  { value: "inappropriate_content", label: "Inappropriate Content" },
  { value: "hate_speech_harassment", label: "Hate Speech or Harassment" },
  {
    value: "misleading_false_information",
    label: "Misleading or False Information",
  },
  { value: "spam_promotional_content", label: "Spam or Promotional Content" },
  {
    value: "sensitive_disturbing_content",
    label: "Sensitive or Disturbing Content",
  },
  { value: "other", label: "Other" },
];

const ReportModal = ({ isOpen, onClose, lessonId }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook();
  const { userData } = useLessonHook();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const report = {
        lessonId,
        reporterUserId: userData?._id,
        reportedUserEmail: userData?.email,
        reason: formData.reason,
        description: formData.description,
      };
      const response = await axiosSecure.post("/reportes", report);
      if (response.data.success) {
        toast.success("Report submitted successfully!");
        reset();
        onClose();
      } else {
        toast.error("Failed to submit report.");
      }
    } catch (error) {
      console.error("Report submit error:", error);
      toast.error("Something went wrong while submitting the report.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      ></div>

      {/* Modal Box */}
      <div className="z-10 bg-slate-900 rounded-xl shadow-2xl w-96 p-6">
        <h2 className="text-xl text-center font-semibold text-white mb-4">
          Report Lesson
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Select Reason */}
          <select
            {...register("reason", { required: "Please select a reason" })}
            className="w-full p-3 rounded-lg bg-slate-800 text-white my-2 focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select a reason</option>
            {reportReasons.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>

          {errors.reason && (
            <p className="text-red-400 text-sm mt-1">{errors.reason.message}</p>
          )}

          {/* Description */}
          <textarea
            {...register("description", {
              required: "Please explain the issue",
              minLength: {
                value: 15,
                message: "Description must be at least 15 characters",
              },
            })}
            placeholder="Explain what is wrong with this lesson and why it needs review."
            className="w-full p-3 rounded-lg bg-slate-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-sm placeholder:italic mt-3"
            rows={5}
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">
              {errors.description.message}
            </p>
          )}

          {/* Actions */}
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              disabled={loading}
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
