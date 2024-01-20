import React from "react";
import Hero from "../components/Hero";
import RiskTolerance from "../components/RiskTolerance";
import { Assurance } from "../components";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <RiskTolerance />
      <Assurance />
    </div>
  );
};

export default Home;
