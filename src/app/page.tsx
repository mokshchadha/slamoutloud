import Header from "./components/homepage/Header";
import Hero from "./components/homepage/Hero";
import VisionMission from "./components/homepage/VisionMission";
import WeareSOL from "./components/homepage/WeareSOL";
import DidYouKnow from "./components/homepage/DidYouKnow";
import OurImpact from "./components/homepage/OurImpact";
import ChildrensHighlight from "./components/homepage/ChildrensHighlight";
import Programmes from "./components/homepage/Programmes";
import FAQs from "./components/homepage/FAQs";
import DonateAndJoin from "./components/homepage/DonateAndJoin";
import PartnersAndFeature from "./components/homepage/PartnersAndFeature";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DidYouKnow />
      <WeareSOL />
      <FAQs />
      <VisionMission />
      <OurImpact />
      <ChildrensHighlight />
      <Programmes />
      <PartnersAndFeature />
      <DonateAndJoin />
    </main>
  );
}
