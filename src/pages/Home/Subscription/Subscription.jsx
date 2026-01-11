import React from "react";

const Subscription = () => {
  return (
    <section
      className="
        relative overflow-hidden rounded-xl
        py-16 px-6 md:px-16
        bg-white text-gray-900
        dark:bg-slate-950 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Background decoration */}
      <div
        className="
          absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl
          bg-gray-200 opacity-60
          dark:bg-slate-800 dark:opacity-40
        "
      ></div>

      <div
        className="
          absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl
          bg-gray-300 opacity-50
          dark:bg-slate-700 dark:opacity-30
        "
      ></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="
            text-3xl md:text-4xl font-bold mb-4
            text-gray-900
            dark:text-white
          "
        >
          Subscribe to Our Newsletter
        </h2>

        <p
          className="
            text-lg md:text-xl mb-8
            text-gray-600
            dark:text-slate-300
          "
        >
          Get the latest lessons, updates, and exclusive offers delivered
          straight to your inbox.
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full sm:w-2/3 px-5 py-3 rounded-lg border
              border-gray-300 bg-white text-gray-900
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400
            "
          />

          <button
            type="submit"
            className="
              px-6 py-3 font-semibold rounded-lg
              bg-blue-600 text-white
              hover:bg-blue-700
              transition-all duration-300
            "
          >
            Subscribe
          </button>
        </form>

        {/* Optional note */}
        <p
          className="
            mt-4 text-sm
            text-gray-500
            dark:text-slate-400
          "
        >
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Subscription;
