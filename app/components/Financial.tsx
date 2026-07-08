import React from "react";

const Financial = () => {
  return (
    <section
      className="financial-products section"
      id="financial-products"
      aria-labelledby="products-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="products-title">
            Complete Banking Solutions
          </h2>
          <p className="section-desc">
            From everyday banking to wealth management, we have the right
            products for every stage of your financial journey.
          </p>
        </div>

        <div className="products-grid">
          <div className="product-card animate-on-scroll">
            <div className="product-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
            <h3>Home Mortgages</h3>
            <p>
              Competitive rates on home loans with flexible terms up to 30
              years. Make your dream home a reality.
            </p>
            <ul className="product-features">
              <li>Rates from 5.99% APR</li>
              <li>Up to 95% LTV</li>
              <li>Fast pre-approval</li>
            </ul>
          </div>

          <div className="product-card animate-on-scroll">
            <div className="product-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
            <h3>Business Banking</h3>
            <p>
              Comprehensive solutions for businesses of all sizes. From startups
              to enterprises, we scale with you.
            </p>
            <ul className="product-features">
              <li>Business checking & savings</li>
              <li>Merchant services</li>
              <li>Business lines of credit</li>
            </ul>
          </div>

          <div className="product-card animate-on-scroll">
            <div className="product-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
                <path d="M12 18V6" />
              </svg>
            </div>
            <h3>Wealth Management</h3>
            <p>
              Personalized financial planning and portfolio management to help
              grow and protect your wealth.
            </p>
            <ul className="product-features">
              <li>Retirement planning</li>
              <li>Estate planning</li>
              <li>Tax optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financial;
