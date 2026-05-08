import Link from "next/link";

export default function AreaAtendimento() {
  return (
    <section className="area-atendimento">
      <div className="container area-container">
        {/* TEXTO */}
        <div className="area-content">
          <span className="area-badge">
            Atendimento em Belo Horizonte e região
          </span>

          <h2>
            Atendemos Contagem, Belo Horizonte e toda região metropolitana
          </h2>

          <p>
            A WMA Esquadrias e Vidros realiza projetos sob medida em alumínio e
            vidro para residências, empresas e obras comerciais em Belo
            Horizonte, Contagem e cidades da região metropolitana.
          </p>

          <p>
            Nossa equipe oferece atendimento rápido, instalação profissional e
            acompanhamento completo do seu projeto.
          </p>

          {/* CIDADES */}
          <div className="area-cidades">
            <span>Belo Horizonte</span>
            <span>Contagem</span>
            <span>Nova Lima</span>
            <span>Betim</span>
            <span>Lagoa Santa</span>
            <span>Santa Luzia</span>
            <span>Vespasiano</span>
            <span>Matozinhos</span>
            <span>Pedro Leopoldo</span>
            <span>Sabará</span>
            <span>Ribeirão das Neves</span>
            <span>Grande BH e Região Metropolitana</span>
          </div>

          {/* CTA */}
          <div className="area-buttons">
            <Link
              href="https://wa.me/553135828296"
              target="_blank"
              className="cta-button"
            >
              Solicitar orçamento
            </Link>

            <Link
              href="https://maps.app.goo.gl/wzARj1abwbv4SCRF7"
              target="_blank"
              className="saiba-mais"
            >
              Ver localização
            </Link>
          </div>
        </div>

        {/* MAPA */}
        <div className="area-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7251184482416!2d-43.9007611!3d-19.8515805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69b88384e2401%3A0x21ada9bd52b44937!2sWMA%20esquadrias%20de%20alum%C3%ADnio%20e%20vidros.!5e0!3m2!1spt-BR!2sbr!4v1768584013339!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
