import { useState, useEffect } from "react";
import img1 from "../../assets/Industries/Banner/Img1.svg";
import img2 from "../../assets/Industries/Banner/Img2.svg";
import img3 from "../../assets/Industries/Banner/Img3.svg";
import img4 from "../../assets/Industries/Banner/Img4.svg";
import img5 from "../../assets/Industries/Banner/Img5.svg";
import img6 from "../../assets/Industries/Banner/Img6.svg";
import img7 from "../../assets/Industries/Banner/Img7.svg";
import img8 from "../../assets/Industries/Banner/Img8.svg";

// Desktop: original layout
const desktopPairs = [
  {
    width: 200, height: 240,
    circles: [
      { size: 115, left:  0, top: 90,  delay: "0s",   img: img1 },
      { size: 130, left: 58, top: 10,  delay: "0.6s", img: img2 },
    ],
  },
  {
    width: 210, height: 240,
    circles: [
      { size: 148, left:  0, top:   0, delay: "0.2s", img: img3 },
      { size: 108, left: 95, top: 110, delay: "0.8s", img: img4 },
    ],
  },
  {
    width: 200, height: 240,
    circles: [
      { size: 118, left:  0, top: 100, delay: "0.4s", img: img5 },
      { size: 136, left: 58, top:  12, delay: "1.0s", img: img6 },
    ],
  },
  {
    width: 210, height: 240,
    circles: [
      { size: 142, left:  0, top:   5, delay: "0.3s", img: img7 },
      { size: 108, left: 95, top:  95, delay: "1.2s", img: img8 },
    ],
  },
];

// Mobile/tablet (≤1200px): 42.896px circles with proportional positions
const mobilePairs = [
  {
    width: 66, height: 68,
    circles: [
      { size: 42.896, left:  0, top: 24, delay: "0s",   img: img1 },
      { size: 42.896, left: 22, top:  0, delay: "0.6s", img: img2 },
    ],
  },
  {
    width: 70, height: 68,
    circles: [
      { size: 42.896, left:  0, top:  0, delay: "0.2s", img: img3 },
      { size: 42.896, left: 26, top: 24, delay: "0.8s", img: img4 },
    ],
  },
  {
    width: 66, height: 68,
    circles: [
      { size: 42.896, left:  0, top: 24, delay: "0.4s", img: img5 },
      { size: 42.896, left: 22, top:  0, delay: "1.0s", img: img6 },
    ],
  },
  {
    width: 70, height: 68,
    circles: [
      { size: 42.896, left:  0, top:  0, delay: "0.3s", img: img7 },
      { size: 42.896, left: 26, top: 24, delay: "1.2s", img: img8 },
    ],
  },
];

function Banner() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1200
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 1200);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const pairs = isMobile ? mobilePairs : desktopPairs;

  return (
    <section className="ind-banner">
      <div className="ind-banner-text">
        <h1 className="ind-banner-heading">Industries we Empower</h1>
        <p className="ind-banner-sub">
          Transforming operations with intelligent automation and AI across sectors
        </p>
      </div>

      <div className="ind-banner-circles-wrap">
        <div className="ind-banner-pairs">
          {pairs.map((pair, pi) => (
            <div
              key={pi}
              className="ind-banner-pair"
              style={{ width: pair.width, height: pair.height }}
            >
              {pair.circles.map((c, ci) => (
                <div
                  key={ci}
                  className="ind-banner-circle"
                  style={{
                    width:          c.size,
                    height:         c.size,
                    left:           c.left,
                    top:            c.top,
                    animationDelay: c.delay,
                  }}
                >
                  <img src={c.img} alt={`industry-${pi * 2 + ci + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
