import React from "react";

const Banner = () => (
  <section className="core-value-banner">
    <div className="core-value-banner-lines">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="core-value-banner-lines-svg"
      >
        <defs>
          <linearGradient id="cv-lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="240"
          x2="1440"
          y2="240"
          stroke="url(#cv-lineGrad)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="280"
          x2="1440"
          y2="280"
          stroke="url(#cv-lineGrad)"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="310"
          x2="1440"
          y2="310"
          stroke="url(#cv-lineGrad)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="240"
          x2="200"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="400"
          y1="240"
          x2="400"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="600"
          y1="240"
          x2="600"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="800"
          y1="240"
          x2="800"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="1000"
          y1="240"
          x2="1000"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="1200"
          y1="240"
          x2="1200"
          y2="320"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <rect
          x="180"
          y="260"
          width="40"
          height="20"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="580"
          y="250"
          width="40"
          height="30"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect
          x="980"
          y="270"
          width="40"
          height="20"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>
    </div>
    <div className="core-value-banner-content">
      <h1 className="core-value-banner-heading">
        Engineering
        <br />
        Intelligent Transformation
      </h1>
      <p className="core-value-banner-subtitle">
        From fragmented operations to autonomous enterprises
      </p>
    </div>
  </section>
);

export default Banner;
