import React from "react";
import { Link } from "react-router-dom";

const ExploreSolutions = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  btnText = "Explore Now",
  btnHref = "/solutions",
}) => {
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
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
