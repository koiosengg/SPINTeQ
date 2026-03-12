import React, { useState, useEffect } from "react";
import Frame1 from "./IntroAnimation/Frame1";
import Frame2 from "./IntroAnimation/Frame2";
import Frame3 from "./IntroAnimation/Frame3";

function IntroAnimation() {
  const frames = [
    { component: Frame1, duration: 12000 },
    { component: Frame2, duration: 7000 },
    { component: Frame3, duration: 5000 },
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (currentFrame >= frames.length) return;

    const timer = setTimeout(() => {
      setCurrentFrame((prev) => prev + 1);
    }, frames[currentFrame].duration);

    return () => clearTimeout(timer);
  }, [currentFrame]);

  if (currentFrame >= frames.length) return null;

  const ActiveFrame = frames[currentFrame].component;

  return <ActiveFrame />;
}

export default IntroAnimation;
