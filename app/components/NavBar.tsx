"use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function NavBar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     {
//       name: "Home",
//       href: "#hero",
//     },
//     {
//       name: "About",
//       href: "#about",
//     },
//     {
//       name: "Services",
//       href: "#services",
//     },
//     {
//       name: "FAQs",
//       href: "#faq",
//     },
//     {
//       name: "Contact",
//       href: "/contact",
//     },
//   ];

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full bg-[#003d82]/95 backdrop-blur">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             alt="Owlet Digital"
//             width={170}
//             height={55}
//             priority
//           />
//         </Link>

//         <nav className="hidden gap-8 lg:flex">
//           {links.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-white transition hover:text-sky-400"
//             >
//               {link.name}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden gap-3 lg:flex">
//           <Link
//             href="/register"
//             className="rounded-lg bg-sky-500 px-5 py-3 text-white transition hover:bg-sky-600"
//           >
//             Open Account
//           </Link>

//           <Link
//             href="/login"
//             className="rounded-lg border border-white px-5 py-3 text-white transition hover:bg-white hover:text-[#003d82]"
//           >
//             Online Banking
//           </Link>
//         </div>

//         <button onClick={() => setOpen(!open)} className="text-white lg:hidden">
//           {open ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {open && (
//         <div className="space-y-4 bg-[#003d82] p-6 lg:hidden">
//           {links.map((link) => (
//             <a key={link.name} href={link.href} className="block text-white">
//               {link.name}
//             </a>
//           ))}

//           <Link
//             href="/register"
//             className="block rounded-lg bg-sky-500 px-5 py-3 text-center text-white"
//           >
//             Open Account
//           </Link>

//           <Link
//             href="/login"
//             className="block rounded-lg border border-white px-5 py-3 text-center text-white"
//           >
//             Online Banking
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }
import React from "react";
import Link from "next/link";

const NavBar = () => {
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
          aria-expanded="false"
          aria-controls="main-nav"
        >
          <span className="hamburger"></span>
        </button>

        <nav
          className="main-nav"
          id="main-nav"
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            <li>
              <Link href="/#hero" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="nav-link">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="mobile-nav-ctas">
            <Link href="/register" className="btn btn-primary btn-full">
              Open Account
            </Link>
            <Link href="/login" className="btn btn-outline-white btn-full">
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
