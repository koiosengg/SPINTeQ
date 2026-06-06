import React from "react";
import Core from "./Home/Core";
import SolutionCapabilities from "./Solutions/SolutionCapabilities";
import Stack from "./Solutions/Stack";
import clarityIcon from "../assets/Home/Core/Clarity.png";
import AiIcon from "../assets/Home/Core/AI.png";
import flowIcon from "../assets/Home/Core/Flow.png";
import Ecosystem from "./CoreValue/Ecosystem";
import Banner from "./Solutions/Banner";

const solutionsItems = [
  {
    title: "Discover",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <img src={clarityIcon} alt="Clarity" />,
  },
  {
    title: "Design",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <img src={AiIcon} alt="AI" />,
  },
  {
    title: "Digitize",
    desc: "Lorem ipsum dolor sit amet consectetur. At.",
    icon: <img src={AiIcon} alt="AI" />,
  },
  {
    title: "Automate",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    icon: <img src={AiIcon} alt="AI" />,
  },
  {
    title: "Optimize",
    desc: "Lorem ipsum dolor sit amet sit amet",
    icon: <img src={flowIcon} alt="Flow" />,
  },
];

const Solutions = () => {
  return (
    <>
      <Banner />
      <SolutionCapabilities />
      <Stack />
      <Core label="PROCESS FLOW" title="How it works" items={solutionsItems} />
      <Ecosystem />
    </>
  );
};

export default Solutions;
