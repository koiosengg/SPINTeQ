import { useEffect, useRef } from "react";

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

function Banner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
    <section className="home-banner">
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

      {/* ── Content ── */}
      <div className="solutions-banner-content">
        <div className="solutions-banner-badge">
          <span>Effortless Intelligence</span>
        </div>
        <div className="solutions-banner-text-group">
          <h1 className="solutions-banner-heading">
            Architecting the <br />
            Autonomous Enterprise
          </h1>
          <p className="solutions-banner-subtitle">
            The spiritual anatomy that moves from Effort to Effortless
            Intelligence.
          </p>
        </div>
        <div className="home-banner-actions">
          <a
            href="/contact"
            className="home-banner-btn-primary"
            aria-label="Start your transformation journey — contact us"
          >
            Start Your Transformation
          </a>
          <a
            href="/solutions"
            className="home-banner-btn-secondary"
            aria-label="See our intelligent solutions"
          >
            See Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
