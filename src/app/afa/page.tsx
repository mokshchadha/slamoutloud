import Footer from "../components/Footer";

export default function AFAPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#fb747b]">Our Programmes</h1>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-6">
            We offer various programmes tailored to different age groups and needs, focusing on voice, agency, and creative expression.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Voice For All</li>
            <li>Jijivisha Fellowship</li>
            <li>SOL Academy</li>
          </ul>
        </div>
      </section>
 
      <Footer />
    </main>
  );
}
