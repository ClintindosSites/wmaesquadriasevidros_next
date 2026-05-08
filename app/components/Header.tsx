"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  // Detecta scroll (some ao descer / aparece ao subir)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 10) {
        setShow(true);
      } else if (current > lastScroll.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`header fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between container">
          {/* LOGO */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/icons/logo.png"
              alt="WMA Esquadrias e Vidros"
              width={110}
              height={60}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-gold">
              Linha Gold
            </Link>
            <Link href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-suprema">
              Linha Suprema
            </Link>
            <Link href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-25">
              Linha 25
            </Link>
            <Link href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-42">
              Linha 42
            </Link>
            <Link href="/porta-acm-sob-medida-em-bh-e-regiao">Porta ACM</Link>
            <Link href="/vidracaria">Vidraçaria</Link>
          </nav>

          {/* HAMBURGUER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />
      )}

      {/* SIDEBAR MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col gap-5 text-sm font-medium">
          <button className="self-end text-xl" onClick={closeMenu}>
            ✕
          </button>

          <Link
            href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-gold"
            onClick={closeMenu}
          >
            Linha Gold
          </Link>

          <Link
            href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-suprema"
            onClick={closeMenu}
          >
            Linha Suprema
          </Link>

          <Link
            href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-25"
            onClick={closeMenu}
          >
            Linha 25
          </Link>

          <Link
            href="/esquadrias-de-aluminio/orcamento-esquadria-de-aluminio-linha-42"
            onClick={closeMenu}
          >
            Linha 42
          </Link>

          <Link href="/porta-acm-sob-medida-em-bh-e-regiao" onClick={closeMenu}>
            Porta ACM
          </Link>

          <Link href="/vidracaria" onClick={closeMenu}>
            Vidraçaria
          </Link>
        </div>
      </aside>
    </>
  );
}
