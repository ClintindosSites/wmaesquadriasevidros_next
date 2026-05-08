import AreaAtendimento from "./components/AreaAtendimento";
import FAQ from "./components/FAQ";
import GaleriaObras from "./components/GaleriaObras";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import CTAFinal from "./components/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Sobre />
      <GaleriaObras />
      <AreaAtendimento />
      <FAQ />
      <CTAFinal />
    </>
  );
}
