import React, { useState, useEffect, useRef } from "react";
import Frame0 from "./IntroAnimation/Frame0";
import Frame1 from "./IntroAnimation/Frame1";
import Frame2 from "./IntroAnimation/Frame2";
import Frame3 from "./IntroAnimation/Frame3";
import Frame4 from "./IntroAnimation/Frame4";
import Frame5 from "./IntroAnimation/Frame5";
import Frame6 from "./IntroAnimation/Frame6";
import Frame7 from "./IntroAnimation/Frame7";
import musicFile from "../assets/IntroAnimation/Frame0/Background Music.mp3";

function IntroAnimation({ onFinish }) {
  const frames = [
    { component: Frame1, duration: 12000 },
    { component: Frame2, duration: 7000 },
    { component: Frame3, duration: 5000 },
    { component: Frame4, duration: 7000 },
    { component: Frame5, duration: 6000 },
    { component: Frame6, duration: 6000 },
    { component: Frame7, duration: 6000 },
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;
    if (currentFrame >= frames.length) return;

    const timer = setTimeout(() => {
      setCurrentFrame((prev) => prev + 1);
    }, frames[currentFrame].duration);

    return () => clearTimeout(timer);
  }, [currentFrame, hasStarted]);

  useEffect(() => {
    if (hasStarted && playMusic && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }
  }, [hasStarted, playMusic]);

  useEffect(() => {
    if (currentFrame >= frames.length && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentFrame]);

  if (!hasStarted) {
    return (
      <Frame0
        onYes={() => {
          setPlayMusic(true);
          setHasStarted(true);
        }}
        onNo={() => {
          setPlayMusic(false);
          setHasStarted(true);
        }}
      />
    );
  }

  if (currentFrame >= frames.length) {
    onFinish(); 
    return null;
  }

  const ActiveFrame = frames[currentFrame].component;

  return (
    <>
      <audio ref={audioRef} src={musicFile} />
      <ActiveFrame />
    </>
  );
}

export default IntroAnimation;
