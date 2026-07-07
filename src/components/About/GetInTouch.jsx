import React, { useEffect, useState, useRef } from "react";

const AnimatedCount = ({ value, start }) => {
  const [currentVal, setCurrentVal] = useState(0);

  // Parse target number and suffix (e.g. "2008" -> 2008 / "", "50K+" -> 50 / "K+")
  const match = value.match(/^([\d,.]+)(.*)$/);
  const target = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;
    const duration = 1500; // 1.5s duration

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * target);

      setCurrentVal(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentVal(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, target]);

  return (
    <span>
      {currentVal}
      {suffix}
    </span>
  );
};

const GetInTouch = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const stats = [
    { value: "2008", label: "Founded" },
    { value: "18+", label: "Experience in Years" },
    { value: "10+", label: "Industries Served" },
    { value: "50K+", label: "Digital Users" },
    { value: "65+", label: "Enterprise Customers" },
  ];

  return (
    <section className="get-in-touch-section" ref={sectionRef}>
      <div className="get-in-touch-card">
        {stats.map((stat, index) => (
          <div className="about-stat-col" key={index}>
            <div className="about-stat-value">
              <AnimatedCount value={stat.value} start={inView} />
            </div>
            <div className="about-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
