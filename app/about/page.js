import AboutCTA from "./components/AboutCTA";
import AboutHero from "./components/AboutHero";
import Founders from "./components/Founders";
import HowWeThink from "./components/HowWeThink";
import MiniwixStory from "./components/MiniwixStory";
import MissionVision from "./components/MissionVision";
import TechnologyPhilosophy from "./components/TechnologyPhilosophy";
import WhatWeBuild from "./components/WhatWeBuild";
import WhoWeAre from "./components/WhoWeAre";

export const metadata = {
  title: "About | MINIWIX",
  description:
    "MINIWIX builds practical software products, developer tools, and modern applications that help turn ideas into real products faster.",
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <WhatWeBuild />
      <MissionVision />
      {/* <Founders /> */}
      <TechnologyPhilosophy />
      <HowWeThink />
      <MiniwixStory />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
