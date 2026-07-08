"use Client";
const FooterSec = () => {
  return (
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
                  Sign up to Michael Finance Solutions weekly newsletter to get
                  the latest updates.
                </p>
                <form
                  className="footer_newslatter_2"
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                >
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
                    <span className="iconlist_text">Credit &amp; Lending</span>
                  </a>
                </li>
                <li>
                  <a href="/business">
                    <span className="iconlist_text">Data &amp; Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service">
                    <span className="iconlist_text">Risk &amp; Compliance</span>
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
                  Copyright 2026 Michael Finance Solutions, All rights reserved.
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
  );
};

export default FooterSec;
