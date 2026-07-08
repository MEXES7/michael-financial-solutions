"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: true,
  });

  const update = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    else console.log("Login submitted:", formData);
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12">
      <div className="w-full max-w-md">
        {/* Mobile Logo */}
        <div className="lg:hidden text-center mb-8">
          <Link href="/">
            <img
              src="https://owletdigitalbank.com/storage/app/public/photos/Lp57YcwJhSfQUjFI7uUyRtsxeRzMdPVUPJiibPDE.png"
              alt="Logo"
              className="h-12 mx-auto"
            />
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Card Header */}
          <div className="px-8 pt-8 pb-6">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Sign In to Michael Financial Solutions
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Access the Michael Financial Solutions panel using your email and
              password.
            </p>
          </div>

          {/* Login Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email or Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={update("email")}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Email or Username"
                    required
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={update("password")}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="mb-6">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="remember_me"
                    checked={formData.remember_me}
                    onChange={update("remember_me")}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Stay signed in for 30 days
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-4">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition duration-150 ease-in-out flex items-center justify-center"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
                </button>

                <a
                  href="/register"
                  className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition duration-150 ease-in-out flex items-center justify-center"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Not enrolled? Create Account
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
