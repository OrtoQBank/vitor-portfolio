import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import DifferenceSection from "./components/DifferenceSection";
import Stats from "./components/Stats";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Hospitals from "./components/Hospitals";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      
      <DifferenceSection />
      <Stats />
      <Specialties />
      <About />
      <TrustBadges />
      <Hospitals />
      
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
