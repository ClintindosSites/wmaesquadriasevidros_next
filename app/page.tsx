import AreaAtendimento from "./components/AreaAtendimento";
import FAQ from "./components/FAQ";
import GaleriaObras from "./components/GaleriaObras";
import Hero from "./components/Hero";
import Oferta from "./components/Oferta";
import Orçamento from "./components/Orçamento";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Sobre />
      <GaleriaObras />
      <Oferta />
      <AreaAtendimento />
      <FAQ />
      <Orçamento />
    </>
  );
}
