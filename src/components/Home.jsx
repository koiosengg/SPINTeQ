import React from "react";
import Banner from "./Home/Banner";
import Problem from "./Home/Problem";
import Transformation from "./Home/Transformation";
import Industries from "./Home/Industries";
import System from "./Home/System";
import Core from "./Home/Core";
import ExploreSolutions from "./CoreValue/ExploreSolutions";
import img12 from "../assets/CoreValue/Rectangle 12.png";
import img13 from "../assets/CoreValue/Rectangle 13.png";

const Home = () => {
  return (
    <section className="home">
      <Banner />
      <Problem />
      <Transformation />
      <Industries type="home" />
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
      <System />
      <Core />

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
    </section>
  );
};

export default Home;
