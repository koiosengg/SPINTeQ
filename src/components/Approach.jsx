import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import Banner from "./Approach/Banner";
import Transformation from "./Approach/Transformation";
import Ecosystem from "./Approach/Ecosystem";
import Capabilities from "./Approach/Capabilities";
import ExploreSolutions from "./Approach/ExploreSolutions";
import img12 from "../assets/Approach/Rectangle 12.png";
import img12Light from "../assets/Approach/Rectangle 12 light.png";
import img13 from "../assets/Approach/Rectangle 13.png";
import img13Light from "../assets/Approach/Rectangle 13 light.png";
import { ApproachPageStructuredData } from "../structured-data/index.jsx";

const Approach = () => {
  return (
    <>
      <SEO
        title="Approach — SPINTeQ"
        description="Discover SPINTeQ's approach: Engineering Intelligent Transformation from fragmented operations to autonomous enterprises."
      />
      <Helmet>
        <title>Approach</title>
        <meta
          name="description"
          content="Discover SPINTeQ's approach: Engineering Intelligent Transformation from fragmented operations to autonomous enterprises."
        />
        <meta property="og:title" content="Approach — SPINTeQ" />
        <meta property="og:description" content="Discover SPINTeQ's approach: Engineering Intelligent Transformation from fragmented operations to autonomous enterprises." />
        <meta property="og:url" content="https://www.spinteq.in/approach" />
        <link rel="canonical" href="https://www.spinteq.in/approach" />
      </Helmet>
      <ApproachPageStructuredData />
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
        lightImage={img12Light}
        imageAlt="AI Solution Optimizer Dashboard"
        btnHref="/solutions"
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
        lightImage={img13Light}
        imageAlt="Seven Pillars of Autonomous Operations Diagram"
        reverse={true}
        btnHref="/industries"
      />
    </>
  );
};

export default Approach;
