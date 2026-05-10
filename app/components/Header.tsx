"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const lastScroll = useRef(0);

  // HEADER APARECE AO SUBIR E SOME AO DESCER
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 20) {
        setShow(true);
      } else if (currentScroll > lastScroll.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      {/* HEADER */}
      <header className={`header ${show ? "header-show" : "header-hide"}`}>
        <div className="container header-container">
          {/* LOGO */}
          <Link href="/" onClick={closeMenu} className="header-logo">
            <Image
              src="/icons/logo.webp"
              alt="WMA Esquadrias e Vidros"
              width={120}
              height={70}
              priority
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="header-nav">
            <Link href="/servicos/esquadrias-de-aluminio-linha-gold">
              Linha Gold
            </Link>

            <Link href="/servicos/esquadrias-de-aluminio-linha-suprema">
              Linha Suprema
            </Link>

            <Link href="/servicos/esquadrias-de-aluminio-linha-25">
              Linha 25
            </Link>

            <Link href="/servicos/esquadrias-de-aluminio-linha-42">
              Linha 42
            </Link>

            <Link href="/servicos/porta-acm-sob-medida-em-bh-e-regiao">
              Porta ACM
            </Link>

            <Link href="/servicos/vidracaria-em-belo-horizonte">
              Vidraçaria
            </Link>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`mobile-overlay ${open ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* SIDEBAR MOBILE */}
      <aside className={`mobile-sidebar ${open ? "active" : ""}`}>
        <div className="mobile-sidebar-top">
          <Image src="/icons/logo.webp" alt="Logo" width={110} height={60} />

          <button onClick={closeMenu} className="close-sidebar">
            ✕
          </button>
        </div>

        <nav className="mobile-nav">
          <Link
            href="/servicos/esquadrias-de-aluminio-linha-gold"
            onClick={closeMenu}
          >
            Linha Gold
          </Link>

          <Link
            href="/servicos/esquadrias-de-aluminio-linha-suprema"
            onClick={closeMenu}
          >
            Linha Suprema
          </Link>

          <Link
            href="/servicos/esquadrias-de-aluminio-linha-25"
            onClick={closeMenu}
          >
            Linha 25
          </Link>

          <Link
            href="/servicos/esquadrias-de-aluminio-linha-42"
            onClick={closeMenu}
          >
            Linha 42
          </Link>

          <Link
            href="/servicos/porta-acm-sob-medida-em-bh-e-regiao"
            onClick={closeMenu}
          >
            Porta ACM
          </Link>

          <Link
            href="/servicos/vidracaria-em-belo-horizonte"
            onClick={closeMenu}
          >
            Vidraçaria
          </Link>
        </nav>
      </aside>
    </>
  );
}
