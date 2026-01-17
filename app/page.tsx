import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import DifferenceSection from "./components/DifferenceSection";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustBadges />
      <DifferenceSection />
      <Stats />
    </div>
  );
}
