"use client";

import Link from "next/link";
import OrcamentoForm from "./OrcamentoForm";

export default function CTAFinal() {
  return (
    <section
      className="cta-final"
      style={{
        backgroundImage: "url('/images/banner-hero.png')",
      }}
    >
      <div className="cta-overlay"></div>

      <div className="container cta-container">
        {/* TEXTO */}
        <div className="cta-content">
          <span className="cta-badge">Solicite seu orçamento</span>

          <h2>
            Transforme seu projeto com esquadrias modernas e acabamento
            profissional
          </h2>

          <p>
            Solicite agora seu orçamento para portas, janelas, fachadas, vidros
            e esquadrias de alumínio sob medida em Belo Horizonte e região.
          </p>

          <div className="cta-buttons">
            <Link
              href="https://wa.me/553135828296"
              target="_blank"
              className="cta-button"
            >
              Solicitar pelo WhatsApp
            </Link>
          </div>

          {/* REDES SOCIAIS */}
          <div className="cta-socials">
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>

            <Link href="https://facebook.com" target="_blank">
              Facebook
            </Link>

            <Link href="https://linkedin.com" target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* FORM */}
        <div className="cta-form">
          <OrcamentoForm />
        </div>
      </div>
    </section>
  );
}
