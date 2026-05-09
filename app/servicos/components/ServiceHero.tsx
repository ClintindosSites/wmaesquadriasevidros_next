"use client";

import Link from "next/link";

export default function ServiceHero({ service }: any) {
  return (
    <section className="hero service-hero">
      {/* 🔥 BACKGROUND DINÂMICO */}
      {service.heroVideo ? (
        <video className="hero-bg" autoPlay loop muted playsInline>
          <source src={service.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <div
          className="hero-bg"
          style={{
            background: `url(${service.heroImage}) center/cover no-repeat`,
            backgroundAttachment: "fixed",
          }}
        />
      )}

      {/* overlay */}
      <div className="overlay" />

      {/* conteúdo */}
      <div className="hero-content">
        <h1>{service.subtitle}</h1>
        <p>{service.description}</p>

        <Link
          href={`https://wa.me/5531992799772?text=Olá, vim pelo site e gostaria de realizar um orçamento de ${service.title}`}
          className="cta-button"
          target="_blank"
        >
          Solicitar Orçamento no WhatsApp
        </Link>
      </div>
    </section>
  );
}
