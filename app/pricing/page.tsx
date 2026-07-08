"use client";

import FooterSec from "../components/FooterSec";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="online_banking">
      {/* 
        Standalone CSS External Imports 
        Brought in directly to make the component completely self-contained.
      */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/fontawesome.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/animate.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/magnific-popup.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/odometer.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/style.css"
      />

      <div className="page_wrapper">
        <div className="backtotop">
          <a href="#" className="scroll">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>

        <header className="site_header header_layout_1">
          <div className="xb-header stricky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-5">
                  <div className="site_logo">
                    <Link className="site_link" href="/">
                      <img src="/logo.png" alt="Site Logo White" />
                      <img src="/logo.png" alt="Site Logo Black" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-2">
                  <nav className="main_menu navbar navbar-expand-lg">
                    <div
                      className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                      id="main_menu_dropdown"
                    >
                      <ul className="main_menu_list unordered_list justify-content-center">
                        <li>
                          <a
                            className="nav-link"
                            href="https://www.owletdigitalbank.com"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="https://www.owletdigitalbank.com/about"
                          >
                            About
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="https://www.owletdigitalbank.com/news"
                          >
                            News &amp; Blog
                          </a>
                        </li>
                        <li className="active">
                          <a
                            className="nav-link"
                            href="https://www.owletdigitalbank.com/pricing"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="https://www.owletdigitalbank.com/contact"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-lg-3 col-5">
                  <ul className="btns_group ob-header-btn p-0 unordered_list justify-content-end">
                    <li>
                      <button
                        className="mobile_menu_btn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#main_menu_dropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <i className="far fa-bars"></i>
                      </button>
                    </li>
                    <li>
                      <a className="btn btn-outline-light" href="/login">
                        <span className="btn_icon">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <span className="btn_label">Login</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="page_content">
          <section
            className="hero_section hero_online_banking overflow-hidden section_decoration bg-dark"
            style={{
              backgroundImage:
                "url('https://owletdigitalbank.com/templ/images/hero_bg_noise.webp')",
            }}
          >
            <div
              className="overlay"
              style={{
                backgroundImage:
                  "url('https://owletdigitalbank.com/templ/images/hero_pattern.svg')",
              }}
            ></div>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8">
                  <h1 className="hero_title text-white mb-3">Pricing</h1>
                  <p className="text-white-50 mb-0">
                    Transparent plans that scale with you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section_space bg-light">
            <div className="container">
              <div className="row mb-4">
                <div className="col-lg-8">
                  <h2>Choose the plan that fits</h2>
                  <p>
                    Explore our current Save &amp; Earn plans and select the
                    term that matches your goals.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {/* Amateur AI Plan */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body position-relative">
                      <span className="badge text-uppercase bg-primary text-white">
                        Main
                      </span>
                      <h4 className="card-title mt-3 mb-1">AMATUER AI</h4>
                      <div className="h4 mb-3 text-primary">$200 - $20,000</div>
                      <ul className="mb-4 list-unstyled">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          3.00% APR
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Duration: 1 Days
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Payout: End of term
                        </li>
                        <li>
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Early withdrawal: Available (20% fee)
                        </li>
                      </ul>
                      <a href="/register" className="btn btn-dark w-100">
                        Open Account
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional AI Plan */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body position-relative">
                      <span className="badge text-uppercase bg-primary text-white">
                        Main
                      </span>
                      <h4 className="card-title mt-3 mb-1">PROFESSIONAL AI</h4>
                      <div className="h4 mb-3 text-primary">
                        $30,000 - $90,000
                      </div>
                      <ul className="mb-4 list-unstyled">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          3% Max Return
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Duration: 20 Days
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Payout: End of term
                        </li>
                        <li>
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Early withdrawal: Not available
                        </li>
                      </ul>
                      <a href="/register" className="btn btn-dark w-100">
                        Open Account
                      </a>
                    </div>
                  </div>
                </div>

                {/* Variety AI Plan */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body position-relative">
                      <span className="badge text-uppercase bg-primary text-white">
                        Main
                      </span>
                      <h4 className="card-title mt-3 mb-1">VARIETY AI</h4>
                      <div className="h4 mb-3 text-primary">
                        $100,000 - $1,000,000,000
                      </div>
                      <ul className="mb-4 list-unstyled">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          80% Max Return
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Duration: 30 Days
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Payout: End of term
                        </li>
                        <li>
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Early withdrawal: Not available
                        </li>
                      </ul>
                      <a href="/register" className="btn btn-dark w-100">
                        Open Account
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fixed AI Plan */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body position-relative">
                      <span className="badge text-uppercase bg-primary text-white">
                        Main
                      </span>
                      <h4 className="card-title mt-3 mb-1">FIXED AI</h4>
                      <div className="h4 mb-3 text-primary">
                        $50,000 - $5,000,000,000,000
                      </div>
                      <ul className="mb-4 list-unstyled">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          80% Max Return
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Duration: 60 Days
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Payout: End of term
                        </li>
                        <li>
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Early withdrawal: Not available
                        </li>
                      </ul>
                      <a href="/register" className="btn btn-dark w-100">
                        Open Account
                      </a>
                    </div>
                  </div>
                </div>

                {/* Superior AI Plan */}
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body position-relative">
                      <span className="badge text-uppercase bg-primary text-white">
                        Main
                      </span>
                      <h4 className="card-title mt-3 mb-1">SUPERIOR AI</h4>
                      <div className="h4 mb-3 text-primary">
                        $100,000 - $100,000,000
                      </div>
                      <ul className="mb-4 list-unstyled">
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          50% Max Return
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Duration: 20 Days
                        </li>
                        <li className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Payout: End of term
                        </li>
                        <li>
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          Early withdrawal: Not available
                        </li>
                      </ul>
                      <a href="/register" className="btn btn-dark w-100">
                        Open Account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <FooterSec />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tawk-default-container,
          .tawk-min-container,
          div[class*="tawk-"],
          div[id^="tawk-"] {
              bottom: 110px !important; 
          }
          
          iframe[title*="chat"], 
          iframe[title*="Chat"],
          iframe[src*="tawk.to"],
          iframe[id*="tawk"] {
              margin-bottom: 95px !important;
              bottom: 95px !important;
          }

          [id*="wa-widget-send-button"] {
              bottom: 110px !important;
          }
          
          div[style*="position: fixed"][style*="bottom"][style*="right"] {
              bottom: 110px !important;
          }
        }
      `}</style>
    </div>
  );
}
