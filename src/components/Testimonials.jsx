import React, { useState } from "react";

const Testimonials = () => {
  const list = [
    {
      text: "SPINTeQ transformed our workshop operations with complete process visibility and control",
      author: "- Service Head, Leading Automotive Dealer",
    },
    {
      text: "The automation platform significantly improved productivity and reduced operational bottlenecks",
      author: "- Operations Director",
    },
    {
      text: "Real-time tracking helped us optimize resources and improve customer satisfaction.",
      author: "- General Manager, Automotive Network",
    },
    {
      text: "Real-time tracking helped us optimize resources and improve customer satisfaction.",
      author: "- General Manager, Automotive Network",
    },
    {
      text: "The automation platform significantly improved productivity and reduced operational bottlenecks",
      author: "- Operations Director",
    },
    {
      text: "SPINTeQ transformed our workshop operations with complete process visibility and control",
      author: "- Service Head, Leading Automotive Dealer",
    },
    {
      text: "SPINTeQ transformed our workshop operations with complete process visibility and control",
      author: "- Service Head, Leading Automotive Dealer",
    },
    {
      text: "The automation platform significantly improved productivity and reduced operational bottlenecks",
      author: "- Operations Director",
    },
    {
      text: "Real-time tracking helped us optimize resources and improve customer satisfaction.",
      author: "- General Manager, Automotive Network",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const isFirst = currentPage === 0;
  const isLast = currentPage === 2;

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Slice list into groups of 3 based on currentPage
  const visibleCards = list.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="testimonials-label">TESTIMONIALS</span>
        <h2 className="testimonials-title">What People Say About Us</h2>
      </div>
      <div className="testimonials-grid">
        {visibleCards.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-quote-col">
              <span className="testimonial-quote-mark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24 10C25.5897 10.0053 27.1127 10.6391 28.2368 11.7632C29.3609 12.8873 29.9947 14.4103 30 16C30 17.45 29.694 18.8 28.92 19.912C28.372 20.706 27.428 21.172 26.528 21.672C26.518 23.252 26.538 23.64 27.786 25.718C28.6 27.074 27.032 28.604 25.696 27.758C22.86 25.954 20.928 24.34 19.684 22.438C18.44 20.54 18 18.416 18 16C18.0026 14.4095 18.6356 12.8849 19.7603 11.7603C20.8849 10.6356 22.4095 10.0026 24 10ZM8 10C9.58968 10.0053 11.1127 10.6391 12.2368 11.7632C13.3609 12.8873 13.9947 14.4103 14 16C14 17.45 13.694 18.8 12.92 19.912C12.372 20.706 11.428 21.172 10.528 21.672C10.518 23.252 10.536 23.64 11.786 25.718C12.6 27.074 11.032 28.604 9.696 27.758C6.86 25.954 4.928 24.34 3.684 22.438C2.44 20.54 2 18.416 2 16C2.00264 14.4095 2.63564 12.8849 3.76028 11.7603C4.88493 10.6356 6.40951 10.0026 8 10Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            <div className="testimonial-content-col">
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-navigation">
        <button
          className={`nav-btn prev${!isFirst ? " active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          disabled={isFirst}
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1208_3255_prev"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1208_3255_prev)">
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
        <button
          className={`nav-btn next${!isLast ? " active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          disabled={isLast}
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_1208_3255_next"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1208_3255_next)">
              <path
                d="M7.825 13H20V11H7.825L13.425 5.4L12 4L4 12L12 20L13.425 18.6L7.825 13Z"
                fill="white"
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
