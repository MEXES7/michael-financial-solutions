const WhyUs = () => {
  return (
    <section
      className="why-us section"
      id="why-us"
      aria-labelledby="why-us-title"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="why-us-title">
            Why Us?
          </h2>
          <p className="section-desc">
            Here are some of the many features that define our uniqueness.
          </p>
        </div>

        {/* <!-- Added animate-on-scroll className to cards --> */}
        <div className="why-us-grid">
          <article className="why-card animate-on-scroll">
            <div className="why-card-icon">
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
            <h3 className="why-card-title">Multiple Payment options</h3>
            <p className="why-card-desc">
              We support multiple payment methods: Visa, MasterCard, bank
              transfer, cryptocurrency and lots more
            </p>
          </article>

          <div className="why-card animate-on-scroll">
            {/* <div> */}
            <div className="why-card-icon">
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
            <h3 className="why-card-title">World Coverage</h3>
            <p className="why-card-desc">
              We provide services in 80% countries around all the globe located
              in various continents.
            </p>
          </div>

          <article className="why-card animate-on-scroll">
            <div className="why-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M12 2v4M12 18v4M4 12H2M22 12h-2" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <h3 className="why-card-title">Incredible Transaction Fee</h3>
            <p className="why-card-desc">
              Our transaction fees and rates are incredibly low for all
              customers and all market makers
            </p>
          </article>

          <article className="why-card animate-on-scroll">
            <div className="why-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
            <h3 className="why-card-title">Secured Transactions</h3>
            <p className="why-card-desc">
              Your finance is secured with our advanced technologies that
              protect you against digital thefts and hacks.
            </p>
          </article>

          <article className="why-card animate-on-scroll">
            <div className="why-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
            </div>
            <h3 className="why-card-title">Strong Security</h3>
            <p className="why-card-desc">
              We offer you an unbeatable protection against DDoS attacks with
              full data encryption for all your transactions.
            </p>
          </article>

          <article className="why-card animate-on-scroll">
            <div className="why-card-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M3 18v-6a9 9 0 1118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
              </svg>
            </div>
            <h3 className="why-card-title">24/7 Support</h3>
            <p className="why-card-desc">
              Our customer care service is available at all time to attend to
              you and also offer solutions to all your needs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
