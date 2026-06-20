import React from "react";
import Banner from "./About/Banner";
import History from "./About/History";
import Industries from "./Home/Industries";
import GetInTouch from "./About/GetInTouch";
import ExploreSolutions from "./CoreValue/ExploreSolutions";
import img12 from "../assets/CoreValue/Rectangle 12.png";
import img13 from "../assets/CoreValue/Rectangle 13.png";
import Ecosystem from "./CoreValue/Ecosystem";

const About = () => {
  return (
    <>
      <Banner />
      <History />
      <GetInTouch />
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
      <Industries type="about" />
      <Ecosystem />
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
    </>
  );
};

export default About;
