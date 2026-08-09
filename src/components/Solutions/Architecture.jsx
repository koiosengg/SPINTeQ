import React from "react";
import archImg from "../../assets/Solutions/Architecture.webp";
import archImgLight from "../../assets/Solutions/Architecture-light.webp";
import ring27 from "../../assets/Solutions/ring-1.webp";
import ring28 from "../../assets/Solutions/ring-2.webp";
import ring29 from "../../assets/Solutions/ring-3.webp";
import ring30 from "../../assets/Solutions/ring-4.webp";
import ring31 from "../../assets/Solutions/ring-5.webp";
import ring32 from "../../assets/Solutions/ring-6.webp";
import ring33 from "../../assets/Solutions/ring-7.webp";
import whiteBg from "../../assets/Solutions/White.webp";
import whiteOuterBg from "../../assets/Solutions/White-1.webp";
import edgeLabel from "../../assets/Solutions/Edge AI Accelerator.webp";
import routerLabel from "../../assets/Solutions/GIGABIT ROUTER.webp";
import { useTheme } from "../../context/ThemeContext";

const Architecture = () => {
  const { isDark } = useTheme();
  const displayedArchImg = isDark ? archImg : archImgLight;
  return (
    <section className="solutions-architecture">
      <div className="solutions-architecture-container">
        <div className="solutions-architecture-left">
          <p className="solutions-architecture-label">
            THE WAVE PLATFORM ARCHITECTURE
          </p>
          <h2 className="solutions-architecture-title">
            Workflow Automation <br />
            For Visionary Enterprise
          </h2>
          <p className="solutions-architecture-desc">
            Core Differentiator: Real-time processing localized at the edge
            ensures ultra-low latency and absolute operational continuity, even
            during total cloud outages.
          </p>
        </div>

        <div className="solutions-architecture-right">
          <div className="solutions-architecture-diagram">
            {/* Outermost ring with White-1.webp background */}
            <img
              src={whiteOuterBg}
              alt=""
              className="solutions-arch-bg arch-bg-outer"
            />

            {/* Concentric rings background from assets */}
            <img
              src={ring33}
              alt="ring 1"
              className="solutions-arch-ring ring-33"
            />
            <img
              src={ring32}
              alt="ring 2"
              className="solutions-arch-ring ring-32"
            />
            <img
              src={ring31}
              alt="ring 3"
              className="solutions-arch-ring ring-31"
            />
            <img
              src={ring30}
              alt="ring 4"
              className="solutions-arch-ring ring-30"
            />
            <img
              src={ring29}
              alt="ring 5"
              className="solutions-arch-ring ring-29"
            />
            <img
              src={ring28}
              alt="ring 6"
              className="solutions-arch-ring ring-28"
            />

            {/* Innermost ring background with White.webp */}
            <img
              src={whiteBg}
              alt="ring bg"
              className="solutions-arch-ring ring-27 ring-27-bg"
            />
            <img
              src={ring27}
              alt="ring 7"
              className="solutions-arch-ring ring-27"
            />

            {/* Sweeping radar light SVG */}
            <svg
              className="solutions-arch-sweep"
              xmlns="http://www.w3.org/2000/svg"
              width="292"
              height="197"
              viewBox="0 0 292 197"
              fill="none"
            >
              <path
                d="M292 0L0 105.22L280.903 197L292 0Z"
                fill="url(#paint_radar_sweep)"
              />
              <defs>
                <linearGradient
                  id="paint_radar_sweep"
                  x1="-161"
                  y1="99"
                  x2="255.803"
                  y2="76.668"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C45BEB" />
                  <stop offset="1" stopColor="#C45BEB" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central core illustration */}
            <div className="solutions-architecture-img-wrap">
              <img
                src={displayedArchImg}
                alt="The Wave Platform Architecture Diagram"
                className="solutions-architecture-img"
              />
              {/* Text labels overlaid on the image */}
              <img
                src={routerLabel}
                alt="GIGABIT ROUTER"
                className="arch-label-img arch-label-router"
              />
              <img
                src={edgeLabel}
                alt="EDGE AI ACCELERATOR"
                className="arch-label-img arch-label-edge"
              />
            </div>

            {/* Floating text nodes */}
            <div className="solutions-architecture-node node-sensor">
              <h4 className="node-title">Sensor Layer</h4>
              <p className="node-desc">
                4MP ANPR and 3MP Dome cameras capturing raw visual space.
              </p>
            </div>

            <div className="solutions-architecture-node node-network">
              <h4 className="node-title">Network Backbone</h4>
              <p className="node-desc">
                Gigabit routers pooling video feeds via secure, dedicated VLANs.
              </p>
            </div>

            <div className="solutions-architecture-node node-app">
              <h4 className="node-title">Workshop Vision Application</h4>
              <p className="node-desc">Displays, Dashboard and Reports</p>
            </div>

            <div className="solutions-architecture-node node-edge">
              <h4 className="node-title">Edge AI Accelerator</h4>
              <p className="node-desc">
                Ruggedized, IP54+ embedded Linux servers processing computer
                vision models completely on-premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
