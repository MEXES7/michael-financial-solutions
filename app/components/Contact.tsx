"use client";
import React, { useState } from "react";

const CONTACT_CARDS = [
  {
    title: "Head Office",
    desc: "Global client support",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: "Email",
    // The original markup used Cloudflare's email-obfuscation encoding here,
    // which only decodes on Cloudflare's edge — it can't be resolved client-side.
    // Replace this with the real support address.
    desc: <a href="mailto:support@example.com">support@example.com</a>,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    title: "Support Hours",
    desc: "24/7 customer service",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
];

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
    filled: true,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    filled: true,
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    filled: true,
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    filled: false,
  },
];

const SUBJECT_OPTIONS = [
  "Account Opening",
  "Account Support",
  "Loans & Credit",
  "Corporate Banking",
  "Other",
];

export default function ContactPage({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        console.log("Contact form submitted:", formData);
      }
      setStatus("sent");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="py-16  text-center px-4 mt-10 bg-[#0056b3]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Contact Michael Financial Solutions
          </h1>
          <p className="mt-4 text-lg text-white">
            Have questions? We are here to help with onboarding, support, and
            service inquiries.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Reach out through any of our official support channels.
            </p>

            <div className="space-y-4 mb-10">
              {CONTACT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill={social.filled ? "currentColor" : "none"}
                      stroke={social.filled ? undefined : "currentColor"}
                      strokeWidth={social.filled ? undefined : "2"}
                      strokeLinecap={social.filled ? undefined : "round"}
                      strokeLinejoin={social.filled ? undefined : "round"}
                      className="h-4 w-4"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={update("name")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={update("lastname")}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={update("email")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={update("subject")}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a topic</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={update("message")}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium rounded-lg transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-600">
                  Message sent — we'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
