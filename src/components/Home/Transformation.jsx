import React from "react";
import fileIcon from "../../assets/Home/Banner/Vector.svg";

const arrowSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.5 4.5C3.60457 4.5 4.5 3.60457 4.5 2.5C4.5 1.39543 3.60457 0.5 2.5 0.5C1.39543 0.5 0.5 1.39543 0.5 2.5C0.5 3.60457 1.39543 4.5 2.5 4.5Z"
      stroke="#59D499"
    />
    <path
      d="M2.5 15.5C3.60457 15.5 4.5 14.6046 4.5 13.5C4.5 12.3954 3.60457 11.5 2.5 11.5C1.39543 11.5 0.5 12.3954 0.5 13.5C0.5 14.6046 1.39543 15.5 2.5 15.5Z"
      stroke="#59D499"
    />
    <path
      d="M11.5 15.5C12.6046 15.5 13.5 14.6046 13.5 13.5C13.5 12.3954 12.6046 11.5 11.5 11.5C10.3954 11.5 9.5 12.3954 9.5 13.5C9.5 14.6046 10.3954 15.5 11.5 15.5Z"
      stroke="#59D499"
    />
    <path d="M2.5 12V4" stroke="#59D499" />
    <path
      d="M12 12V4.5H11V12H12ZM9.5 2H8V3H9.5V2ZM12 4.5C12 4.1717 11.9353 3.84661 11.8097 3.54329C11.6841 3.23998 11.4999 2.96438 11.2678 2.73223C11.0356 2.50009 10.76 2.31594 10.4567 2.1903C10.1534 2.06466 9.8283 2 9.5 2V3C9.89782 3 10.2794 3.15804 10.5607 3.43934C10.842 3.72064 11 4.10218 11 4.5H12Z"
      fill="#59D499"
    />
    <path d="M9 5V0L6 2.5L9 5Z" fill="#59D499" />
  </svg>
);

const timelineItems = [
  {
    text: "Systems run independently",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
          fill="#A485FF"
        />
        <path
          d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
          stroke="#A485FF"
        />
      </svg>
    ),
  },
  {
    text: "Enable predictive decisions",
    icon: arrowSvg,
  },
  {
    text: "Turn operations into data",
    icon: arrowSvg,
  },
  {
    text: "Structure workflows",
    icon: arrowSvg,
  },
];

const Transformation = () => {
  return (
    <section className="transformation">
      <div className="transformation-header">
        <span className="problem-label">TRANSFORMATION</span>
        <h2 className="problem-title">
          A Clear Path to <br />
          Autonomous Systems
        </h2>
      </div>
      <div className="transformation-card">
        <div className="transformation-left">
          <div className="transformation-icon">
            <img src={fileIcon} alt="Workflow diagram icon" />
          </div>
          <div className="transformation-text">
            <h3 className="transformation-subtitle">The Journey</h3>
            <p className="transformation-desc">
              Each stage builds toward a system that can think, act, and improve
              on its own.
            </p>
          </div>
        </div>

        <div className="transformation-right">
          <div className="transformation-scroll-container">
            <div className="transformation-scroll-track">
              {/* Render items 3 times for a seamless loop */}
              {[1, 2, 3].map((groupNum) =>
                timelineItems.map((item, index) => (
                  <React.Fragment key={`group-${groupNum}-${index}`}>
                    <div className="transformation-row">
                      <div className="transformation-step-icon">
                        {item.icon}
                      </div>
                      <div className="transformation-step">
                        <span>{item.text}</span>
                      </div>
                    </div>
                    <div className="transformation-segment" />
                  </React.Fragment>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
