import React from "react";
import Banner from "./About/Banner";
import Brand from "./About/Brand";
import AboutOverview from "./About/AboutOverview";
import Industries from "./Home/Industries";
import Core from "./Home/Core";
import Testimonials from "./Testimonials";
import GetInTouch from "./About/GetInTouch";
import Problem from "./Home/Problem";
import Transformation from "./Home/Transformation";
import clarityIcon from "../assets/Home/Core/Clarity.png";
import AiIcon from "../assets/Home/Core/AI.png";
import flowIcon from "../assets/Home/Core/Flow.png";
import ExploreSolutions from "./CoreValue/ExploreSolutions";
import img12 from "../assets/CoreValue/Rectangle 12.png";
import img13 from "../assets/CoreValue/Rectangle 13.png";
import System from "./Home/System";

const About = () => {
  return (
    <>
      <Banner />
      <Problem />
      <Transformation />
      {/* Section 1: Explore Solutions (Standard Layout) */}
      <ExploreSolutions
        title={
          <>
            Solutions That Drive <span>Autonomous Business</span> Growth
          </>
        }
        description="Explore intelligent solutions designed to solve complex operational challenges."
        image={img12}
        imageAlt="AI Solution Optimizer Dashboard"
      />
      <Industries />
      <System />
      {/* Section 2: Explore Solutions */}
      <ExploreSolutions
        title={
          <>
            Discover <span>How AI Powers</span> Industry - Wide Operational
            Excellence
          </>
        }
        description="See how AI transforms safety, efficiency, and operational performance."
        image={img13}
        imageAlt="Seven Pillars of Autonomous Operations Diagram"
      />
      <Brand />
      <AboutOverview />
      <GetInTouch />
      <Core
        label="THE SHIFT"
        title="How SPINTeQ works"
        items={[
          {
            title: "Effort",
            desc: "Understand and structure your processes",
            icon: <img src={clarityIcon} alt="Effort" />,
          },
          {
            title: "Intelligence",
            desc: "Apply automation and AI",
            icon: <img src={AiIcon} alt="Intelligence" />,
          },
          {
            title: "Flow",
            desc: "Enable systems to run effortlessly",
            icon: <img src={flowIcon} alt="Flow" />,
          },
        ]}
      />
      <Testimonials />
    </>
  );
};

export default About;
