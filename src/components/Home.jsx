import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";
import Banner from "./Home/Banner";
import Frame4 from "./IntroAnimation/Frame4";

function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      {!introFinished ? (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      ) : (
        <Banner />
      )}
    </>
  );
}

export default Home;
