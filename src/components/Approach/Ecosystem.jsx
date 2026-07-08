import React from "react";
import logoImg from "../../assets/Footer/Logo.png";

const Ecosystem = () => {
  const orbitSizes = [
    260.684, 363.321, 496.51, 640.802, 811.165, 938.57, 1049.099, 1187.88,
  ];

  const nodes = [
    {
      id: "intelligence",
      label: "Intelligence",
      orbitIndex: 2,
      angle: 175,
      labelPos: "left",
      duration: 40,
    },
    {
      id: "data",
      label: "Data",
      orbitIndex: 1,
      angle: 120,
      labelPos: "bottom",
      duration: 40,
    },
    {
      id: "monitoring",
      label: "Monitoring",
      orbitIndex: 4,
      angle: 55,
      labelPos: "bottom",
      duration: 40,
    },
    {
      id: "automation",
      label: "Automation",
      orbitIndex: 3,
      angle: 345,
      labelPos: "top",
      duration: 40,
    },
    {
      id: "ai",
      label: "AI",
      orbitIndex: 0,
      angle: 265,
      labelPos: "top",
      duration: 40,
    },
  ];

  return (
    <section className="ecosystem">
      <div className="ecosystem-header">
        <span className="problem-label">ECOSYSTEM</span>
        <h2 className="problem-title">How We Build The Ecosystem</h2>
      </div>

      <div className="ecosystem-visual">
        <div className="ecosystem-orbits-container">
          {/* Concentric Orbits — 8 SVGs */}
          <svg
            width="260.684"
            height="262.906"
            viewBox="0 0 263 265"
            fill="none"
            className="ecosystem-orbit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 8,
            }}
          >
            <path
              opacity="0.3"
              d="M131.184 263.748C203.17 263.748 261.526 204.894 261.526 132.295C261.526 59.6953 203.17 0.841797 131.184 0.841797C59.198 0.841797 0.841797 59.6953 0.841797 132.295C0.841797 204.894 59.198 263.748 131.184 263.748Z"
              stroke="url(#p978)"
              strokeWidth="1.68367"
              strokeMiterlimit="10"
            />
            <defs>
              <linearGradient
                id="p978"
                x1="131.141"
                y1="0.314921"
                x2="131.141"
                y2="264.225"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.492" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="363.321"
            height="363.294"
            viewBox="0 0 366 365"
            fill="none"
            className="ecosystem-orbit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 7,
            }}
          >
            <path
              opacity="0.3"
              d="M180.971 364.146C281.294 364.146 363.314 282.819 364.166 182.499C365.016 82.1778 284.378 0.851562 184.053 0.851562C83.7287 0.851562 1.70957 82.1778 0.858242 182.499C0.00690997 282.819 80.6458 364.146 180.971 364.146Z"
              stroke="url(#p957)"
              x1="184.015"
              y1="0.369177"
              x2="184.015"
              y2="364.578"
              strokeWidth="1.70304"
              strokeMiterlimit="10"
            />
            <defs>
              <linearGradient
                id="p957"
                x1="184.015"
                y1="0.369177"
                x2="184.015"
                y2="364.578"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.492" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="496.51"
            height="496.474"
            viewBox="0 0 499 499"
            fill="none"
            className="ecosystem-orbit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 6,
            }}
          >
            <path
              opacity="0.3"
              d="M247.072 497.397C384.174 497.397 496.261 386.258 497.424 249.161C498.589 112.064 388.388 0.923584 251.285 0.923584C114.183 0.923584 2.09613 112.064 0.932712 249.161C-0.230704 386.258 109.969 497.397 247.072 497.397Z"
              stroke="url(#p960)"
              strokeWidth="1.84726"
              strokeMiterlimit="10"
            />
            <defs>
              <linearGradient
                id="p960"
                x1="251.243"
                y1="0.340086"
                x2="251.243"
                y2="497.926"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.492" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="640.802"
            height="646.263"
            viewBox="0 0 643 649"
            fill="none"
            className="ecosystem-orbit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 5,
            }}
          >
            <path
              opacity="0.3"
              d="M321.316 647.178C498.267 647.178 641.717 502.506 641.717 324.046C641.717 145.585 498.267 0.914307 321.316 0.914307C144.363 0.914307 0.914307 145.585 0.914307 324.046C0.914307 502.506 144.363 647.178 321.316 647.178Z"
              stroke="url(#p985)"
              strokeWidth="1.82855"
              strokeMiterlimit="10"
            />
            <defs>
              <linearGradient
                id="p985"
                x1="321.269"
                y1="0.326588"
                x2="321.269"
                y2="647.71"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.492" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            width="811.165"
            height="818.077"
            viewBox="0 0 813 820"
            fill="none"
            className="ecosystem-orbit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 4,
            }}
          >
            <path
              opacity="0.3"
              d="M406.437 818.931C630.434 818.931 812.019 635.798 812.019 409.893C812.019 183.987 630.434 0.854492 406.437 0.854492C182.44 0.854492 0.854614 183.987 0.854614 409.893C0.854614 635.798 182.44 818.931 406.437 818.931Z"
              stroke="url(#p981)"
              strokeWidth="1.70914"
              strokeMiterlimit="10"
            />
            <defs>
              <linearGradient
                id="p981"
                x1="406.393"
                y1="0.330026"
                x2="406.393"
                y2="819.405"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.492" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Logo */}
          <div className="ecosystem-center">
            <div className="ecosystem-logo-inner">
              <img
                src={logoImg}
                alt="SPINTeQ Logo"
                className="ecosystem-logo-img"
              />
            </div>
          </div>

          {/* Orbiting Nodes */}
          {nodes.map((node) => {
            const size = orbitSizes[node.orbitIndex];
            return (
              <div
                key={node.id}
                className="ecosystem-node-wrapper"
                data-orbit={node.orbitIndex}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  "--start-angle": `${node.angle}deg`,
                  "--duration": `${node.duration}s`,
                  zIndex: 20 + node.orbitIndex,
                }}
              >
                <div className="ecosystem-node-content">
                  <div className="ecosystem-node-inner">
                    <div className="ecosystem-dot-glow" />
                    <div className="ecosystem-dot" />
                    {node.label && (
                      <span className={`ecosystem-node-label ${node.labelPos}`}>
                        {node.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
