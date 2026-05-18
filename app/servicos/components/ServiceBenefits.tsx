"use client";

import { event } from "@/lib/gtag";

export default function ServiceBenefits({ service }: any) {
  if (!service?.benefits) return null;

  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}.`
  );

  return (
    <section className="service-benefits">
      <div className="container">
        {/* TÍTULO */}
        <div className="benefits-title">
          <h2>{service.benefits.title}</h2>

          <p className="subtitle">{service.benefits.subtitle}</p>
        </div>

        {/* BENEFÍCIOS */}
        <div className="benefits-grid">
          {service.benefits.items.map((item: any, i: number) => (
            <div
              key={i}
              className="benefit-card"
              onMouseEnter={() =>
                event({
                  action: "hover_benefit_card",
                  category: "Benefícios",
                  label: `${service.title} - ${item.title}`,
                  value: i + 1,
                })
              }
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* HIGHLIGHT */}
        <div className="benefits-highlight">
          <p>{service.benefits.highlight}</p>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
          className="cta-button"
          target="_blank"
          onClick={() =>
            event({
              action: "click_whatsapp_benefits",
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
