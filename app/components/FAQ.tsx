"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Vocês fazem esquadrias de alumínio sob medida?",
    answer:
      "Sim. Todos os nossos projetos são fabricados sob medida de acordo com as necessidades do ambiente e do cliente.",
  },
  {
    question: "Quais cidades a WMA atende?",
    answer:
      "Atendemos Belo Horizonte, Contagem, Betim e toda região metropolitana com instalação profissional e acompanhamento completo.",
  },
  {
    question: "Vocês trabalham com vidro temperado e Blindex?",
    answer:
      "Sim. Trabalhamos com vidro temperado para fachadas, boxes, janelas, portas, guarda-corpo e diversos projetos personalizados.",
  },
  {
    question: "Qual a diferença entre Linha Gold, Suprema, 25 e 42?",
    answer:
      "Cada linha possui características específicas de acabamento, resistência e aplicação. Nossa equipe ajuda você a escolher a melhor opção para seu projeto.",
  },
  {
    question: "Vocês fazem porta ACM sob medida?",
    answer:
      "Sim. Fabricamos portas ACM personalizadas com acabamento moderno, excelente durabilidade e visual sofisticado.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Sim. Você pode solicitar seu orçamento sem compromisso diretamente pelo WhatsApp.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-top">
          <span className="faq-badge">Dúvidas frequentes</span>

          <h2>
            Tire suas dúvidas sobre esquadrias, vidros e projetos sob medida
          </h2>

          <p>
            Confira algumas das principais dúvidas dos nossos clientes sobre
            esquadrias de alumínio, vidro temperado, instalação e orçamento.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
