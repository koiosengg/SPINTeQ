import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const ExploreSolutions = ({
  title,
  description,
  image,
  lightImage,
  imageAlt,
  reverse = false,
  btnText = "Explore Now",
  btnHref = "/solutions",
}) => {
  const { isDark } = useTheme();
  const displayedImage = !isDark && lightImage ? lightImage : image;

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
          <img src={displayedImage} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
