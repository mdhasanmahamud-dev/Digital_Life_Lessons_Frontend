import React from "react";
import { BsCheckLg } from "react-icons/bs";

// Feature Item Component (Static)
const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-2 text-gray-700">
    <BsCheckLg className="text-green-500" />
    {text}
  </li>
);

// Static Free & Premium Features
const freeFeatures = [
  "Access to public lessons",
  "Create limited lessons",
  "Like and favorite lessons",
  "Basic progress tracking",
  "Comment on lessons",
];

const premiumFeatures = [
  "Access to all public and premium lessons",
  "Unlimited lesson creation",
  "Advanced analytics for your lessons",
  "Priority support",
  "Feature your lessons on homepage",
  "Export lessons as PDF",
  "Collaborate with other premium users",
  "No ads experience",
  "Exclusive badges and rewards",
];

const UpgradeCard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Upgrade Your Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the perfect plan for your learning needs.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
        {/* Free Plan Card */}
        <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-md p-6 sm:p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>

          <p className="text-4xl font-extrabold text-gray-900 mb-6">
            $0
            <span className="text-base font-normal text-gray-500"> / month</span>
          </p>

          {/* Action Button */}
          <div className="mb-8">
            <button className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gray-300 rounded-lg cursor-default">
              Current Plan
            </button>
          </div>

          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 border-b pb-2">
            Features Included
          </h4>

          {/* Feature List */}
          <ul className="space-y-3 grow">
            {freeFeatures.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>
        </div>

        {/* Premium Plan Card */}
        <div className="flex-1 bg-white border-2 border-indigo-500 rounded-xl shadow-xl p-6 sm:p-8 flex flex-col relative">
          {/* Recommended Badge */}
          <div className="absolute top-0 right-0 mr-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Recommended
          </div>

          <h3 className="text-2xl font-bold text-indigo-600 mb-2">Premium</h3>

          <p className="text-4xl font-extrabold text-gray-900 mb-6">
            $25
            <span className="text-base font-normal text-gray-500"> / month</span>
          </p>

          {/* Action Button */}
          <div className="mb-8">
            <button className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition">
              Upgrade to Premium
            </button>
          </div>

          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 border-b pb-2">
            All Features
          </h4>

          {/* Feature List */}
          <ul className="space-y-3 grow">
            {premiumFeatures.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>

          <p className="mt-6 text-xs text-gray-500">
            Billed annually. Unlimited usage subject to fair use policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
