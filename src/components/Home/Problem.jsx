import React from "react";
import CardGrid1 from "../../assets/Home/Banner/card-gridline.png";
import CardGrid2 from "../../assets/Home/Banner/card-gridline1.png";

/* ── Card 1: 4 dots converging toward the center ball ── */
const ConvergingDots = () => {
  const cx = 199;
  const cy = 105;

  // Only 4 dots — bigger size, spread at clean angles
  const dots = [
    { angle: 40, r: 110, delay: 0, size: 6 },
    { angle: 140, r: 105, delay: 1.0, size: 7 },
    { angle: 225, r: 115, delay: 2.0, size: 6 },
    { angle: 320, r: 108, delay: 3.0, size: 7 },
  ];

  return (
    <svg
      className="problem-card-anim-svg"
      viewBox="0 0 398 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {dots.map((dot, i) => {
          const rad = (dot.angle * Math.PI) / 180;
          const startX = cx + Math.cos(rad) * dot.r;
          const startY = cy + Math.sin(rad) * dot.r;
          return (
            <path
              key={`path-${i}`}
              id={`dot-path-${i}`}
              d={`M ${startX.toFixed(2)} ${startY.toFixed(2)} L ${cx} ${cy}`}
              fill="none"
            />
          );
        })}
      </defs>

      {dots.map((dot, i) => {
        const rad = (dot.angle * Math.PI) / 180;
        const startX = cx + Math.cos(rad) * dot.r;
        const startY = cy + Math.sin(rad) * dot.r;

        return (
          <g key={i}>
            {/* Faint dashed trail */}
            <line
              x1={startX.toFixed(2)}
              y1={startY.toFixed(2)}
              x2={cx}
              y2={cy}
              stroke="rgba(140,4,190,0.18)"
              strokeWidth="0.8"
              strokeDasharray="2 6"
            />

            {/* Outer glow halo */}
            <circle r={dot.size * 2.2} fill="rgba(180,100,255,0.15)">
              <animateMotion
                dur="4.5s"
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
                keyTimes="0;0.08;0.88;1"
                keyPoints="0;0.04;0.92;1"
                calcMode="linear"
              >
                <mpath href={`#dot-path-${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0.55;0.45;0"
                keyTimes="0;0.08;0.88;1"
                dur="4.5s"
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Core dot */}
            <circle r={dot.size} fill="rgba(215,175,255,0.95)">
              <animateMotion
                dur="4.5s"
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
                keyTimes="0;0.08;0.88;1"
                keyPoints="0;0.04;0.92;1"
                calcMode="linear"
              >
                <mpath href={`#dot-path-${i}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;1;0.9;0"
                keyTimes="0;0.08;0.88;1"
                dur="4.5s"
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${dot.size};${dot.size};${dot.size * 0.35}`}
                keyTimes="0;0.88;1"
                dur="4.5s"
                begin={`${dot.delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
    </svg>
  );
};

/* ── Card 2: Planets orbiting like a solar system ── */
const OrbitingPlanets = () => {
  const ox = 199;
  const oy = 195;

  return (
    <svg
      className="problem-card-anim-svg"
      viewBox="0 0 398 195"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Yellow planet – outer orbit, radius 178 */}
      <g>
        <g
          style={{
            transformOrigin: `${ox}px ${oy}px`,
            animation: "orbitYellow 10s linear infinite",
          }}
        >
          <circle cx={ox - 178} cy={oy} r="6.5" fill="#c8900d" />
          <circle cx={ox - 178} cy={oy} r="11" fill="rgba(200,144,13,0.22)" />
          <circle
            cx={ox - 178}
            cy={oy}
            r="4"
            fill="none"
            stroke="rgba(212,160,23,0.7)"
            strokeWidth="1.5"
          />
        </g>
      </g>

      {/* Cyan planet – middle orbit, radius 128 */}
      <g>
        <g
          style={{
            transformOrigin: `${ox}px ${oy}px`,
            animation: "orbitCyan 6.5s linear infinite",
          }}
        >
          <circle cx={ox + 128} cy={oy} r="5.5" fill="#00c0f0" />
          <circle cx={ox + 128} cy={oy} r="9" fill="rgba(0,192,240,0.2)" />
          <circle
            cx={ox + 128}
            cy={oy}
            r="3.5"
            fill="none"
            stroke="rgba(0,192,240,0.65)"
            strokeWidth="1.5"
          />
        </g>
      </g>

      {/* Purple planet – inner orbit, radius 82 */}
      <g>
        <g
          style={{
            transformOrigin: `${ox}px ${oy}px`,
            animation: "orbitPurple 4.5s linear infinite",
          }}
        >
          <circle cx={ox} cy={oy - 82} r="5" fill="#7040e0" />
          <circle cx={ox} cy={oy - 82} r="8" fill="rgba(112,64,224,0.22)" />
          <circle
            cx={ox}
            cy={oy - 82}
            r="3"
            fill="none"
            stroke="rgba(120,80,240,0.65)"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </svg>
  );
};

const Problem = () => {
  return (
    <section className="problem">
      <div className="problem-header">
        <span className="problem-label">PROBLEM</span>
        <h2 className="problem-title">
          From Reactive Systems to <br />
          Intelligent Operations
        </h2>
      </div>
      <div className="problem-cards">
        <div className="problem-card">
          <div
            className="problem-card-img"
            style={{ backgroundImage: `url(${CardGrid1})` }}
          >
            <ConvergingDots />
          </div>
          <div className="problem-card-text">
            <h3 className="problem-card-title">Disconnected Operations</h3>
            <p className="problem-card-desc">
              Manual workflows and scattered data slow down decisions and create
              constant friction.
            </p>
          </div>
        </div>
        <div className="problem-card">
          <div
            className="problem-card-img"
            style={{ backgroundImage: `url(${CardGrid2})` }}
          >
            <OrbitingPlanets />
          </div>
          <div className="problem-card-text">
            <h3 className="problem-card-title">Intelligent Systems</h3>
            <p className="problem-card-desc">
              Connected systems with real-time insights and automated
              decision-making
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
