import React from "react";
import imgProcess from "../../assets/CoreValue/Capabilities/image 7.png";
import imgDigitisation from "../../assets/CoreValue/Capabilities/image 8.png";
import imgAutomation from "../../assets/CoreValue/Capabilities/image 9.png";
import imgAI from "../../assets/CoreValue/Capabilities/image 10.png";
import imgAutonomous from "../../assets/CoreValue/Capabilities/Rectangle 2.png";

const capabilities = [
  {
    category: "Process",
    title: "Bringing Clarity to Operations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nam sem in duis nibh parttitor sit sollicitudin sit maecenas.",
    subTags: ["Workflow Design", "Operational Gap Analysis", "Process Optimization", "SOP Development", "Business Process Mapping"],
    image: imgProcess,
  },
  {
    category: "Digitisation",
    title: "Turning Operations into Digital Systems",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nam sem in duis nibh parttitor sit sollicitudin sit maecenas.",
    subTags: [
      "Digital Inspection & Reporting",
      "Data Capture Systems",
      "Document Management",
      "Asset & Inventory Digitisation",
      "Digital Workflow Platforms",
    ],
    image: imgDigitisation,
  },
  {
    category: "Automation",
    title: "Eliminating Repetitive Tasks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nam sem in duis nibh parttitor sit sollicitudin sit maecenas.",
    subTags: ["Workflow Design", "Operational Gap Analysis", "Process Optimization", "SOP Development", "Business Process Mapping"],
    image: imgAutomation,
  },
  {
    category: "Artificial Intelligence",
    title: "Transforming Data into Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nam sem in duis nibh parttitor sit sollicitudin sit maecenas.",
    subTags: ["Workflow Design", "Operational Gap Analysis", "Process Optimization", "SOP Development", "Business Process Mapping"],
    image: imgAI,
  },
  {
    category: "Autonomous Enterprise",
    title: "Future of Intelligent Organisations",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nam sem in duis nibh parttitor sit sollicitudin sit maecenas.",
    subTags: ["Workflow Design", "Operational Gap Analysis", "Process Optimization", "SOP Development", "Business Process Mapping"],
    image: imgAutonomous,
  },
];

const Capabilities = () => (
  <section className="capabilities">
    {capabilities.map((cap, i) => (
      <div className="capability-card" key={i}>
        <div className="capability-left">
          <div className="capability-heading">
            <span className="capability-category">{cap.category}</span>
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
