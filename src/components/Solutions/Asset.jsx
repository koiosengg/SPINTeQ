import React, { useState } from "react";
import asset01 from "../../assets/Solutions/asset-01.webp";
import asset01Light from "../../assets/Solutions/asset-01-light.webp";
import asset02 from "../../assets/Solutions/asset-02.webp";
import asset02Light from "../../assets/Solutions/asset-02-light.webp";
import asset03 from "../../assets/Solutions/asset-03.webp";
import asset03Light from "../../assets/Solutions/asset-03-light.webp";
import { useTheme } from "../../context/ThemeContext";

const defaultTabs = [
  {
    label: "Asset 01.",
    subtitle: "The Unified Command Center Creates a Single Pane of Glass.",
    points: [
      {
        title: "Gate IN/OUT",
        desc: "Complete visibility from Gate-In to Gate-Out.",
      },
      {
        title: "Tracking",
        desc: "Tracks the vehicle journey continuously across every single stakeholder.",
      },
      {
        title: "Result",
        desc: "Result: Zero Billable Minutes leak out of the system.",
      },
    ],
    image: asset01,
    imageLight: asset01Light,
    imageAlt: "Asset 01 – Command Center Dashboard",
    fit: "contain",
  },
  {
    label: "Asset 02.",
    subtitle:
      "Gap Discovery Analysis Pinpoints the Exact Cause of Idle Capacity.",
    points: [
      {
        title: "Tracking Intent",
        desc: "Moving from tracking location to tracking intent.",
      },
      {
        title: "Identification",
        desc: "Identifies exactly why vehicles sit idle in real-time.",
      },
      {
        title: "Communication Breakdowns",
        desc: "Surfaces communication breakdowns before they compound into missed same-day delivery targets.",
      },
    ],
    image: asset02,
    imageLight: asset02Light,
    imageAlt: "Asset 02 – Gap Discovery Analysis",
    fit: "cover",
  },
  {
    label: "Asset 03.",
    subtitle:
      "The ROI Multiplier Proves that a 1% Utilization Gain Yields 2% Revenue Growth.",
    points: [
      {
        title: "Decision Driver",
        desc: "The mathematical 'Decision Driver.'",
      },
      {
        title: "Exponential Profitability",
        desc: "Moving from the current 55%–60% baseline toward an 80%+ target unlocks exponential profitability.",
      },
      {
        title: "Information Velocity",
        desc: "A linear improvement in information velocity creates an outsized multiplier on your bottom line.",
      },
    ],
    image: asset03,
    imageLight: asset03Light,
    imageAlt: "Asset 03 – ROI Multiplier",
    fit: "contain",
  },
];

const Asset = ({
  label = "TURNING IDLE ASSETS INTO GROWTH.",
  title = (
    <>
      Pinpointing Idle Capacity <br />
      To Multiply ROI And Revenue Growth
    </>
  ),
  tabs = defaultTabs,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useTheme();
  const active = tabs[activeIndex];

  return (
    <section className={`solutions-asset ${className}`.trim()}>
      {/* Header */}
      <div className="solutions-asset-header">
        <p className="problem-label">{label}</p>
        <h2 className="problem-title">{title}</h2>
      </div>

      {/* Tabs */}
      <div className="solutions-asset-tabs" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            className={`solutions-asset-tab${i === activeIndex ? " active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div
        className="solutions-asset-panel solutions-asset-fade-in"
        key={activeIndex}
      >
        {/* Subtitle */}
        {active.subtitle && (
          <p className="solutions-asset-subtitle">{active.subtitle}</p>
        )}

        {/* Body: left bullet points + right image */}
        <div className="solutions-asset-body">
          {/* Left – bullet points */}
          <div className="solutions-asset-points">
            {active.points.map((pt, i) => (
              <div key={i} className="solutions-growth-card">
                <h3 className="solutions-growth-card-title">{pt.title}</h3>
                <p className="solutions-growth-card-desc">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Right – image */}
          <div className={`solutions-asset-image-wrap wrap-tab-${activeIndex}`}>
            <img
              src={
                isDark
                  ? active.image
                  : active.imageLight || active.image
              }
              alt={active.imageAlt}
              className={`solutions-asset-image image-tab-${activeIndex} ${
                active.fit
                  ? `object-${active.fit}`
                  : activeIndex === 1
                    ? "object-cover"
                    : "object-contain"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asset;
