import React from "react";
import lossImg from "../../assets/Solutions/Loss.png";

const Loss = () => {
  return (
    <section className="solutions-loss">
      <div className="solutions-loss-header">
        <p className="problem-label">WHERE THE VALUE LEAKS</p>
        <h2 className="problem-title">The 4 Pillars Of Traditional Loss</h2>
      </div>

      <div className="solutions-loss-diagram">
        {/* Columns of labels */}
        <div className="solutions-loss-col col-1">
          <span className="solutions-loss-name">Gate &amp; Entry</span>
          <span className="solutions-loss-pill">Loss: 5-8%</span>
        </div>
        <div className="solutions-loss-col col-2">
          <span className="solutions-loss-name">Front Office</span>
          <span className="solutions-loss-pill">Loss: 10%</span>
        </div>
        <div className="solutions-loss-col col-3">
          <span className="solutions-loss-name">Scheduling</span>
          <span className="solutions-loss-pill">Loss: 15%</span>
        </div>
        <div className="solutions-loss-col col-4">
          <span className="solutions-loss-name">Floor Efficiency</span>
          <span className="solutions-loss-pill">Loss: 20%</span>
        </div>

        {/* SVG Arrows row */}
        {/* Arrow 1: Gate & Entry to Leak 1 */}
        <div className="solutions-loss-arrow arrow-1">
          <svg width="212" height="71" viewBox="0 0 212 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 33.234H0V33.734H0.5V33.234ZM208.5 33.234H209V32.734H208.5V33.234ZM208.5 71L211.387 66H205.613L208.5 71ZM0.5 0H0V33.234H0.5H1V0H0.5ZM0.5 33.234V33.734H208.5V33.234V32.734H0.5V33.234ZM208.5 33.234H208V66.5H208.5H209V33.234H208.5Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Arrow 2: Front Office to Leak 2 */}
        <div className="solutions-loss-arrow arrow-2">
          <svg width="115" height="72" viewBox="0 0 115 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 34.5H0V35H0.5V34.5ZM111.5 34.5H112V34H111.5V34.5ZM111.5 72L114.387 67H108.613L111.5 72ZM0.5 0H0V34.5H0.5H1V0H0.5ZM0.5 34.5V35H111.5V34.5V34H0.5V34.5ZM111.5 34.5H111V67.5H111.5H112V34.5H111.5Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Arrow 3: Scheduling to Leak 3 */}
        <div className="solutions-loss-arrow arrow-3">
          <svg width="79" height="72" viewBox="0 0 79 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M77.8867 34.5H78.3867V35H77.8867V34.5ZM2.88672 34.5H2.38672V34H2.88672V34.5ZM2.88672 72L-3.05176e-05 67H5.77347L2.88672 72ZM77.8867 0H78.3867V34.5H77.8867H77.3867V0H77.8867ZM77.8867 34.5V35H2.88672V34.5V34H77.8867V34.5ZM2.88672 34.5H3.38672V67.5H2.88672H2.38672V34.5H2.88672Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Arrow 4: Floor Efficiency to Leak 4 */}
        <div className="solutions-loss-arrow arrow-4">
          <svg width="157" height="72" viewBox="0 0 157 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M155.887 34.5H156.387V35H155.887V34.5ZM2.88672 34.5H2.38672V34H2.88672V34.5ZM2.88672 72L-3.05176e-05 67H5.77347L2.88672 72ZM155.887 0H156.387V34.5H155.887H155.387V0H155.887ZM155.887 34.5V35H2.88672V34.5V34H155.887V34.5ZM2.88672 34.5H3.38672V67.5H2.88672H2.38672V34.5H2.88672Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Pipe background image */}
        <div className="solutions-loss-img-wrap">
          <div className="solutions-loss-fade fade-left"></div>
          <img
            src={lossImg}
            alt="Traditional Loss Pipe Leakage Diagram"
            className="solutions-loss-img"
          />
          <div className="solutions-loss-fade fade-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Loss;
