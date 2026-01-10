import React from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { RiGalleryLine, RiFocus2Line, RiTeamLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen">
      {/* 1. Hero */}
      <section className="pt-20 pb-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Learn Smarter with{" "}
            <span className="text-slate-400">
              Practical Lessons
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our platform delivers structured, real-world lessons designed to
            help learners understand concepts clearly and apply them with
            confidence.
          </p>
        </div>
      </section>

      {/* 2. Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="rounded-3xl overflow-hidden border border-slate-700 bg-slate-800">
            <img
              src="https://i.ibb.co.com/bjtvjDLq/leonardo-vargas-i9q-UHo-O5-RX0-unsplash.jpg"
              alt="Learning Experience"
              className="w-full h-[380px] object-cover opacity-90"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">
              Our Learning Mission
            </h2>

            <p className="text-slate-400 leading-relaxed">
              We aim to simplify learning by offering clear, beginner-friendly
              lessons that focus on practical understanding rather than just
              theory.
            </p>

            <ul className="space-y-3">
              {[
                "Well-structured lessons with clear explanations",
                "Real-world examples and hands-on learning",
                "Supportive learning-focused community",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <FiCheckCircle className="text-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="py-20 bg-slate-800/40 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <Feature
            icon={<RiGalleryLine />}
            title="Structured Lessons"
            text="Access organized lessons designed for step-by-step learning."
          />
          <Feature
            icon={<RiTeamLine />}
            title="Learning Community"
            text="Learn together, share knowledge, and grow with other learners."
          />
          <Feature
            icon={<RiFocus2Line />}
            title="Modern Learning Platform"
            text="Built with modern technologies to ensure fast, smooth, and secure learning."
          />
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Start Learning Today
        </h2>

        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Explore our lessons and build real skills that matter in the real
          world.
        </p>

        <button
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold
          bg-slate-700 text-white hover:bg-slate-600 transition shadow-md"
        >
          Explore Lessons <FiArrowRight />
        </button>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-500 transition">
      <div className="text-4xl text-slate-400 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default About;
