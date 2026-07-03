import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import Loss from "./Solutions/Loss";
import SolutionCapabilities from "./Solutions/SolutionCapabilities";
import Strategy from "./Solutions/Strategy";
import Growth from "./Solutions/Growth";
import Architecture from "./Solutions/Architecture";
import Asset from "./Solutions/Asset";
import ZoneOperations from "./Solutions/ZoneOperations";
import Insight from "./Solutions/Insight";
import Banner from "./Solutions/Banner";
import TransformationSolution from "./Solutions/Transformation";
import World from "./Home/World";
import { SolutionsPageStructuredData } from "../structured-data/index.jsx";

const Solutions = () => {
  return (
    <>
      <SEO
        title="Intelligent Solutions — SPINTeQ"
        description="Explore SPINTeQ's end-to-end AI-powered solutions for process design, autonomous decision-making, and operational excellence."
      />
      <Helmet>
        <title>Solutions</title>
        <meta
          name="description"
          content="Explore SPINTeQ's end-to-end AI-powered solutions for process design, autonomous decision-making, and operational excellence."
        />
        <meta property="og:title" content="Intelligent Solutions — SPINTeQ" />
        <meta
          property="og:description"
          content="Explore SPINTeQ's end-to-end AI-powered solutions for process design, autonomous decision-making, and operational excellence."
        />
        <meta property="og:url" content="https://www.spinteq.in/solutions" />
        <link rel="canonical" href="https://www.spinteq.in/solutions" />
      </Helmet>
      <SolutionsPageStructuredData />
      <Banner />
      <Architecture />
      <Asset />
      <ZoneOperations />
      <SolutionCapabilities />
      {/* <Strategy /> */}
      {/* <Loss /> */}
      {/* <Growth /> */}
      <TransformationSolution />
      <World />
      <Insight />
    </>
  );
};

export default Solutions;
