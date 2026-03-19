import Hero from "../components/about/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/homepage/Newsletter";

export default function AboutUs() {
  return (
    <main >
      <Hero />
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            Slam Out Loud (SOL) is an award-winning for-profit social enterprise that uses the power of performance and creative arts to build 21st-century skills like creativity, critical thinking, communication, and collaboration in children from underserved communities.
          </p>
          <p className="mb-6">
            We believe that every child should have the opportunity to find their voice and slam out loud!
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
