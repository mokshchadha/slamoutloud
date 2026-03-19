import Header from "./components/homepage/Header";
import Hero from "./components/homepage/Hero";
import VisionMission from "./components/homepage/VisionMission";
import WeareSOL from "./components/homepage/WeareSOL";
import DidYouKnow from "./components/homepage/DidYouKnow";
import OurImpact from "./components/homepage/OurImpact";
import ChildrensHighlight from "./components/homepage/ChildrensHighlight";
import FAQs from "./components/homepage/FAQs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DidYouKnow />
      <WeareSOL />
      <VisionMission />
      <OurImpact />
      <ChildrensHighlight />
      <FAQs />
    </main>
  );
}
