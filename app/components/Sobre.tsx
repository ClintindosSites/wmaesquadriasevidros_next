"use client";

import Image from "next/image";
import Link from "next/link";

import { event } from "@/lib/gtag";

export default function Sobre() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento."
  );

  return (
    <section className="sobre">
      <div className="container sobre-container">
        {/* TEXTO */}
        <div className="sobre-content">
          <span className="sobre-badge">
            Desde 2008 entregando qualidade e acabamento profissional
          </span>

          <h2>Tradição, qualidade e projetos sob medida em alumínio e vidro</h2>

          <p>
            A WMA Esquadrias e Vidros atua desde 2008 oferecendo soluções
            completas em esquadrias de alumínio, portas, janelas, fachadas de
            vidro e projetos sob medida para residências, empresas e obras de
            alto padrão em Belo Horizonte e região.
          </p>

          <p>
            Trabalhamos com materiais de alta qualidade, fabricação
            personalizada e instalação profissional, garantindo segurança,
            sofisticação e acabamento impecável em cada projeto.
          </p>

          <div className="sobre-diferenciais">
            <div>✔ Mais de 15 anos de experiência</div>

            <div>✔ Fabricação sob medida</div>

            <div>✔ Atendimento em BH e região metropolitana</div>

            <div>✔ Equipe especializada</div>

            <div>✔ Compromisso com prazo e acabamento</div>
          </div>

          <Link
            href={`https://wa.me/5531998212125?text=${whatsappMessage}`}
            target="_blank"
            className="saiba-mais"
            onClick={() =>
              event({
                action: "click_whatsapp_sobre",
                category: "Contato",
                label: "Sessão Sobre",
                value: 1,
              })
            }
          >
            Solicitar orçamento pelo WhatsApp
          </Link>
        </div>

        {/* IMAGEM */}
        <div className="sobre-image">
          <Image
            src="/images/esquadria-sob-medida.png"
            alt="Projeto de esquadrias de alumínio da WMA"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
}
