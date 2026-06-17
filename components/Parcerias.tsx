"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Sparkle, Heart, Star, TinyStar, Wave, Ribbon, DiamondLine } from "@/components/Deco";

// ── EDITE AQUI: adicione os trabalhos e parcerias reais ──
const WORKS: {
  image: string;
  images?: string[]; // 2+ imagens → composição editorial dupla no mesmo card
  category: string;
  title: string;
  type?: string;     // identificação curta opcional (ex.: "Editorial de moda kids")
  desc: string;
  href?: string;     // se existir, o card inteiro vira link (abre em nova aba)
  mainPos?: string;  // object-position da imagem principal (default "center 28%")
}[] = [
  {
    image: "/images/works/kukixo-01.jpg",
    images: ["/images/works/kukixo-01.jpg", "/images/works/kukixo-02.jpg"],
    category: "Loja",
    title: "Kukixo",
    desc: "Produção de conteúdo para loja parceira, destacando peças infantis com leveza, carisma e uma apresentação natural diante das câmeras.",
    href: "https://www.instagram.com/kukixo_oficial/",
  },
  {
    image: "/images/works/realma-01.jpg",
    images: ["/images/works/realma-01.jpg", "/images/works/realma-02.jpg"],
    category: "Loja",
    title: "Loja ReAlma",
    desc: "Divulgação de looks para loja parceira, valorizando estilo, espontaneidade e presença em registros voltados para moda teen.",
    href: "https://www.instagram.com/realma.rio/",
    mainPos: "center 45%",
  },
  {
    image: "/images/works/rei-nato-01.jpg",
    images: ["/images/works/rei-nato-01.jpg", "/images/works/rei-nato-02.jpg"],
    category: "Loja",
    title: "Rei Nato - Moda Kids",
    type: "Editorial de moda kids",
    desc: "Editorial de moda kids com produção de looks infantis, explorando postura, expressão e desenvoltura em uma proposta comercial.",
    href: "https://www.instagram.com/kukixo_oficial/",
  },
];

const CAT_STYLE: Record<string, { bg: string; color: string }> = {
  "Desfile":   { bg: "#EEE6FF", color: "#6D3CC9" },
  "Loja":      { bg: "#FFF8DC", color: "#8A6800" },
  "Ensaio":    { bg: "#F5EEFF", color: "#7A3CC0" },
  "Evento":    { bg: "#EAFAF1", color: "#1E8449" },
  "Conteúdo":  { bg: "#FDF2F8", color: "#AF5F8D" },
};

// Badge "Ver no Instagram" — exibida automaticamente em qualquer card clicável (com href)
function InstagramBadge() {
  return (
    <span
      className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] leading-none font-semibold transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg"
      style={{
        fontFamily: "var(--font-dm)",
        color: "#4A1F8F",
        background: "rgba(255,255,255,0.86)",
        border: "1px solid rgba(201,167,255,0.6)",
        boxShadow: "0 2px 8px rgba(46,23,79,0.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#6D3CC9" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.2" stroke="#6D3CC9" strokeWidth="2" />
        <circle cx="17.6" cy="6.4" r="1.3" fill="#6D3CC9" />
      </svg>
      Ver no Instagram
    </span>
  );
}

export default function Parcerias() {
  const ref = useIntersectionReveal();

  return (
    <section
      id="parcerias"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F0E8FF 0%, #FAF7FF 100%)" }}
    >
      {/* Section decorations */}
      <Star        size={30}  color="#FFD84D" opacity={0.45} className="absolute top-14 right-14 hidden md:block deco-twinkle" />
      <Sparkle     size={26}  color="#6D3CC9" opacity={0.28} className="absolute top-24 right-32 hidden lg:block deco-twinkle" style={{ animationDelay: "1.4s" }} />
      <Heart       size={28}  color="#6D3CC9" opacity={0.22} className="absolute bottom-20 left-10 hidden md:block deco-float" style={{ animationDelay: "0.6s" }} />
      <Wave        size={68}  color="#C9A7FF" opacity={0.15} className="absolute bottom-8 right-8 hidden lg:block" />
      <TinyStar    size={22}  color="#C9A7FF" opacity={0.4}  className="absolute top-10 left-1/2 hidden lg:block deco-twinkle" style={{ animationDelay: "2s" }} />
      <Ribbon      size={30}  color="#C9A7FF" opacity={0.3}  className="absolute top-6 left-8 hidden lg:block deco-float" style={{ animationDelay: "1.1s" }} />
      <DiamondLine size={40}  color="#6D3CC9" opacity={0.22} className="absolute bottom-24 left-20 hidden lg:block" />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <div data-reveal className="opacity-0">
            <span className="section-label">Experiência</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
            >
              Trabalhos &
              <br />
              <span className="italic" style={{ color: "#6D3CC9" }}>parcerias</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 deco-line w-12" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKS.map((work, i) => {
            const style = CAT_STYLE[work.category] ?? { bg: "#EEE6FF", color: "#6D3CC9" };
            const cardClass =
              "group flex flex-col h-full opacity-0 card-hover rounded-3xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6D3CC9]";
            const cardStyle = {
              background: "#fff",
              border: "1px solid rgba(109,60,201,0.1)",
              boxShadow: "0 2px 20px rgba(109,60,201,0.07)",
              animationDelay: `${i * 0.1}s`,
            };

            const inner = (
              <>
                {/* Image */}
                {work.images && work.images.length > 1 ? (
                  // ── Composição editorial dupla: foto principal + secundária sobreposta ──
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={work.images[0]}
                      alt={`Manu Freixas em trabalho para ${work.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: work.mainPos ?? "center 28%" }}
                    />
                    {/* Degradê inferior sutil para profundidade e contraste da mini foto */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(46,23,79,0.22), transparent 40%)" }}
                      aria-hidden="true"
                    />
                    {/* Foto secundária — preview tipo polaroid, canto inferior direito */}
                    <div
                      className="absolute bottom-3 right-3 w-[34%] max-w-[118px] aspect-[3/4] overflow-hidden rounded-2xl"
                      style={{
                        border: "3px solid rgba(255,255,255,0.94)",
                        boxShadow: "0 8px 22px rgba(46,23,79,0.32)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={work.images[1]}
                        alt={`Segundo registro de Manu Freixas em trabalho para ${work.title}`}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 20%" }}
                      />
                    </div>
                    {work.href && <InstagramBadge />}
                  </div>
                ) : work.images && work.images.length === 1 ? (
                  // ── Foto única (retrato) — usada em cards de look/parceria ──
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={work.images[0]}
                      alt={`Manu Freixas em divulgação para a loja ${work.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: "center 26%" }}
                    />
                    {work.href && <InstagramBadge />}
                  </div>
                ) : (
                  <div className="w-full aspect-video img-placeholder">
                    {work.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                    )}
                    {!work.image && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 z-10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="#6D3CC9" strokeWidth="1.5"/>
                          <path d="M3 9a2 2 0 012-2h1.5L8 5h8l1.5 2H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#6D3CC9" strokeWidth="1.5"/>
                        </svg>
                        <p className="text-xs" style={{ color: "#8B6BB0", fontFamily: "var(--font-dm)" }}>
                          Adicione imagem
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span
                    className="pill self-start"
                    style={{ background: style.bg, color: style.color }}
                  >
                    {work.category}
                  </span>
                  <h3
                    className="font-semibold text-base"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
                  >
                    {work.title}
                  </h3>
                  {work.type && (
                    <span
                      className="text-[11px] uppercase tracking-wide font-semibold -mt-1"
                      style={{ fontFamily: "var(--font-dm)", color: "#8A6BB5" }}
                    >
                      {work.type}
                    </span>
                  )}
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-dm)", color: "#6A5980", fontWeight: 300 }}
                  >
                    {work.desc}
                  </p>
                  {work.href && (
                    <span
                      className="inline-flex items-center gap-1 mt-auto pt-3 text-sm font-semibold transition-colors"
                      style={{ fontFamily: "var(--font-dm)", color: "#6D3CC9" }}
                    >
                      Ver no Instagram
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="#6D3CC9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </>
            );

            // Card inteiro clicável quando há href (abre Instagram em nova aba)
            return work.href ? (
              <a
                key={`${work.title}-${i}`}
                data-reveal
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver ${work.title} no Instagram`}
                className={cardClass}
                style={cardStyle}
              >
                {inner}
              </a>
            ) : (
              <div key={`${work.title}-${i}`} data-reveal className={cardClass} style={cardStyle}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
