import { Assurance, TrustedPartners, RiskTolerance, Hero } from "../components";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <RiskTolerance />
      <Assurance />
      <TrustedPartners />
    </div>
  );
};

export default Home;
