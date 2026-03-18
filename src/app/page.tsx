import Header from "./components/homepage/Header";
import Hero from "./components/homepage/Hero";
import VisionMission from "./components/homepage/VisionMission";
import WeareSOL from "./components/homepage/WeareSOL";
import DidYouKnow from "./components/homepage/DidYouKnow";
import FAQs from "./components/homepage/FAQs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DidYouKnow />
      <WeareSOL />
      <VisionMission />
      <FAQs />
    </main>
  );
}
