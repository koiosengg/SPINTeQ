import { useState } from "react";

const steps = [
  {
    num: "01.",
    title: "Process",
    desc: "Gather information about your business, its structure, goals and policies.",
  },
  {
    num: "02.",
    title: "Data",
    desc: "Connect your data sources and let the system map, clean and structure everything automatically.",
  },
  {
    num: "03.",
    title: "Action",
    desc: "Autonomous agents act on insights triggering workflows, alerts and decisions in real time.",
  },
  {
    num: "04.",
    title: "Feedback",
    desc: "The system learns from every outcome, continuously refining its models and improving accuracy.",
  },
];

function SystemCard({ step, active, onClick }) {
  return (
    <div
      className={`system-card${active ? " system-card--active" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Starfield dots — only visible on active card */}
      {active && (
        <div className="system-card-stars" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="system-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      <span className="system-card-num">{step.num}</span>

      {active ? (
        <div className="system-card-body">
          <h3 className="system-card-title">{step.title}</h3>
          <p className="system-card-desc">{step.desc}</p>
        </div>
      ) : (
        <span className="system-card-side">{step.title}</span>
      )}
    </div>
  );
}

function System() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="system">
      <div className="system-header">
        <p className="system-label">SYSTEM LOGIC</p>
        <h2 className="system-title">
          Systems continuously learn, improve, <br /> and optimize themselves.
        </h2>
      </div>

      <div className="system-cards">
        {steps.map((step, i) => (
          <SystemCard
            key={i}
            step={step}
            active={activeIdx === i}
            onClick={() => setActiveIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default System;
