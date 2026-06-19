import React from "react";

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
          <a href={btnHref} className="explore-solutions-btn">
            {btnText}
          </a>
        </div>
        <div className="explore-solutions-img-col">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
