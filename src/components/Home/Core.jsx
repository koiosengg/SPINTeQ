import clarityIcon from "../../assets/Home/Core/Clarity.webp";
import AiIcon from "../../assets/Home/Core/AI.webp";
import flowIcon from "../../assets/Home/Core/Flow.webp";

const defaultItems = [
  {
    title: "Clarity",
    desc: "Understand and structure your processes",
    icon: <img src={clarityIcon} alt="Clarity" />,
  },
  {
    title: "Intelligent",
    desc: "Apply automation and AI",
    icon: <img src={AiIcon} alt="AI" />,
  },
  {
    title: "Flow",
    desc: "Enable systems to run effortlessly",
    icon: <img src={flowIcon} alt="Flow" />,
  },
];

function Core({
  label = "Core data",
  title = "How SPINTeQ works",
  items = defaultItems,
}) {
  return (
    <section className="core">
      <div className="core-header">
        <p className="problem-label">{label}</p>
        <h2 className="problem-title">{title}</h2>
      </div>
      <div className="core-grid">
        {items.map((item, index) => (
          <div className="core-card" key={index}>
            <div className="core-icon">{item.icon}</div>
            <div className="core-card-info">
              <h3 className="core-card-title">{item.title}</h3>
              <p className="core-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Core;
