import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Approach from "./components/Approach";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import World from "./components/Home/World";
import Testimonials from "./components/Testimonials";
import NotFound from "./components/NotFound";
import Marquee from "./components/Home/Marquee";

function ConditionalWorld() {
  const location = useLocation();
  if (location.pathname === "/contact" || location.pathname === "/solutions") {
    return null;
  }
  return <World />;
}

function ConditionalMarquee() {
  const location = useLocation();
  const allowedPaths = ["/", "/approach", "/about"];
  if (allowedPaths.includes(location.pathname)) {
    return <Marquee />;
  }
  return null;
}

function ConditionalTestimonials() {
  const location = useLocation();
  const allowedPaths = ["/", "/about", "/approach"];
  if (allowedPaths.includes(location.pathname)) {
    return <Testimonials />;
  }
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="approach" element={<Approach />} />
          <Route path="industries" element={<Industries />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ConditionalWorld />
      <ConditionalMarquee />
      <ConditionalTestimonials />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

