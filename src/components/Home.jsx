import React, { useEffect, useState } from "react";
import IntroAnimation from "./IntroAnimation";
import Banner from "./Home/Banner";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 49000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <IntroAnimation />
      ) : (
        <>
          <Banner />
        </>
      )}
    </>
  );
}

export default Home;
