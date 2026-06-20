import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoreValue from "./components/CoreValue";
import Industries from "./components/Industries";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import World from "./components/Home/World";
import Testimonials from "./components/Testimonials";

function ConditionalWorld() {
  const location = useLocation();
  if (location.pathname === "/contact" || location.pathname === "/solutions") {
    return null;
  }
  return <World />;
}

function ConditionalTestimonials() {
  const location = useLocation();
  const allowedPaths = ["/", "/about", "/core-value"];
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
          <Route path="core-value" element={<CoreValue />} />
          <Route path="industries" element={<Industries />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ConditionalWorld />
      <ConditionalTestimonials />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

