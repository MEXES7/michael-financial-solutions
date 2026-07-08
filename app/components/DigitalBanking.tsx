import React from "react";

const DigitalBanking = () => {
  return (
    <section
      className="digital-banking section"
      id="digital-banking"
      aria-labelledby="digital-title"
    >
      <div className="container">
        <div className="digital-banking-grid">
          <div className="digital-banking-visual animate-on-scroll">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-header">
                  <span className="app-greeting">Good morning, John</span>
                  <span className="app-balance-label">Total Balance</span>
                  <span className="app-balance">$48,259.00</span>
                </div>
                <div className="app-actions">
                  <div className="app-action">
                    <div className="action-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                    <span>Send</span>
                  </div>
                  <div className="app-action">
                    <div className="action-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      </svg>
                    </div>
                    <span>Receive</span>
                  </div>
                  <div className="app-action">
                    <div className="action-icon">
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
                    <span>Cards</span>
                  </div>
                  <div className="app-action">
                    <div className="action-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <span>Help</span>
                  </div>
                </div>
                <div className="app-transactions">
                  <span className="transactions-title">
                    Recent Transactions
                  </span>
                  <div className="transaction-item">
                    <div className="transaction-icon grocery">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                      </svg>
                    </div>
                    <div className="transaction-info">
                      <span className="transaction-name">Grocery Store</span>
                      <span className="transaction-date">Today, 2:34 PM</span>
                    </div>
                    <span className="transaction-amount negative">-$85.40</span>
                  </div>
                  <div className="transaction-item">
                    <div className="transaction-icon salary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                      </svg>
                    </div>
                    <div className="transaction-info">
                      <span className="transaction-name">Salary Deposit</span>
                      <span className="transaction-date">Yesterday</span>
                    </div>
                    <span className="transaction-amount positive">
                      +$4,500.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="digital-banking-content animate-on-scroll">
            <h2 className="section-title" id="digital-title">
              Banking at Your Fingertips
            </h2>
            <p className="digital-lead">
              Download our award-winning mobile app and take control of your
              finances anywhere, anytime.
            </p>

            <div className="digital-features">
              <div className="digital-feature">
                <div className="digital-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <span>Instant account opening in under 5 minutes</span>
              </div>
              <div className="digital-feature">
                <div className="digital-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <span>Free unlimited domestic transfers</span>
              </div>
              <div className="digital-feature">
                <div className="digital-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <span>Real-time spending notifications</span>
              </div>
              <div className="digital-feature">
                <div className="digital-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <span>Biometric login for maximum security</span>
              </div>
              <div className="digital-feature">
                <div className="digital-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <span>Built-in budgeting and savings tools</span>
              </div>
            </div>

            <div className="app-download-buttons">
              <a href="#" className="app-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="store-text">
                  <span className="store-label">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              <a href="#" className="app-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.19 0 .51-.2.92-.54 1.19l-2.03 1.2-2.5-2.5 2.5-2.5 2.03 1.42zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                <div className="store-text">
                  <span className="store-label">Get it on</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBanking;
