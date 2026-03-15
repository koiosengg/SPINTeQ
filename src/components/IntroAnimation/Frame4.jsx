import React from "react";
import Ellipse from "../../assets/IntroAnimation/Frame4/Ellipse.png";

function Frame4() {
  return (
    <div className="frame2 frame4">
      <img src={Ellipse} alt="Ellipse" className="frame2-ellipse frame4-ellipse" />

      <h1 className="frame2-container">
        <p>
          The foundation is <span>stronger.</span>
        </p>
        <p>
          The structure is <span>clearer.</span>
        </p>
        <p>
          The direction is <span>intentional.</span>
        </p>
      </h1>
    </div>
  );
}

export default Frame4;
