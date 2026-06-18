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
  { label: "Idade",       value: "10 anos" },
  { label: "Altura",      value: "1,36 m" },
  { label: "Calçado",     value: "32 / 33" },
  { label: "Manequim",    value: "12" },
  { label: "Localização", value: "Rio de Janeiro — RJ" },
  { label: "Perfil",      value: "Artista · Modelo · Criadora" },
  { label: "Diferencial", value: "Versatilidade & Oratória" },
  { label: "Plataformas", value: "Instagram · TikTok · YouTube" },
];

const STATS = [
  {
    platform: "Instagram", handle: "@manufreixasoficial",
    gradient: "linear-gradient(135deg, #833AB4, #C13584, #E4405F, #F77737)",
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
    gradient: "linear-gradient(135deg, #010101 0%, #EE1D52 55%, #69C9D0 100%)",
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
    gradient: "linear-gradient(135deg, #FF0000, #CC0000)",
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
  { title: "Modelo Fotográfica",    desc: "Ensaios profissionais com facilidade para poses, expressões e direção de cena." },
  { title: "Provador & Looks",      desc: "Referência para apresentação de coleções e styling com naturalidade editorial." },
  { title: "Desfiles",              desc: "Passarela com postura, ritmo e presença. Formação específica em moda." },
  { title: "Atuação & Audiovisual", desc: "Formação em teatro, TV e cinema. Expressividade e facilidade de direção." },
  { title: "Criadora de Conteúdo",  desc: "Conteúdo digital autêntico para Instagram, TikTok e YouTube." },
  { title: "Eventos & Divulgação",  desc: "Participação em eventos, campanhas publicitárias e projetos de marca." },
];

const WORKS = [
  {
    title: "Kukixo",
    category: "Loja parceira",
    desc: "Produção de conteúdo para loja parceira, destacando peças infantis com leveza e carisma.",
    handle: "@kukixo_oficial",
    img: "/images/works/kukixo-01.jpg",
    img2: "/images/works/kukixo-02.jpg",
  },
  {
    title: "Loja ReAlma",
    category: "Loja parceira",
    desc: "Divulgação de looks valorizando estilo, espontaneidade e presença para moda teen.",
    handle: "@realma.rio",
    img: "/images/works/realma-01.jpg",
    img2: "/images/works/realma-02.jpg",
  },
  {
    title: "Rei Nato — Moda Kids",
    category: "Editorial de moda",
    desc: "Editorial de moda kids com produção de looks infantis, postura e desenvoltura comercial.",
    handle: "@reinato_modakids",
    img: "/images/works/rei-nato-01.jpg",
    img2: "/images/works/rei-nato-02.jpg",
  },
];

const PORTFOLIO = [
  { src: "/images/ensaio1.jpeg",          alt: "Ensaio fotográfico" },
  { src: "/images/ensaio4.jpeg",          alt: "Ensaio fotográfico" },
  { src: "/images/ensaio7.jpeg",          alt: "Ensaio fotográfico" },
  { src: "/images/desfile3.jpeg",         alt: "Desfile" },
  { src: "/images/ensaio16.jpeg",         alt: "Ensaio editorial" },
  { src: "/images/desfile1.jpeg",         alt: "Desfile" },
  { src: "/images/moda2.jpeg",            alt: "Moda" },
  { src: "/images/conteudodigital1.jpeg", alt: "Dia a dia" },
  { src: "/images/moda3.jpeg",            alt: "Moda" },
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

function Divider({ light }: { light?: boolean }) {
  return (
    <div style={{ width: "16mm", height: "1.5pt", borderRadius: "1pt",
      background: light ? YELLOW : VIOLET }} />
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{
      ...DM,
      display: "inline-block",
      fontSize: "7pt",
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      fontWeight: 600,
      color: light ? "rgba(201,167,255,0.55)" : VIOLET,
      padding: "3pt 9pt",
      borderRadius: "100pt",
      background: light ? "rgba(201,167,255,0.09)" : "rgba(109,60,201,0.09)",
      border: `1px solid ${light ? "rgba(201,167,255,0.18)" : "rgba(109,60,201,0.18)"}`,
    }}>
      {children}
    </span>
  );
}

/* ── Page 1: Cover ─────────────────────────────────────────────── */
function Cover() {
  return (
    <div className="pdf-page" style={{ background: DEEP }}>
      {/* Top yellow accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3mm", background: YELLOW, zIndex: 10 }} />

      {/* Full-bleed hero */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-manu.jpg" alt="Manu Freixas" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center top", opacity: 0.62,
      }} />

      {/* Vignettes */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "52%", zIndex: 2,
        background: "linear-gradient(to bottom, rgba(26,10,46,0.92) 0%, rgba(26,10,46,0) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "62%", zIndex: 2,
        background: "linear-gradient(to top, rgba(26,10,46,0.96) 0%, rgba(26,10,46,0) 100%)" }} />

      {/* Content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: "15mm 14mm 13mm" }}>

        {/* Top bar: logo + label */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3mm" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-manu-freixas-light.png" alt="Manu Freixas"
            style={{ height: "9mm", width: "auto" }} />
          <span style={{ ...DM, fontSize: "7pt", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(201,167,255,0.5)" }}>
            Media Kit Digital · 2026
          </span>
        </div>

        {/* Bottom hero text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
          <SectionLabel light>Artista Mirim · Modelo · Criadora de Conteúdo</SectionLabel>

          <div style={{ lineHeight: 1 }}>
            <div style={{ ...PF, fontSize: "54pt", fontWeight: 700, color: "white", lineHeight: 0.92 }}>Manu</div>
            <div style={{ ...PF, fontSize: "54pt", fontWeight: 700, color: LILAC, fontStyle: "italic", lineHeight: 0.92 }}>Freixas</div>
          </div>

          <Divider light />

          {/* Location pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "5pt", alignSelf: "flex-start",
            padding: "3pt 9pt", borderRadius: "100pt",
            background: "rgba(201,167,255,0.12)", border: "1px solid rgba(201,167,255,0.24)" }}>
            <svg width="7" height="9" viewBox="0 0 12 16" fill={LILAC}>
              <path d="M6 0C3.243 0 1 2.243 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.757-2.243-5-5-5zm0 7.5A2.5 2.5 0 113.5 5 2.503 2.503 0 016 7.5z" />
            </svg>
            <span style={{ ...DM, fontSize: "8pt", color: LILAC }}>Rio de Janeiro — RJ</span>
          </div>

          <p style={{ ...DM, fontSize: "9.5pt", color: "rgba(255,255,255,0.7)", fontWeight: 300,
            lineHeight: 1.55, maxWidth: "150mm", margin: 0 }}>
            Versatilidade, presença e comunicação para moda, campanhas,
            audiovisual, desfiles e projetos digitais.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", gap: "5mm" }}>
            {["Versatilidade", "Oratória", "Presença Digital"].map((tag) => (
              <span key={tag} style={{
                ...DM, fontSize: "7.5pt", padding: "2.5pt 8pt", borderRadius: "100pt",
                background: "rgba(255,216,77,0.13)", color: YELLOW,
                border: "1px solid rgba(255,216,77,0.32)",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page 2: About ─────────────────────────────────────────────── */
function About() {
  return (
    <div className="pdf-page" style={{ background: CREAM, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "11mm 14mm", display: "flex", flexDirection: "column", gap: "6mm", flex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Quem é Manu Freixas</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Presença, arte<br />
            <span style={{ color: VIOLET, fontStyle: "italic" }}>e versatilidade</span>
          </h2>
          <Divider />
        </div>

        {/* Two-column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 88mm", gap: "10mm", flex: 1 }}>

          {/* Left: text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5mm" }}>
            <p style={{ ...DM, fontSize: "9pt", color: "#4A3B62", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              Manu Freixas é uma artista mirim, modelo e criadora de conteúdo do Rio de Janeiro.
              Com carisma, desenvoltura e excelente comunicação, Manu transita com naturalidade por
              diferentes áreas como fotografia, moda, provador, vídeo looks, desfiles, atuação e projetos digitais.
            </p>
            <p style={{ ...DM, fontSize: "9pt", color: "#4A3B62", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              Sua rotina de formação inclui canto, passarela, teatro, TV e cinema, ginástica, ballet
              e outras atividades que fortalecem sua{" "}
              <strong style={{ fontWeight: 600, color: PURPLE }}>expressão corporal</strong>,
              presença cênica e disciplina.
            </p>
            <p style={{ ...DM, fontSize: "9pt", color: "#4A3B62", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              Com presença ativa no Instagram, TikTok e YouTube, Manu vem construindo uma imagem
              moderna, autêntica e versátil para marcas, lojas, campanhas e produções.
            </p>

            {/* Key attributes */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
              {["Carisma", "Versatilidade", "Oratória", "Disciplina"].map((attr) => (
                <div key={attr} style={{ display: "flex", alignItems: "center", gap: "5pt" }}>
                  <div style={{ width: "4pt", height: "4pt", borderRadius: "50%", background: VIOLET, flexShrink: 0 }} />
                  <span style={{ ...DM, fontSize: "8.5pt", color: PURPLE, fontWeight: 500 }}>{attr}</span>
                </div>
              ))}
            </div>

            {/* Legal box */}
            <div style={{ marginTop: "auto", padding: "9pt 12pt", borderRadius: "8pt",
              background: "rgba(109,60,201,0.06)", border: "1px solid rgba(109,60,201,0.14)" }}>
              <p style={{ ...DM, fontSize: "8pt", color: "#6A5980", margin: 0, lineHeight: 1.55 }}>
                <strong style={{ fontWeight: 600, color: VIOLET }}>Responsável legal —</strong>{" "}
                Contatos, propostas e parcerias são tratados diretamente com a responsável legal de Manu Freixas.
              </p>
            </div>
          </div>

          {/* Right: photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
            <div style={{ flex: 3, borderRadius: "10pt", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sobre-manu.jpg" alt="Manu Freixas"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }} />
            </div>
            <div style={{ flex: 2, borderRadius: "10pt", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sobre-manu-2.jpg" alt="Manu Freixas nos bastidores"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page 3: Perfil Técnico ────────────────────────────────────── */
function Profile() {
  return (
    <div className="pdf-page" style={{ background: PURPLE, display: "flex", flexDirection: "column" }}>
      {/* Subtle glow decorations */}
      <div style={{ position: "absolute", top: "-25mm", right: "-25mm", width: "100mm", height: "100mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(109,60,201,0.3) 0%, transparent 70%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-20mm", left: "-20mm", width: "80mm", height: "80mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(201,167,255,0.1) 0%, transparent 70%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, padding: "14mm", display: "flex", flexDirection: "column", gap: "8mm" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <span style={{ ...DM, fontSize: "7pt", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(201,167,255,0.5)", fontWeight: 600 }}>Especificações</span>
          <h2 style={{ ...PF, fontSize: "28pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
            Perfil <span style={{ color: LILAC, fontStyle: "italic" }}>técnico</span>
          </h2>
          <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />
          <p style={{ ...DM, fontSize: "9pt", color: "rgba(201,167,255,0.52)", fontWeight: 300, margin: 0, lineHeight: 1.5, maxWidth: "135mm" }}>
            Informações essenciais para marcas, lojas, produtoras, fotógrafos e agências
            avaliarem Manu para seus projetos.
          </p>
        </div>

        {/* Profile grid 2×4 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5mm" }}>
          {PROFILE.map((item) => (
            <div key={item.label} className="no-break" style={{
              padding: "10pt 13pt", borderRadius: "10pt",
              background: "rgba(201,167,255,0.07)",
              border: "1px solid rgba(201,167,255,0.12)",
            }}>
              <p style={{ ...DM, fontSize: "7pt", textTransform: "uppercase", letterSpacing: "0.12em",
                color: "rgba(201,167,255,0.42)", margin: "0 0 4pt 0" }}>
                {item.label}
              </p>
              <p style={{ ...PF, fontSize: "11.5pt", fontWeight: 600, color: "white", margin: 0 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div style={{ padding: "10pt 14pt", borderRadius: "10pt", marginTop: "2mm",
          background: "rgba(109,60,201,0.25)", border: "1px solid rgba(109,60,201,0.4)",
          display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ ...DM, fontSize: "9pt", color: "rgba(255,255,255,0.75)", margin: 0, fontWeight: 300 }}>
            Interessado em trabalhar com Manu Freixas?
          </p>
          <span style={{ ...DM, fontSize: "8.5pt", fontWeight: 600, color: LILAC, whiteSpace: "nowrap" }}>
            Ver contatos → pág. 9
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Page 4: Presença Digital ──────────────────────────────────── */
function Digital() {
  return (
    <div className="pdf-page" style={{ background: DEEP, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "14mm", display: "flex", flexDirection: "column", gap: "7mm" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <span style={{ ...DM, fontSize: "7pt", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(201,167,255,0.5)", fontWeight: 600 }}>Presença Digital</span>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
            Números que{" "}
            <span style={{ color: LILAC, fontStyle: "italic" }}>falam por ela</span>
          </h2>
          <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />
          <p style={{ ...DM, fontSize: "9pt", color: "rgba(201,167,255,0.5)", fontWeight: 300, margin: 0 }}>
            Instagram, TikTok e YouTube — alcance orgânico em crescimento contínuo.
          </p>
        </div>

        {/* Stats cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
          {STATS.map((s) => (
            <div key={s.platform} className="no-break" style={{
              borderRadius: "12pt", overflow: "hidden",
              border: "1px solid rgba(201,167,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}>
              <div style={{ padding: "9pt 11pt", background: s.gradient }}>
                <p style={{ ...PF, fontSize: "11pt", fontWeight: 700, color: "white", margin: "0 0 1pt" }}>{s.platform}</p>
                <p style={{ ...DM, fontSize: "7pt", color: "rgba(255,255,255,0.7)", margin: 0 }}>{s.handle}</p>
              </div>
              <div style={{ padding: "8pt 11pt", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6pt" }}>
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <p style={{ ...PF, fontSize: "11.5pt", fontWeight: 700, color: LILAC, margin: "0 0 1pt" }}>{m.value}</p>
                    <p style={{ ...DM, fontSize: "7pt", color: "rgba(201,167,255,0.42)", margin: 0, lineHeight: 1.3 }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Prints */}
        <div>
          <p style={{ ...DM, fontSize: "7.5pt", textTransform: "uppercase", letterSpacing: "0.14em",
            color: "rgba(201,167,255,0.38)", margin: "0 0 4mm" }}>
            Estatísticas reais das plataformas
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
            {STATS.map((s) => (
              <div key={s.platform} style={{
                borderRadius: "10pt", overflow: "hidden", aspectRatio: "9/16",
                border: "1px solid rgba(201,167,255,0.1)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.printImage} alt={`${s.platform} analytics`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page 5: Formação ──────────────────────────────────────────── */
function Formation() {
  return (
    <div className="pdf-page" style={{ background: CREAM, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "12mm 14mm", display: "flex", flexDirection: "column", gap: "8mm" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Formação</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Formação e{" "}
            <span style={{ color: VIOLET, fontStyle: "italic" }}>desenvolvimento</span>
          </h2>
          <Divider />
          <p style={{ ...DM, fontSize: "9pt", color: "#6A5980", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
            Aprendizado contínuo que sustenta a versatilidade e a presença de Manu.
          </p>
        </div>

        {/* Grid 3×3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm" }}>
          {FORMATION.map((item) => {
            const c = CAT_COLORS[item.cat] ?? { bg: "#EEE6FF", text: "#6D3CC9" };
            return (
              <div key={item.label} className="no-break" style={{
                padding: "11pt 13pt", borderRadius: "10pt",
                background: c.bg, border: `1px solid ${c.text}18`,
              }}>
                <p style={{ ...DM, fontSize: "7pt", textTransform: "uppercase",
                  letterSpacing: "0.1em", color: c.text, margin: "0 0 4pt", opacity: 0.75 }}>
                  {item.cat}
                </p>
                <p style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: PURPLE, margin: 0 }}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Page 6: Áreas de Atuação ──────────────────────────────────── */
function Areas() {
  return (
    <div className="pdf-page" style={{ background: SOFT, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "12mm 14mm", display: "flex", flexDirection: "column", gap: "8mm" }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Atuação</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Áreas de <span style={{ color: VIOLET, fontStyle: "italic" }}>atuação</span>
          </h2>
          <Divider />
          <p style={{ ...DM, fontSize: "9pt", color: "#6A5980", fontWeight: 300, margin: 0 }}>
            Presença versátil em diferentes frentes da moda, audiovisual e conteúdo digital.
          </p>
        </div>

        {/* Grid 2×3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5mm" }}>
          {AREAS.map((area, i) => (
            <div key={area.title} className="no-break" style={{
              padding: "12pt", borderRadius: "10pt",
              background: "white",
              border: "1px solid rgba(109,60,201,0.1)",
              boxShadow: "0 2px 12px rgba(109,60,201,0.05)",
              display: "flex", flexDirection: "column", gap: "4pt",
            }}>
              <span style={{ ...PF, fontSize: "18pt", fontWeight: 700,
                color: "rgba(109,60,201,0.14)", lineHeight: 1 }}>
                0{i + 1}
              </span>
              <p style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: PURPLE, margin: 0 }}>
                {area.title}
              </p>
              <p style={{ ...DM, fontSize: "8.5pt", color: "#6A5980", margin: 0,
                lineHeight: 1.5, fontWeight: 300 }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page 7: Portfólio ─────────────────────────────────────────── */
function Portfolio() {
  return (
    <div className="pdf-page" style={{ background: CREAM, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "11mm 14mm", display: "flex", flexDirection: "column", gap: "5mm", flex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Galeria</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Portfólio <span style={{ color: VIOLET, fontStyle: "italic" }}>fotográfico</span>
          </h2>
          <Divider />
        </div>

        {/* Photo grid 3×3 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4mm", flex: 1 }}>
          {PORTFOLIO.map((p) => (
            <div key={p.src} style={{ borderRadius: "8pt", overflow: "hidden", aspectRatio: "4/5",
              border: "1px solid rgba(109,60,201,0.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page 8: Trabalhos & Parcerias ────────────────────────────── */
function Works() {
  return (
    <div className="pdf-page" style={{ background: SOFT, display: "flex", flexDirection: "column" }}>
      <VioletBar />
      <div style={{ padding: "12mm 14mm", display: "flex", flexDirection: "column", gap: "8mm", flex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm" }}>
          <SectionLabel>Experiência</SectionLabel>
          <h2 style={{ ...PF, fontSize: "26pt", fontWeight: 700, color: PURPLE, margin: 0, lineHeight: 1.1 }}>
            Trabalhos &{" "}
            <span style={{ color: VIOLET, fontStyle: "italic" }}>parcerias</span>
          </h2>
          <Divider />
        </div>

        {/* Works grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "5mm", flex: 1 }}>
          {WORKS.map((work) => (
            <div key={work.title} className="no-break" style={{
              borderRadius: "12pt", overflow: "hidden",
              background: "white",
              border: "1px solid rgba(109,60,201,0.1)",
              boxShadow: "0 2px 14px rgba(109,60,201,0.07)",
              display: "flex", flexDirection: "column",
            }}>
              {/* Dual image composition */}
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={work.img} alt={work.title} style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center 25%",
                }} />
                <div style={{ position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(46,23,79,0.18) 0%, transparent 45%)" }} />
                {/* Mini photo */}
                <div style={{ position: "absolute", bottom: "8pt", right: "8pt",
                  width: "32%", aspectRatio: "3/4",
                  borderRadius: "6pt", overflow: "hidden",
                  border: "2.5px solid rgba(255,255,255,0.92)",
                  boxShadow: "0 4px 14px rgba(46,23,79,0.28)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={work.img2} alt={`${work.title} 2`} style={{
                    width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%",
                  }} />
                </div>
              </div>
              {/* Card content */}
              <div style={{ padding: "9pt 11pt", display: "flex", flexDirection: "column", gap: "4pt" }}>
                <span style={{ ...DM, fontSize: "7pt", padding: "2pt 7pt", borderRadius: "100pt",
                  background: "#FFF8DC", color: "#8A6800", border: "1px solid #e8d87022",
                  alignSelf: "flex-start" }}>
                  {work.category}
                </span>
                <p style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: PURPLE, margin: 0 }}>{work.title}</p>
                <p style={{ ...DM, fontSize: "8pt", color: "#6A5980", margin: 0,
                  fontWeight: 300, lineHeight: 1.45 }}>{work.desc}</p>
                <span style={{ ...DM, fontSize: "7.5pt", color: VIOLET, marginTop: "2pt" }}>{work.handle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page 9: Contato ───────────────────────────────────────────── */
function Contact() {
  return (
    <div className="pdf-page" style={{ background: DEEP }}>
      {/* Yellow top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3mm", background: YELLOW, zIndex: 10 }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "-30mm", right: "-30mm", width: "120mm", height: "120mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(109,60,201,0.22) 0%, transparent 70%)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "-20mm", left: "-20mm", width: "90mm", height: "90mm",
        borderRadius: "50%", background: "radial-gradient(circle, rgba(201,167,255,0.1) 0%, transparent 70%)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "16mm 14mm 13mm",
        display: "flex", flexDirection: "column", height: "100%", gap: "8mm" }}>

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo-manu-freixas-light.png" alt="Manu Freixas"
          style={{ height: "9mm", width: "auto" }} />

        {/* Heading */}
        <div>
          <h2 style={{ ...PF, fontSize: "30pt", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.1 }}>
            Vamos criar algo
          </h2>
          <h2 style={{ ...PF, fontSize: "30pt", fontWeight: 700, color: LILAC, fontStyle: "italic", margin: 0, lineHeight: 1.1 }}>
            extraordinário juntos?
          </h2>
        </div>

        <div style={{ width: "16mm", height: "1.5pt", background: YELLOW, borderRadius: "1pt" }} />

        <p style={{ ...DM, fontSize: "10pt", color: "rgba(255,255,255,0.62)", fontWeight: 300,
          lineHeight: 1.6, margin: 0, maxWidth: "145mm" }}>
          Para propostas comerciais, campanhas, editoriais, eventos e parcerias,
          entre em contato com a responsável legal de Manu Freixas pelos canais abaixo.
        </p>

        {/* Contact rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
          {[
            { label: "WhatsApp",  value: "(21) 96406-8920" },
            { label: "Instagram", value: "@manufreixasoficial" },
            { label: "TikTok",    value: "@familiamanufreixas2020" },
            { label: "YouTube",   value: "@manufreixas" },
          ].map((c) => (
            <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "8mm" }}>
              <span style={{ ...DM, fontSize: "7pt", textTransform: "uppercase",
                letterSpacing: "0.14em", color: "rgba(201,167,255,0.4)", width: "22mm", flexShrink: 0 }}>
                {c.label}
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(201,167,255,0.1)" }} />
              <span style={{ ...PF, fontSize: "11pt", fontWeight: 600, color: "white" }}>
                {c.value}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer bar */}
        <div style={{ paddingTop: "6mm", borderTop: "1px solid rgba(201,167,255,0.08)",
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ ...DM, fontSize: "7.5pt", color: "rgba(201,167,255,0.26)", margin: 0 }}>
            © 2026 Manu Freixas · Media Kit Digital · Todos os direitos reservados
          </p>
          <p style={{ ...DM, fontSize: "7.5pt", color: "rgba(201,167,255,0.2)", margin: 0 }}>
            Desenvolvido por Pixeloo
          </p>
        </div>
      </div>
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
      <Formation />
      <Areas />
      <Portfolio />
      <Works />
      <Contact />
    </div>
  );
}
