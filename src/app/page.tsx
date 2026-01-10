
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Section 2 */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <img 
            src="/section2.png" 
            alt="Arts Education Statistics - Children get less than 20 hours of arts learning a year" 
            className="w-full max-w-6xl mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
