import React, { useState } from "react";
import HeroSection from "../components/Herosection";
import {
  homeOjbOne,
  homeOjbTwo,
  homeOjbThree,
} from "../components/InfoSection/Data";
import Info from "../components/InfoSection/Info";
import NavBar from "../components/NavBar";
import Service from "../components/Services/Service";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Info {...homeOjbOne} />
      <Info {...homeOjbTwo} />
      <Service />
      <Info {...homeOjbThree} />
    </>
  );
};

export default Home;
