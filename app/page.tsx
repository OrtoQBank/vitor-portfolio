import HeroSection from "./components/HeroSection";
import DifferenceSection from "./components/DifferenceSection";
import PinnedSections from "./components/PinnedSections";
import Hospitals from "./components/Hospitals";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PinnedSections />
      <Hospitals />
      <DifferenceSection />
    </div>
  );
}
