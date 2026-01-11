import {
  FaBook,
  FaSeedling,
  FaExclamationTriangle,
  FaLightbulb,
} from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const WhyLearning = () => {
  const cards = [
    {
      id: 1,
      title: "Gain Valuable Insights",
      description:
        "Life lessons help you understand the world better and make informed decisions.",
      icon: (
        <FaBook className="text-indigo-500 dark:text-indigo-400 w-12 h-12" />
      ),
    },
    {
      id: 2,
      title: "Personal Growth",
      description:
        "Learning from experiences fosters self-improvement and emotional intelligence.",
      icon: (
        <FaSeedling className="text-green-500 dark:text-green-400 w-12 h-12" />
      ),
    },
    {
      id: 3,
      title: "Avoid Mistakes",
      description:
        "By observing others’ experiences, you can avoid common pitfalls and errors.",
      icon: (
        <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-400 w-12 h-12" />
      ),
    },
    {
      id: 4,
      title: "Inspire Others",
      description:
        "Sharing your own experiences can motivate and guide those around you.",
      icon: (
        <FaLightbulb className="text-orange-500 dark:text-orange-400 w-12 h-12" />
      ),
    },
  ];

  return (
    <section
      className="
        container max-w-7xl mx-auto px-4 py-16
         text-gray-800
        dark:bg-slate-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <SectionTitle
        title="Why Learning From Life Matters"
        sub_title="Understanding life through lessons and experiences helps you grow, learn, and inspire others."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              bg-white border border-gray-200
              dark:bg-slate-800 dark:border-slate-700
              p-6 rounded-xl
               transition-all duration-300
            "
          >
            <div className="mb-4">{card.icon}</div>

            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLearning;
