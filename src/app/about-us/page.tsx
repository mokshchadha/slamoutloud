import Hero from "../components/about/Hero";
import WhyExist from "../components/about/WhyExist";
import CoreTeam from "../components/about/CoreTeam";
import Partners from "../components/about/Partners";
import PartnerForm from "../components/about/PartnerForm";
import Footer from "../components/Footer";
import Newsletter from "../components/homepage/Newsletter";

export default function AboutUs() {
  return (
    <main>
      <Hero />
      <WhyExist />
      <CoreTeam />
      <Partners />
      <PartnerForm />
      <Footer />
    </main>
  );
}
