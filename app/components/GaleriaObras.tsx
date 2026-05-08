import Image from "next/image";
import Link from "next/link";

const imagens = [
  "/images/obra-1.webp",
  "/images/obra-2.webp",
  "/images/obra-3.webp",
  "/images/obra-4.webp",
  "/images/pergolado-1.webp",
];

export default function GaleriaObras() {
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
              alt="Projeto WMA Esquadrias"
              width={800}
              height={800}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[1]}
              alt="Projeto WMA Esquadrias"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[2]}
              alt="Projeto WMA Esquadrias"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[3]}
              alt="Projeto WMA Esquadrias"
              width={400}
              height={400}
            />
          </div>

          <div className="galeria-item">
            <Image
              src={imagens[4]}
              alt="Projeto WMA Esquadrias"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="galeria-cta">
          <Link
            className="cta-button"
            href="https://wa.me/553135828296"
            target="_blank"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
