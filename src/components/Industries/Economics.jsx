import React, { useState } from "react";
import roi1 from "../../assets/Industries/Economics/ROI-1.png";
import roi2 from "../../assets/Industries/Economics/ROI-2.png";
import roi3 from "../../assets/Industries/Economics/ROI-3.png";

const slides = [
  {
    title: "Rapid Timing",
    desc: "Dramatically reduce workplace injuries, perimeter breaches, and liability claims through sub-second hazard alerts.",
    image: roi1,
    imageAlt: "ROI – Rapid Timing Dashboard",
  },
  {
    title: "Zero-Leak Revenue",
    desc: "Eliminate blind spots in billing cycles, unscanned transactions, and idle resource windows that quietly drain margin.",
    image: roi2,
    imageAlt: "ROI – Zero-Leak Revenue Analytics",
  },
  {
    title: "Exponential ROI",
    desc: "A 1% improvement in spatial utilization compounds into outsized bottom-line gains — the SPINTeQ multiplier effect.",
    image: roi3,
    imageAlt: "ROI – Exponential Returns Model",
  },
];

function Economics() {
  const [current, setCurrent] = useState(0);

  const isFirst = current === 0;
  const isLast  = current === slides.length - 1;

  const prev = () => { if (!isFirst) setCurrent((c) => c - 1); };
  const next = () => { if (!isLast)  setCurrent((c) => c + 1); };

  const slide = slides[current];

  return (
    <section className="ind-economics">
      {/* Header */}
      <div className="ind-economics-header">
        <p className="ind-economics-label">SMARTER SPACE ECONOMICS</p>
        <h2 className="ind-economics-title">
          Unlocking ROI Through
          <br />
          Spatial Intelligence
        </h2>
      </div>

      {/* Body */}
      <div className="ind-economics-body">
        {/* Left – slide text + arrows */}
        <div className="ind-economics-left">
          <div className="ind-economics-slide ind-economics-fade" key={current}>
            <h3 className="ind-economics-slide-title">{slide.title}</h3>
            <p className="ind-economics-slide-desc">{slide.desc}</p>
          </div>

          <div className="ind-economics-arrows">
            <button
              className={`ind-economics-arrow${!isFirst ? " ind-economics-arrow--active" : ""}`}
              onClick={prev}
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
                  id="mask0_1021_535"
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
                <g mask="url(#mask0_1021_535)">
                  <path
                    d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
            <button
              className={`ind-economics-arrow${!isLast ? " ind-economics-arrow--active" : ""}`}
              onClick={next}
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
                  id="mask0_1021_538"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1021_538)">
                  <path
                    d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Right – image */}
        <div className="ind-economics-right">
          <img
            key={current}
            src={slide.image}
            alt={slide.imageAlt}
            className="ind-economics-img ind-economics-fade"
          />
        </div>
      </div>
      
      {/* Bottom Blur Overlay */}
      <div className="ind-economics-overlay"></div>
    </section>
  );
}

export default Economics;
