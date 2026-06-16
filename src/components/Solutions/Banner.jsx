import { useEffect, useRef } from "react";
// import StarBg from "../../assets/Home/Banner/Star-bg.png";

// --- Perspective grid constants (match previous CSS values) ---
const CELL = 120; // grid cell size in px
const PERSP = 800; // CSS perspective value
const ROT_DEG = 80; // rotateX angle
const cosA = Math.cos((ROT_DEG * Math.PI) / 180);
const sinA = Math.sin((ROT_DEG * Math.PI) / 180);
const SCROLL_SPEED = CELL / 5; // px per second (1 cell every 5s)

function project(gx, gy, W) {
  const scale = PERSP / (PERSP - gy * sinA);
  return {
    x: 0.5 * W + (gx - 1.5 * W) * scale,
    y: gy * cosA * scale,
  };
}

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let offset = 0;
    let lastTime = null;

    // Keep canvas pixel size in sync with its CSS size
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

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // The gy at which canvas_y == H
      const maxGY = (H * PERSP) / (cosA * PERSP + H * sinA);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();

      // ── Horizontal lines (scroll from top → bottom) ───────────────────────
      const numRows = Math.ceil(maxGY / CELL) + 2;
      for (let i = 0; i < numRows; i++) {
        const gy = i * CELL + offset;
        if (gy <= 0 || gy >= maxGY) continue;
        const cy = (gy * cosA * PERSP) / (PERSP - gy * sinA);
        ctx.moveTo(0, cy);
        ctx.lineTo(W, cy);
      }

      // ── Vertical lines ────────────────────────────────────────────────────
      const numCols = Math.ceil(W / CELL);
      for (let i = 0; i <= numCols; i++) {
        const gx = W + i * CELL;
        const topX = i * CELL;
        const botX = project(gx, maxGY, W).x;
        ctx.moveTo(topX, 0);
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
    <section className="solutions-banner">
      <div className="home-banner-bg">
        {/* <img src={StarBg} alt="Star Background" /> */}
      </div>

      {/* 5 blurred background rectangles from Figma */}
      <div className="solutions-banner-rects">
        {/* Rect 1 — deep magenta */}
        <div className="sbr sbr-1" />
        {/* Rect 2 — near-black */}
        <div className="sbr sbr-2" />
        {/* Rect 3 — vivid magenta */}
        <div className="sbr sbr-3" />
        {/* Rect 4 — white glow */}
        <div className="sbr sbr-4" />
        {/* Rect 5 — deep blue */}
        <div className="sbr sbr-5" />
      </div>

      <div className="solutions-banner-content">
        <div className="solutions-banner-badge">
          <span>Solutions</span>
        </div>
        <h1 className="solutions-banner-heading">
          Intelligent Solutions for <br />
          The Autonomous Enterprise
        </h1>
        <p className="solutions-banner-subtitle">
          From process design to AI-powered systems, we build end-to-end
          intelligent operations
        </p>
      </div>
      <div className="home-banner-lines">
        <canvas ref={canvasRef} className="home-banner-canvas" />
      </div>
    </section>
  );
};

export default Banner;
