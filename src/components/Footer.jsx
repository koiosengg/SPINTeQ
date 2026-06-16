import React from "react";

const NAV_LINKS = [
  { label: "Values", href: "/core-value" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "T&C", href: "/terms" },
];

/* ── Footer arc SVG ──────────────────────────────── */
const ARC_PATH =
  "M1695 975.5C1695 847.396 1669.77 720.545 1620.74 602.192C1571.72 483.839 1499.87 376.301 1409.28 285.717C1318.7 195.134 1211.16 123.279 1092.81 74.2555C974.455 25.232 847.604 -5.59962e-06 719.5 0C591.395 5.59963e-06 464.545 25.2321 346.192 74.2555C227.839 123.279 120.301 195.134 29.7173 285.717C-60.8663 376.301 -132.721 483.839 -181.745 602.192C-230.768 720.545 -256 847.396 -256 975.5H-248.616C-248.616 848.365 -223.575 722.475 -174.922 605.018C-126.27 487.561 -54.9592 380.837 34.9387 290.939C124.837 201.041 231.561 129.73 349.018 81.0776C466.475 32.4252 592.365 7.38416 719.5 7.38416C846.635 7.38415 972.525 32.4252 1089.98 81.0776C1207.44 129.73 1314.16 201.041 1404.06 290.939C1493.96 380.837 1565.27 487.561 1613.92 605.018C1662.57 722.475 1687.62 848.365 1687.62 975.5H1695Z";

const FooterArc = ({ className }) => (
  <svg
    className={className}
    width="1440"
    height="532"
    viewBox="0 0 1440 532"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient
        id="footer-arc-gradient"
        x1="26" y1="959.5" x2="1398.5" y2="956.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010101" />
        <stop offset="0.196244" stopColor="#7404BE" />
        <stop offset="0.487948" stopColor="white" />
        <stop offset="0.8" stopColor="#7404BE" />
        <stop offset="1" stopColor="#010101" />
      </linearGradient>
    </defs>

    <path d={ARC_PATH} fill="url(#footer-arc-gradient)" />
  </svg>
);


/* ── Social SVG icons ─────────────────────────────── */
const IconFacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
      stroke="#8E8E8E"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284Z"
      stroke="#8E8E8E"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
      stroke="#8E8E8E"
    />
    <path
      d="M17.5 6.51002L17.51 6.49902"
      stroke="#8E8E8E"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
  >
    <path
      d="M13.3597 9.959L20.6378 1.4375H18.9128L12.595 8.83631L7.54648 1.4375H1.72461L9.35774 12.627L1.72461 21.5625H3.44961L10.1225 13.7483L15.4542 21.5625H21.276L13.3597 9.959ZM10.9979 12.7248L10.2245 11.6107L4.07061 2.74562H6.71992L11.685 9.90006L12.4584 11.0141L18.9142 20.3148H16.2649L10.9979 12.7248Z"
      fill="#8E8E8E"
    />
  </svg>
);

function Footer() {
  return (
    <footer className="new-footer">
      {/* ── Arc + watermark zone ── */}
      <div className="new-footer-arc-container">
        <div className="new-footer-arc-div">
          <FooterArc className="new-footer-arc-circle" />

          <span className="new-footer-watermark" aria-hidden="true">
            SPINTeQ
          </span>
        </div>
      </div>

      <div className="new-footer-bottom">
        {/* ── Nav links ── */}
        <nav className="new-footer-nav" aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="new-footer-nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── Bottom bar ── */}
        <div className="new-footer-bar">
          <span className="new-footer-copy">©2026 All rights reserved</span>

          <div className="new-footer-socials">
            <a href="#" className="new-footer-social" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" className="new-footer-social" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="#" className="new-footer-social" aria-label="X / Twitter">
              <IconX />
            </a>
          </div>

          <span className="new-footer-credit">Crafted by Koiostudio</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
