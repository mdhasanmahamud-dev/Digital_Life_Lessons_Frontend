import React from "react";

const Subscription = () => {
  return (
    <section className="bg-slate-950 text-white py-16 px-6 md:px-16 rounded-xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-slate-800 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-slate-700 rounded-full opacity-30 blur-3xl"></div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg md:text-xl mb-8 text-slate-300">
          Get the latest lessons, updates, and exclusive offers delivered straight to your inbox.
        </p>

        {/* Input + Button */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Optional note */}
        <p className="mt-4 text-sm text-slate-400">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Subscription;
