import React from "react";
import Banner from "./About/Banner";
import Brand from "./About/Brand";
import AboutOverview from "./About/AboutOverview";
import Industries from "./Home/Industries";
import Core from "./Home/Core";
import Testimonials from "./Testimonials";
import GetInTouch from "./About/GetInTouch";

import clarityIcon from "../assets/Home/Core/Clarity.png";
import AiIcon from "../assets/Home/Core/AI.png";
import flowIcon from "../assets/Home/Core/Flow.png";

const About = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Industries mode="metrics" />
      <AboutOverview />
      <GetInTouch />
      <Core
        label="THE SHIFT"
        title="How SPINTeQ works"
        items={[
          {
            title: "Effort",
            desc: "Understand and structure your processes",
            icon: <img src={clarityIcon} alt="Effort" />,
          },
          {
            title: "Intelligence",
            desc: "Apply automation and AI",
            icon: <img src={AiIcon} alt="Intelligence" />,
          },
          {
            title: "Flow",
            desc: "Enable systems to run effortlessly",
            icon: <img src={flowIcon} alt="Flow" />,
          },
        ]}
      />
      <Testimonials />
    </>
  );
};

export default About;
