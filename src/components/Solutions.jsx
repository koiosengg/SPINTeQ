import React from "react";
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

const Solutions = () => {
  return (
    <>
      <Banner />
      <SolutionCapabilities />
      <Strategy />
      <Architecture />
      <Asset />
      <TransformationSolution />
      <Growth />
      <ZoneOperations />
      <World />
      <Insight />
    </>
  );
};

export default Solutions;
