"use client";
import { useState, useRef, useCallback } from "react";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Sparkle, TinyStar, Star, Ring, ArrowUp, Ribbon, Crown } from "@/components/Deco";

// ── EDITE AQUI: substitua os "——" pelos dados reais dos seus prints ──────────
const STATS = [
  {
    platform: "Instagram",
    handle: "@manufreixasoficial",
    url: "https://instagram.com/manufreixasoficial",
    gradient: "linear-gradient(135deg, #833AB4, #C13584, #E4405F, #F77737)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </svg>
    ),
    metrics: [
      { label: "Seguidores",        value: "1.004",     sub: "" },
      { label: "Visualizações",     value: "604,7 mil", sub: "últimos 30 dias" },
      { label: "Contas alcançadas", value: "208,4 mil", sub: "últimos 30 dias" },
      { label: "Crescimento",       value: "+224",      sub: "seguidores líquidos" },
    ],
    badge: null,
  },
  {
    platform: "TikTok",
    handle: "@familiamanufreixas2020",
    url: "https://tiktok.com/@familiamanufreixas2020",
    gradient: "linear-gradient(135deg, #010101 0%, #EE1D52 55%, #69C9D0 100%)",
    icon: (
      <svg width="22" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
    metrics: [
      { label: "Seguidores",   value: "4.005",    sub: "" },
      { label: "Espectadores", value: "553K",     sub: "total" },
      { label: "Curtidas",     value: "50,4 mil", sub: "no perfil" },
      { label: "Crescimento",  value: "+3.974",   sub: "seguidores líquidos" },
    ],
    badge: "Em crescimento",
  },
  {
    platform: "YouTube",
    handle: "@manufreixas",
    url: "https://youtube.com/@manufreixas",
    gradient: "linear-gradient(135deg, #FF0000, #CC0000)",
    icon: (
      <svg width="28" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000" />
      </svg>
    ),
    metrics: [
      { label: "Inscritos",     value: "248",      sub: "" },
      { label: "Visualizações", value: "15,4 mil", sub: "todo o período" },
      { label: "Curtidas",      value: "1,3 mil",  sub: "marcações gostei" },
      { label: "Comentários",   value: "37",       sub: "" },
    ],
    badge: null,
  },
];

// ── PRINTS DE DESEMPENHO ──────────────────────────────────────────────────────
// 1 box por plataforma. Cada plataforma tem um array `proofs` que alimenta o carrossel.
// Para adicionar um print: insira um objeto no array `proofs` da plataforma desejada.
// Para remover: apague a entrada correspondente.
// Coloque os arquivos em: public/images/stats/
const PERFORMANCE_PROOFS: {
  platform: string;
  handle: string;
  platformColor: string;
  gradient: string;
  icon: React.ReactNode;
  proofs: { title: string; description: string; image: string; alt: string }[];
}[] = [
  {
    platform: "Instagram",
    handle: "@manufreixasoficial",
    platformColor: "#E4405F",
    gradient: "linear-gradient(135deg, #833AB4, #C13584, #E4405F, #F77737)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="white" />
      </svg>
    ),
    proofs: [
      { title: "Perfil do Instagram",         description: "Perfil público @manufreixasoficial",              image: "/images/stats/instagram-perfil.png",                   alt: "Print do perfil público do Instagram da Manu Freixas" },
      { title: "Visão geral",                 description: "Resumo dos principais insights do perfil",        image: "/images/stats/instagram-visao-geral.png",              alt: "Print de visão geral dos insights do Instagram da Manu Freixas" },
      { title: "Stories em destaque",         description: "Visualizações recentes dos stories",              image: "/images/stats/instagram-stories-destaque.jpeg",        alt: "Print de insights dos stories do Instagram da Manu Freixas" },
      { title: "Conteúdos com maior alcance", description: "Publicações com alto volume de visualizações",   image: "/images/stats/instagram-conteudos-maior-alcance.jpeg", alt: "Print de insights dos conteúdos com maior alcance do Instagram da Manu Freixas" },
      { title: "Perfil do público",           description: "Dados demográficos da audiência",                image: "/images/stats/instagram-perfil-publico.jpeg",          alt: "Print de insights do público do Instagram da Manu Freixas" },
    ],
  },
  {
    platform: "TikTok",
    handle: "@familiamanufreixas2020",
    platformColor: "#69C9D0",
    gradient: "linear-gradient(135deg, #010101 0%, #EE1D52 55%, #69C9D0 100%)",
    icon: (
      <svg width="14" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
    proofs: [
      { title: "Perfil do TikTok",        description: "Perfil público @familiamanufreixas2020",    image: "/images/stats/tiktok-perfil.jpeg",        alt: "Print do perfil público do TikTok da Manu Freixas" },
      { title: "Visão geral",             description: "Métricas principais dos últimos 60 dias",   image: "/images/stats/tiktok-visao-geral.jpeg",   alt: "Print de visão geral dos insights do TikTok da Manu Freixas" },
      { title: "Espectadores",            description: "Total e novos espectadores",                image: "/images/stats/tiktok-espectadores.jpeg",  alt: "Print de espectadores do TikTok da Manu Freixas" },
      { title: "Crescimento",             description: "Evolução de seguidores ao longo do tempo",  image: "/images/stats/tiktok-seguidores.jpeg",    alt: "Print de crescimento de seguidores do TikTok da Manu Freixas" },
      { title: "Principais publicações",  description: "Vídeos com maior visualização",           image: "/images/stats/tiktok-publicacoes.jpeg",   alt: "Print das principais publicações do TikTok da Manu Freixas" },
    ],
  },
  {
    platform: "YouTube",
    handle: "@manufreixas",
    platformColor: "#FF4444",
    gradient: "linear-gradient(135deg, #FF0000, #CC0000)",
    icon: (
      <svg width="19" height="13" viewBox="0 0 24 24" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000" />
      </svg>
    ),
    proofs: [
      { title: "Canal no YouTube",   description: "Perfil público @manufreixas",                  image: "/images/stats/youtube-canal.jpeg",        alt: "Print do canal público do YouTube da Manu Freixas" },
      { title: "Visão geral",        description: "Inscritos, visualizações e curtidas totais",   image: "/images/stats/youtube-visao-geral.jpeg",  alt: "Print de visão geral do YouTube da Manu Freixas" },
      { title: "Perfil do público",  description: "Gênero e vídeos em alta",                     image: "/images/stats/youtube-publico.jpeg",      alt: "Print do público-alvo do canal YouTube da Manu Freixas" },
      { title: "Conteúdo principal", description: "Visualizações recentes e vídeos em destaque", image: "/images/stats/youtube-analytics.jpeg",    alt: "Print do painel de analytics do YouTube da Manu Freixas" },
    ],
  },
];

// ── Tipo do lightbox ──────────────────────────────────────────────────────────
type LightboxItem = { src: string; alt: string; platform: string; platformColor: string; title: string };

// ── Carrossel de prints (1 por plataforma) ────────────────────────────────────
function SocialProofCarousel({
  platform,
  onOpenLightbox,
}: {
  platform: (typeof PERFORMANCE_PROOFS)[0];
  onOpenLightbox: (item: LightboxItem) => void;
}) {
  const [idx, setIdx]           = useState(0);
  const [imgErrors, setImgErrors] = useState<boolean[]>(() => platform.proofs.map(() => false));
  const touchStartX             = useRef<number | null>(null);
  const total                   = platform.proofs.length;
  const current                 = platform.proofs[idx];
  const hasImage                = !!current.image && !imgErrors[idx];

  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx((i) => Math.min(total - 1, i + 1)), [total]);

  const markError = useCallback((i: number) =>
    setImgErrors((prev) => { const n = [...prev]; n[i] = true; return n; }), []);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta >  48) next();
    if (delta < -48) prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(201,167,255,0.16)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.35)",
      }}
    >
      {/* ── Cabeçalho da plataforma ── */}
      <div
        className="px-5 py-4 flex items-center justify-between flex-shrink-0"
        style={{ background: platform.gradient }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex-shrink-0">{platform.icon}</div>
          <div>
            <p className="font-bold text-white text-sm leading-tight"
               style={{ fontFamily: "var(--font-playfair)" }}>
              {platform.platform}
            </p>
            <p className="text-[11px] text-white opacity-70"
               style={{ fontFamily: "var(--font-dm)" }}>
              {platform.handle}
            </p>
          </div>
        </div>
        <span
          className="text-[10px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "var(--font-dm)",
            letterSpacing: "0.02em",
          }}
        >
          {total} prints
        </span>
      </div>

      {/* ── Área da imagem — proporção iPhone (9:19.5) ── */}
      <div className="flex-1 flex items-center justify-center px-2 pt-5">
        {/*
          Layout: [slot-esq] [imagem] [slot-dir]
          Slots só aparecem em lg+ para não roubar espaço em tablets.
          Imagem usa w-full max-w-[220px] e cresce até o espaço disponível.
        */}
        <div className="flex items-center justify-center gap-2 w-full">

          {/* Slot esquerdo — só visível em lg+ */}
          <div className="hidden lg:flex w-9 flex-shrink-0 justify-center">
            {total > 1 && idx > 0 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Print anterior"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A7FF]"
                style={{
                  background: "rgba(201,167,255,0.12)",
                  border: "1px solid rgba(201,167,255,0.3)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2L4 6l3.5 4" stroke="#C9A7FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Phone frame — cresce até 220px, centralizado */}
          <div
            className="rounded-[22px] overflow-hidden w-full max-w-[220px]"
            style={{
              aspectRatio: "9 / 19.5",
              background: "rgba(20,8,40,0.85)",
              border: "1.5px solid rgba(201,167,255,0.14)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(201,167,255,0.06)",
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {hasImage ? (
              <img
                key={idx}
                src={current.image}
                alt={current.alt}
                loading="lazy"
                onError={() => markError(idx)}
                onClick={() =>
                  onOpenLightbox({
                    src: current.image,
                    alt: current.alt,
                    platform: platform.platform,
                    platformColor: platform.platformColor,
                    title: current.title,
                  })
                }
                className="w-full h-full object-contain cursor-zoom-in"
                style={{ animation: "proofFadeIn 0.28s ease both" }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 px-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(201,167,255,0.07)",
                    border: "1.5px dashed rgba(201,167,255,0.2)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h1.5L8 5h8l1.5 2H19a2 2 0 012 2v6z"
                      stroke="rgba(201,167,255,0.35)"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="3" stroke="rgba(201,167,255,0.35)" strokeWidth="1.4" />
                  </svg>
                </div>
                <p className="text-[11px] text-center"
                   style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.3)" }}>
                  Adicionar print
                </p>
                <p className="text-[10px] text-center leading-snug"
                   style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.15)" }}>
                  {current.title}
                </p>
              </div>
            )}
          </div>

          {/* Slot direito — só visível em lg+ */}
          <div className="hidden lg:flex w-9 flex-shrink-0 justify-center">
            {total > 1 && idx < total - 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Próximo print"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A7FF]"
                style={{
                  background: "rgba(201,167,255,0.12)",
                  border: "1px solid rgba(201,167,255,0.3)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2L8 6l-3.5 4" stroke="#C9A7FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* ── Legenda ── */}
      <div className="px-5 pt-5 text-center">
        <p className="text-sm font-semibold leading-tight"
           style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}>
          {current.title}
        </p>
        <p className="text-[11px] mt-0.5 leading-snug"
           style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.45)" }}>
          {current.description}
        </p>
        <p className="text-[10px] mt-1.5"
           style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.28)" }}>
          {idx + 1} / {total}
        </p>
      </div>

      {/* ── Controles: dots + setas mobile ── */}
      <div className="px-5 py-5 flex items-center justify-center gap-3">
        {/* Seta anterior — mobile */}
        <button
          onClick={prev}
          disabled={idx === 0}
          aria-label="Print anterior"
          className="md:hidden flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-opacity disabled:opacity-25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A7FF]"
          style={{
            background: "rgba(201,167,255,0.1)",
            border: "1px solid rgba(201,167,255,0.2)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 2L4 6l3.5 4" stroke="#C9A7FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5">
          {platform.proofs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir para o print ${i + 1}: ${platform.proofs[i].title}`}
              className="rounded-full transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A7FF]"
              style={{
                width:      i === idx ? "18px" : "6px",
                height:     "6px",
                background: i === idx ? platform.platformColor : "rgba(201,167,255,0.22)",
                boxShadow:  i === idx ? `0 0 6px ${platform.platformColor}88` : "none",
              }}
            />
          ))}
        </div>

        {/* Seta próximo — mobile */}
        <button
          onClick={next}
          disabled={idx === total - 1}
          aria-label="Próximo print"
          className="md:hidden flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-opacity disabled:opacity-25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A7FF]"
          style={{
            background: "rgba(201,167,255,0.1)",
            border: "1px solid rgba(201,167,255,0.2)",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M4.5 2L8 6l-3.5 4" stroke="#C9A7FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
import { useEffect } from "react";

function Lightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.platform} · ${item.title}`}
    >
      <div className="relative w-full max-w-sm md:max-w-md" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-5 -right-1 md:-right-5 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-[rgba(201,167,255,0.2)]"
          style={{ background: "rgba(201,167,255,0.12)", border: "1px solid rgba(201,167,255,0.28)" }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="#C9A7FF" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <img
          src={item.src}
          alt={item.alt}
          className="w-full max-h-[85vh] object-contain rounded-3xl"
          style={{ border: "1px solid rgba(201,167,255,0.15)" }}
        />
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-[11px] uppercase tracking-wider font-semibold"
                style={{ fontFamily: "var(--font-dm)", color: item.platformColor }}>
            {item.platform}
          </span>
          <span style={{ color: "rgba(201,167,255,0.3)" }}>·</span>
          <span className="text-[11px] uppercase tracking-wider"
                style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.5)" }}>
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function DigitalPresence() {
  const ref = useIntersectionReveal();
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  return (
    <section
      id="presenca"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#2E174F" }}
    >
      {/* Decorações */}
      <Ring     size={100} color="#C9A7FF" opacity={0.12} className="absolute -top-8 -left-8 hidden md:block" />
      <ArrowUp  size={36}  color="#C9A7FF" opacity={0.3}  className="absolute top-16 right-16 hidden md:block deco-float" />
      <Star     size={28}  color="#FFD84D" opacity={0.4}  className="absolute top-10 right-32 hidden lg:block deco-twinkle" style={{ animationDelay: "0.9s" }} />
      <Sparkle  size={24}  color="#C9A7FF" opacity={0.35} className="absolute bottom-20 left-16 hidden md:block deco-twinkle" style={{ animationDelay: "1.6s" }} />
      <TinyStar size={22}  color="#FFD84D" opacity={0.45} className="absolute bottom-12 right-20 hidden lg:block deco-twinkle" style={{ animationDelay: "2.3s" }} />
      <Crown    size={28}  color="#C9A7FF" opacity={0.25} className="absolute top-24 left-8 hidden lg:block deco-float" style={{ animationDelay: "0.6s" }} />
      <Ribbon   size={30}  color="#C9A7FF" opacity={0.28} className="absolute bottom-36 right-8 hidden lg:block deco-float" style={{ animationDelay: "1.3s" }} />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Cabeçalho ── */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <div data-reveal className="opacity-0">
            <span className="section-label" style={{ color: "#C9A7FF" }}>Presença Digital</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}>
              Números que
              <br />
              <span className="italic" style={{ color: "#C9A7FF" }}>falam por ela</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 w-12 h-0.5 rounded" style={{ background: "#FFD84D" }} />
          <div data-reveal className="opacity-0">
            <p className="text-sm max-w-sm text-center leading-relaxed"
               style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.6)", fontWeight: 300 }}>
              Instagram, TikTok e YouTube — alcance orgânico em crescimento contínuo.
            </p>
          </div>
        </div>

        {/* ── Cards de números ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {STATS.map((s, i) => (
            <div
              key={s.platform}
              data-reveal
              className="opacity-0 card-hover rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(201,167,255,0.14)",
                animationDelay: `${i * 0.14}s`,
              }}
            >
              <div className="px-6 py-5 flex items-center justify-between" style={{ background: s.gradient }}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">{s.icon}</div>
                  <div>
                    <p className="font-bold text-white text-base leading-tight"
                       style={{ fontFamily: "var(--font-playfair)" }}>{s.platform}</p>
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                       className="text-white text-xs opacity-75 hover:opacity-100 transition-opacity"
                       style={{ fontFamily: "var(--font-dm)" }}>{s.handle}</a>
                  </div>
                </div>
                {s.badge && (
                  <span className="text-[10px] font-semibold px-2 py-1 rounded-full"
                        style={{ background: "rgba(255,216,77,0.25)", color: "#FFD84D",
                                 border: "1px solid rgba(255,216,77,0.4)", fontFamily: "var(--font-dm)" }}>
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="p-6 grid grid-cols-2 gap-5 flex-1">
                {s.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xl font-bold leading-none"
                       style={{ fontFamily: "var(--font-playfair)", color: "#C9A7FF" }}>{m.value}</p>
                    <p className="text-xs mt-1"
                       style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.5)" }}>{m.label}</p>
                    {(m as Record<string, string>).sub && (
                      <p className="text-[10px] mt-0.5 leading-tight"
                         style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.3)" }}>
                        {(m as Record<string, string>).sub}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Separador ── */}
        <div data-reveal className="opacity-0 mt-20 mb-14 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "rgba(201,167,255,0.1)" }} />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full"
               style={{ background: "rgba(201,167,255,0.07)", border: "1px solid rgba(201,167,255,0.14)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#FFD84D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" stroke="rgba(201,167,255,0.5)" strokeWidth="1.5" />
            </svg>
            <span className="text-[11px] uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.5)" }}>
              Provas de desempenho
            </span>
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(201,167,255,0.1)" }} />
        </div>

        {/* ── Cabeçalho da área de prints ── */}
        <div data-reveal className="opacity-0 mb-12 flex flex-col items-center text-center gap-3">
          <h3 className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}>
            Estatísticas reais das{" "}
            <span className="italic" style={{ color: "#C9A7FF" }}>plataformas</span>
          </h3>
          <p className="text-sm max-w-md leading-relaxed"
             style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.5)", fontWeight: 300 }}>
            Prints reais das áreas de desempenho ajudam marcas e parceiros a visualizar o
            alcance, o engajamento e o crescimento dos canais da Manu Freixas.
          </p>
        </div>

        {/* ── 3 boxes de carrossel (1 por plataforma) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {PERFORMANCE_PROOFS.map((platform, i) => (
            <div
              key={platform.platform}
              data-reveal
              className="opacity-0 w-full max-w-xs"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <SocialProofCarousel
                platform={platform}
                onOpenLightbox={setLightbox}
              />
            </div>
          ))}
        </div>

        {/* ── Rodapé ── */}
        <div data-reveal className="opacity-0 mt-10 text-center">
          <p className="text-xs"
             style={{ fontFamily: "var(--font-dm)", color: "rgba(201,167,255,0.28)" }}>
            Dados atualizados conforme estatísticas das plataformas.
          </p>
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
