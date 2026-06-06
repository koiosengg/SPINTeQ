import React from "react";
import Banner from "./Home/Banner";
import Problem from "./Home/Problem";
import Transformation from "./Home/Transformation";
import Industries from "./Home/Industries";
import System from "./Home/System";
import Core from "./Home/Core";
import Build from "./Home/Build";

const Home = () => {
  return (
    <section className="home">
      <Banner />
      <Problem />
      <Transformation />
      <Industries />
      <System />
      <Core />
      <Build />
    </section>
  );
};

export default Home;
