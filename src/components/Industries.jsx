import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import Banner from "./Industries/Banner";
import Intelligence from "./Industries/Intelligence";
import Pillars from "./Industries/Pillars";
import Brain from "./Industries/Brain";
import Economics from "./Industries/Economics";
import ExploreSolutions from "./Approach/ExploreSolutions";
import img12 from "../assets/Approach/Rectangle 12.png";
import { IndustriesPageStructuredData } from "../structured-data/index.jsx";
// import img13 from "../assets/CoreValue/Rectangle 13.png";
const Industries = () => {
  return (
    <>
      <SEO
        title="Industries We Serve — SPINTeQ"
        description="SPINTeQ delivers AI-driven solutions across Automotive, Manufacturing, Logistics, Healthcare, Retail, and Enterprise Services."
      />
      <Helmet>
        <title>Industries</title>
        <meta
          name="description"
          content="SPINTeQ delivers AI-driven solutions across Automotive, Manufacturing, Logistics, Healthcare, Retail, and Enterprise Services."
        />
        <meta property="og:title" content="Industries We Serve — SPINTeQ" />
        <meta
          property="og:description"
          content="SPINTeQ delivers AI-driven solutions across Automotive, Manufacturing, Logistics, Healthcare, Retail, and Enterprise Services."
        />
        <meta property="og:url" content="https://www.spinteq.in/industries" />
        <link rel="canonical" href="https://www.spinteq.in/industries" />
      </Helmet>
      <IndustriesPageStructuredData />
      <Banner />
      <Pillars />
      <Brain />
      <Intelligence />
      <Economics />

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
        btnHref="/solutions"
      />
    </>
  );
};

export default Industries;
