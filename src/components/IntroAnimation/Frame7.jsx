import React, { useEffect, useState } from "react";

function Frame7() {
  const targetDate = new Date("March 15, 2026 12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTime());
  const [leftAngle, setLeftAngle] = useState(80);
  const [rightAngle, setRightAngle] = useState(260);

  function calculateTime() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Gradient animation
  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    function animate(time) {
      const progress = Math.min((time - start) / duration, 1);

      const newLeft = 80 - (80 + 20) * progress;
      const newRight = 260 + (150 - 260) * progress;

      setLeftAngle(newLeft);
      setRightAngle(newRight);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="frame7">
      <div className="frame7-container">
        <div className="frame7-left">
          <div
            className="frame7-left-box"
            style={{
              background: `linear-gradient(#0d0015, #0d0015) padding-box,
              linear-gradient(${leftAngle}deg,rgb(255,255,255) 0%,rgba(255,255,255,0.2) 10%,rgba(255,255,255,0.2) 0%) border-box`,
            }}
          ></div>
        </div>

        <div className="frame7-text">
          <h2>The Next Phase Begins Soon</h2>

          <p>
            {String(timeLeft.days).padStart(2, "0")} :
            {String(timeLeft.hours).padStart(2, "0")} :
            {String(timeLeft.minutes).padStart(2, "0")} :
            {String(timeLeft.seconds).padStart(2, "0")}
          </p>

          <span>{timeLeft.days} days left</span>
        </div>

        <div className="frame7-right">
          <div
            className="frame7-right-box"
            style={{
              background: `linear-gradient(#0d0015, #0d0015) padding-box,
              linear-gradient(${rightAngle}deg,rgb(255,255,255) 0%,rgba(255,255,255,0.2) 10%,rgba(255,255,255,0.2) 0%) border-box`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Frame7;
