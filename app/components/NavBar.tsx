"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header" role="banner">
      <div className="container header-container">
        <Link href="/" className="logo" aria-label="Owlet Digital Home">
          <img
            src="/logo.png"
            alt="Owlet Digital"
            className="logo-img w-10 h-10"
          />
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="hamburger"></span>
        </button>

        <nav
          className={`main-nav ${isOpen ? "active" : ""}`}
          id="main-nav"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <Link
                href="/#hero"
                className="nav-link active"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="nav-link" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="nav-link" onClick={closeMenu}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-ctas">
            <Link
              href="/register"
              className="btn btn-primary btn-full"
              onClick={closeMenu}
            >
              Open Account
            </Link>
            <Link
              href="/login"
              className="btn btn-outline-white btn-full"
              onClick={closeMenu}
            >
              Online Banking
            </Link>
          </div>
        </nav>

        <div className="header-ctas">
          <Link href="/register" className="btn btn-primary btn-sm">
            Open Account
          </Link>
          <Link href="/login" className="btn btn-outline-light btn-sm">
            Online Banking
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
