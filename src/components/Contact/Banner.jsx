import React, { useRef, useState, useEffect } from "react";
import Circle from "../../assets/Home/Banner/Circle.png";
import Stars from "../../assets/Home/Banner/Stars.png";
import Thunder from "../../assets/Home/Banner/Thunder.png";

const ContactBanner = () => {
  const circleRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const updateHeight = () => {
    if (!circleRef.current) return;
    // On mobile (≤768px) let CSS control the height — don't apply inline style
    if (window.innerWidth <= 768) {
      setContainerHeight(null);
      return;
    }
    let h = circleRef.current.offsetHeight / 2;
    if (window.innerWidth < 1200) h += 200;
    setContainerHeight(h);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="contact-banner">
      {/* Arc top */}
      <div
        className="contact-banner-container"
        style={containerHeight ? { height: `${containerHeight}px` } : {}}
      >
        <div className="contact-banner-div">
          <img
            ref={circleRef}
            src={Circle}
            alt="Circle"
            className="contact-banner-circle"
            onLoad={updateHeight}
          />
          <img src={Stars} alt="Stars" className="contact-banner-stars" />
          <div className="contact-banner-moon" />

          <div className="contact-banner-heading">
            <div className="contact-banner-heading-text">
              <h1>Contact &amp; Support</h1>
              <p>
                The spiritual anatomy that moves from Effort to Effortless
                Intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form card */}
      <div className="contact-banner-form-wrap">
        <div className="contact-banner-form-container">
          <div className="contact-banner-form-div">
            <form className="contact-form">
              <div className="contact-form-container">
                <div className="contact-form-input">
                  <label htmlFor="cb-name">Name</label>
                  <input
                    type="text"
                    id="cb-name"
                    name="name"
                    placeholder="Name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact-form-input">
                  <label htmlFor="cb-email">Email</label>
                  <input
                    type="email"
                    id="cb-email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="contact-form-input">
                  <label htmlFor="cb-message">Message</label>
                  <textarea
                    id="cb-message"
                    name="message"
                    placeholder="Tell us about your project or questions..."
                    rows="4"
                    required
                  />
                </div>
                <button type="submit" className="contact-form-submit-button">
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#cbclip)">
                      <path
                        d="M9.69021 14.4575C9.71554 14.5206 9.75957 14.5744 9.81639 14.6118C9.87322 14.6492 9.94011 14.6683 10.0081 14.6665C10.0761 14.6648 10.1419 14.6423 10.1968 14.6021C10.2516 14.5618 10.2928 14.5058 10.3149 14.4415L14.6482 1.77479C14.6695 1.71571 14.6736 1.65179 14.66 1.59049C14.6463 1.52919 14.6154 1.47305 14.571 1.42864C14.5266 1.38423 14.4705 1.35338 14.4092 1.33971C14.3479 1.32604 14.2839 1.33012 14.2249 1.35145L1.55821 5.68479C1.49388 5.70685 1.43783 5.74806 1.39759 5.8029C1.35736 5.85774 1.33486 5.92357 1.33312 5.99156C1.33138 6.05955 1.35047 6.12645 1.38785 6.18327C1.42523 6.24009 1.47909 6.28412 1.54221 6.30945L6.82888 8.42945C6.996 8.49636 7.14785 8.59643 7.27526 8.72361C7.40266 8.85079 7.503 9.00245 7.57021 9.16945L9.69021 14.4575Z"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.5697 1.4314L7.27637 8.72406"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="cbclip">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className="contact-banner-fade" />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
