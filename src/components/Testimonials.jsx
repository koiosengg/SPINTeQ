import React from "react";

const Testimonials = () => {
  const list = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas faucibus elit convallis potenti molestie mauris tellus in. Nisl nunc sed dictum quis. Amet adipiscing et egestas aenean.",
      author: "K Oiwake",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas faucibus elit convallis potenti molestie mauris tellus in. Nisl nunc sed dictum quis. Amet adipiscing et egestas aenean.",
      author: "E Berhe",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <span className="problem-label">REAL IMPACT</span>
        <h2 className="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonials-grid">
        {list.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-quote-col">
              <span className="testimonial-quote-mark">”</span>
            </div>
            <div className="testimonial-content-col">
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <span className="testimonial-line" />
                <span className="testimonial-name">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
