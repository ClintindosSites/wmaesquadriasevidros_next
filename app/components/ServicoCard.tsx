import Link from "next/link";

interface ServicoProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function ServicoCard({
  name,
  description,
  image,
  link,
}: ServicoProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para ${name}.`
  );

  return (
    <div className="servicos-card">
      <div
        className="servico-img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="servico-text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="servicos-buttons">
        <Link href={link} className="saiba-mais">
          Saiba Mais
        </Link>

        <Link
          href={`https://wa.me/55319982112125?text=${whatsappMessage}`}
          target="_blank"
          className="cta-button"
        >
          Solicitar Orçamento pelo WhatsApp
        </Link>
      </div>
    </div>
  );
}
