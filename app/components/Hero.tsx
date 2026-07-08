import Link from "next/link";

const Hero = () => {
  return (
    // <section classNameName="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#00152E] via-[#001A3A] to-[#00264D] pt-[calc(var(--header-height)+60px)] pb-[60px]">
    //   <div
    //     className="absolute inset-0 opacity-80"
    //     style={{
    //       backgroundImage: `
    //     radial-gradient(circle at 20% 80%, rgba(0, 160, 220, 0.1) 0%, transparent 50%),
    //     radial-gradient(circle at 80% 20%, rgba(26, 115, 232, 0.1) 0%, transparent 50%)
    //   `,
    //     }}
    //   />
    //   <div className="absolute top-[10%] right-[10%] h-[400px] w-[400px] rounded-full opacity-40 blur-[80px] bg-gradient-to-br from-[#00A0DC] to-[#1A73E8] animate-orb-1" />
    //   <div className="absolute bottom-[20%] left-[5%] h-[300px] w-[300px] rounded-full opacity-40 blur-[80px] bg-gradient-to-br from-[#00A0DC] to-[#0056B3] animate-orb-2" />
    //   <div className="absolute top-[50%] left-[40%] h-[250px] w-[250px] rounded-full opacity-40 blur-[80px] bg-gradient-to-br from-[#1A73E8] to-[#003D82] animate-orb-3" />
    //   <div className="w-full max-w-7xl mx-auto px-6">
    //     <div className="w-full flex gap-3">
    //       <div className="w-full">
    //         <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md mb-6">
    //           <div className="flex h-5 w-5 items-center justify-center text-green-500">
    //             {/* Icon */}
    //             <svg
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             >
    //               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    //               <path d="M9 12l2 2 4-4"></path>
    //             </svg>
    //           </div>
    //           <p>FDIC Insured</p>
    //         </div>
    //         <h1 className="mb-6 text-6xl font-extrabold leading-tight ">
    //           {" "}
    //           <span className="text-white text-nowrap">Modern Banking</span>
    //           <br />
    //           <span className="bg-gradient-to-r from-[#1A73E8] to-[#4FC3F7] bg-clip-text text-transparent">
    //             Straightforward and Secure
    //           </span>
    //         </h1>
    //         <p className="text-[1.25rem]">
    //           Enjoy secure, seamless banking with Community Providence—trusted
    //           by thousands for dependable personal and business services and
    //           round-the-clock support.
    //         </p>
    //       </div>
    //       <div className="w-full"></div>
    //     </div>
    //   </div>
    // </section>
    <section className="hero-advanced" id="hero" aria-label="Hero section">
      <div className="hero-bg-pattern"></div>
      <div className="hero-gradient-orb hero-orb-1"></div>
      <div className="hero-gradient-orb hero-orb-2"></div>
      <div className="hero-gradient-orb hero-orb-3"></div>

      <div className="container">
        <div className="hero-advanced-grid">
          <div className="hero-advanced-content animate-fadeInUp">
            <div className="hero-badge animate-fadeIn">
              <span className="badge-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span>FDIC Insured</span>
            </div>

            <h1 className="hero-advanced-title">
              <span className="title-line">Modern Banking</span>
              <span className="title-line title-highlight">
                Straightforward and Secure
              </span>
            </h1>

            {/* <!-- Updated description with new bank name --> */}
            <p className="hero-advanced-desc">
              Enjoy secure, seamless banking with Community Providence—trusted
              by thousands for dependable personal and business services and
              round-the-clock support.
            </p>

            <div className="hero-features-row">
              <div className="hero-feature-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span>Personal & Business Banking</span>
              </div>
              <div className="hero-feature-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span>Low-Interest Loans</span>
              </div>
              <div className="hero-feature-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
                <span>24/7 Customer Support</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <Link href="/register" className="btn btn-primary btn-lg">
                <span>Open Account</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#services" className="btn btn-outline-white btn-lg">
                Explore Services
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-number">3M+</span>
                <span className="trust-label">Active Users</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">$2B+</span>
                <span className="trust-label">Assets Managed</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">15+</span>
                <span className="trust-label">Years Trusted</span>
              </div>
            </div>
          </div>

          {/* <!-- Replaced bank card mockup with image of professional people and floating elements --> */}
          <div className="hero-advanced-visual animate-fadeInRight">
            <div className="hero-image-wrapper">
              <img
                src="hero-1.jpg"
                alt="Happy customers using Owlet Digital services"
                className="hero-main-image"
              />

              {/* <!-- Floating stats cards --> */}
              <div className="hero-floating-card card-balance animate-float">
                <div className="floating-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <div className="floating-content">
                  <span className="floating-label">Account Balance</span>
                  <span className="floating-value">$24,568.00</span>
                </div>
              </div>

              <div className="hero-floating-card card-transfer animate-float-delayed">
                <div className="floating-icon success">
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
                <div className="floating-content">
                  <span className="floating-label">Transfer Complete</span>
                  <span className="floating-value">+$1,250.00</span>
                </div>
              </div>

              <div className="hero-floating-card card-secure animate-float-slow">
                <div className="floating-icon secure">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="floating-content">
                  <span className="floating-label">Bank-Grade Security</span>
                  <span className="floating-value">256-bit SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator animate-bounce">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
