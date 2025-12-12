import { BsCheckCircleFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router";
import useUserHook from "../../hooks/useUserHook";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { user } = useUserHook();
  const axiosSecure = useAxiosSecure();
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId || !user) {
        toast.error("Invalid payment session or user not logged in.");
        setLoading(false);
        return;
      }
      try {
        const { data } = await axiosSecure.get(`/verify-payment/${sessionId}`);
        if (data.success) {
          toast.success("Your account is now Premium!");
        } else {
          toast.error("Payment not verified yet. Please contact support.");
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to verify payment.");
      } finally {
        setLoading(false);
      }
    };
      verifyPayment();
  }, [sessionId, user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Verifying payment...
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" p-12 max-w-lg text-center relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-green-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>

        {/* Success Icon */}
        <BsCheckCircleFill className="text-green-400 text-7xl mx-auto mb-6 animate-bounce" />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="text-gray-300 mb-6 text-lg">
          Thank you for purchasing our Premium Membership. Your payment has been
          successfully processed.
        </p>

        {/* Guidance */}
        <p className="text-gray-400 mb-8 text-sm">
          You now have full access to all premium features. Click the button
          below to go to your dashboard.
        </p>

        {/* Gradient Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-slate-900 border border-slate-500 px-4 py-2 rounded-md text-white cursor-pointer"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
