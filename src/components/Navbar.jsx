import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo1 from "../assets/Navbar/Logo1.png";
import Logo2 from "../assets/Navbar/Logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If mobile menu is open, do not hide navbar
      if (isMenuOpen) return;

      // Hide if scrolling down and past 100px threshold, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const links = [
    { path: "/core-value", label: "Values" },
    { path: "/solutions", label: "Solutions" },
    { path: "/industries", label: "Industries" },
    { path: "/about", label: "About Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${isMenuOpen ? "menu-open" : ""} ${!isVisible ? "navbar-hidden" : ""}`}
    >
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src={Logo1}
            className="navbar-logo-1"
            alt="SPINTeQ Logo Part 1"
          />
          <img
            src={Logo2}
            className="navbar-logo-2"
            alt="SPINTeQ Logo Part 2"
          />
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M9.82 9.82a1.25 1.25 0 0 1 1.77 0L18 16.23l6.41-6.41a1.25 1.25 0 1 1 1.77 1.77L19.77 18l6.41 6.41a1.25 1.25 0 0 1-1.77 1.77L18 19.77l-6.41 6.41a1.25 1.25 0 0 1-1.77-1.77L16.23 18l-6.41-6.41a1.25 1.25 0 0 1 0-1.77z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M6.75001 25.905C6.53701 25.905 6.35901 25.8325 6.21601 25.6875C6.07301 25.5425 6.00101 25.364 6.00001 25.152C5.99901 24.94 6.07101 24.762 6.21601 24.618C6.36101 24.474 6.53901 24.4025 6.75001 24.4035H29.25C29.463 24.4035 29.641 24.4755 29.784 24.6195C29.928 24.7635 30 24.942 30 25.155C30 25.368 29.928 25.546 29.784 25.689C29.64 25.832 29.462 25.9035 29.25 25.9035L6.75001 25.905ZM6.75001 18.75C6.53701 18.75 6.35901 18.678 6.21601 18.534C6.07301 18.39 6.00101 18.2115 6.00001 17.9985C5.99901 17.7855 6.07101 17.6075 6.21601 17.4645C6.36101 17.3215 6.53901 17.25 6.75001 17.25H29.25C29.463 17.25 29.641 17.322 29.784 17.466C29.927 17.61 29.999 17.7885 30 18.0015C30.001 18.2145 29.929 18.3925 29.784 18.5355C29.639 18.6785 29.461 18.75 29.25 18.75H6.75001ZM6.75001 11.595C6.53701 11.595 6.35901 11.5235 6.21601 11.3805C6.07201 11.2365 6.00001 11.058 6.00001 10.845C6.00001 10.632 6.07201 10.454 6.21601 10.311C6.36001 10.168 6.53801 10.0965 6.75001 10.0965H29.25C29.463 10.0965 29.641 10.1685 29.784 10.3125C29.927 10.4565 29.999 10.634 30 10.845C30.001 11.056 29.929 11.234 29.784 11.379C29.639 11.524 29.461 11.596 29.25 11.595H6.75001Z"
                fill="white"
              />
            </svg>
          )}
        </button>

        <ul className="navbar-links">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar-link${isActive ? " active" : ""}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contact" className="navbar-contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-mobile-links">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar-mobile-link${isActive ? " active" : ""}`
                }
                onClick={closeMenu}
              >
                <span>{label}</span>
                <span className="navbar-mobile-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-bottom">
          <NavLink
            to="/contact"
            className="navbar-mobile-contact-btn"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="navbar-mobile-copyright">
            ©2026All rights reserved
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
