import intel1 from "../../assets/Industries/Intelligence 1.png";
import intel2 from "../../assets/Industries/Intelligence 2.png";

function Intelligence() {
  return (
    <section className="ind-intel">
      <div className="ind-intel-header">
        <p className="problem-label">
          INTELLIGENCE BEYOND SURVEILLANCE SYSTEMS
        </p>
        <h2 className="problem-title  ">
          From Passive Observation <br />
          To Algorithmic Action
        </h2>
      </div>

      <div className="ind-intel-cards">
        <div className="ind-intel-card ind-intel-card--traditional">
          <div className="ind-intel-card-img-wrap">
            <img
              src={intel1}
              alt="Traditional CCTV Infrastructure"
              className="ind-intel-card-img"
            />
          </div>
          <div className="ind-intel-card-content">
            <h3 className="ind-intel-card-title">
              Traditional CCTV Infrastructure
            </h3>
            <p className="ind-intel-card-desc">
              Traditional video infrastructure relies on human attention—a
              fragile, reactive, and unscalable resource.
            </p>
          </div>
        </div>

        <div className="ind-intel-card ind-intel-card--spinteq">
          <div className="ind-intel-card-img-wrap">
            <img
              src={intel2}
              alt="SPINTeQ Algorithmic Vision"
              className="ind-intel-card-img"
            />
          </div>
          <div className="ind-intel-card-content">
            <h3 className="ind-intel-card-title">SPINTeQ Algorithmic Vision</h3>
            <p className="ind-intel-card-desc">
              SPINTeQ deploys advanced neural networks directly to your edge
              devices. We don't just record your environment; we understand it,
              analyze it, and secure it in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intelligence;
