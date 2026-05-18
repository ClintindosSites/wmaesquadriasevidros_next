import ServicoCard from "./ServicoCard";

export default function Servicos() {
  const servicos = [
    {
      name: "Linha Gold",
      description:
        "Esquadrias modernas com acabamento premium, ideal para projetos sofisticados que exigem design elegante, resistência e alta durabilidade.",
      image: "/images/linha-gold-bg.webp",
      link: "/servicos/esquadrias-de-aluminio-linha-gold",
    },
    {
      name: "Linha Suprema",
      description:
        "A linha perfeita para quem busca sofisticação, vedação eficiente e um visual moderno em portas, janelas e grandes vãos.",
      image: "/images/linha-suprema-bg.webp",
      link: "/servicos/esquadrias-de-aluminio-linha-suprema",
    },
    {
      name: "Linha 25",
      description:
        "Solução funcional e econômica para residências e ambientes internos com excelente acabamento e ótimo custo-benefício.",
      image: "/images/linha-25-bg.webp",
      link: "/servicos/esquadrias-de-aluminio-linha-42",
    },
    {
      name: "Linha 42",
      description:
        "Mais resistência e robustez para projetos que exigem segurança, durabilidade e excelente desempenho estrutural.",
      image: "/images/linha-42-bg.webp",
      link: "/servicos/orcamento-esquadria-de-aluminio-linha-42",
    },
    {
      name: "Porta ACM",
      description:
        "Portas ACM sob medida com design moderno e acabamento sofisticado para valorizar a entrada do seu imóvel.",
      image: "/images/porta-acm-bg.webp",
      link: "/servicos/porta-acm-sob-medida-em-bh-e-regiao",
    },
    {
      name: "Vidraçaria Blindex",
      description:
        "Projetos em vidro temperado para fachadas, boxes, sacadas e ambientes sofisticados com segurança e elegância.",
      image: "/images/vidro-temperado-laminado.webp",
      link: "/servicos/vidracaria-em-belo-horizonte",
    },
  ];
  return (
    <section className="services">
      <div className="container">
        <div className="services-text">
          <h2>
            Transformamos ambientes com alumínio e vidro de alta qualidade
          </h2>
          <p>
            Projetos modernos e resistentes para portas, janelas e ambientes
            completos com acabamento profissional e fabricação sob medida.
          </p>
        </div>
        <div className="servicos-grid">
          {" "}
          {servicos.map((servico, index) => (
            <ServicoCard
              key={index}
              name={servico.name}
              description={servico.description}
              image={servico.image}
              link={servico.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
