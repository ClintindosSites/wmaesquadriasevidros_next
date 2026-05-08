"use client";

import { FormEvent, useState } from "react";

export default function OrcamentoForm() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const texto = `
Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}
Local da obra: ${endereco}

Detalhes:
${mensagem}
    `;

    const url = `https://wa.me/553135828296?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="orcamento-form">
      <h3>Receba seu orçamento rápido</h3>

      <p>
        Preencha as informações abaixo e fale diretamente com nossa equipe no
        WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="orcamentoForm">
        <div className="orcamento-form__field">
          <label>Seu nome</label>

          <input
            type="text"
            required
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="orcamento-form__field">
          <label>Bairro / Cidade da obra</label>

          <input
            type="text"
            required
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
            placeholder="Ex: Eldorado - Contagem"
          />
        </div>

        <div className="orcamento-form__field">
          <label>O que você precisa?</label>

          <textarea
            required
            rows={5}
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
            placeholder="Ex: portas, janelas, fachada de vidro..."
          />
        </div>

        <button type="submit" className="saiba-mais">
          Solicitar orçamento no WhatsApp
        </button>
      </form>

      <div className="orcamento-form__footer">
        <span> Resposta rápida</span>
        <span> Atendimento em BH e região</span>
      </div>
    </div>
  );
}
