import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function LoginModal({ close }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* Background Overlay with Blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300"
        onClick={close}
      >
        {/* Modal Card */}
        <div
          className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          >
            <FaTimes size={20} />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-[#00686E] mb-6">
            {isLogin ? "Login to Your Account" : "Create a New Account"}
          </h2>

          {/* Form */}
          <form className="space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-[#00686E] focus:ring-2 focus:ring-[#7ee0e6] outline-none"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-[#00686E] focus:ring-2 focus:ring-[#7ee0e6] outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-[#00686E] focus:ring-2 focus:ring-[#7ee0e6] outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#00686E] text-white font-semibold py-2 rounded-lg hover:bg-[#005157] transition-all"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch between login/signup */}
          <p className="text-center text-gray-600 mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-[#00686E] font-semibold cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-[#00686E] font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
