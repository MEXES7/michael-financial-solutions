import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Michael Financial Solutions | Privacy Policy",
  description:
    "Michael Financial Solutions digital banking and financial services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="owlet-privacy-scope page_wrapper">
      {/* Isolated styling links that apply only to this route */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/style.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://owletdigitalbank.com/templ/css/fontawesome.css"
      />

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
                        <Link className="nav-link" href="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <a className="nav-link" href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/news">
                          News &amp; Blog
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/pricing">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="/contact">
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
                <h1 className="hero_title text-white mb-3">Privacy Policy</h1>
                <p className="text-white-50 mb-0">
                  How we collect, use, and protect your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3>Information Collection</h3>
                    <p>
                      Michael Finance Solutions Limited (the “Bank”) intends to
                      provide you with quality services in order to meet your
                      expectations. The Bank realizes the importance of the
                      protection of your personal data and compliance with
                      relevant laws and regulations. The Bank has provided this
                      Privacy Notice to inform you of personal data protection
                      and your rights as the data subject of personal data. The
                      Bank would like to inform you, as the data subject, who we
                      are.
                    </p>
                    <p>
                      The Bank would like to inform you, as the data subject,
                      who we are:
                    </p>
                    <ul>
                      <li>
                        (1) a person interacting with the Bank whether you are a
                        current, former or prospective customer of the Bank, or
                      </li>
                      <li>
                        (2) an employee, staff, officer, representative,
                        shareholder, director, contact person, agent, or a
                        person related to a juristic person or a person as
                        mentioned in (1) above, a trust or a group of persons
                        interacting with the Bank, whether it is a current,
                        former, or prospective customer of the Bank, about the
                        protection of your personal data that the Bank obtains
                        or will obtain from business operation and service
                        provisions through branches, websites, telephones,
                        electronic channels, applications, social media or other
                        sources, to ensure you that the Bank will maintain your
                        personal data and will collect, use or disclose your
                        personal data where the Bank deems necessary, accurate
                        and appropriate, and to notify you of your rights as the
                        data subject of personal data as specified in this
                        Privacy Notice.
                      </li>
                    </ul>

                    <h3>How We Use Cookies</h3>
                    <p>
                      Michael Finance Solutions Limited (the “Bank”) uses
                      Cookies or other similar technologies on the Bank’s
                      website in order to provide you with a better experience
                      from use of website and to help the Bank to improve the
                      Bank&apos;s website service quality to better meet your
                      preference.
                    </p>
                    <ul>
                      <li>
                        Functional Cookies – These Cookies will remember you
                        during website visit and personalization to facilitate
                        you when you are back to use the website again.
                      </li>
                      <li>
                        Analytic/Performance Cookies – These Cookies will enable
                        the Bank to analyze or evaluate website performance and
                        to understand your interest in order to manage, improve
                        and better the Bank’s website.
                      </li>
                      <li>
                        Advertising Cookies – These Cookies will remember your
                        personalized setting for use of the Bank’s website and
                        will use the information for webpage customization to
                        set up, modify and properly introduce information or
                        advertisement to suit your interest and preference.
                      </li>
                      <li>Highly professional administration.</li>
                    </ul>

                    <h3>Data Protection</h3>
                    <p>
                      The Bank will automatically collect your website visit
                      information through Cookies such as: Internet Domain and
                      IP Number or Internet Protocol Address (IP Address) from
                      the website access point types of browser software
                      including structure and operating system used for
                      accessing to the Bank’s website date and time you access
                      to the Bank’s website.
                    </p>
                    <p>
                      Other website address which you use to connect to the
                      Bank’s website or leave the Bank’s website total number of
                      the Bank’s website visitors, website visitor behavior,
                      total number of website pages you access, web sessions and
                      website information you visit preferred language and
                      recent keyword search you used. Such website visit
                      information will not be disclosed or be personal
                      identifiable to you and will not contain any personal
                      specific information.
                    </p>

                    <h3>Our Policy For Age Under 18</h3>
                    <p>
                      State laws and corporate policies vary, but banks are
                      often reluctant to open accounts for anybody under age 18
                      unless there&apos;s also an adult on the account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="site_footer footer_layout_2 bg-secondary section_decoration section_space"
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
          <div className="content_wrap pb-0">
            <div className="contact_info row">
              <div className=" col-md-6 col-sm-6">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img
                      src="https://owletdigitalbank.com/templ/images/icon_email.svg"
                      alt="Icon Email"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Write to us</h3>
                    <p className="mb-0 ">
                      <a href="mailto:support@michaelfinancesolutions.com">
                        <span>support@michaelfinancesolutions.com</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img
                      src="https://owletdigitalbank.com/templ/images/icon_calling_5.svg"
                      alt="Icon Calling"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Call Us</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img
                      src="https://owletdigitalbank.com/templ/images/icon_map_mark.svg"
                      alt="Icon Map Mark"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Our Office</h3>
                    <p className="mb-0">
                      Grosspeter Tower, Grosspeteranlage 29, 4052 Basel,
                      Switzerland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row justify-content-lg-between">
              <div className="col-lg-4">
                <div className="footer_widget pe-md-3">
                  <h2 className="footer_info_title">Newsletter</h2>
                  <p className="pe-lg-5">
                    Sign up to Michael Finance Solutions weekly newsletter to
                    get the latest updates.
                  </p>
                  <form className="footer_newslatter_2" action="#">
                    <label htmlFor="footer_mail_input">
                      <img
                        src="https://owletdigitalbank.com/templ/images/icon_email.svg"
                        alt="Mail SVG Icon"
                      />
                    </label>
                    <input
                      id="footer_mail_input"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  <ul className="social_links_block unordered_list">
                    <li className="facebook">
                      <a href="#!">Facebook</a>
                    </li>
                    <li className="twitter">
                      <a href="#!">Twitter</a>
                    </li>
                    <li className="linkdin">
                      <a href="#!">Linkdin</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h3 className="footer_info_title">Solutions</h3>
                <ul className="iconlist_block unordered_list_block mb-0">
                  <li>
                    <a href="/personal">
                      <span className="iconlist_text">
                        Digital &amp; Neobanking
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/business">
                      <span className="iconlist_text">B2B Payments</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services">
                      <span className="iconlist_text">
                        Growth &amp; Activation
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/pricing">
                      <span className="iconlist_text">Cryptocurrency</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services">
                      <span className="iconlist_text">Embedded Finance</span>
                    </a>
                  </li>
                  <li>
                    <a href="/pricing">
                      <span className="iconlist_text">Investing</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h3 className="footer_info_title">Products</h3>
                <ul className="iconlist_block unordered_list_block mb-0">
                  <li>
                    <a href="/cards">
                      <span className="iconlist_text">Cards shorts</span>
                    </a>
                  </li>
                  <li>
                    <a href="/personal">
                      <span className="iconlist_text">Deposits</span>
                    </a>
                  </li>
                  <li>
                    <a href="/send-money">
                      <span className="iconlist_text">Transfers</span>
                    </a>
                  </li>
                  <li>
                    <a href="/loans">
                      <span className="iconlist_text">
                        Credit &amp; Lending
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/business">
                      <span className="iconlist_text">
                        Data &amp; Analytics
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/terms-of-service">
                      <span className="iconlist_text">
                        Risk &amp; Compliance
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="mb-0" />

            <div className="footer_bottom">
              <div className="row">
                <div className="col-lg-6">
                  <p className="copyright_text mb-0">
                    Copyright 2026 Michael Finance Solutions, All rights
                    reserved.
                  </p>
                </div>
                <div className="col-lg-6">
                  <ul className="iconlist_block mb-0 unordered_list justify-content-lg-end">
                    <li>
                      <a href="/terms-of-service">
                        <span className="iconlist_text">
                          Terms &amp; Conditions
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy">
                        <span className="iconlist_text">Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decoration_item shape_shadow_1">
          <img
            src="https://owletdigitalbank.com/templ/images/shape_circle_2.svg"
            alt="Shape Shadow 1"
          />
        </div>
        <div className="decoration_item shape_shadow_2">
          <img
            src="https://owletdigitalbank.com/templ/images/shape_circle_2.svg"
            alt="Shape Shadow 2"
          />
        </div>
        <div className="decoration_item shape_shadow_3">
          <img
            src="https://owletdigitalbank.com/templ/images/shape_circle_2.svg"
            alt="Shape Shadow 3"
          />
        </div>
        <div className="decoration_item shape_shadow_4">
          <img
            src="https://owletdigitalbank.com/templ/images/shape_circle_2.svg"
            alt="Shape Shadow 4"
          />
        </div>
        <div className="decoration_item shape_shadow_5">
          <img
            src="https://owletdigitalbank.com/templ/images/shape_circle_2.svg"
            alt="Shape Shadow 5"
          />
        </div>
      </footer>

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
