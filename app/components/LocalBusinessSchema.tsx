export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "HomeAndConstructionBusiness",

    name: "WMA Esquadrias e Vidros",

    image: "https://wmaesquadriasevidros.com.br/icons/logo-background.webp",

    telephone: "+55 31 3582-8296",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },

    areaServed: [
      "Belo Horizonte",
      "Contagem",
      "Betim",
      "Nova Lima",
      "Santa Luzia",
      "Brumadinho",
      "Raposos",
      "Rio Acima",
      "Sabará",
      "Caeté",
      "Matozinhos",
      "Pedro Leopoldo",
      "Lagoa Santa",
      "Vespasiano",
      "São José da Lapa",
    ],

    url: "https://wmaesquadriasevidros.com.br",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
