import React, { useRef, useState, useEffect } from "react";
import Circle from "../../assets/Home/Banner/Circle.png";

const CELL = 120;
const PERSP = 800;
const ROT_DEG = 80;
const cosA = Math.cos((ROT_DEG * Math.PI) / 180);
const sinA = Math.sin((ROT_DEG * Math.PI) / 180);
const SCROLL_SPEED = CELL / 5;

function project(gx, gy, W) {
  const scale = PERSP / (PERSP - gy * sinA);
  return { x: 0.5 * W + (gx - 1.5 * W) * scale, y: gy * cosA * scale };
}

const ContactBanner = () => {
  const circleRef = useRef(null);
  const canvasRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const updateHeight = () => {
    if (!circleRef.current) return;
    // On mobile (≤768px) let CSS control the height — don't apply inline style
    if (window.innerWidth <= 768) {
      setContainerHeight(null);
      return;
    }
    let h = circleRef.current.offsetHeight / 2;
    if (window.innerWidth < 1200) h += 200;
    setContainerHeight(h);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Effect for the grid canvas lines animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let offset = 0;
    let lastTime = null;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    function draw(timestamp) {
      if (lastTime === null) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
      lastTime = timestamp;
      offset = (offset + SCROLL_SPEED * dt) % CELL;
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const maxGY = (H * PERSP) / (cosA * PERSP + H * sinA);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      const numRows = Math.ceil(maxGY / CELL) + 2;
      for (let i = 0; i < numRows; i++) {
        const gy = i * CELL + offset;
        if (gy <= 0 || gy >= maxGY) continue;
        const cy = (gy * cosA * PERSP) / (PERSP - gy * sinA);
        ctx.moveTo(0, cy);
        ctx.lineTo(W, cy);
      }
      const numCols = Math.ceil(W / CELL);
      for (let i = 0; i <= numCols; i++) {
        const gx = W + i * CELL;
        const botX = project(gx, maxGY, W).x;
        ctx.moveTo(i * CELL, 0);
        ctx.lineTo(botX, H);
      }
      ctx.stroke();
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="contact-banner">
      {/* ── Animated glow bg ── */}
      <div className="solutions-banner-rects">
        <div className="sbr sbr-1" />
        <div className="sbr sbr-2" />
        <div className="sbr sbr-3" />
        <div className="sbr sbr-4" />
        <div className="sbr sbr-5" />
      </div>
      <div className="home-banner-lines">
        <canvas ref={canvasRef} className="home-banner-canvas" />
      </div>

      {/* Arc top */}
      <div
        className="contact-banner-container"
        style={containerHeight ? { height: `${containerHeight}px` } : {}}
      >
        <div className="contact-banner-div">
          <img
            ref={circleRef}
            src={Circle}
            alt=""
            role="presentation"
            className="contact-banner-circle circle-left"
            onLoad={updateHeight}
          />
          <img
            src={Circle}
            alt=""
            role="presentation"
            className="contact-banner-circle circle-right"
          />

          <div className="solutions-banner-content">
            <div className="solutions-banner-badge">
              <span>Contact</span>
            </div>
            <div className="solutions-banner-text-group">
              <h1 className="solutions-banner-heading">
                Let's Build The Future <br />
                Together
              </h1>
              <p className="solutions-banner-subtitle">
                Connect with our experts to explore solutions, <br />
                resolve challenges, and accelerate journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form card */}
      <div className="contact-banner-form-wrap">
        <div className="contact-banner-form-container">
          <form className="contact-form">
            <div className="contact-form-container">
              <div className="contact-form-input">
                <label htmlFor="cb-name">Name*</label>
                <input
                  type="text"
                  id="cb-name"
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="cb-email">Email*</label>
                <input
                  type="email"
                  id="cb-email"
                  name="email"
                  placeholder="email@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="cb-message">Message*</label>
                <textarea
                  id="cb-message"
                  name="message"
                  placeholder="Tell us about your project or questions..."
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                name="submit-contact-form"
                className="contact-form-submit-button"
                aria-label="Submit contact form"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
