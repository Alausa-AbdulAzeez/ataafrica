import {
  Assurance,
  TrustedPartners,
  RiskTolerance,
  Hero,
  Fee,
} from "../components";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <RiskTolerance />
      <Assurance />
      <TrustedPartners />
      <Fee />
    </div>
  );
};

export default Home;
