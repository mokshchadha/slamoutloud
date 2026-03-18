import Header from "./components/homepage/Header";
import Hero from "./components/homepage/Hero";
import WeareSOL from "./components/homepage/WeareSOL";
import DidYouKnow from "./components/homepage/DidYouKnow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DidYouKnow />
      <WeareSOL />
    </main>
  );
}
