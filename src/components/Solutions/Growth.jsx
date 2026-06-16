import React from "react";
import growthImg from "../../assets/Solutions/Growth.png";

const Growth = () => {
  const cards = [
    {
      title: "Hidden Workshop",
      desc: "Inside your current footprint, a \"Hidden Workshop\" is operating at a zero capacity.",
    },
    {
      title: "Revenue Light.",
      desc: "This 40% gap is cost-heavy and revenue-light.",
    },
    {
      title: "Nothing",
      desc: "It absorbs real estate, overhead, and utility costs, but contributes nothing to the bottom line due to systemic information gaps.",
    },
  ];

  return (
    <section className="solutions-growth">
      <div className="solutions-growth-header">
        <p className="solutions-growth-label">TURNING IDLE ASSETS INTO GROWTH.</p>
        <h2 className="solutions-growth-title">
          You Are Currently Finding A 40%
          <br />
          'Hidden Workshop' That Produce Zero Yield
        </h2>
      </div>

      <div className="solutions-growth-content">
        <div className="solutions-growth-cards">
          {cards.map((card, i) => (
            <div key={i} className="solutions-growth-card">
              <h3 className="solutions-growth-card-title">{card.title}</h3>
              <p className="solutions-growth-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="solutions-growth-visual">
          <div className="solutions-growth-blueprint-wrapper">
            <img
              src={growthImg}
              alt="Workshop Blueprint"
              className="solutions-growth-blueprint-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
