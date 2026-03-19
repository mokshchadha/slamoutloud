import Footer from "../components/Footer";
import Hero from "../components/work-with-us/Hero";
import Collaboration from "../components/work-with-us/Collaboration";
import Learning from "../components/work-with-us/Learning";

export default function WorkWithUs() {
  return (
    <main className="min-h-screen pt-5 bg-[#fffcf5]">
      <Hero />
      <Collaboration />
      <Learning/>
      <Footer />
    </main>
  );
}
