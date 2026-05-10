"use client";

import Link from "next/link";

import OrcamentoForm from "./OrcamentoForm";

import { event } from "@/lib/gtag";

export default function CTAFinal() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento para esquadrias de alumínio."
  );

  return (
    <section
      className="cta-final"
      style={{
        backgroundImage: "url('/images/banner-hero.png')",
      }}
    >
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
              href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
              target="_blank"
              className="cta-button"
              onClick={() =>
                event({
                  action: "click_whatsapp_cta_final",
                  category: "Contato",
                  label: "CTA Final",
                  value: 1,
                })
              }
            >
              Solicitar pelo WhatsApp
            </Link>
          </div>

          {/* REDES SOCIAIS */}
          <div className="cta-socials">
            <Link
              href="https://www.instagram.com/wmaesquadriasevidros/"
              target="_blank"
              onClick={() =>
                event({
                  action: "click_instagram",
                  category: "Redes Sociais",
                  label: "Instagram CTA Final",
                  value: 1,
                })
              }
            >
              Instagram
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=61556980601180"
              target="_blank"
              onClick={() =>
                event({
                  action: "click_facebook",
                  category: "Redes Sociais",
                  label: "Facebook CTA Final",
                  value: 1,
                })
              }
            >
              Facebook
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
