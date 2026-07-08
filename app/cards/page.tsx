"use client";

import FooterSec from "../components/FooterSec";
import Link from "next/link";

export default function CreditCards() {
  return (
    <div className="online_banking">
      {/* Standalone External CSS Style Links */}
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
                          <a className="nav-link" href="url?id=1about">
                            About
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="url?id=1news">
                            News &amp; Blog
                          </a>
                        </li>
                        <li>
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
                  <h1 className="hero_title text-white mb-3">Credit Cards</h1>
                  <p className="text-white-50 mb-0">
                    Find the right card for everyday spending and rewards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section_space">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <h2>Card Options</h2>
                      <p>
                        We invite you to see if you&apos;re pre-approved for a
                        credit card from Owlet Digital.
                      </p>
                      <div className="row g-3">
                        <div className="col-md-3">
                          <div className="border rounded p-3 text-center">
                            VISA
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="border rounded p-3 text-center">
                            MAESTRO
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="border rounded p-3 text-center">
                            AMEX
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="border rounded p-3 text-center">
                            DISCOVER
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3>Protect your card from anywhere</h3>
                      <p>
                        Leave your card at the restaurant or drop it at the
                        concert? Instantly lock your card with a few taps. And
                        if you find it, unlock it just as fast.
                      </p>
                      <a
                        className="btn btn-primary"
                        href="https://www.owletdigitalbank.com/register"
                      >
                        Get Started
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
