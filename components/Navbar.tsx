"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre",     label: "Sobre" },
  { href: "#presenca",  label: "Números" },
  { href: "#atuacao",   label: "Atuação" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#perfil",    label: "Perfil" },
  { href: "#contato",   label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn, { passive: true });
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4">
      {/* ── Pill navbar ── */}
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between w-full rounded-full px-4 py-2.5 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(250,247,255,0.94)"
            : "rgba(250,247,255,0.78)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: scrolled
            ? "1px solid rgba(201,167,255,0.35)"
            : "1px solid rgba(201,167,255,0.22)",
          boxShadow: scrolled
            ? "0 4px 32px rgba(109,60,201,0.13), 0 1px 0 rgba(201,167,255,0.18) inset"
            : "0 2px 16px rgba(109,60,201,0.07)",
        }}
      >
        {/* Logo — imagem PNG transparente; translate="no" + notranslate previne tradução do Google Tradutor */}
        <a
          href="#"
          className="notranslate shrink-0 leading-none"
          aria-label="Voltar ao início"
          translate="no"
        >
          <img
            src="/images/logo-manu-freixas.png"
            alt="Manu Freixas"
            className="h-8 md:h-9 w-auto block select-none"
            draggable={false}
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm px-3 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D3CC9]"
                style={{
                  fontFamily: "var(--font-dm)",
                  color: "#4A3B62",
                  fontWeight: 450,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(109,60,201,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#6D3CC9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#4A3B62";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="ml-2 inline-block px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-85 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D3CC9]"
              style={{
                background: "#6D3CC9",
                color: "#fff",
                fontFamily: "var(--font-dm)",
                boxShadow: "0 2px 10px rgba(109,60,201,0.28)",
              }}
            >
              Proposta
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D3CC9]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          style={{ touchAction: "manipulation" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(109,60,201,0.07)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-250 origin-center"
            style={{
              background: "#6D3CC9",
              transform: open ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-150"
            style={{ background: "#6D3CC9", opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-250 origin-center"
            style={{
              background: "#6D3CC9",
              transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* ── Mobile dropdown ── premium glass card below pill ── */}
      <div
        className="md:hidden mx-auto mt-2 max-w-6xl w-full overflow-hidden transition-all duration-300 origin-top"
        style={{
          background: "rgba(250,247,255,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(201,167,255,0.25)",
          boxShadow: "0 8px 32px rgba(109,60,201,0.12)",
          borderRadius: "1.5rem",
          maxHeight: open ? "500px" : "0px",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col py-3 px-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base px-4 py-3 rounded-2xl transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#6D3CC9]"
              style={{
                fontFamily: "var(--font-dm)",
                color: "#4A3B62",
                touchAction: "manipulation",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(109,60,201,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#6D3CC9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#4A3B62";
              }}
            >
              {l.label}
            </a>
          ))}
          <div className="px-4 pt-2 pb-2">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="block px-5 py-3 rounded-full text-sm font-semibold text-center transition-all hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D3CC9]"
              style={{
                background: "#6D3CC9",
                color: "#fff",
                fontFamily: "var(--font-dm)",
                boxShadow: "0 2px 12px rgba(109,60,201,0.25)",
                touchAction: "manipulation",
              }}
            >
              Enviar proposta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
