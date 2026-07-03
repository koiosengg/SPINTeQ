import React, { useEffect, useState } from "react";
import Background from "../../assets/IntroAnimation/Frame5/Background.png";

function Frame5() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let count = 0;

      const interval = setInterval(() => {
        count++;

        if (count >= 3) {
          clearInterval(interval);
        } else {
          setActiveIndex(count);
        }
      }, 1000);

    }, 2000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="frame5">
      <img src={Background} alt="Background" className="frame5-background" />

      <div className="frame5-container">
        <p>Now, we step forward.</p>

        <div className="frame5-container-text">
          <h2 className={activeIndex === 0 ? "frame5-active-text" : ""}>
            New Idea.
          </h2>

          <h2 className={activeIndex === 1 ? "frame5-active-text" : ""}>
            New Energy.
          </h2>

          <h2 className={activeIndex === 2 ? "frame5-active-text" : ""}>
            New Strength.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Frame5;