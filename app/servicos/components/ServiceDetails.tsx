"use client";

import Link from "next/link";

import ServiceGallery from "./ServiceGallery";
import ServiceBenefits from "./ServiceBenefits";

import { event } from "@/lib/gtag";

interface Review {
  name: string;
  text: string;
}

interface Service {
  title: string;
  longDescription: string;
  gallery: string[];
  reviews: Review[];
  benefits?: any;
}

export default function ServiceDetails({ service }: { service: Service }) {
  const whatsappMessage = encodeURIComponent(
    `Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}.`
  );

  return (
    <section className="service-details">
      <div className="container">
        {/* GRID PRINCIPAL */}
        <div className="details-grid">
          {/* TEXO */}
          <div className="details-text">
            <h2>Detalhes sobre {service.title}</h2>

            <p>{service.longDescription}</p>
          </div>

          {/* GALERIA */}
          <div className="details-gallery">
            <ServiceGallery images={service.gallery} title={service.title} />
          </div>

          {/* CTA */}
          <Link
            href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
            className="cta-button"
            target="_blank"
            onClick={() =>
              event({
                action: "click_whatsapp_service_details",
                category: "Contato",
                label: service.title,
                value: 1,
              })
            }
          >
            Solicitar Orçamento no WhatsApp
          </Link>
        </div>

        {/* BENEFÍCIOS */}
        {service.benefits && <ServiceBenefits service={service} />}
      </div>
    </section>
  );
}
