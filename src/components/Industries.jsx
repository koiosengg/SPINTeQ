import Banner from "./Industries/Banner";
import Intelligence from "./Industries/Intelligence";
import Pillars from "./Industries/Pillars";
import Brain from "./Industries/Brain";
import Economics from "./Industries/Economics";
import ExploreSolutions from "./CoreValue/ExploreSolutions";
import img12 from "../assets/CoreValue/Rectangle 12.png";
// import img13 from "../assets/CoreValue/Rectangle 13.png";
const Industries = () => {
  return (
    <>
      <Banner />
      <Intelligence />
      <Economics />
      <Pillars />
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
      <Brain />
    </>
  );
};

export default Industries;
