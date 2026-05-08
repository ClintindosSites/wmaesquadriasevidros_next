import Link from "next/link";
import OrcamentoForm from "./OrcamentoForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>
            Esquadrias de Alumínio Premium Sob Medida para sua Casa ou Empresa
          </h1>
          <p>
            Desde 2008 transformando ambientes com esquadrias modernas,
            resistentes e sob medida.
          </p>
          <div className="checklist">
            <span>Fabricação própria sob medida </span>
            <span>Atendimento em BH e região metropolitana</span>
            <span>Equipe especializada em alumínio e vidro</span>
            <span>Instalação com acabamento profissional</span>
          </div>
          <Link href={"#"} className="cta-button">
            Receba seu orçamento rápido no WhatsApp
          </Link>
        </div>
        <div className="cta-form">
          <OrcamentoForm />
        </div>
      </div>
    </section>
  );
}
