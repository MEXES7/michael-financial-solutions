"use client";
import React, { useEffect, useRef } from "react";

const FEATURES = [
  {
    title: "Transparent earnings",
    desc: "Track growth daily with clear rate visibility.",
  },
  {
    title: "Flexible access",
    desc: "Withdraw or transfer funds when you need them.",
  },
  {
    title: "Secure storage",
    desc: "Protected balances with bank-grade safeguards.",
  },
];

// Shared icon markup from the original (a sunburst/asterisk glyph) — kept as-is
// since it's the same SVG reused for all three cards in the source.
function SunburstIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

// Fades + slides elements up as they enter the viewport, replacing the
// original's "animate-on-scroll" class (which needed an external JS
// IntersectionObserver hooked up to it — not included in the pasted markup).
function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll("[data-animate]");
    if (!els || els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}

export default function HighYieldSavings() {
  const containerRef = useScrollReveal();

  return (
    <main id="main-content" ref={containerRef}>
      <style>{`
        [data-animate] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        [data-animate].is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          [data-animate] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="py-16 text-center px-4 mt-10 bg-[#0056b3]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white">High-Yield Savings</h1>
          <p className="mt-4 text-lg text-white">
            Grow your balance with daily earnings and easy access to your funds.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What you get</h2>
            <p className="mt-3 text-gray-600">
              Savings tools designed for consistent growth and full visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <article
                key={feature.title}
                data-animate
                style={{ transitionDelay: `${i * 100}ms` }}
                className="p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <SunburstIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-animate>
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="mt-4 text-lg text-gray-700">
              Keep savings simple and transparent without sacrificing
              flexibility.
            </p>
            <p className="mt-3 text-gray-600">
              Deposit funds, watch daily earnings update, and move money between
              accounts whenever plans change.
            </p>
            <a
              href="/register"
              className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Open Account
            </a>
          </div>
          <div data-animate style={{ transitionDelay: "150ms" }}>
            <img
              src="/hero-1.jpg"
              alt="Client reviewing savings growth on a laptop"
              //   loading="lazy"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
