import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200 min-h-screen px-6 py-20 transition-colors duration-300">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          Have a question, feedback, or partnership idea? We’d love to hear from
          you.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="space-y-8 col-span-12 md:col-span-5">
          <ContactCard
            icon={<FiMail />}
            title="Email"
            info="mdhasanmahamud01947@gmail.com"
          />
          <ContactCard
            icon={<FiPhone />}
            title="Phone"
            info="+880 1947910254"
          />
          <ContactCard
            icon={<FiMapPin />}
            title="Location"
            info="Dhaka, Bangladesh"
          />
        </div>

        {/* Contact Form */}
        <form className="col-span-12 md:col-span-7 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 space-y-6 shadow-md transition-colors duration-300">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-indigo-500 hover:bg-indigo-400 transition text-white"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm transition-colors duration-300">
      <div className="text-2xl text-indigo-500">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{info}</p>
      </div>
    </div>
  );
};

export default Contact;
