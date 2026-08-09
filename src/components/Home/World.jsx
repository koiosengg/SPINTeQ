import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import StarBg from "../../assets/Home/World/world.webp";
import StarBgResp from "../../assets/Home/World/world-resp.webp";
import StarBgLight from "../../assets/Home/World/world-light.webp";

function World() {
  const { isDark } = useTheme();

  return (
    <section className="world">
      <div className="world-bg">
        <picture>
          {isDark ? (
            <>
              <source media="(max-width: 768px)" srcSet={StarBgResp} />
              <img src={StarBg} alt="Star Background" />
            </>
          ) : (
            <img src={StarBgLight} alt="Star Background" />
          )}
        </picture>
      </div>
      <div className="world-content">
        <h2 className="world-heading">
          We Don't Predict The Future.
          <br />
          We Build It.
        </h2>
        <p className="world-subtitle">
          Partner with us to create intelligent, autonomous solutions that
          drive the next era of innovation.
        </p>
        <Link
          to="/contact"
          className="world-cta"
          style={{ textDecoration: "none" }}
          aria-label="Start your journey today — contact us"
        >
          Start Your Journey Today
        </Link>
      </div>
    </section>
  );
}

export default World;
