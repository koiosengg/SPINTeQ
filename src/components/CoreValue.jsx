import React from "react";
import Banner from "./CoreValue/Banner";
import Transformation from "./CoreValue/Transformation";
import Ecosystem from "./CoreValue/Ecosystem";
import Capabilities from "./CoreValue/Capabilities";
import ExploreSolutions from "./CoreValue/ExploreSolutions";
import img12 from "../assets/CoreValue/Rectangle 12.png";
import img13 from "../assets/CoreValue/Rectangle 13.png";

const CoreValue = () => {
  return (
    <>
      <Banner />
      <Transformation />
      <Capabilities />
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
      <Ecosystem />
      {/* Section 2: Explore Solutions (Reversed Layout) */}
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
        reverse={true}
      />
    </>
  );
};

export default CoreValue;
