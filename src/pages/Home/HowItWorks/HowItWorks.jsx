import React from "react";
import { FaRegLightbulb, FaBookOpen, FaRocket, FaAward } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaRegLightbulb size={28} />,
    title: "Discover Courses",
    description:
      "Explore a wide range of lessons and topics curated for your learning journey.",
  },
  {
    id: 2,
    icon: <FaBookOpen size={28} />,
    title: "Learn & Practice",
    description:
      "Engage with interactive content, videos, quizzes, and exercises to master skills.",
  },
  {
    id: 3,
    icon: <FaRocket size={28} />,
    title: "Apply Knowledge",
    description:
      "Use your learning to build projects, solve problems, and gain real-world experience.",
  },
  {
    id: 4,
    icon: <FaAward size={28} />,
    title: "Achieve Goals",
    description:
      "Track your progress, earn certificates, and showcase your achievements.",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="container max-w-7xl mx-auto py-20 px-6 md:px-16 relative overflow-hidden
  bg-gray-100 text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="text-gray-600 md:text-xl dark:text-slate-300 text-lg">
          A simple 4-step process to get you started on your learning journey.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid gap-8 md:grid-cols-4 relative z-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="group rounded-2xl p-8 flex flex-col items-center text-center
          bg-gray-100 dark:bg-slate-800
          transition-colors duration-300"
          >
            {/* Step Number */}
            <div
              className="mb-4 w-12 h-12 flex items-center justify-center rounded-full
          bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold text-lg"
            >
              {index + 1}
            </div>

            {/* Icon */}
            <div className="text-4xl mb-4 text-blue-500 dark:text-blue-400 group-hover:text-pink-400 transition-colors duration-500">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-white transition-colors duration-500">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 dark:text-slate-300 group-hover:text-gray-900 dark:group-hover:text-slate-100 transition-colors duration-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
