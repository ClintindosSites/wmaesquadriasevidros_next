"use client";

import Link from "next/link";
import { event } from "@/lib/gtag";

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Olá, vim pelo site e gostária de um orçamento de esquadrias de alumínio"
  );
  return (
    <footer className="footer bg-zinc-900 text-zinc-200 mt-20">
      <div className="container max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        {/* LOGO + DESCRIÇÃO */}
        <div>
          <h2 className="text-white text-lg font-semibold">WMA Esquadrias</h2>
          <p className="text-sm mt-3 text-zinc-400 leading-relaxed">
            Especialistas em esquadrias de alumínio, vidros e soluções sob
            medida para residências e obras comerciais em Contagem, Belo
            Horizonte e região.
          </p>
        </div>

        {/* LINHAS DE PRODUTO (SEO FORTE) */}
        <div>
          <h3 className="text-white font-medium mb-3">Esquadrias</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/servicos/esquadrias-de-aluminio-linha-gold">
                Linha Gold
              </Link>
            </li>
            <li>
              <Link href="/servicos/esquadrias-de-aluminio-linha-suprema">
                Linha Suprema
              </Link>
            </li>
            <li>
              <Link href="/servicos/esquadrias-de-aluminio-linha-25">
                Linha 25
              </Link>
            </li>
            <li>
              <Link href="/servicos/esquadrias-de-aluminio-linha-42">
                Linha 42
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        <div>
          <h3 className="text-white font-medium mb-3">Serviços</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/porta-acm-sob-medida-em-bh-e-regiao">
                Porta ACM sob medida
              </Link>
            </li>
            <li>
              <Link href="/vidracaria">Vidraçaria</Link>
            </li>
            <li>
              <Link href="/">Fachadas de vidro</Link>
            </li>
            <li>
              <Link href="/">Projetos personalizados</Link>
            </li>
          </ul>
        </div>

        {/* SERVIÇOS */}
        {/* REDES SOCIAIS */}
        <div>
          <h3 className="text-white font-medium mb-3">Redes Sociais</h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              {" "}
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        {/* CTA + CONTATO */}
        <div>
          <h3 className="text-white font-medium mb-3">Orçamento rápido</h3>

          <p className="text-sm text-zinc-400 mb-4">
            Fale direto com nossa equipe e receba seu orçamento em poucos
            minutos.
          </p>

          <a
            href={`https://wa.me/5531982112125?text=${whatsappMessage}`}
            target="_blank"
            className="cta-button"
          >
            Chamar no WhatsApp
          </a>

          <p className="text-xs text-zinc-500 mt-4">
            Belo Horizonte • Contagem • Região Metropolitana
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800 mt-10">
        <div className="container max-w-7xl mx-auto px-4 py-4 text-xs text-zinc-500 flex flex-col md:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} WMA Esquadrias. Todos os direitos
            reservados.
          </p>
          <p>Esquadrias de alumínio e vidros sob medida</p>
        </div>
      </div>
    </footer>
  );
}
