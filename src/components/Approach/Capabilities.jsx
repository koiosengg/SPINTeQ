import React from "react";
import imgProcess from "../../assets/Approach/Capabilities/image 7.png";
import imgDigitisation from "../../assets/Approach/Capabilities/image 8.png";
import imgAutomation from "../../assets/Approach/Capabilities/image 9.png";
import imgAI from "../../assets/Approach/Capabilities/image 10.png";
import imgAutonomous from "../../assets/Approach/Capabilities/Rectangle 2.png";

const capabilities = [
  {
    category: "Process",
    title: "Bringing Clarity to Operations",
    description:
      "Most organizations struggle with fragmented processes, disconnected systems, and limited visibility. We create a unified operational view that enables leaders to understand what is happening across the enterprise in real time, empowering faster and more informed decisions",
    subTags: [
      "Process Optimization",

      "SOP Development",
      "Workflow Design",
      "Operational Gap Analysis",
      "Business Process Mapping",
    ],
    image: imgAutonomous,
  },
  {
    category: "Digitisation",
    title: "Turning Operations into Digital Systems",
    description:
      "Manual processes create delays, errors, and inefficiencies. We digitize workflows, standardize processes, and connect operations through intelligent platforms that ensure consistency, transparency, and scalability.",
    subTags: [
      "Digital Inspection & Reporting",
      "Data Capture Systems",
      "Document Management",
      "Asset & Inventory Digitisation",
      "Digital Workflow Platforms",
    ],
    image: imgProcess,
  },
  {
    category: "Automation",
    title: "Eliminating Repetitive Tasks",
    description:
      "Teams spend valuable time on routine activities that can be automated. Through workflow automation, AI, and intelligent orchestration, we reduce manual intervention and allow people to focus on higher-value work.",
    subTags: ["Process Mapping", "Process Optimization"],
    image: imgDigitisation,
  },
  {
    category: "Artificial Intelligence",
    title: "Transforming Data into Intelligence",
    description:
      "Organizations generate vast amounts of data every day. We convert operational data into actionable intelligence through analytics, dashboards, predictive insights, and AI-powered decision support systems.",
    subTags: [
      "Workflow Design",
      "Operational Gap Analysis",
      "Process Optimization",
      "SOP Development",
      "Business Process Mapping",
    ],
    image: imgAutomation,
  },
  {
    category: "Autonomous Enterprise",
    title: "Future of Intelligent Organisations",
    description:
      "The future belongs to enterprises that can sense, learn, decide, and act in real time. SPINTeQ helps organizations evolve beyond digitization and automation toward autonomous operations powered by AI, Computer Vision, IoT, and intelligent systems.",
    subTags: [
      "Continuous Optimization",
      "Automated Responses",
      "AI Driven Engines",
      "Self Monitoring Systems",
    ],
    image: imgAI,
  },
];

const Capabilities = () => (
  <section className="capabilities">
    {capabilities.map((cap, i) => (
      <div className="capability-card" key={i}>
        <div className="capability-left">
          <div className="capability-heading">
            <span className="problem-label">{cap.category}</span>
            <h3 className="capability-title">{cap.title}</h3>
          </div>
          <p className="capability-desc">{cap.description}</p>
          <div className="capability-sub-tags">
            {cap.subTags.map((tag, ti) => (
              <span className="capability-tag secondary" key={ti}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="capability-right">
          <img src={cap.image} alt={cap.title} />
        </div>
      </div>
    ))}
  </section>
);

export default Capabilities;
