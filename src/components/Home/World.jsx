import StarBg from "../../assets/Home/World/world.png";

function World() {
  return (
    <section className="world">
      <div className="world-bg">
        <img src={StarBg} alt="Star Background" />
      </div>
      <div className="world-content">
        <h2 className="world-heading">
          Start Your Autonomous
          <br />
          Transformation
        </h2>
        <p className="world-subtitle">
          Turn complexity into clarity. Let your systems think, act, and evolve.
        </p>
        <button className="world-cta">Get in Touch</button>
      </div>
    </section>
  );
}

export default World;
