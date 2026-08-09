import React from "react";
import img from "../../assets/Home/Build/slider-img1.webp";
const AboutOverview = () => {
  const steps = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Vitae Lectus Elementum Vel Massa. Ante Tortor Feugiat.",
    },
    {
      id: 2,
      title: "Lorem Ipsum Dolor Sit Amet",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Vitae Lectus Elementum Vel Massa. Ante Tortor Feugiat.",
    },
    {
      id: 3,
      title: "Lorem Ipsum Dolor Sit Amet",
      desc: "Lorem Ipsum Dolor Sit Amet Consectetur. Vitae Lectus Elementum Vel Massa. Ante Tortor Feugiat.",
    },
  ];

  return (
    <section className="about-overview">
      <div className="about-overview-header">
        <h2 className="about-overview-title">Lorem Ipsum Dolor Sit Amet</h2>
        <p className="about-overview-subtitle">
          Lorem Ipsum Dolor Sit Amet Consectetur. Vitae Lectus Elementum
        </p>
      </div>
      <div className="about-overview-content">
        <div className="about-overview-left">
          <img src={img} alt="Overview" />
        </div>
        <div className="about-overview-right">
          {steps.map((step) => (
            <div className="about-overview-step" key={step.id}>
              <div className="about-overview-step-number">
                <span>{step.id}</span>
              </div>
              <div className="about-overview-step-text">
                <h3 className="about-overview-step-title">{step.title}</h3>
                <p className="about-overview-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
