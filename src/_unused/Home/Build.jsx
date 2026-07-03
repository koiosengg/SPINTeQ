import img1 from "../../assets/Home/Build/slider-img1.png";
import img2 from "../../assets/Home/Build/slider-img2.png";
import img3 from "../../assets/Home/Build/slider-img3.png";
import img4 from "../../assets/Home/Build/slider-img4.png";
import img5 from "../../assets/Home/Build/slider-img5.png";

const images = [img1, img2, img3, img4, img5];

function Build() {
  return (
    <section className="build">
      <div className="build-header">
        <span className="build-label">WHAT WE BUILD</span>
        <h2 className="build-title">
          Built to Simplify
          <br />
          Designed to Scale
        </h2>
      </div>

      <div className="build-slider-wrapper">
        <div className="build-slider-track">
          {/* Group 1 */}
          <div className="build-slider-group">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Build slide ${i + 1}`}
                className="build-slide-img"
              />
            ))}
          </div>
          {/* Group 2 — identical clone for seamless loop */}
          <div className="build-slider-group" aria-hidden="true">
            {images.map((src, i) => (
              <img key={`c${i}`} src={src} alt="" className="build-slide-img" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Build;
