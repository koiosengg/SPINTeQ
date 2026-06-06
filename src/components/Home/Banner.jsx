import { useEffect, useRef } from "react";
import StarBg from "../../assets/Home/Banner/Star-bg.png";

// --- Perspective grid constants (match previous CSS values) ---
const CELL = 120;        // grid cell size in px
const PERSP = 800;       // CSS perspective value
const ROT_DEG = 80;      // rotateX angle
const cosA = Math.cos((ROT_DEG * Math.PI) / 180);
const sinA = Math.sin((ROT_DEG * Math.PI) / 180);
const SCROLL_SPEED = CELL / 5; // px per second (1 cell every 5s)

/**
 * Project a point (gx, gy) in the virtual 3-wide stage space to canvas coords.
 * Stage width = 3W, starting at x = -W in canvas space.
 * Transform origin = centre-top of stage = (0.5W, 0) in canvas space.
 *
 *  canvas_x = 0.5W + (gx - 1.5W) * scale
 *  canvas_y = gy * cosA * scale
 *  scale     = PERSP / (PERSP - gy * sinA)
 */
function project(gx, gy, W) {
  const scale = PERSP / (PERSP - gy * sinA);
  return {
    x: 0.5 * W + (gx - 1.5 * W) * scale,
    y: gy * cosA * scale,
  };
}

function Banner() {
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
      // Clamp delta so a hidden-tab resume doesn't jump
      const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
      lastTime = timestamp;

      offset = (offset + SCROLL_SPEED * dt) % CELL;

      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // The gy at which canvas_y == H  (solve: gy*cosA*P / (P - gy*sinA) = H)
      const maxGY = (H * PERSP) / (cosA * PERSP + H * sinA);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 1;
      ctx.beginPath();

      // ── Horizontal lines (scroll from top → bottom) ───────────────────────
      // They project to perfectly horizontal lines, so we only need canvas_y.
      const numRows = Math.ceil(maxGY / CELL) + 2;
      for (let i = 0; i < numRows; i++) {
        const gy = i * CELL + offset;
        if (gy <= 0 || gy >= maxGY) continue;
        const cy = (gy * cosA * PERSP) / (PERSP - gy * sinA);
        ctx.moveTo(0, cy);
        ctx.lineTo(W, cy);
      }

      // ── Vertical lines (converge toward vanishing point at (W/2, 0)) ──────
      // At gy=0, scale=1, so canvas_x = gx - W  (stage gx range W..2W → 0..W).
      // We iterate over stage gx from W to 2W in CELL steps.
      const numCols = Math.ceil(W / CELL);
      for (let i = 0; i <= numCols; i++) {
        const gx = W + i * CELL;          // stage-local x
        const topX = i * CELL;            // canvas x at gy≈0 (scale≈1)
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
    <section className="home-banner">
      <div className="home-banner-bg">
        <img src={StarBg} alt="Star Background" />
      </div>
      <div className="home-banner-content">
        <h1 className="home-banner-heading">
          Architecting the Autonomous Enterprise
        </h1>
        <p className="home-banner-subtitle">
          The spiritual anatomy that moves from Effort to Effortless
          Intelligence.
        </p>
        <button className="home-banner-cta">Start your transformation</button>
      </div>
      <div className="home-banner-lines">
        <canvas ref={canvasRef} className="home-banner-canvas" />
      </div>
    </section>
  );
}

export default Banner;
