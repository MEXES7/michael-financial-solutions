import React from "react";

const AboutUs = () => {
  return (
    <section
      className="about-us section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          {/* <!-- Updated about image with people --> */}
          <div className="about-image animate-on-scroll">
            <img
              src="about.jpg"
              alt="Professional banking team helping customers"
              loading="lazy"
            />
            <div className="about-experience">
              <span className="experience-number">15+</span>
              <span className="experience-text">Years of Experience</span>
            </div>
          </div>
          <div className="about-content animate-on-scroll">
            <h2 className="section-title" id="about-title">
              About Us
            </h2>
            <p className="about-lead">
              We are a leading financial institution committed to empowering
              individuals and businesses with innovative banking solutions.
            </p>
            {/* <!-- Updated bank name to Michael Financial Solutions --> */}
            <p className="about-desc">
              Since our founding, Michael Financial Solutions has been at the
              forefront of digital banking innovation. We combine cutting-edge
              technology with personalized service to deliver exceptional
              financial experiences to our clients worldwide.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>Trusted by Millions</h4>
                  <p>Over 70,000 satisfied customers worldwide</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>24/7 Availability</h4>
                  <p>Banking services available around the clock</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h4>Bank-Grade Security</h4>
                  <p>Your assets protected with military-grade encryption</p>
                </div>
              </div>
            </div>

            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
