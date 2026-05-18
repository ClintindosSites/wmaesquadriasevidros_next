"use client";

import Image from "next/image";
import Link from "next/link";

import { event } from "@/lib/gtag";

const imagens = [
  "/images/obra-1.webp",
  "/images/obra-2.webp",
  "/images/obra-3.webp",
  "/images/obra-4.webp",
  "/images/porta-amc-esquadria-1.webp",
  "/images/portas-janelas-de-aluminio.webp",
  "/images/vidro-temperado-laminado.webp",
  "/images/pergolado-1.webp",
  "/images/pergolado-3.webp",
  "/images/pergolado-4.webp",
  "/images/pergolado-5.webp",
  "/images/pergolado-6.webp",
  "/images/pergolado-7.webp",
  "/images/pergolado-8.webp",
  "/images/pergolado-9.webp",
  "/images/pergolado-10.webp",
  "/images/pergolado-11.webp",
  "/images/pergolado-12.webp",
  "/images/pergolado-13.webp",
  "/images/pergolado-14.webp",
  "/images/pergolado-15.webp",
  "/images/pergolado-16.webp",
  "/images/pergolado-17.webp",
  "/images/pergolado-18.webp",
  "/images/pergolado-19.webp",
  "/images/pergolado-20.webp",
  "/images/pergolado-21.webp",
  "/images/pergolado-22.webp",
  "/images/pergolado-23.webp",
  "/images/pergolado-24.webp",
  "/images/pergolado-25.webp",
  "/images/pergolado-26.webp",
  "/images/pergolado-27.webp",
  "/images/pergolado-28.webp",
];

export default function GaleriaObras() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento."
  );

  return (
    <section className="galeria">
      <div className="container">
        <div className="galeria-top">
          <span className="galeria-badge">Obras realizadas</span>

          <h2>Projetos em alumínio e vidro com acabamento premium</h2>

          <p>
            Confira alguns projetos executados pela WMA Esquadrias e Vidros em
            Belo Horizonte e região.
          </p>
        </div>

        <div className="galeria-grid">
          <div className="galeria-item destaque">
            <Image
              src={imagens[0]}
              alt="Projeto de esquadrias e vidros da WMA"
              width={800}
              height={800}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[1]}
              alt="Projeto de esquadrias e vidros da WMA"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[2]}
              alt="Projeto de esquadrias e vidros da WMA"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[3]}
              alt="Projeto de esquadrias e vidros da WMA"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[4]}
              alt="Projeto de esquadrias e vidros da WMA"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="galeria-cta">
          <Link
            className="cta-button"
            href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
            target="_blank"
            onClick={() =>
              event({
                action: "click_whatsapp_galeria",
                category: "Contato",
                label: "Galeria de Obras",
                value: 1,
              })
            }
          >
            Solicitar orçamento pelo Whatsapp
          </Link>
        </div>
      </div>
    </section>
  );
}
