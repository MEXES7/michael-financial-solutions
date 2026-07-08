import React from "react";

const Services = () => {
  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="services-title">
            Our Services
          </h2>
          <p className="section-desc">
            Comprehensive banking solutions tailored to your needs.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card animate-on-scroll">
            <div className="service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="service-title">Savings Account</h3>
            <p className="service-desc">
              Grow your money with competitive interest rates and flexible
              savings plans.
            </p>
            <a href="#" className="service-link">
              Learn more
            </a>
          </article>

          <article className="service-card animate-on-scroll">
            <div className="service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 12h20" />
                <path d="M6 15h4" />
              </svg>
            </div>
            <h3 className="service-title">Credit Card</h3>
            <p className="service-desc">
              Enjoy exclusive rewards, cashback, and worldwide acceptance with
              our premium cards.
            </p>
            <a href="#" className="service-link">
              Learn more
            </a>
          </article>

          <article className="service-card animate-on-scroll">
            <div className="service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="service-title">Personal Loans</h3>
            <p className="service-desc">
              Quick approval personal loans with low interest rates and flexible
              repayment terms.
            </p>
            <a href="#" className="service-link">
              Learn more
            </a>
          </article>

          <article className="service-card animate-on-scroll">
            <div className="service-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M2 10h2M20 10h2M2 14h2M20 14h2" />
              </svg>
            </div>
            <h3 className="service-title">Online Banking</h3>
            <p className="service-desc">
              Manage your accounts 24/7 with our secure and user-friendly online
              platform.
            </p>
            <a href="#" className="service-link">
              Learn more
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
