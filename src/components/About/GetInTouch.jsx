import React from "react";

const GetInTouch = () => {
  const stats = [
    { value: "2008", label: "Founded" },
    { value: "15+", label: "Experience in Years" },
    { value: "10+", label: "Industries Served" },
    { value: "50K+", label: "Digital Users" },
    { value: "10+", label: "Enterprise Customers" },
  ];

  return (
    <section className="get-in-touch-section">
      <div className="get-in-touch-card">
        {stats.map((stat, index) => (
          <div className="about-stat-col" key={index}>
            <div className="about-stat-value">{stat.value}</div>
            <div className="about-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;

