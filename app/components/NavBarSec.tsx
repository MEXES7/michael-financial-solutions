import React from "react";

const NavBarSec = () => {
  return (
    <header className="site_header header_layout_1">
      <div className="xb-header stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <a className="site_link" href="index.htm">
                  <img src="/logo.png" alt="Site Logo White" />
                  <img src="/logo.png" alt="Site Logo Black" />
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
                    <li className="">
                      <a className="nav-link" href="index.htm">
                        Home
                      </a>
                    </li>
                    <li className="">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="">
                      <a className="nav-link" href="news.html">
                        News &amp; Blog
                      </a>
                    </li>
                    <li className="">
                      <a className="nav-link" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li className="">
                      <a className="nav-link" href="contact-1.html">
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
                  <a className="btn btn-outline-light" href="login.html">
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
  );
};

export default NavBarSec;
