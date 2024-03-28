import React from "react";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Projects from "./components/Project/Projects";
import { useScroll, motion, useSpring, useMotionValueEvent } from "framer-motion";

const App = () => {
  return (
    <>
      <div className="overflow-y-scroll no-scrollbar">
        <Navigation />
        <Banner />
        <Projects />
      </div>
    </>
  );
};

export default App;
