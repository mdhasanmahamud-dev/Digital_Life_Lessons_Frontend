import React from "react";
import { FaUsers, FaBookOpen, FaAward, FaProjectDiagram } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: <FaUsers size={28} />,
    title: "Active Learners",
    value: 12000,
    suffix: "+",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    icon: <FaBookOpen size={28} />,
    title: "Lessons Published",
    value: 350,
    suffix: "+",
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 3,
    icon: <FaAward size={28} />,
    title: "Quizzes Completed",
    value: 8700,
    suffix: "+",
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    icon: <FaAward size={28} />,
    title: "Certificates Earned",
    value: 4500,
    suffix: "+",
    color: "from-yellow-400 to-yellow-600",
  },
];


const Achievements = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-linear-to-r from-blue-700 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-linear-to-r from-pink-700 to-pink-400 rounded-full opacity-20 blur-3xl"></div>

      {/* Container */}
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Our Achievements
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            Milestones that showcase our dedication, expertise, and impact in the learning community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-slate-800 rounded-3xl p-10 flex flex-col items-center text-center shadow-md hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Icon with gradient background */}
              <div
                className={`mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-4xl font-extrabold mb-2 text-white">
                <CountUp end={stat.value} duration={5} separator="," />{stat.suffix}
              </h3>

              {/* Title */}
              <p className="text-slate-300 text-lg md:text-base font-medium group-hover:text-white transition-colors duration-500">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
