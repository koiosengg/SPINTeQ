import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import Banner from "./About/Banner";
import History from "./About/History";
import Industries from "./Home/Industries";
import GetInTouch from "./About/GetInTouch";
import ExploreSolutions from "./Approach/ExploreSolutions";
import img12 from "../assets/Approach/Rectangle 12.webp";
import img12Light from "../assets/Approach/Rectangle 12 light.webp";
import img13 from "../assets/Approach/Rectangle 13.webp";
import img13Light from "../assets/Approach/Rectangle 13 light.webp";
import Ecosystem from "./Approach/Ecosystem";
import { AboutPageStructuredData } from "../structured-data/index.jsx";

const About = () => {
  return (
    <>
      <SEO
        title="About SPINTeQ — Building Smarter Enterprises"
        description="Founded in 2008, SPINTeQ has 15+ years of experience helping 10+ industries achieve digital transformation and autonomous operations."
      />
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Founded in 2008, SPINTeQ has 15+ years of experience helping 10+ industries achieve digital transformation and autonomous operations."
        />
        <meta
          property="og:title"
          content="About SPINTeQ — Building Smarter Enterprises"
        />
        <meta
          property="og:description"
          content="Founded in 2008, SPINTeQ has 15+ years of experience helping 10+ industries achieve digital transformation and autonomous operations."
        />
        <meta property="og:url" content="https://www.spinteq.in/about" />
        <link rel="canonical" href="https://www.spinteq.in/about" />
      </Helmet>
      <AboutPageStructuredData />
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
        lightImage={img12Light}
        imageAlt="AI Solution Optimizer Dashboard"
        btnHref="/solutions"
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
        lightImage={img13Light}
        imageAlt="Seven Pillars of Autonomous Operations Diagram"
        btnHref="/industries"
      />
    </>
  );
};

export default About;
