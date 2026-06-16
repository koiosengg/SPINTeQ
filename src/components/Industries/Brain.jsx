import React from "react";
import brainImg from "../../assets/Industries/Brain.png";

function Brain() {
  return (
    <section className="ind-brain">
      <div className="ind-brain-header">
        <p className="ind-brain-label">ONE BRAIN, EVERY INSIGHT</p>
        <h2 className="ind-brain-heading">
          Omnipresent Intelligence. <br />
          Singular Control.
        </h2>
      </div>

      <div className="ind-brain-visual-wrap">
        <img
          src={brainImg}
          alt="Omnipresent Intelligence - SPINTeQ Sentient Operational Fabric"
          className="ind-brain-img"
        />
        <p className="ind-brain-description">
          SPINTeQ doesn't just offer isolated point-solutions. We weave multiple
          AI models into a unified, sentient operational fabric. One platform.
          Total spatial awareness.
        </p>
      </div>
    </section>
  );
}

export default Brain;
