"use client";
import React from "react";
import { useRouter } from "next/navigation";

import LoginForm from "../components/Login";
import { Globe, Shield, Smartphone, Zap } from "lucide-react";
import { login } from "../service/auth";

const Login = () => {
  const router = useRouter();

  const handleLogin = async (formData) => {
    // TODO: wire this up to your actual login API call
    try {
      console.log("Login submitted:", formData);

      const res = await login(formData);
      if (res.success) {
        router.push("/");
        // or router.replace("/dashboard");
      }
    } catch (error: any) {
      console.error(error);
      router.push("/");
    }

    console.log(res);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* <!-- Left Side - Branding & Illustration (Desktop Only) --> */}
        <div
          className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
          style={{ background: "var(--login-page-color)" }}
        >
          {/* <!-- Animated Shapes --> */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay floating-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay floating"></div>
            <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-white rounded-full mix-blend-overlay floating-slower"></div>

            {/* <!-- Grid pattern --> */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* <!-- Content --> */}
          <div className="relative flex flex-col justify-center items-center w-full h-full text-white p-12 z-10">
            {/* <!-- Logo --> */}
            <a href="index.htm" className="mb-6">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-16 filter brightness-0 invert"
              />
            </a>

            {/* <!-- Title --> */}
            <h1 className="text-4xl font-extrabold mb-6 text-center">
              Swift Money Transfer
            </h1>

            {/* <!-- Description --> */}
            <p className="text-xl mb-8 max-w-md text-center text-white/80">
              Swift and Secure Money Transfer to any bank account will become a
              breeze with Michael Financial Solutions.
            </p>

            {/* <!-- Features --> */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </div>
                <span>Secure Transfers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Zap className="h-5 w-5" />
                </div>
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Globe className="h-5 w-5" />
                </div>
                <span>Global Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Smartphone className="h-5 w-5" />{" "}
                </div>
                <span>Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
