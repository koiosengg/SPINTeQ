import React, { useRef, useState, useEffect } from "react";
import Circle from "../../assets/Home/Banner/Circle.png";
import Stars from "../../assets/Home/Banner/Stars.png";
import Thunder from "../../assets/Home/Banner/Thunder.png";
import Logo from "/Logo.png";

function Banner() {
  const imgRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);

  const updateHeight = () => {
    if (!imgRef.current) return;

    const imgHeight = imgRef.current.offsetHeight;
    let finalHeight = imgHeight / 2;

    if (window.innerWidth < 1200) {
      finalHeight += 200;
    }

    setContainerHeight(finalHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="home-banner">
      <div
        className="home-banner-container"
        style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      >
        <div className="home-banner-div">
          <img
            ref={imgRef}
            src={Circle}
            alt="Circle"
            className="home-banner-circle"
            onLoad={updateHeight}
          />
          <img src={Stars} alt="Stars" className="home-banner-stars" />
          <div className="home-banner-moon"></div>
          <div className="home-banner-glow home-banner-glow-1"></div>
          <div className="home-banner-glow home-banner-glow-2"></div>
          <div className="home-banner-glow home-banner-glow-3"></div>
          <div className="home-banner-heading">
            <div className="home-banner-heading-label">
              <img src={Thunder} alt="Thunder" />
              Launching Soon
            </div>
            <div className="home-banner-heading-text">
              <img src={Logo} alt="Sinteq Logo"/>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-contact">
        <div className="home-banner-contact-container">
          <div className="home-banner-contact-div">
            <form className="home-contact-form">
              <div className="home-contact-form-container">
                <div className="home-contact-form-input">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="home-contact-form-input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="home-contact-form-input">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or questions..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="home-banner-contact-form-button"
                >
                  Submit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_174_1710)">
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
                      <clipPath id="clip0_174_1710">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
            <a href="/" className="home-banner-refresh">
              Reload the experience
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.5 4.625L11.84 3.85719C11.2804 3.26943 10.6071 2.80168 9.86094 2.4824C9.11483 2.16312 8.31155 1.99899 7.5 2C4.1875 2 1.5 4.68751 1.5 8.00001C1.5 11.3125 4.1875 14 7.5 14C8.74094 13.9999 9.95136 13.6152 10.9647 12.8989C11.978 12.1826 12.7444 11.1698 13.1584 10"
                  stroke="#6A7282"
                  strokeWidth="0.75"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
                <path
                  d="M14.4997 2.13901V6.87495C14.4997 6.9081 14.4865 6.9399 14.4631 6.96334C14.4397 6.98678 14.4079 6.99995 14.3747 6.99995H9.63877C9.61403 6.99997 9.58985 6.99265 9.56927 6.97892C9.5487 6.96518 9.53266 6.94565 9.52319 6.9228C9.51372 6.89995 9.51125 6.8748 9.51608 6.85054C9.52091 6.82628 9.53283 6.804 9.55033 6.78651L14.2863 2.05058C14.3038 2.03308 14.326 2.02115 14.3503 2.01632C14.3746 2.01149 14.3997 2.01397 14.4226 2.02344C14.4454 2.03291 14.4649 2.04894 14.4787 2.06952C14.4924 2.09009 14.4997 2.11428 14.4997 2.13901Z"
                  fill="#6A7282"
                />
              </svg>
            </a>
          </div>
          <div className="home-banner-contact-fade"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
