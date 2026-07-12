import React from "react";
import { useTheme } from "../../context/ThemeContext";
import logo1 from "../../assets/Home/Marquee/logo1.png";
import logo1Light from "../../assets/Home/Marquee/logo1-light.png";
import logo2 from "../../assets/Home/Marquee/logo2.png";
import logo2Light from "../../assets/Home/Marquee/logo2-light.png";
import logo3 from "../../assets/Home/Marquee/logo3.png";
import logo3Light from "../../assets/Home/Marquee/logo3-light.png";
import logo4 from "../../assets/Home/Marquee/logo4.png";
import logo4Light from "../../assets/Home/Marquee/logo4-light.png";
import logo5 from "../../assets/Home/Marquee/logo5.png";
import logo5Light from "../../assets/Home/Marquee/logo5-light.png";

const Marquee = () => {
  const { isDark } = useTheme();

  const logos = [
    { src: isDark ? logo1 : logo1Light, alt: "JLR" },
    { src: isDark ? logo2 : logo2Light, alt: "BMW" },
    { src: isDark ? logo3 : logo3Light, alt: "Toyota" },
    { src: isDark ? logo4 : logo4Light, alt: "Hyundai" },
    { src: isDark ? logo5 : logo5Light, alt: "Tata Motors" },
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
