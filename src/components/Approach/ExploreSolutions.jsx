import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import img12Dark from "../../assets/Approach/Rectangle 12.png";
import img12Light from "../../assets/Approach/Rectangle 12 light.png";
import img13Dark from "../../assets/Approach/Rectangle 13.png";
import img13Light from "../../assets/Approach/Rectangle 13 light.png";

const ExploreSolutions = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  btnText = "Explore Now",
  btnHref = "/solutions",
}) => {
  const { isDark } = useTheme();

  // Swap to light theme images if dark images are passed in light mode
  let displayImage = image;
  if (!isDark) {
    if (image === img12Dark) {
      displayImage = img12Light;
    } else if (image === img13Dark) {
      displayImage = img13Light;
    }
  }

  return (
    <section className={`explore-solutions ${reverse ? "reverse-section" : ""}`}>
      <div className={`explore-solutions-card ${reverse ? "reverse" : ""}`}>
        <div className="explore-solutions-text-col">
          <div className="explore-solutions-text-group">
            <h2 className="explore-solutions-title">{title}</h2>
            <p className="explore-solutions-desc">{description}</p>
          </div>
          <Link
            to={btnHref}
            className="explore-solutions-btn"
            style={{ textDecoration: "none" }}
            aria-label={`${btnText} — navigate to ${btnHref}`}
          >
            {btnText}
          </Link>
        </div>
        <div className="explore-solutions-img-col">
          <img src={displayImage} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
