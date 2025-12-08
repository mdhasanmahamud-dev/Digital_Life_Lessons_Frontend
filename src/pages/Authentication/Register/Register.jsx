import { useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  py-10 px-7">
      <div className="bg-white rounded-md p-8 w-full max-w-md md:max-w-lg border border-gray-300 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                placeholder="***********"
                className="w-full px-4 py-2 border-b border-slate-950 bg-transparent focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-3">
            <hr className="w-1/3 border-gray-400" />
            <span className="mx-2 text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-400" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-blue-300 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            <FaGoogle className="text-blue-700" /> Sign up with Google
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;