import React from "react";

const Solution = () => {
  return (
    <section
      className="banking-solutions section"
      id="banking-solutions"
      aria-labelledby="banking-solutions-title"
    >
      <div className="container">
        <div className="banking-solutions-grid">
          <div className="banking-solutions-content animate-on-scroll">
            <h2 className="section-title" id="banking-solutions-title">
              Smart Banking for the Modern World
            </h2>
            <p className="banking-lead">
              Experience seamless banking with cutting-edge technology designed
              for your lifestyle.
            </p>

            <div className="banking-features">
              <div className="banking-feature">
                <div className="banking-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <div className="banking-feature-text">
                  <h4>Mobile Banking</h4>
                  <p>
                    Manage accounts, pay bills, and transfer money from anywhere
                    with our award-winning app.
                  </p>
                </div>
              </div>

              <div className="banking-feature">
                <div className="banking-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                    <path d="M12 22.08V12" />
                  </svg>
                </div>
                <div className="banking-feature-text">
                  <h4>Instant Transfers</h4>
                  <p>
                    Send money instantly to anyone, anywhere with zero fees on
                    domestic transfers.
                  </p>
                </div>
              </div>

              <div className="banking-feature">
                <div className="banking-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div className="banking-feature-text">
                  <h4>AI-Powered Insights</h4>
                  <p>
                    Get personalized spending insights and savings
                    recommendations powered by AI.
                  </p>
                </div>
              </div>

              <div className="banking-feature">
                <div className="banking-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <div className="banking-feature-text">
                  <h4>Virtual Cards</h4>
                  <p>
                    Generate virtual cards for secure online shopping with
                    customizable spending limits.
                  </p>
                </div>
              </div>
            </div>

            <a href="/register" className="btn btn-primary">
              Get Started Today
            </a>
          </div>

          <div className="banking-solutions-image animate-on-scroll">
            <img
              src="solution.jpg"
              alt="Person using smartphone for online banking payment"
              loading="lazy"
            />
            <div className="banking-stats">
              <div className="banking-stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">App Store Rating</span>
              </div>
              <div className="banking-stat">
                <span className="stat-number">2M+</span>
                <span className="stat-label">App Downloads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
