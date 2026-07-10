"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmail() {
  const [loading, setLoading] = useState(true);
  const [alertVisible, setAlertVisible] = useState(true);

  useEffect(() => {
    // Mimic the window.onload/setTimeout loader clear logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleResend = (e) => {
    e.preventDefault();
    document.getElementById("verification-form")?.submit();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    document.getElementById("logout-form")?.submit();
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 flex min-h-screen w-full">
      {/* External Head Asset Equivalents */}
      <link
        rel="shortcut icon"
        href="https://owletdigitalbank.com/storage/app/public/photos/uMIJyfXIoNeAxKaynzeCGgxbZcxHfYZQN2k0wBcN.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      />

      {/* Page Loader */}
      {loading && (
        <div className="page-loading active">
          <div className="page-loading-inner">
            <div className="loading-container">
              <div className="loading-animation">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="core"></div>
              </div>
              <div className="text">Michael Financial Solutions</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full">
        <div className="container py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
              <div className="flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  {/* Lucide Mail Replacement Layout */}
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-white text-center font-bold text-2xl mt-4">
                Verify Your Email Address
              </h1>
              <p className="text-white/80 text-center mt-2">
                Please check your inbox for the verification link
              </p>
            </div>

            {/* Card Content */}
            <div className="p-6 sm:p-8">
              {/* Alerts */}
              {alertVisible && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Success
                      </h3>
                      <p className="text-sm text-green-700 mt-1">
                        Your registration is successful. A verification link has
                        been sent to your email address, please click on the
                        link to verify your email address.
                      </p>
                    </div>
                    <div className="ml-auto pl-3">
                      <div className="-mx-1.5 -my-1.5">
                        <button
                          type="button"
                          onClick={() => setAlertVisible(false)}
                          className="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6xl12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Central Details Content */}
              <div className="text-center pt-4">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mb-6">
                  <svg
                    className="h-12 w-12 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 19v-8.93a2 2 0 01.89-1.664l8-5.333a2 2 0 012.22 0l8 5.333A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-2.25-1.5a2 2 0 00-2.22 0l-2.25 1.5"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Check your inbox
                </h2>
                <p className="text-gray-600 mb-6">
                  We&apos;ve sent you an email with a link to confirm your
                  account
                </p>

                <div className="bg-gray-50 rounded-lg p-5 text-left mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Didn&apos;t get the email?
                  </h3>
                  <ul className="list-decimal pl-5 text-gray-600 space-y-2">
                    <li>The email may be in your spam folder</li>
                    <li>The email address you entered might have a typo</li>
                    <li>
                      You may have accidentally entered another email address
                      (Usually happens with auto-complete)
                    </li>
                    <li>
                      We can&apos;t deliver the email to this address (Usually
                      because of corporate firewalls or filtering)
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    onClick={handleResend}
                    className="inline-flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2 animate-spin-slow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3m0 0l3 3m-3-3v12"
                      />
                    </svg>
                    Resend Verification Email
                  </Link>

                  <form
                    id="verification-form"
                    action="https://www.owletdigitalbank.com/email/verification-notification"
                    method="POST"
                    className="hidden"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="FBF03WFzj9u64Shg4LCabLwUvce4wykmh7HKgWVa"
                    />
                  </form>

                  <Link
                    href="/"
                    onClick={handleSignOut}
                    className="inline-flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign Out
                  </Link>

                  <form
                    id="logout-form"
                    action="https://www.owletdigitalbank.com/logout"
                    method="POST"
                    className="hidden"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="FBF03WFzj9u64Shg4LCabLwUvce4wykmh7HKgWVa"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Native Scoped CSS rules converted */}
      <style>{`
        :root {
          --primary-color: #0056b3;
          --primary-color-dark: #003d82;
          --primary-color-light: #1a73e8;
          --secondary-color: #00a0dc;
        }
        
        .page-loading {
            position: fixed;
            top: 0; right: 0; bottom: 0; left: 0;
            width: 100%; height: 100%;
            transition: all .4s .2s ease-in-out;
            background-color: #ffffff;
            visibility: hidden;
            z-index: 9999;
            opacity: 0;
        }
        .page-loading.active {
            opacity: 1;
            visibility: visible;
        }
        .page-loading-inner {
            position: absolute;
            top: 50%; left: 0; width: 100%;
            text-align: center;
            transform: translateY(-50%);
            transition: opacity .2s ease-in-out;
            opacity: 0;
        }
        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }
        .loading-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .loading-animation {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px; height: 80px;
            margin-bottom: 1rem;
            position: relative;
        }
        .loading-animation .circle {
            position: absolute;
            width: 100%; height: 100%;
            border-radius: 50%;
            border: 4px solid transparent;
            mix-blend-mode: overlay;
            animation: rotateCircle 1.5s linear infinite;
        }
        .loading-animation .circle:nth-child(1) { border-top-color: var(--primary-color); animation-delay: 0s; }
        .loading-animation .circle:nth-child(2) { border-right-color: var(--primary-color-light); animation-delay: 0.2s; }
        .loading-animation .circle:nth-child(3) { border-bottom-color: var(--secondary-color); animation-delay: 0.4s; }
        .loading-animation .circle:nth-child(4) { border-left-color: var(--primary-color-light); animation-delay: 0.6s; }
        
        .loading-animation .core {
            width: 20px; height: 20px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--primary-color-light), var(--primary-color-dark));
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
            animation: pulse 1s ease-in-out infinite alternate;
        }
        .page-loading .text {
            color: var(--primary-color);
            font-weight: 500;
            margin-top: 0.5rem;
            font-size: 0.875rem;
            background: linear-gradient(90deg, var(--primary-color-dark), var(--primary-color-light), var(--primary-color-dark));
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 2s linear infinite;
        }
        @keyframes rotateCircle {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
            from { transform: scale(0.8); opacity: 0.8; }
            to { transform: scale(1.2); opacity: 1; }
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
            #tawk-default-container,
            .tawk-min-container,
            div[class*="tawk-"],
            div[id^="tawk-"] {
                bottom: 110px !important; 
            }
            iframe[title*="chat"], iframe[title*="Chat"], iframe[src*="tawk.to"], iframe[id*="tawk"] {
                margin-bottom: 95px !important;
                bottom: 95px !important;
            }
            [id*="wa-widget-send-button"] { bottom: 110px !important; }
            div[style*="position: fixed"][style*="bottom"][style*="right"] { bottom: 110px !important; }
        }
      `}</style>
    </div>
  );
}
