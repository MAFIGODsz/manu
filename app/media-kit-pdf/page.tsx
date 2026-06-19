import "./print.css";
import type { CSSProperties } from "react";

/* ── Brand tokens ──────────────────────────────────────────────── */
const DEEP   = "#1A0A2E";
const PURPLE = "#2E174F";
const VIOLET = "#6D3CC9";
const LILAC  = "#C9A7FF";
const YELLOW = "#FFD84D";
const CREAM  = "#FAF7FF";
const SOFT   = "#F0E8FF";

const PF: CSSProperties = { fontFamily: "var(--font-playfair)" };
const DM: CSSProperties = { fontFamily: "var(--font-dm)" };

/* ── Data ──────────────────────────────────────────────────────── */
const PROFILE = [
  { label: "Idade",       value: "10 anos",                   icon: "M12 2a5 5 0 110 10A5 5 0 0112 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z" },
  { label: "Altura",      value: "1,36 m",                    icon: "M12 2L8 6h3v12H8l4 4 4-4h-3V6h3z" },
  { label: "Calçado",     value: "32 / 33",                   icon: "M2 14c0-1.1.9-2 2-2h4l2-4h6l2 4h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z" },
  { label: "Manequim",    value: "12",                        icon: "M7 2h10l1 4H6L7 2zm-1 5h12l-1 13H7L6 7zm3 2v9h6V9H9z" },
  { label: "Localização", value: "Rio de Janeiro — RJ",       icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" },
  { label: "Perfil",      value: "Artista · Modelo · Criadora", icon: "M12 3l1.09 3.35L16.5 6l-2.7 1.96.9 3.29L12 9.48l-2.7 1.77.9-3.29L7.5 6l3.41-.65L12 3z" },
  { label: "Diferencial", value: "Versatilidade & Oratória",  icon: "M9.5 3A6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.56 4.23L19.5 19l-1.5 1.5-5.27-5.06A6.5 6.5 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3zm0 2a4.5 4.5 0 000 9 4.5 4.5 0 000-9z" },
  { label: "Plataformas", value: "Instagram · TikTok · YouTube", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
];

const STATS = [
  {
    platform: "Instagram", handle: "@manufreixasoficial",
    href: "https://instagram.com/manufreixasoficial",
    gradient: "linear-gradient(135deg, #833AB4, #C13584, #E4405F, #F77737)",
    highlight: "604,7 mil", highlightLabel: "visualizações",
    metrics: [
      { label: "Seguidores",        value: "1.004" },
      { label: "Visualizações",     value: "604,7 mil" },
      { label: "Contas alcançadas", value: "208,4 mil" },
      { label: "Crescimento",       value: "+224 seg." },
    ],
    printImage: "/images/stats/instagram-perfil.png",
  },
  {
    platform: "TikTok", handle: "@familiamanufreixas2020",
    href: "https://www.tiktok.com/@familiamanufreixas2020",
    gradient: "linear-gradient(135deg, #010101 0%, #EE1D52 55%, #69C9D0 100%)",
    highlight: "553K", highlightLabel: "espectadores",
    metrics: [
      { label: "Seguidores",   value: "4.005" },
      { label: "Espectadores", value: "553K" },
      { label: "Curtidas",     value: "50,4 mil" },
      { label: "Crescimento",  value: "+3.974 seg." },
    ],
    printImage: "/images/stats/tiktok-perfil.jpeg",
  },
  {
    platform: "YouTube", handle: "@manufreixas",
    href: "https://www.youtube.com/@manufreixas",
    gradient: "linear-gradient(135deg, #FF0000, #CC0000)",
    highlight: "15,4 mil", highlightLabel: "visualizações",
    metrics: [
      { label: "Inscritos",     value: "248" },
      { label: "Visualizações", value: "15,4 mil" },
      { label: "Curtidas",      value: "1,3 mil" },
      { label: "Comentários",   value: "37" },
    ],
    printImage: "/images/stats/youtube-canal.jpeg",
  },
];

const FORMATION = [
  { label: "4º Ano Escolar",     cat: "Educação" },
  { label: "Catequese",          cat: "Desenvolvimento" },
  { label: "Canto",              cat: "Artes" },
  { label: "Passarela",          cat: "Moda" },
  { label: "Teatro",             cat: "Artes Cênicas" },
  { label: "TV & Cinema",        cat: "Audiovisual" },
  { label: "Ginástica",          cat: "Esporte" },
  { label: "Ballet",             cat: "Dança" },
  { label: "Funcional na Areia", cat: "Esporte" },
];

const AREAS = [
  { title: "Modelo Fotográfica",    short: "Ensaios, expressões e direção de cena." },
  { title: "Provador & Looks",      short: "Coleções e styling com naturalidade." },
  { title: "Desfiles",              short: "Passarela com postura e presença." },
  { title: "Atuação & Audiovisual", short: "Teatro, TV e cinema." },
  { title: "Criadora de Conteúdo",  short: "Instagram, TikTok e YouTube." },
  { title: "Eventos & Divulgação",  short: "Campanhas e projetos de marca." },
];

const WORKS = [
  {
    title: "Kukixo",
    category: "Loja parceira",
    desc: "Conteúdo para loja parceira destacando peças infantis com leveza e carisma.",
    handle: "@kukixo_oficial",
    href: "https://www.instagram.com/kukixo_oficial/",
    img: "/images/works/kukixo-01.jpg",
    img2: "/images/works/kukixo-02.jpg",
  },
  {
    title: "Loja ReAlma",
    category: "Loja parceira",
    desc: "Divulgação de looks com estilo, espontaneidade e presença para moda teen.",
    handle: "@realma.rio",
    href: "https://www.instagram.com/realma.rio/",
    img: "/images/works/realma-01.jpg",
    img2: "/images/works/realma-02.jpg",
  },
  {
    title: "Rei Nato",
    category: "Editorial de moda",
    desc: "Editorial de moda kids com produção de looks e desenvoltura comercial.",
    handle: "@reinato_modakids",
    href: "https://www.instagram.com/kukixo_oficial/",
    img: "/images/works/rei-nato-01.jpg",
    img2: "/images/works/rei-nato-02.jpg",
  },
];

const PORTFOLIO = [
  { src: "/images/ensaio1.jpeg",          tag: "Ensaio" },
  { src: "/images/ensaio4.jpeg",          tag: "Ensaio" },
  { src: "/images/ensaio7.jpeg",          tag: "Ensaio" },
  { src: "/images/desfile3.jpeg",         tag: "Desfile" },
  { src: "/images/ensaio16.jpeg",         tag: "Editorial" },
  { src: "/images/desfile1.jpeg",         tag: "Desfile" },
  { src: "/images/moda2.jpeg",            tag: "Moda" },
  { src: "/images/conteudodigital1.jpeg", tag: "Conteúdo" },
  { src: "/images/moda3.jpeg",            tag: "Moda" },
];

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "Educação":        { bg: "#EEE6FF", text: "#6D3CC9" },
  "Desenvolvimento": { bg: "#FFF8DC", text: "#8A6800" },
  "Artes":           { bg: "#F5EEFF", text: "#7A3CC0" },
  "Moda":            { bg: "#EDE3FF", text: "#5A2CB0" },
  "Artes Cênicas":   { bg: "#E8DBFF", text: "#4A2090" },
  "Audiovisual":     { bg: "#F3EAFF", text: "#9B59D0" },
  "Esporte":         { bg: "#EAFAF1", text: "#1E8449" },
  "Dança":           { bg: "#FDF2F8", text: "#AF5F8D" },
};

/* ── Shared helpers ────────────────────────────────────────────── */
function VioletBar() {
  return <div style={{ height: "3mm", background: VIOLET, flexShrink: 0 }} />;
}

function Divider({ light, color }: { light?: boolean; color?: string }) {
  return (
    <div style={{ width: "16mm", height: "1.5pt", borderRadius: "1pt",
      background: color ?? (light ? YELLOW : VIOLET) }} />
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{
      ...DM,
      display: "inline-block",
      fontSize: "8.5pt",
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      color: light ? "rgba(255,255,255,0.93)" : VIOLET,
      padding: "4pt 11pt",
      borderRadius: "100pt",
      background: light ? "rgba(46,23,79,0.50)" : "rgba(109,60,201,0.09)",
      border: `1px solid ${light ? "rgba(201,167,255,0.40)" : "rgba(109,60,201,0.18)"}`,
      fontWeight: light ? 700 : 600,
    }}>
      {children}
    </span>
  );
}

/* ── Page mark ─────────────────────────────────────────────────── */
const TOTAL_PAGES = 8;
function PageMark({ page, dark }: { page: number; dark?: boolean }) {
  const label = `${String(page).padStart(2, "0")} / ${String(TOTAL_PAGES).padStart(2, "0")}`;
  return (
    <div style={{
      position: "absolute", bottom: "5.5mm", right: "5.5mm", zIndex: 50,
      display: "flex", alignItems: "center", gap: "4pt",
      padding: "2.5pt 7pt", borderRadius: "100pt",
      background: dark ? "rgba(255,255,255,0.05)" : "rgba(109,60,201,0.07)",
      border: `1px solid ${dark ? "rgba(201,167,255,0.14)" : "rgba(109,60,201,0.13)"}`,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/favicon.png" alt="" aria-hidden="true"
        style={{ width: "9pt", height: "9pt", objectFit: "contain", flexShrink: 0 }} />
      <span style={{
        ...DM, fontSize: "7pt", fontWeight: 600, letterSpacing: "0.13em",
        color: dark ? "rgba(201,167,255,0.60)" : "rgba(46,23,79,0.50)",
      }}>
        {label}
      </span>
    </div>
  );
}

/* ── Page 1: Cover ─────────────────────────────────────────────── */
function Cover() {
  return (
    <div className="pdf-page" style={{ background: DEEP }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3mm", background: YELLOW, zIndex: 10 }} />

      {/* Full-bleed hero — brighter (0.82 opacity) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-manu.jpg" alt="Manu Freixas" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center 20%", opacity: 0.82,
      }} />

      {/* Lighter vignettes so face shows clearly */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", zIndex: 2,
        background: "linear-gradient(to bottom, rgba(26,10,46,0.72) 0%, rgba(26,10,46,0) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", zIndex: 2,
        background: "linear-gradient(to top, rgba(26,10,46,0.90) 0%, rgba(26,10,46,0) 100%)" }} />

      {/* Content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: "15mm 14mm 13mm" }}>

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3mm" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-manu-freixas-light.png" alt="Manu Freixas"
            style={{ height: "9mm", width: "auto" }} />
          <span style={{ ...DM, fontSize: "8.5pt", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(201,167,255,0.5)" }}>
            Media Kit Digital · 2026
          </span>
        </div>

        {/* Bottom hero text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
          <SectionLabel light>Artista Mirim · Modelo · Criadora de Conteúdo</SectionLabel>

          <div style={{ lineHeight: 1 }}>
            <div style={{ ...PF, fontSize: "58pt", fontWeight: 700, color: "white", lineHeight: 0.9 }}>Manu</div>
            <div style={{ ...PF, fontSize: "58pt", fontWeight: 700, color: LILAC, fontStyle: "italic", lineHeight: 0.9 }}>Freixas</div>
          </div>

          <Divider light />

          <div style={{ display: "inline-flex", alignItems: "center", gap: "5pt", alignSelf: "flex-start",
            padding: "3pt 9pt", borderRadius: "100pt",
            background: "rgba(201,167,255,0.12)", border: "1px solid rgba(201,167,255,0.24)" }}>
            <svg width="7" height="9" viewBox="0 0 24 24" fill={LILAC}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>
            <span style={{ ...DM, fontSize: "9.5pt", color: LILAC }}>Rio de Janeiro — RJ</span>
          </div>

          <p style={{ ...DM, fontSize: "11pt", color: "rgba(255,255,255,0.72)", fontWeight: 300,
            lineHeight: 1.55, maxWidth: "145mm", margin: 0 }}>
            Versatilidade, presença e comunicação para moda, campanhas,
            audiovisual, desfiles e projetos digitais.
          </p>

          <div style={{ display: "flex", gap: "5mm" }}>
            {["Versatilidade", "Oratória", "Presença Digital"].map((tag) => (
              <span key={tag} style={{
                ...DM, fontSize: "9pt", padding: "3.5pt 10pt", borderRadius: "100pt",
                background: "rgba(255,216,77,0.13)", color: YELLOW,
                border: "1px solid rgba(255,216,77,0.32)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <PageMark page={1} dark />
    </div>
  );
}

/* ── Page 2: About ─────────────────────────────────────────────── */
function About() {
  return (
    <div className="pdf-page" style={{ background: CREAM, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "11mm 14mm 11mm", display: "flex", flexDirection: "column", gap: "6mm", flex: 1 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Quem é Manu Freixas</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Presença, arte<br />
            <span style={{ color: VIOLET, fontStyle: "italic" }}>e versatilidade</span>
          </h2>
          <Divider />
        </div>

        {/* Two-column: text left, stacked+overlapping photos right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 86mm", gap: "10mm", flex: 1 }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5mm" }}>
            <p style={{ ...DM, fontSize: "11pt", color: "#4A3B62", lineHeight: 1.68, fontWeight: 300, margin: 0 }}>
              Manu Freixas é uma artista mirim, modelo e criadora de conteúdo do Rio de Janeiro.
              Com carisma, desenvoltura e excelente comunicação, Manu transita com naturalidade por
              fotografia, moda, provador, desfiles, atuação e projetos digitais.
            </p>
            <p style={{ ...DM, fontSize: "11pt", color: "#4A3B62", lineHeight: 1.68, fontWeight: 300, margin: 0 }}>
              Sua rotina de formação inclui canto, passarela, teatro, TV e cinema, ginástica,
              ballet e funcional — atividades que fortalecem sua{" "}
              <strong style={{ fontWeight: 600, color: PURPLE }}>expressão corporal</strong>,
              presença cênica e disciplina.
            </p>
            <p style={{ ...DM, fontSize: "11pt", color: "#4A3B62", lineHeight: 1.68, fontWeight: 300, margin: 0 }}>
              Com presença ativa no Instagram, TikTok e YouTube, Manu constrói uma imagem
              moderna, autêntica e versátil para marcas, lojas e produções.
            </p>

            {/* Attribute pills */}
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "3mm" }}>
              {["Carisma", "Versatilidade", "Oratória", "Disciplina"].map((attr) => (
                <span key={attr} style={{
                  ...DM, fontSize: "9.5pt", fontWeight: 500,
                  padding: "3pt 10pt", borderRadius: "100pt",
                  background: "rgba(109,60,201,0.08)", color: PURPLE,
                  border: "1px solid rgba(109,60,201,0.14)",
                }}>
                  {attr}
                </span>
              ))}
            </div>

            {/* Legal box with icon */}
            <div style={{
              marginTop: "auto", padding: "10pt 13pt", borderRadius: "10pt",
              background: "rgba(109,60,201,0.06)", border: "1px solid rgba(109,60,201,0.16)",
              display: "flex", gap: "8pt", alignItems: "flex-start",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={VIOLET}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1pt" }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <p style={{ ...DM, fontSize: "10pt", color: "#6A5980", margin: 0, lineHeight: 1.6 }}>
                <strong style={{ fontWeight: 600, color: VIOLET }}>Responsável legal</strong>
                {" — "}Contatos, propostas e parcerias são tratados diretamente com a responsável
                legal de Manu Freixas.
              </p>
            </div>
          </div>

          {/* Right: single editorial photo */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "10mm", borderRadius: "12pt", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sobre-manu-2.jpg" alt="Manu Freixas"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }} />
              <div style={{ position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(46,23,79,0.25) 0%, transparent 40%)" }} />
            </div>
          </div>
        </div>
      </div>
      <PageMark page={2} />
    </div>
  );
}

/* ── Page 3: Perfil Técnico ────────────────────────────────────── */
function Profile() {
  return (
    <div className="pdf-page" style={{ background: PURPLE, display: "flex", flexDirection: "column" }}>
      <div style={{ position: "absolute", top: "-25mm", right: "-25mm", width: "100mm", height: "100mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(109,60,201,0.35) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-20mm", left: "-20mm", width: "80mm", height: "80mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(201,167,255,0.12) 0%, transparent 70%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, padding: "13mm 14mm", display: "flex", flexDirection: "column", gap: "7mm", height: "100%" }}>

        {/* Header row */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <span style={{ ...DM, fontSize: "8.5pt", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(201,167,255,0.5)", fontWeight: 600 }}>Especificações</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h2 style={{ ...PF, fontSize: "28pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
              Perfil <span style={{ color: LILAC, fontStyle: "italic" }}>técnico</span>
            </h2>
            <span style={{ ...DM, fontSize: "9pt", color: "rgba(201,167,255,0.4)", letterSpacing: "0.12em" }}>Ficha de casting · 2026</span>
          </div>
          <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />
        </div>

        {/* Main 2-col layout: cards + photo */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 68mm", gap: "8mm", flex: 1 }}>

          {/* Left: cards grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", flex: 1 }}>
              {PROFILE.map((item) => (
                <div key={item.label} className="no-break" style={{
                  padding: "9pt 11pt", borderRadius: "9pt",
                  background: "rgba(201,167,255,0.07)",
                  border: "1px solid rgba(201,167,255,0.11)",
                  display: "flex", flexDirection: "column", gap: "5pt",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={LILAC} style={{ opacity: 0.7 }}>
                    <path d={item.icon} />
                  </svg>
                  <p style={{ ...DM, fontSize: "8pt", textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "rgba(201,167,255,0.4)", margin: 0 }}>
                    {item.label}
                  </p>
                  <p style={{ ...PF, fontSize: "12pt", fontWeight: 600, color: "white", margin: 0, lineHeight: 1.2 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ padding: "9pt 12pt", borderRadius: "9pt",
              background: "rgba(109,60,201,0.25)", border: "1px solid rgba(109,60,201,0.4)",
              display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ ...DM, fontSize: "10pt", color: "rgba(255,255,255,0.72)", margin: 0, fontWeight: 300 }}>
                Interessado em trabalhar com Manu?
              </p>
              <span style={{ ...DM, fontSize: "9.5pt", fontWeight: 600, color: LILAC, whiteSpace: "nowrap" }}>
                Ver contatos → pág. 8
              </span>
            </div>
          </div>

          {/* Right: portrait photo */}
          <div style={{ borderRadius: "14pt", overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/sobre-manu.jpg" alt="Manu Freixas — ficha"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(46,23,79,0.5) 0%, transparent 50%)" }} />
            {/* Name tag at bottom */}
            <div style={{ position: "absolute", bottom: "8pt", left: "8pt", right: "8pt" }}>
              <p style={{ ...PF, fontSize: "11.5pt", fontWeight: 700, color: "white", margin: 0 }}>Manu Freixas</p>
              <p style={{ ...DM, fontSize: "8.5pt", color: "rgba(201,167,255,0.7)", margin: 0 }}>Artista · Modelo · Criadora</p>
            </div>
          </div>
        </div>
      </div>
      <PageMark page={3} dark />
    </div>
  );
}

/* ── Page 4: Presença Digital ──────────────────────────────────── */
function Digital() {
  return (
    <div className="pdf-page" style={{ background: DEEP, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12mm 14mm", display: "flex", flexDirection: "column", gap: "6mm" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <span style={{ ...DM, fontSize: "8.5pt", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(201,167,255,0.5)", fontWeight: 600 }}>Presença Digital</span>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
            Números que{" "}
            <span style={{ color: LILAC, fontStyle: "italic" }}>falam por ela</span>
          </h2>
          <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />
        </div>

        {/* Stats cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
          {STATS.map((s) => (
            <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
               style={{ display: "block", textDecoration: "none" }}>
              <div className="no-break" style={{
                borderRadius: "12pt", overflow: "hidden",
                border: "1px solid rgba(201,167,255,0.12)",
                background: "rgba(255,255,255,0.03)",
              }}>
                <div style={{ padding: "9pt 11pt 8pt", background: s.gradient }}>
                  <p style={{ ...PF, fontSize: "12.5pt", fontWeight: 700, color: "white", margin: "0 0 1pt" }}>{s.platform}</p>
                  <p style={{ ...DM, fontSize: "8.5pt", color: "rgba(255,255,255,0.7)", margin: 0 }}>{s.handle}</p>
                </div>
                <div style={{ padding: "9pt 11pt 9pt", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5pt" }}>
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <p style={{ ...PF, fontSize: "11pt", fontWeight: 700, color: LILAC, margin: "0 0 1pt" }}>{m.value}</p>
                      <p style={{ ...DM, fontSize: "8pt", color: "rgba(201,167,255,0.38)", margin: 0, lineHeight: 1.3 }}>{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Organic reach callout */}
        <div style={{
          padding: "9pt 14pt", borderRadius: "10pt",
          background: "rgba(201,167,255,0.06)",
          border: "1px solid rgba(201,167,255,0.1)",
          display: "flex", alignItems: "center", gap: "10pt",
        }}>
          <div style={{ width: "3pt", height: "28pt", background: YELLOW, borderRadius: "2pt", flexShrink: 0 }} />
          <p style={{ ...DM, fontSize: "10.5pt", color: "rgba(201,167,255,0.7)", margin: 0, lineHeight: 1.5, fontWeight: 300 }}>
            <strong style={{ color: "white", fontWeight: 500 }}>Alcance orgânico, audiência real e presença em crescimento</strong>
            {" — "}números colhidos diretamente das plataformas, sem impulsionamento pago.
          </p>
        </div>

        {/* Prints */}
        <div>
          <p style={{ ...DM, fontSize: "9pt", textTransform: "uppercase", letterSpacing: "0.14em",
            color: "rgba(201,167,255,0.35)", margin: "0 0 3mm" }}>
            Estatísticas reais das plataformas
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
            {STATS.map((s) => (
              <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer"
                 style={{ display: "block", textDecoration: "none" }}>
                <div style={{
                  borderRadius: "10pt", overflow: "hidden", aspectRatio: "9/16",
                  border: "1px solid rgba(201,167,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.printImage} alt={`${s.platform} analytics`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <PageMark page={4} dark />
    </div>
  );
}

/* ── Page 5: Formação + Áreas (combined) ───────────────────────── */
function FormationAreas() {
  return (
    <div className="pdf-page" style={{ background: CREAM, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "10mm 14mm 11mm", flex: 1, display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0" }}>

        {/* Left: Formação */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6mm", paddingRight: "9mm" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
            <SectionLabel>Formação</SectionLabel>
            <h2 style={{ ...PF, fontSize: "20pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
              Desenvolvimento<br />
              <span style={{ color: VIOLET, fontStyle: "italic" }}>contínuo</span>
            </h2>
            <Divider />
            <p style={{ ...DM, fontSize: "9.5pt", color: "#6A5980", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Aprendizado que sustenta a versatilidade e a presença de Manu.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3.5mm" }}>
            {FORMATION.map((item) => {
              const c = CAT_COLORS[item.cat] ?? { bg: "#EEE6FF", text: "#6D3CC9" };
              return (
                <div key={item.label} className="no-break" style={{
                  padding: "7pt 9pt", borderRadius: "8pt",
                  background: c.bg, border: `1px solid ${c.text}1A`,
                }}>
                  <p style={{ ...DM, fontSize: "6pt", textTransform: "uppercase",
                    letterSpacing: "0.08em", color: c.text, margin: "0 0 3pt", opacity: 0.7 }}>
                    {item.cat}
                  </p>
                  <p style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: PURPLE, margin: 0, lineHeight: 1.2 }}>
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div style={{ background: "rgba(109,60,201,0.12)", margin: "0" }} />

        {/* Right: Áreas de Atuação */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6mm", paddingLeft: "9mm" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
            <SectionLabel>Atuação</SectionLabel>
            <h2 style={{ ...PF, fontSize: "20pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
              Áreas de<br />
              <span style={{ color: VIOLET, fontStyle: "italic" }}>atuação</span>
            </h2>
            <Divider />
            <p style={{ ...DM, fontSize: "9.5pt", color: "#6A5980", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
              Presença versátil em moda, audiovisual e conteúdo digital.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5mm" }}>
            {AREAS.map((area, i) => (
              <div key={area.title} className="no-break" style={{
                padding: "8pt 11pt", borderRadius: "8pt",
                background: "white",
                border: "1px solid rgba(109,60,201,0.09)",
                boxShadow: "0 1px 8px rgba(109,60,201,0.04)",
                display: "flex", alignItems: "center", gap: "9pt",
              }}>
                <span style={{ ...PF, fontSize: "14pt", fontWeight: 700,
                  color: "rgba(109,60,201,0.15)", lineHeight: 1, flexShrink: 0, width: "16pt" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: PURPLE, margin: "0 0 1pt" }}>
                    {area.title}
                  </p>
                  <p style={{ ...DM, fontSize: "9pt", color: "#8A7CAA", margin: 0, lineHeight: 1.4, fontWeight: 300 }}>
                    {area.short}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageMark page={5} />
    </div>
  );
}

/* ── Page 6: Portfólio ─────────────────────────────────────────── */
function Portfolio() {
  return (
    <div className="pdf-page" style={{ background: DEEP, display: "flex", flexDirection: "column" }}>
      {/* Dark top strip for contrast */}
      <div style={{ height: "3mm", background: VIOLET, flexShrink: 0 }} />
      <div style={{ padding: "10mm 14mm 11mm", display: "flex", flexDirection: "column", gap: "6mm", flex: 1 }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
            <SectionLabel light>Galeria</SectionLabel>
            <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
              Portfólio{" "}
              <span style={{ color: LILAC, fontStyle: "italic" }}>fotográfico</span>
            </h2>
            <Divider light />
          </div>
          <p style={{ ...DM, fontSize: "9.5pt", color: "rgba(201,167,255,0.38)", margin: 0 }}>
            Ensaios · Desfiles · Moda · Conteúdo
          </p>
        </div>

        {/* Photo grid 3×3 with category tags */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4mm", flex: 1 }}>
          {PORTFOLIO.map((p) => (
            <div key={p.src} style={{ position: "relative", borderRadius: "9pt", overflow: "hidden", aspectRatio: "4/5",
              border: "1px solid rgba(201,167,255,0.06)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.tag}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              {/* Subtle bottom fade */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
                background: "linear-gradient(to top, rgba(26,10,46,0.65) 0%, transparent 100%)" }} />
              {/* Category tag */}
              <span style={{
                position: "absolute", bottom: "6pt", left: "7pt",
                ...DM, fontSize: "8pt", letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(26,10,46,0.45)",
                padding: "2pt 6pt", borderRadius: "100pt",
                backdropFilter: "blur(4px)",
              }}>
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="https://www.manufreixas.com.br/#portfolio" target="_blank" rel="noopener noreferrer"
             style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5pt" }}>
            <span style={{ ...DM, fontSize: "9.5pt", color: "rgba(201,167,255,0.45)", fontWeight: 300 }}>
              Veja o portfólio completo em
            </span>
            <span style={{ ...DM, fontSize: "9.5pt", fontWeight: 600, color: LILAC,
              textDecoration: "underline", textDecorationColor: YELLOW,
              textUnderlineOffset: "2pt", textDecorationThickness: "1px" }}>
              manufreixas.com.br
            </span>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={LILAC}
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
      <PageMark page={6} dark />
    </div>
  );
}

/* ── Page 7: Trabalhos & Parcerias ────────────────────────────── */
function Works() {
  return (
    <div className="pdf-page" style={{ background: SOFT, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "11mm 14mm", display: "flex", flexDirection: "column", gap: "7mm" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Experiência</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Trabalhos &{" "}
            <span style={{ color: VIOLET, fontStyle: "italic" }}>parcerias</span>
          </h2>
          <Divider />
          <p style={{ ...DM, fontSize: "10.5pt", color: "#6A5980", fontWeight: 300, margin: 0 }}>
            Marcas e projetos em que Manu participou com presença, autenticidade e resultado.
          </p>
        </div>

        {/* Works grid — fixed image height, compact text */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6mm" }}>
          {WORKS.map((work) => (
            <a key={work.title} href={work.href} target="_blank" rel="noopener noreferrer"
               style={{ display: "block", textDecoration: "none" }}>
            <div className="no-break" style={{
              borderRadius: "12pt", overflow: "hidden",
              background: "white",
              border: "1px solid rgba(109,60,201,0.09)",
              boxShadow: "0 3px 16px rgba(109,60,201,0.08)",
              display: "flex", flexDirection: "column",
            }}>
              {/* Fixed-height image container */}
              <div style={{ position: "relative", height: "65mm", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={work.img} alt={work.title} style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center 20%",
                }} />
                <div style={{ position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(46,23,79,0.22) 0%, transparent 50%)" }} />
                {/* Mini photo overlay */}
                <div style={{ position: "absolute", bottom: "8pt", right: "8pt",
                  width: "30%", aspectRatio: "3/4",
                  borderRadius: "6pt", overflow: "hidden",
                  border: "2.5px solid rgba(255,255,255,0.95)",
                  boxShadow: "0 4px 12px rgba(46,23,79,0.32)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={work.img2} alt={`${work.title} 2`} style={{
                    width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%",
                  }} />
                </div>
                {/* Category badge on image */}
                <span style={{
                  position: "absolute", top: "8pt", left: "8pt",
                  ...DM, fontSize: "8pt", padding: "2.5pt 7pt", borderRadius: "100pt",
                  background: "rgba(255,248,220,0.95)", color: "#8A6800",
                  border: "1px solid rgba(255,216,77,0.3)",
                }}>
                  {work.category}
                </span>
              </div>
              {/* Compact text */}
              <div style={{ padding: "9pt 11pt 10pt", display: "flex", flexDirection: "column", gap: "3pt" }}>
                <p style={{ ...PF, fontSize: "13pt", fontWeight: 600, color: PURPLE, margin: 0 }}>{work.title}</p>
                <p style={{ ...DM, fontSize: "9.5pt", color: "#6A5980", margin: 0,
                  fontWeight: 300, lineHeight: 1.45 }}>{work.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "5pt", marginTop: "2pt" }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill={VIOLET} opacity={0.7}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span style={{ ...DM, fontSize: "9pt", color: VIOLET }}>{work.handle}</span>
                </div>
              </div>
            </div>
            </a>
          ))}
        </div>

        {/* Invitation strip */}
        <div style={{ padding: "9pt 14pt", borderRadius: "10pt", marginTop: "auto",
          background: "rgba(109,60,201,0.08)", border: "1px solid rgba(109,60,201,0.12)",
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ ...DM, fontSize: "10.5pt", color: PURPLE, margin: 0, fontWeight: 300 }}>
            Sua marca pode ser a próxima parceira de Manu Freixas.
          </p>
          <span style={{ ...DM, fontSize: "9.5pt", fontWeight: 600, color: VIOLET, whiteSpace: "nowrap" }}>
            Contatos → pág. 8
          </span>
        </div>
      </div>
      <PageMark page={7} />
    </div>
  );
}

/* ── Page 8: Contato ───────────────────────────────────────────── */
function Contact() {
  return (
    <div className="pdf-page" style={{ background: DEEP, overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3mm", background: YELLOW, zIndex: 10 }} />

      {/* Two-column layout */}
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 78mm" }}>

        {/* Left: content */}
        <div style={{ position: "relative", zIndex: 2, padding: "13mm 12mm 11mm 14mm",
          display: "flex", flexDirection: "column", gap: "5.5mm" }}>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-manu-freixas-light.png" alt="Manu Freixas"
            style={{ height: "9mm", width: "auto", objectFit: "contain", alignSelf: "flex-start" }} />

          <div>
            <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.05 }}>
              Vamos criar algo
            </h2>
            <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: LILAC, fontStyle: "italic", margin: 0, lineHeight: 1.05 }}>
              extraordinário juntos?
            </h2>
          </div>

          <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />

          <p style={{ ...DM, fontSize: "10.5pt", color: "rgba(255,255,255,0.6)", fontWeight: 300,
            lineHeight: 1.6, margin: 0 }}>
            Manu Freixas está pronta para dar vida a novas campanhas, editoriais,
            conteúdos e projetos especiais — com presença, carisma e versatilidade.
          </p>

          {/* Contact rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4.5mm" }}>
            {[
              { label: "WhatsApp",  value: "(21) 96406-8920",         href: "https://api.whatsapp.com/send/?phone=5521964068920&text=Ol%C3%A1%21+Vi+o+media+kit+da+Manu+Freixas+e+gostaria+de+fazer+uma+proposta.&type=phone_number&app_absent=0", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.99 2C6.476 2 2 6.477 2 12.001c0 1.965.538 3.803 1.473 5.379L2 22l4.761-1.473A9.935 9.935 0 0011.99 22C17.513 22 22 17.523 22 12S17.513 2 11.99 2z" },
              { label: "Instagram", value: "@manufreixasoficial",      href: "https://instagram.com/manufreixasoficial", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "TikTok",    value: "@familiamanufreixas2020",  href: "https://www.tiktok.com/@familiamanufreixas2020", icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.84 1.55V6.78a4.85 4.85 0 01-1.07-.09z" },
              { label: "YouTube",   value: "@manufreixas",             href: "https://www.youtube.com/@manufreixas", icon: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                 style={{ display: "flex", alignItems: "center", gap: "8pt", textDecoration: "none" }}>
                <div style={{ width: "24pt", height: "24pt", borderRadius: "6pt",
                  background: "rgba(201,167,255,0.1)", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill={LILAC}>
                    <path d={c.icon} />
                  </svg>
                </div>
                <div style={{ flex: 1, height: "1px", background: "rgba(201,167,255,0.08)" }} />
                <div style={{ textAlign: "right" as const }}>
                  <p style={{ ...DM, fontSize: "8pt", textTransform: "uppercase", letterSpacing: "0.12em",
                    color: "rgba(201,167,255,0.35)", margin: "0 0 1pt" }}>{c.label}</p>
                  <p style={{ ...PF, fontSize: "11.5pt", fontWeight: 600, color: "white", margin: 0 }}>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Legal notice + WhatsApp CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5mm", marginTop: "5mm" }}>
            {/* Notice box */}
            <div style={{
              padding: "10pt 13pt", borderRadius: "10pt",
              background: "rgba(255,216,77,0.06)",
              border: "1px solid rgba(255,216,77,0.22)",
              display: "flex", gap: "8pt", alignItems: "flex-start",
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={YELLOW}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "1pt", opacity: 0.85 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <p style={{ ...DM, fontSize: "9.5pt", color: "rgba(255,216,77,0.82)",
                margin: 0, lineHeight: 1.55, fontWeight: 300 }}>
                Todos os contatos, propostas e parcerias são tratados diretamente com a{" "}
                <strong style={{ fontWeight: 600 }}>responsável legal</strong>.
              </p>
            </div>

            {/* WhatsApp button */}
            <a href="https://api.whatsapp.com/send/?phone=5521964068920&text=Ol%C3%A1%21+Vi+o+media+kit+da+Manu+Freixas+e+gostaria+de+fazer+uma+proposta.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
               style={{
                 display: "inline-flex", alignItems: "center", gap: "7pt",
                 padding: "9pt 18pt", borderRadius: "100pt",
                 background: "#25D366",
                 boxShadow: "0 8px 24px rgba(37,211,102,0.30)",
                 textDecoration: "none", alignSelf: "flex-start",
               }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.99 2C6.476 2 2 6.477 2 12.001c0 1.965.538 3.803 1.473 5.379L2 22l4.761-1.473A9.935 9.935 0 0011.99 22C17.513 22 22 17.523 22 12S17.513 2 11.99 2z" />
              </svg>
              <span style={{ ...DM, fontSize: "10.5pt", fontWeight: 700, color: "white" }}>
                Entre em contato
              </span>
            </a>
          </div>

          <div style={{ marginTop: "auto", paddingTop: "5mm", borderTop: "1px solid rgba(201,167,255,0.20)",
            display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ ...DM, fontSize: "8.5pt", color: "rgba(201,167,255,0.50)", margin: 0 }}>
              © 2026 Manu Freixas · Todos os direitos reservados
            </p>
            <p style={{ ...DM, fontSize: "8.5pt", color: "rgba(201,167,255,0.50)", margin: 0, whiteSpace: "nowrap" }}>
              Desenvolvido por{" "}
              <a href="https://instagram.com/thepixeloo" target="_blank" rel="noopener noreferrer"
                 style={{ ...DM, fontSize: "8.5pt", fontWeight: 600, color: LILAC,
                   textDecoration: "underline", textDecorationColor: YELLOW,
                   textUnderlineOffset: "2pt", textDecorationThickness: "1px" }}>
                Pixeloo
              </a>
            </p>
          </div>
        </div>

        {/* Right: full-height photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ensaio1.jpeg" alt="Manu Freixas"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 15%" }} />
          {/* Left fade to blend with dark background */}
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(26,10,46,0.85) 0%, rgba(26,10,46,0.12) 50%, transparent 100%)" }} />
          {/* Subtle bottom overlay */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
            background: "linear-gradient(to top, rgba(26,10,46,0.8) 0%, transparent 100%)" }} />
          {/* Yellow accent line on right edge */}
          <div style={{ position: "absolute", top: "0", bottom: "0", right: 0, width: "3pt", background: YELLOW }} />
        </div>
      </div>
      <PageMark page={8} dark />
    </div>
  );
}

/* ── Root export ───────────────────────────────────────────────── */
export default function MediaKitPdf() {
  return (
    <div className="pdf-wrap">
      <Cover />
      <About />
      <Profile />
      <Digital />
      <FormationAreas />
      <Portfolio />
      <Works />
      <Contact />
    </div>
  );
}
