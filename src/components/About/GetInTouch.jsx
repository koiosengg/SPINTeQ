import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="get-in-touch-section">
      <div className="get-in-touch-card">
        <div className="get-in-touch-left">
          <h2 className="get-in-touch-title">Lorem ipsum dolor amet</h2>
          <p className="get-in-touch-desc">
            Turn complexity into clarity. Let your systems think, act, and evolve.
          </p>
        </div>
        <div className="get-in-touch-right">
          <Link to="/contact" className="get-in-touch-btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
