import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import DifferenceSection from "./components/DifferenceSection";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Hospitals from "./components/Hospitals";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Specialties />
      <TrustBadges />
      <Hospitals />
      <FAQ />
      <DifferenceSection />
    </div>
  );
}
