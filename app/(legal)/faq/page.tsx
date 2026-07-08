import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Owlet Digital | FAQs",
  description: "Owlet Digital digital banking and financial services.",
};

export default function FaqPage() {
  return (
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
                  <a
                    className="site_link"
                    href="https://www.owletdigitalbank.com"
                  >
                    <img
                      src="https://owletdigitalbank.com/storage/app/public/photos/Lp57YcwJhSfQUjFI7uUyRtsxeRzMdPVUPJiibPDE.png"
                      alt="Site Logo White"
                    />
                    <img
                      src="https://owletdigitalbank.com/storage/app/public/photos/cl3gUjgSWFm10BQwagNP0XcPkoPBvU0nTDAphFMJ.png"
                      alt="Site Logo Black"
                    />
                  </a>
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
                        <Link className="nav-link" href="/about">
                          About
                        </Link>
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
                <h1 className="hero_title text-white mb-3">FAQ</h1>
                <p className="text-white-50 mb-0">
                  Quick answers to common questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section_space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseOne"
                        aria-expanded="true"
                        aria-controls="faqCollapseOne"
                      >
                        What is Owlet Digital?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqHeadingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Owlet Digital provides a full investment service focused
                        on the bitcoin and cryptocurrency market. We are among
                        the best platforms to invest and grow your bitcoin and
                        other cryptocurrency.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqCollapseTwo"
                      >
                        What is a bank account?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        A bank account is a financial account maintained by a
                        bank or other financial institution in which the
                        financial transactions between the bank and a customer
                        are recorded.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseThree"
                        aria-expanded="false"
                        aria-controls="faqCollapseThree"
                      >
                        How do I create my account?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Registration is easy and takes only a few moments. Click
                        the Create Account button and fill in all required
                        fields.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseFour"
                        aria-expanded="false"
                        aria-controls="faqCollapseFour"
                      >
                        How long does my deposit take before it reflects on my
                        Owlet Digital dashboard?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Your deposit will be reflected immediately once it is
                        confirmed on the blockchain network.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseFive"
                        aria-expanded="false"
                        aria-controls="faqCollapseFive"
                      >
                        What are the requirements for a business loan?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        If you received a Paycheck Protection Program (PPP)
                        loan, loan forgiveness isn&apos;t automatic. You need to
                        apply if you want your loan forgiven. Lenders may
                        request bank statements to review your incoming funds
                        when you apply for a business loan.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseSix"
                        aria-expanded="false"
                        aria-controls="faqCollapseSix"
                      >
                        How long does it take to process a withdrawal to an
                        international bank?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingSix"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once we receive your withdrawal request we process it
                        immediately and send it to your bank account.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqHeadingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapseSeven"
                        aria-expanded="false"
                        aria-controls="faqCollapseSeven"
                      >
                        Can I have more than two accounts?
                      </button>
                    </h2>
                    <div
                      id="faqCollapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqHeadingSeven"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We do not allow multiple accounts except only for
                        business purposes.
                      </div>
                    </div>
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
              <div className="col-md-6 col-sm-6">
                <div className="iconbox_block icon_left">
                  <div className="iconbox_icon">
                    <img
                      src="https://owletdigitalbank.com/templ/images/icon_email.svg"
                      alt="Icon Email"
                    />
                  </div>
                  <div className="iconbox_content">
                    <h3 className="iconbox_title">Write to us</h3>
                    <p className="mb-0">
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
    </div>
  );
}
