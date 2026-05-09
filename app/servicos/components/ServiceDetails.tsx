import ServiceGallery from "./ServiceGallery";
import ServiceBenefits from "./ServiceBenefits";
import Link from "next/link";

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
  return (
    <section className="service-details">
      <div className="container">
        {/* 🔥 GRID PRINCIPAL */}
        <div className="details-grid">
          {/* TEXTO + BENEFÍCIOS */}
          <div className="details-text">
            <h2>Detalhes sobre {service.title}</h2>
            <p>{service.longDescription}</p>
          </div>

          {/* GALERIA */}
          <div className="details-gallery">
            <ServiceGallery images={service.gallery} title={service.title} />
          </div>
          <Link
            href={`https://wa.me/5531992799772?text=Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}`}
            className="cta-button"
            target="_blank"
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
