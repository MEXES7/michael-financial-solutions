"use client";
import React from "react";
import { Check } from "lucide-react";
import RegisterLeft from "../components/RegisterLeft";

const Register = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Branding & Illustration (Desktop Only) */}
        <div
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
          style={{ background: "var(--register-page-color)" }}
        >
          {/* Animated Shapes */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay floating-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay floating"></div>
            <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-white rounded-full mix-blend-overlay floating-slower"></div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center items-center w-full h-full text-white p-12 z-10">
            {/* Logo */}
            <a href="index.htm" className="mb-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 filter brightness-0 invert"
              />
            </a>

            {/* Title */}
            <h1 className="text-4xl font-extrabold mb-6 text-center">
              Start Banking with Us
            </h1>

            {/* Description */}
            <p className="text-xl mb-8 max-w-md text-center text-white/80">
              Create your Michael Financial Solutions account in just a few
              steps and enjoy our full range of banking services.
            </p>

            {/* Benefits */}
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-medium text-white">
                    Secure Banking Platform
                  </span>{" "}
                  - Industry-leading security protocols to keep your funds safe
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-medium text-white">Fast Transfers</span>{" "}
                  - Send and receive money quickly to anyone, anywhere
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3" />
                </div>
                <p className="text-sm text-white/80">
                  <span className="font-medium text-white">
                    24/7 Account Access
                  </span>{" "}
                  - Manage your finances anytime, anywhere on any device
                </p>
              </div>
            </div>
          </div>
        </div>
        <RegisterLeft />
      </div>
    </div>
  );
};

export default Register;
