import StarBg from "../../assets/Home/World/world.png";
import StarBgResp from "../../assets/Home/World/world-resp.png";

function World() {
  return (
    <section className="world">
      <div className="world-bg">
        <picture>
          <source media="(max-width: 768px)" srcSet={StarBgResp} />
          <img src={StarBg} alt="Star Background" />
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
        <button className="world-cta">Start Your Journey Today</button>
      </div>
    </section>
  );
}

export default World;
