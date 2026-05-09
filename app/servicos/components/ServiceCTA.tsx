"use client";

import { ServiceData } from "@/types/service";

interface ServiceCTAProps {
  service: ServiceData;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const whatsappMessage = `Olá, vim pelo site e gostaria de um orçamento para ${service.title}.`;

  return (
    <section className="service-cta">
      {/* BACKGROUND */}
      <div
        className="cta-bg"
        style={{
          backgroundImage: `url(${service.ctaImage})`,
        }}
      />

      {/* OVERLAY */}
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>{service.ctaTitle}</h2>

          <p>{service.ctaDescription}</p>

          <a
            href={`https://wa.me/5531992799772?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Solicitar orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
