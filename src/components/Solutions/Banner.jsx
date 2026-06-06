import React from "react";

const Banner = () => {
  return (
    <section className="solutions-banner">
      <div className="solutions-banner-grid">
        <div className="solutions-grid-content-wrapper">
          {/* Horizontal lines */}
          <div className="solutions-grid-horizontals">
            {Array.from({ length: 13 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="solutions-grid-horizontal-line"
              />
            ))}
          </div>

          {/* Vertical lines */}
          <div className="solutions-grid-verticals">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="solutions-grid-vertical-line"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="solutions-banner-content">
        <h1 className="solutions-banner-heading">
          <span className="solutions-banner-purple">Intelligent Solutions</span>{" "}
          for the Autonomous Enterprise
        </h1>
        <p className="solutions-banner-subtitle">
          From process design to AI-powered systems, we build end-to-end
          intelligent operations
        </p>
      </div>
    </section>
  );
};

export default Banner;
