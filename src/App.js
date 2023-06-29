import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { sliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";
import React, { useState } from "react";
import { InfoData } from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={sliderData} />
      <InfoSection {...InfoData} />
    </>
  );
}

export default App;
