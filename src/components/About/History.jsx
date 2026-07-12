import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import img1Dark from "../../assets/About/Img1.png";
import img1Light from "../../assets/About/img1-light.png";
import img2 from "../../assets/About/Img2.png";
import img3 from "../../assets/About/Img3.png";
import img4 from "../../assets/About/Img4.png";

const History = () => {
  const { isDark } = useTheme();

  const slides = [
    {
      img: isDark ? img1Dark : img1Light,
      title: "18 Years Of Expertiese",
      desc: "For over 18 years, SPINTeQ has been helping organizations transform operations through digital innovation, workflow automation, and intelligent enterprise solutions. We partner with businesses across multiple industry verticals to simplify complexity, improve visibility, enhance productivity, and accelerate growth.",
    },
    {
      img: img2,
      title: "Digital Transformation",
      desc: "Having enabled digital transformation initiatives across Automotive, Manufacturing, Logistics, Industrial Services, Smart Infrastructure, Healthcare, Retail, and Enterprise Services, we understand the operational challenges that modern organizations face.",
    },
    {
      img: img3,
      title: "Next Evolution",
      desc: "Today, SPINTeQ is focused on the next evolution of business transformation - Architecting Autonomous Enterprises through AI, Computer Vision, IoT, Intelligent Automation, and Data-Drivren Decision Systems.",
    },
    {
      img: img4,
      title: "Our Mission",
      desc: "Our mission is simple: help organizations move from manual operations to intelligent operations, and ultimately to autonomous operations.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setCurrent((c) => c - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrent((c) => c + 1);
    }
  };

  const slide = slides[current];

  return (
    <section className="about-history">
      <div className="about-history-container">
        <div className="about-history-header">
          <span className="problem-label">ABOUT SPINTEQ</span>
          <h2 className="about-overview-title">
            <span className="title-gray">Building Smarter Enterprises,</span>
            <br />
            <span className="title-white">Architecting </span>
            <span className="title-purple">Autonomous Enterprises.</span>
          </h2>
        </div>

        <div className="about-history-body">
          <div className="about-history-left">
            <img
              src={slide.img}
              alt={slide.title}
              className="about-history-img"
            />
          </div>

          <div className="about-history-right">
            {/* Progress Indicators */}
            <div className="about-history-progress">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`progress-line ${index === current ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            {/* Slide Content */}
            <div className="about-history-content" key={current}>
              <h3 className="about-history-slide-title">{slide.title}</h3>
              <p className="about-history-slide-desc">{slide.desc}</p>
            </div>

            {/* Navigation Arrows */}
            <div className="about-history-navigation">
              <button
                className={`nav-btn prev${!isFirst ? " active" : ""}`}
                onClick={handlePrev}
                disabled={isFirst}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_history_prev"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      width="24"
                      height="24"
                      transform="matrix(-1 0 0 1 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_history_prev)">
                    <path
                      d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
              <button
                className={`nav-btn next${!isLast ? " active" : ""}`}
                onClick={handleNext}
                disabled={isLast}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_history_next"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      width="24"
                      height="24"
                      transform="matrix(-1 0 0 1 24 0)"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_history_next)">
                    <path
                      d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
