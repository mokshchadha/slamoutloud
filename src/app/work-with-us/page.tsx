import Footer from "../components/Footer";
import Newsletter from "../components/homepage/Newsletter";

export default function WorkWithUs() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#fb747b]">Work with us</h1>
        <div className="prose prose-lg text-gray-700">

        </div>
      </section>
      <Newsletter />
      <Footer />
    </main>
  );
}
