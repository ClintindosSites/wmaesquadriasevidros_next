"use client";

import { event } from "@/lib/gtag";

export default function ServiceHero({ service }: any) {
  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}.`
  );

  return (
    <section className="hero service-hero">
      {/* BACKGROUND */}
      <div
        className="hero-bg"
        style={{
          background: `url(${service.heroImage}) center/cover no-repeat`,
          backgroundAttachment: "fixed",
        }}
      />

      {/* OVERLAY */}
      <div className="overlay" />

      {/* CONTEÚDO */}
      <div className="hero-content container">
        <h1>{service.subtitle}</h1>

        <p>{service.description}</p>

        <a
          href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
          className="cta-button"
          target="_blank"
          onClick={() =>
            event({
              action: "click_whatsapp_service_hero",
              category: "Contato",
              label: service.title,
              value: 1,
            })
          }
        >
          Solicitar Orçamento no WhatsApp
        </a>
      </div>
    </section>
  );
}
