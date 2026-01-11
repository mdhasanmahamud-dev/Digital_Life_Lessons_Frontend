import { BsCheckLg } from "react-icons/bs";
import useUserHook from "../../../hooks/useUserHook";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useLessonHook from "../../../hooks/useLessonHook";
// Feature Item Component (Static)
const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-2 text-gray-400">
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
  const { user } = useUserHook();
  const { userData, isLoading } = useLessonHook();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();
  console.log(userData);
  //....................HANDLER PREMIUM PAYMENT......................//
  const handlePremiumPayment = async () => {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      const { data } = await axiosSecure.post("/create-checkout-session", {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
        uid: user?.uid,
        price: 1500,
      });
      console.log(data.url);
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
      toast.error("Payment request failed.");
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
        {/* Free Plan Card */}
        <div className="flex-1 bg-gray-100 dark:bg-slate-900 hover:bg-gray-200 dark:hover:bg-slate-800 transition-all duration-300 ease-in-out border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-6 sm:p-8 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Free
          </h3>

          <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            $0
            <span className="text-base font-normal text-gray-600 dark:text-gray-300">
              {" "}
              / month
            </span>
          </p>

          {/* Action Button */}
          <div className="mb-8">
            <button className="w-full py-2.5 text-center text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-300 dark:bg-gray-700 rounded-lg cursor-default">
              Current Plan
            </button>
          </div>

          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
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
        <div className="flex-1 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-900 transition-all duration-300 ease-in-out border border-indigo-500 rounded-xl shadow-xl p-6 sm:p-8 flex flex-col relative">
          {/* Recommended Badge */}
          <div className="absolute top-0 right-0 mr-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            Recommended
          </div>

          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
            Premium
          </h3>

          <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            $1500
            <span className="text-base font-normal text-gray-600 dark:text-gray-400">
              / Lifetime access
            </span>
          </p>

          {/* Action Button */}
          <div className="mb-8">
            {userData?.isPremium ? (
              <button className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition">
                You are already a Premium Member
              </button>
            ) : (
              <button
                onClick={handlePremiumPayment}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition cursor-pointer"
              >
                Upgrade to Premium
              </button>
            )}
          </div>

          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
            All Features
          </h4>

          {/* Feature List */}
          <ul className="space-y-3 grow">
            {premiumFeatures.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </ul>

          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            Billed annually. Unlimited usage subject to fair use policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
