import React from "react";
import DesktopBackground from "../../assets/IntroAnimation/Frame3/Desktop Background.png";
import Glare1 from "../../assets/IntroAnimation/Frame3/Glare1.png";
import Glare2 from "../../assets/IntroAnimation/Frame3/Glare2.png";
import MobileBackground from "../../assets/IntroAnimation/Frame3/Mobile Background.png";

function Frame3() {
  return (
    <div className="frame3">
      <div className="frame3-background">
        <img
          src={DesktopBackground}
          alt="Desktop Background"
          className="frame3-background desktop"
        />
        <img
          src={MobileBackground}
          alt="Mobile Background"
          className="frame3-background mobile"
        />
      </div>
      <div className="frame3-glare">
        <div className="frame3-glare-container">
          <img src={Glare1} alt="Glare 1" />
          <img src={Glare2} alt="Glare 2" />
        </div>
      </div>
      <div className="frame3-text">
        <div className="frame3-text-container">
          <h2>
            <span> SPINTeQ</span>
            <br className="mobile" /> has been in that space.
          </h2>
          <p>Reflecting. Refining. Re-centering.</p>
        </div>
        <div className="frame3-text-line">
          <div className="frame3-text-line-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Frame3;
