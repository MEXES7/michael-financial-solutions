import React from "react";
import Link from "next/link";
const SaveEarn = () => {
  return (
    <section
      className="section save-earn"
      id="save-earn"
      aria-labelledby="save-earn-title"
    >
      <div className="save-earn-glow save-earn-glow-1"></div>
      <div className="save-earn-glow save-earn-glow-2"></div>
      <div className="container">
        <div className="save-earn-grid">
          <div className="save-earn-info animate-on-scroll">
            <span className="save-earn-eyebrow">Save and Earn</span>
            <h2 className="section-title" id="save-earn-title">
              Build momentum with savings designed for real goals
            </h2>
            <p className="save-earn-desc">
              Combine flexible deposits, clear earnings, and secure vaults to
              grow balances on your schedule.
            </p>
            <ul className="save-earn-points">
              <li>Flexible terms that scale with your income.</li>
              <li>Daily visibility across every savings goal.</li>
              <li>Transparent earnings with no hidden fees.</li>
            </ul>
            <a href="/register" className="btn btn-primary">
              Open Account
            </a>
          </div>

          <div className="save-earn-cards">
            <article className="save-earn-card animate-on-scroll">
              <div className="save-earn-card-header">
                <div className="save-earn-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <div>
                  <h3 className="save-earn-card-title">High-Yield Savings</h3>
                  <p className="save-earn-card-rate">
                    Competitive daily earnings
                  </p>
                </div>
              </div>
              <ul className="save-earn-card-list">
                <li>Track interest growth in real time.</li>
                <li>Access funds when you need them.</li>
                <li>FDIC-insured eligible balances.</li>
              </ul>
              <Link
                href="/save-earn/high-yield"
                className="save-earn-card-link"
              >
                Learn more
              </Link>
            </article>

            <article className="save-earn-card animate-on-scroll">
              <div className="save-earn-card-header">
                <div className="save-earn-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M3 12h18M12 3v18M5 7h14M5 17h14" />
                  </svg>
                </div>
                <div>
                  <h3 className="save-earn-card-title">Scheduled Deposits</h3>
                  <p className="save-earn-card-rate">
                    Automate and stay consistent
                  </p>
                </div>
              </div>
              <ul className="save-earn-card-list">
                <li>Weekly or monthly auto transfers.</li>
                <li>Adjust schedules anytime.</li>
                <li>Keep savings on track effortlessly.</li>
              </ul>
              <Link
                href="/save-earn/scheduled-deposit"
                className="save-earn-card-link"
              >
                Learn more
              </Link>
            </article>

            <article className="save-earn-card animate-on-scroll">
              <div className="save-earn-card-header">
                <div className="save-earn-card-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="save-earn-card-title">Goal-Based Vaults</h3>
                  <p className="save-earn-card-rate">
                    Dedicated savings buckets
                  </p>
                </div>
              </div>
              <ul className="save-earn-card-list">
                <li>Create focused goals per vault.</li>
                <li>Lock and unlock with one tap.</li>
                <li>Organize funds with clarity.</li>
              </ul>
              <Link
                href="/save-earn/goal-vaults"
                className="save-earn-card-link"
              >
                Learn more
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveEarn;
