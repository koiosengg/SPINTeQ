import React, { useState } from "react";
import img1 from "../../assets/Solutions/ZoneOperations/1.png";
import img2 from "../../assets/Solutions/ZoneOperations/2.png";
import img3 from "../../assets/Solutions/ZoneOperations/3.png";
import img3Light from "../../assets/Solutions/ZoneOperations/3-light.png";
import img4 from "../../assets/Solutions/ZoneOperations/4.png";
import img4Light from "../../assets/Solutions/ZoneOperations/4-light.png";
import img5 from "../../assets/Solutions/ZoneOperations/5.png";
import img5Light from "../../assets/Solutions/ZoneOperations/5-light.png";
import img6 from "../../assets/Solutions/ZoneOperations/6.png";
import img6Light from "../../assets/Solutions/ZoneOperations/6-light.png";
import img7 from "../../assets/Solutions/ZoneOperations/7.png";
import img7Light from "../../assets/Solutions/ZoneOperations/7-light.png";
import img8 from "../../assets/Solutions/ZoneOperations/8.png";
import img8Light from "../../assets/Solutions/ZoneOperations/8-light.png";
import { useTheme } from "../../context/ThemeContext";

const tabs = [
  {
    label: "Zone 01 & 02.",
    subtitle: "Intelligent Arrival & Baseline Profiting",
    cards: [
      {
        title: "Gate Keeper",
        desc: "Instantly digitizes vehicle entry. The total Turn-Around Time (TAT) clock is initiated across multi-gate facilities with zero human intervention.",
        image: img8,
        imageLight: img8Light,
        imageAlt: "Gate Keeper",
        fit: "contain",
      },
      {
        title: "Quality Lens",
        desc: "Computer vision scans for pre-existing surface defects, creating a timestamped, visual log to prevent disputes. Syncs directly to the Dealer Management System (DMS).",
        image: img7,
        imageLight: img7Light,
        imageAlt: "Quality Lens",
        fit: "contain",
      },
    ],
  },
  {
    label: "Zone 03.",
    subtitle: "Intelligent Arrival & Baseline Profiting",
    cards: [
      {
        title: "PaintStation AI",
        desc: "Transforms passive physical space into active timeline data. Replaces manual logs with down-to-the-second utilization metrics.",
        image: img1,
        imageAlt: "PaintStation AI",
      },
      {
        title: "The Process Owner",
        desc: "Evolving from physical badges to frictionless behavioral recognition. Identifies the assigned technician (Face Recognition) and clocks specific sub-processes like sanding or spraying (Activity Detection).",
        image: img2,
        imageAlt: "The Process Owner",
      },
      {
        title: "The Idle-Time Activation Curve",
        desc: "The edge rules engine actively disrupts delays, triggering IoT stack lights, sirens, and supervisor SMS alerts before SLAs are breached.",
        image: img3,
        imageLight: img3Light,
        imageAlt: "The Idle-Time Activation Curve",
        lightFit: "contain",
      },
    ],
  },
  {
    label: "Zone 04, 05 & 06.",
    subtitle: "Seamless Flow & Automated Delivery",
    cards: [
      {
        title: "Wash Bay Continuity",
        desc: "Temporal mapping and bottleneck prevention automatically detect excessive queuing, re-routing resources before the final delivery SLA is threatened.",
        image: img4,
        imageLight: img4Light,
        imageAlt: "Wash Bay Continuity",
        lightFit: "contain",
      },
      {
        title: "AI-Validated Inspection",
        desc: "Objective surface scanning guarantees paint consistency and repair quality prior to handover.",
        image: img5,
        imageLight: img5Light,
        imageAlt: "AI-Validated Inspection",
        lightFit: "contain",
      },
      {
        title: "Delivery Logging",
        desc: "Gate-out ANPR closes the TAT loop, generating a finalized digital log with visual evidence of every stage synced to the central server.",
        image: img6,
        imageLight: img6Light,
        imageAlt: "Delivery Logging",
        lightFit: "cover",
      },
    ],
  },
];

const ZoneOperations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useTheme();
  const active = tabs[activeIndex];

  return (
    <section className="solutions-zone">
      {/* Header */}
      <div className="solutions-zone-header">
        <p className="problem-label">
          EVERY VEHICLE. EVERY PROCESS. EVERY SECOND.
        </p>
        <h2 className="problem-title">
          Connected Operations,
          <br />
          Measurable Results
        </h2>
      </div>

      {/* Tabs */}
      <div className="solutions-zone-tabs" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            className={`solutions-zone-tab${i === activeIndex ? " active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div
        className="solutions-zone-panel solutions-zone-fade-in"
        key={activeIndex}
      >
        {/* Subtitle */}
        <p className="solutions-zone-subtitle">{active.subtitle}</p>

        {/* Body: cards list */}
        <div className="solutions-zone-body">
          {active.cards.map((card, i) => (
            <div key={i} className="solutions-growth-card solutions-zone-card">
              <div
                className="solutions-zone-card-image-wrap"
                style={{
                  aspectRatio:
                    card.aspectRatio ||
                    (activeIndex === 0 ? "1984 / 1108" : "304 / 277"),
                  overflow: "hidden",
                  borderRadius: "12px",
                  width: "100%",
                }}
              >
                <img
                  src={
                    isDark
                      ? card.image
                      : card.imageLight || card.image
                  }
                  alt={card.imageAlt}
                  className="solutions-zone-card-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit:
                      !isDark && card.lightFit
                        ? card.lightFit
                        : card.fit || "contain",
                  }}
                />
              </div>
              <div className="solutions-zone-card-info">
                <h3 className="solutions-growth-card-title">{card.title}</h3>
                <p className="solutions-growth-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZoneOperations;
