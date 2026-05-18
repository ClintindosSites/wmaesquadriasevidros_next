"use client";

import OrcamentoForm from "./OrcamentoForm";
import { event } from "@/lib/gtag";

interface HeroProps {
  service?: {
    title?: string;
  };
}

export default function Hero({ service }: HeroProps) {
  const title = service?.title || "Esquadrias de Alumínio";

  const whatsappMessage =
    "Olá, vim pelo site e gostaria de um orçamento de esquadrias de alumínio";
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
            <span>Fabricação própria sob medida</span>

            <span>Atendimento em BH e região metropolitana</span>

            <span>Equipe especializada em alumínio e vidro</span>

            <span>Instalação com acabamento profissional</span>
          </div>

          <a
            href={`https://wa.me/5531982112125?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            onClick={() => {
              event({
                action: "click_whatsapp",
                category: "Contato",
                label: title,
              });
            }}
          >
            Receba seu orçamento rápido no WhatsApp
          </a>
        </div>

        <div className="cta-form">
          <OrcamentoForm />
        </div>
      </div>
    </section>
  );
}
