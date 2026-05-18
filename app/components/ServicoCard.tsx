"use client";

import Link from "next/link";

import { event } from "@/lib/gtag";

interface ServicoProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicoCard({
  name,
  description,
  image,
  link,
}: ServicoProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para ${name}.`
  );

  return (
    <div className="servicos-card">
      <div
        className="servico-img"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="servico-text">
        <h3>{name}</h3>

        <p>{description}</p>
      </div>

      <div className="servicos-buttons">
        {/* SAIBA MAIS */}
        <Link
          href={link}
          className="saiba-mais"
          onClick={() =>
            event({
              action: "click_saiba_mais",
              category: "Servicos",
              label: name,
            })
          }
        >
          Saiba Mais
        </Link>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
          target="_blank"
          className="cta-button"
          onClick={() =>
            event({
              action: "click_whatsapp",
              category: "Contato",
              label: name,
            })
          }
        >
          Solicitar Orçamento pelo WhatsApp
        </a>
      </div>
    </div>
  );
}
