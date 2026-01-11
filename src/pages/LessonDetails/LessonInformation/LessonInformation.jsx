import { MdOutlineCategory } from "react-icons/md";

const LessonInformation = ({ lesson }) => {
  return (
    <div className="space-y-5">
      {/* ===== Title ===== */}
      <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
        {lesson.title}
      </h1>
      {/* ===== Meta Info Row ===== */}
      <div className="flex flex-wrap gap-5 text-sm dark:text-slate-400">
        {/* Category */}
        <span className="text-xs border border-slate-700 px-4 py-1 rounded-full outline-none capitalize">
          {lesson.category}
        </span>

        {/* Emotional Tone */}
        <span className="text-xs border border-slate-700 px-4 py-1 rounded-full outline-none">
          {lesson.emotionalTone}
        </span>

        {/* Access / Premium */}
        <span className="text-xs border border-slate-700 px-4 py-1 rounded-full outline-none capitalize">
          {lesson.accessLevel}
        </span>
      </div>

      {/* ===== Lesson Description ===== */}
      <div className="dark:bg-slate-900 border border-slate-800 rounded-xl p-8">
        <h2 className="text-xl font-semibold dark:text-white mb-4">
          Lesson Insight
        </h2>
        <p className="dark:text-slate-400 leading-relaxed">{lesson.description}</p>
      </div>
    </div>
  );
};

export default LessonInformation;
