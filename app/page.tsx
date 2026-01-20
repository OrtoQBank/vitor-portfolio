import HeroSection from "./components/HeroSection";
import DifferenceSection from "./components/DifferenceSection";
import PinnedSections from "./components/PinnedSections";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PinnedSections />
      <DifferenceSection />
    </div>
  );
}
