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
const FooterArc = ({ className }) => (
  <svg
    className={className}
    width="1440"
    height="580"
    viewBox="0 0 1440 580"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g filter="url(#filter0_d_1416_1447)">
      <path
        d="M1695 1023.5C1695 895.396 1669.77 768.545 1620.74 650.192C1571.72 531.839 1499.87 424.301 1409.28 333.717C1318.7 243.134 1211.16 171.279 1092.81 122.256C974.455 73.232 847.604 48 719.5 48C591.395 48 464.545 73.2321 346.192 122.256C227.839 171.279 120.301 243.134 29.7173 333.717C-60.8663 424.301 -132.721 531.839 -181.745 650.192C-230.768 768.545 -256 895.396 -256 1023.5"
        stroke="url(#paint0_linear_1416_1447)"
        strokeWidth="4"
        fill="none"
      />
    </g>
    <g filter="url(#filter1_d_1416_1447)">
      <path
        d="M1218.13 182.409C1066.99 93.6134 894.708 47.1863 719.412 48.0108C544.115 48.8353 372.28 96.8809 221.977 187.095"
        stroke="url(#paint1_linear_1416_1447)"
        strokeWidth="2"
        fill="none"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1416_1447"
        x="-260"
        y="48"
        width="1959"
        height="983.5"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1416_1447"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1416_1447"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_1416_1447"
        x="151.977"
        y="0"
        width="1136.16"
        height="285.426"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="2.4"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1416_1447"
        />
        <feOffset dy="0" />
        <feGaussianBlur stdDeviation="6.4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.682486 0 0 0 0 0.201923 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1416_1447"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1416_1447"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_1416_1447_strong"
        x="151.977"
        y="0"
        width="1136.16"
        height="285.426"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4.8"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1416_1447"
        />
        <feOffset dy="0" />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.682486 0 0 0 0 0.201923 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1416_1447"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1416_1447"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1416_1447"
        x1="26"
        y1="1007.5"
        x2="1398.5"
        y2="1004.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#010101" />
        <stop offset="0.196244" stopColor="#7404BE" />
        <stop offset="0.487948" stopColor="white" />
        <stop offset="0.8" stopColor="#7404BE" />
        <stop offset="1" stopColor="#010101" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1416_1447"
        x1="26"
        y1="1007.5"
        x2="1398.5"
        y2="1004.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#010101" stopOpacity="0" />
        <stop offset="0.25" stopColor="#010101" stopOpacity="0" />
        <stop offset="0.38" stopColor="#7404BE" stopOpacity="1" />
        <stop offset="0.487948" stopColor="white" stopOpacity="1" />
        <stop offset="0.62" stopColor="#7404BE" stopOpacity="1" />
        <stop offset="0.75" stopColor="#010101" stopOpacity="0" />
        <stop offset="1" stopColor="#010101" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1416_1447_strong"
        x1="26"
        y1="1007.5"
        x2="1398.5"
        y2="1004.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#010101" stopOpacity="0" />
        <stop offset="0.15" stopColor="#010101" stopOpacity="0" />
        <stop offset="0.30" stopColor="#7404BE" stopOpacity="1" />
        <stop offset="0.487948" stopColor="white" stopOpacity="1" />
        <stop offset="0.70" stopColor="#7404BE" stopOpacity="1" />
        <stop offset="0.85" stopColor="#010101" stopOpacity="0" />
        <stop offset="1" stopColor="#010101" stopOpacity="0" />
      </linearGradient>
    </defs>
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
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
      stroke="#8E8E8E"
    />
    <path
      d="M17.5 6.51002L17.51 6.49902"
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
        </div>
      </div>

      <span className="new-footer-watermark" aria-hidden="true">
        SPINTeQ
      </span>

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

          <span className="new-footer-credit">
            Crafted by{" "}
            <a
              href="https://www.koiostudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="new-footer-credit-link"
            >
              Koiostudio
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
