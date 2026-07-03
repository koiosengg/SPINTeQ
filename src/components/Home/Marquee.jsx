import React from "react";
import logo1 from "../../assets/Home/Marquee/logo1.png";
import logo2 from "../../assets/Home/Marquee/logo2.png";
import logo3 from "../../assets/Home/Marquee/logo3.png";
import logo4 from "../../assets/Home/Marquee/logo4.png";
import logo5 from "../../assets/Home/Marquee/logo5.png";

const Marquee = () => {
  const logos = [
    { src: logo1, alt: "JLR" },
    { src: logo2, alt: "BMW" },
    { src: logo3, alt: "Toyota" },
    { src: logo4, alt: "Hyundai" },
    { src: logo5, alt: "Tata Motors" },
  ];

  return (
    <section className="client-marquee-section" aria-label="Our Clients">
      <h2 className="problem-label">OUR CLIENTS</h2>
      <div className="client-marquee-container">
        <div className="client-marquee-group">
          {logos.map((logo, index) => (
            <div className="client-marquee-logo-wrapper" key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="client-marquee-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
