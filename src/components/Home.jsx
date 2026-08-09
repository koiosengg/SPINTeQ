import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import Banner from "./Home/Banner";
import Problem from "./Home/Problem";
import Transformation from "./Home/Transformation";
import Industries from "./Home/Industries";
import System from "./Home/System";
import Core from "./Home/Core";
import ExploreSolutions from "./Approach/ExploreSolutions";
import img12 from "../assets/Approach/Rectangle 12.webp";
import img12Light from "../assets/Approach/Rectangle 12 light.webp";
import img13 from "../assets/Approach/Rectangle 13.webp";
import img13Light from "../assets/Approach/Rectangle 13 light.webp";
import { HomePageStructuredData } from "../structured-data/index.jsx";

const Home = () => {
  return (
    <>
      <SEO
        title="SPINTeQ — Architecting the Autonomous Enterprise"
        description="SPINTeQ helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation."
      />
      <Helmet>
        <title>SPINTeQ</title>
        <meta
          name="description"
          content="SPINTeQ helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation."
        />
        <meta
          property="og:title"
          content="SPINTeQ — Architecting the Autonomous Enterprise"
        />
        <meta
          property="og:description"
          content="SPINTeQ helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation."
        />
        <meta property="og:url" content="https://www.spinteq.in/" />
        <link rel="canonical" href="https://www.spinteq.in/" />
      </Helmet>
      <HomePageStructuredData />
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
          lightImage={img12Light}
          imageAlt="AI Solution Optimizer Dashboard"
          btnHref="/solutions"
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
          lightImage={img13Light}
          imageAlt="Seven Pillars of Autonomous Operations Diagram"
          btnHref="/industries"
        />
      </section>
    </>
  );
};

export default Home;
