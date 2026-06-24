import React, { useState } from "react";
import img1 from "../../assets/Solutions/ZoneOperations/1.png";
import img2 from "../../assets/Solutions/ZoneOperations/2.png";
import img3 from "../../assets/Solutions/ZoneOperations/3.png";
import img4 from "../../assets/Solutions/ZoneOperations/4.png";
import img5 from "../../assets/Solutions/ZoneOperations/5.png";
import img6 from "../../assets/Solutions/ZoneOperations/6.png";
import img7 from "../../assets/Solutions/ZoneOperations/7.png";
import img8 from "../../assets/Solutions/ZoneOperations/8.png";

const tabs = [
  {
    label: "Zone 01 & 02.",
    subtitle: "Intelligent Arrival & Baseline Profiting",
    cards: [
      {
        title: "Gate Keeper",
        desc: "Instantly digitizes vehicle entry. The total Turn-Around Time (TAT) clock is initiated across multi-gate facilities with zero human intervention.",
        image: img8,
        imageAlt: "Gate Keeper",
      },
      {
        title: "Quality Lens",
        desc: "Computer vision scans for pre-existing surface defects, creating a timestamped, visual log to prevent disputes. Syncs directly to the Dealer Management System (DMS).",
        image: img7,
        imageAlt: "Quality Lens",
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
        imageAlt: "The Idle-Time Activation Curve",
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
        imageAlt: "Wash Bay Continuity",
      },
      {
        title: "AI-Validated Inspection",
        desc: "Objective surface scanning guarantees paint consistency and repair quality prior to handover.",
        image: img5,
        imageAlt: "AI-Validated Inspection",
      },
      {
        title: "Delivery Logging",
        desc: "Gate-out ANPR closes the TAT loop, generating a finalized digital log with visual evidence of every stage synced to the central server.",
        image: img6,
        imageAlt: "Delivery Logging",
      },
    ],
  },
];

const ZoneOperations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
              <div className="solutions-zone-card-image-wrap">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="solutions-zone-card-image"
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
