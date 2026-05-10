"use client";
import Link from "next/link";
import OrcamentoForm from "./OrcamentoForm";
import { event } from "@/lib/gtag";

interface CTAFinalProps {
  service?: {
    title?: string;
  };
}

export default function CTAFinal({ service }: CTAFinalProps) {
  const title = service?.title || "Esquadrias de Alumínio";

  const whatsappMessage = encodeURIComponent(
    "Olá, vim pelo site e gostaria de um orçamento de esquadrias de alumínio"
  );

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>
            Transforme seu projeto com esquadrias modernas e acabamento
            profissional
          </h1>

          <p>
            Solicite agora seu orçamento para portas, janelas, fachadas, vidros
            e esquadrias de alumínio sob medida em Belo Horizonte e região.
          </p>

          <Link
            href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
            target="_blank"
            className="cta-button"
            onClick={() =>
              event({
                action: "click_whatsapp",
                category: "Contato",
                label: title,
              })
            }
          >
            Solicitar orçamento pelo Whatsapp
          </Link>
        </div>

        <div className="cta-form">
          <OrcamentoForm />
        </div>
      </div>
    </section>
  );
}
