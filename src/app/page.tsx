
import Header from "./components/Header";
import Hero from "./components/Hero";
import DidYouKnow from "./components/DidYouKnow";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DidYouKnow />
    </main>
  );
}
