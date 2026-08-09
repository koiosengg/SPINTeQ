import React from "react";
import strategyImg from "../../assets/Solutions/Stratergy.webp";

const Strategy = () => {
  const cardsData = [
    {
      id: 1,
      title: "Utilization",
      desc: "Most workshops stall at 55%–60% utilization.",
    },
    {
      id: 2,
      title: "Diminishing Returns",
      desc: "Pushing technicians harder yields diminishing returns.",
    },
    {
      id: 3,
      title: "Information Velocity",
      desc: "The constraint is Information Velocity: the speed at which critical data moves between your stakeholders.",
    },
  ];

  return (
    <section className="solutions-strategy">
      <div className="solutions-strategy-header">
        <p className="problem-label">Vantage WOS Strategic Assets</p>
        <h2 className="problem-title">
          Information Failure, <br />
          Not A Technician Failure
        </h2>
      </div>

      <div className="solutions-strategy-visual">
        <img
          src={strategyImg}
          alt="Strategy Diagram"
          className="solutions-strategy-img"
        />
      </div>

      <div className="solutions-strategy-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="solutions-strategy-card">
            <h3 className="solutions-strategy-card-title">{card.title}</h3>
            <p className="solutions-strategy-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategy;
