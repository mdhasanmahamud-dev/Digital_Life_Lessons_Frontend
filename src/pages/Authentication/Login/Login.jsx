import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import useUserHook from "../../../hooks/useUserHook";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userloading, loginUser, signInWithGoogle } = useUserHook();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await loginUser(data.email, data.password);
      console.log(result.user);
      reset();
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center  py-10 px-7 ">
      <div className="bg-white dark:bg-slate-900 rounded-md p-8 w-full max-w-md md:max-w-lg border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-black dark:text-gray-100 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-black dark:text-gray-100 font-medium mb-1">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b dark:border-slate-300 border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-black dark:text-gray-100 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                    message:
                      "Password must include at least 1 uppercase & 1 lowercase letter",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                autoComplete="current-password"
                className="w-full px-4 py-2 border-b dark:border-slate-300 border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </span>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="font-playfair w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            {userloading ? "Logging....." : "Login Now"}
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-300" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleLoginGoogle}
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-blue-300 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <FaGoogle className="text-blue-700" /> Sign up with Google
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm dark:text-gray-300 mt-4">
          Don’t have an account yet?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
