import React from "react";

const Journey = () => {
  return (
    <section
      className="journey section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <div className="section-header section-header-light">
          <h2 className="section-title section-title-light" id="journey-title">
            A Summary of Our Journey
          </h2>
          <p className="section-desc section-desc-light">
            We have over the years garnered loads of experiences that has
            consequently boosted our portfolio in world financial services.
          </p>
        </div>

        <div className="journey-grid">
          <div className="journey-card animate-on-scroll">
            <div className="journey-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span
              className="journey-number"
              data-target="3000000"
              data-format="compact"
              data-suffix="+"
            >
              3M+
            </span>
            <span className="journey-label">Active Users</span>
          </div>

          <div className="journey-card animate-on-scroll">
            <div className="journey-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="journey-number" data-target="2950">
              2950
            </span>
            <span className="journey-label">Running Days</span>
          </div>

          <div className="journey-card animate-on-scroll">
            <div className="journey-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7" />
                <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7" />
                <path d="M4 22h16" />
                <path d="M18 2H6v7a6 6 0 1012 0V2z" />
              </svg>
            </div>
            <span className="journey-number" data-target="375">
              375
            </span>
            <span className="journey-label">Won Award</span>
          </div>

          <div className="journey-card animate-on-scroll">
            <div className="journey-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <ellipse cx="12" cy="12" rx="4" ry="10" />
              </svg>
            </div>
            <span className="journey-number" data-target="200">
              200
            </span>
            <span className="journey-label">Global Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
