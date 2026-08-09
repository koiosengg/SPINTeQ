import React from "react";
import insightBg from "../../assets/Solutions/Insight.webp";
import insightBgLight from "../../assets/Solutions/Insight-light.webp";
import { useTheme } from "../../context/ThemeContext";

const Insight = () => {
  const { isDark } = useTheme();

  return (
    <section className="solutions-insight">
      <div className="solutions-insight-content">
        {/* Header */}
        <div className="solutions-insight-header">
          <p className="problem-label">ONE BRAIN, EVERY INSIGHT</p>
          <h2 className="problem-title">
            The Architecture Of <br />
            Data-Driven Leadership
          </h2>
        </div>

        {/* Central Graphic */}
        <div className="solutions-insight-image-wrap">
          <img
            src={isDark ? insightBg : insightBgLight}
            alt="Insight Architecture"
            className="solutions-insight-image"
          />
        </div>

        {/* Pillars / Cards */}
        <div className="solutions-insight-pillars">
          <div className="solutions-insight-card solutions-growth-card">
            <h3 className="solutions-growth-card-title">
              Pillar 1 : The 2X Scope
            </h3>
            <p className="solutions-growth-card-desc">
              Reclaiming the 40% Hidden Workshop by turning cost-heavy blind
              spots into revenue generating bays.
            </p>
          </div>
          <div className="solutions-insight-card solutions-growth-card">
            <h3 className="solutions-growth-card-title">
              Pillar 2 : Information Velocity
            </h3>
            <p className="solutions-growth-card-desc">
              Saving resource time on status chasing and manual data entry so
              the tam focuses 100% on vehicle throughput
            </p>
          </div>
          <div className="solutions-growth-card solutions-insight-card">
            <h3 className="solutions-growth-card-title">
              Pillar 3 : Data Driven Leadership
            </h3>
            <p className="solutions-growth-card-desc">
              Utilizing real-time Command Center dashboard identify bottlenecks
              before they break same day delivery targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
