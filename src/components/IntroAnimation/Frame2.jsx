import React from "react";
import Ellipse from "../../assets/IntroAnimation/Frame2/Ellipse.png";

function Frame2() {
  return (
    <div className="frame2">
      <img src={Ellipse} alt="Ellipse" className="frame2-ellipse" />

      <h1 className="frame2-container">
        <p>Strength is not only built through action.</p>
        <span>It is built through awareness.</span>
      </h1>
    </div>
  );
}

export default Frame2;
