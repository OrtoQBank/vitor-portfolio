import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import JornadaSection from "./components/JornadaSection";
import TratamentosSection from "./components/TratamentosSection";
import FaqSection from "./components/FaqSection";
import HospitaisSection from "./components/HospitaisSection";
import DepoimentosSection from "./components/DepoimentosSection";
import LocalizacaoSection from "./components/LocalizacaoSection";
import ContatoSection from "./components/ContatoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <JornadaSection />
      <TratamentosSection />
      <FaqSection />
      <HospitaisSection />
      <DepoimentosSection />
      <LocalizacaoSection />
      <ContatoSection />
    </main>
  );
}
