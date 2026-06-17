"use client";
import { useState } from "react";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Camera, Sparkle, TinyStar, Star, Ring, Ribbon, FlowerDot } from "@/components/Deco";


// ── EDITE AQUI: adicione suas fotos ──
// Substitua os objetos abaixo por fotos reais.
// Para cada foto, defina: src (caminho em /public/images/), alt, category
const PHOTOS: { src: string; alt: string; category: string }[] = [
  // ENSAIOS
  { src: "/images/ensaio1.jpeg", alt: "Ensaio fotográfico 1", category: "Ensaios" },
  { src: "/images/ensaio2.jpeg", alt: "Ensaio fotográfico 2", category: "Ensaios" },
  { src: "/images/ensaio3.jpeg", alt: "Ensaio fotográfico 3", category: "Ensaios" },
  { src: "/images/ensaio4.jpeg", alt: "Ensaio fotográfico 4", category: "Ensaios" },
  { src: "/images/ensaio5.jpeg", alt: "Ensaio fotográfico 5", category: "Ensaios" },
  { src: "/images/ensaio6.jpeg", alt: "Ensaio fotográfico 6", category: "Ensaios" },
  { src: "/images/ensaio7.jpeg", alt: "Ensaio fotográfico 7", category: "Ensaios" },
  { src: "/images/ensaio8.jpeg", alt: "Ensaio fotográfico 8", category: "Ensaios" },
  { src: "/images/ensaio9.jpeg", alt: "Ensaio fotográfico 9", category: "Ensaios" },
  { src: "/images/ensaio10.jpeg", alt: "Ensaio fotográfico 10", category: "Ensaios" },
  { src: "/images/ensaio11.jpeg", alt: "Ensaio fotográfico 11", category: "Ensaios" },
  { src: "/images/ensaio12.jpeg", alt: "Ensaio fotográfico 12", category: "Ensaios" },
  { src: "/images/ensaio13.jpeg", alt: "Ensaio fotográfico 13", category: "Ensaios" },
  { src: "/images/ensaio14.jpeg", alt: "Ensaio fotográfico 14", category: "Ensaios" },
  { src: "/images/ensaio15.jpeg", alt: "Ensaio fotográfico 15", category: "Ensaios" },
  { src: "/images/ensaio16.jpeg", alt: "Ensaio fotográfico 16", category: "Ensaios" },
  { src: "/images/ensaio17.jpeg", alt: "Ensaio fotográfico 17", category: "Ensaios" },
  // DESFILES
  { src: "/images/desfile1.jpeg", alt: "Desfile 1", category: "Desfiles" },
  { src: "/images/desfile2.jpeg", alt: "Desfile 2", category: "Desfiles" },
  { src: "/images/desfile3.jpeg", alt: "Desfile 3", category: "Desfiles" },
  { src: "/images/desfile4.jpeg", alt: "Desfile 4", category: "Desfiles" },
  { src: "/images/desfile5.jpeg", alt: "Desfile 5", category: "Desfiles" },
  // LOJAS
  { src: "/images/moda1.jpeg", alt: "Moda 1", category: "Moda" },
  { src: "/images/moda2.jpeg", alt: "Moda 2", category: "Moda" },
  { src: "/images/moda3.jpeg", alt: "Moda 3", category: "Moda" },
  // DIA A DIA
  { src: "/images/conteudodigital1.jpeg", alt: "Dia a dia 1", category: "Dia a dia" },
  { src: "/images/conteudodigital2.jpeg", alt: "Dia a dia 2", category: "Dia a dia" },
  { src: "/images/conteudodigital3.jpeg", alt: "Dia a dia 3", category: "Dia a dia" },
  { src: "/images/conteudodigital4.jpeg", alt: "Dia a dia 4", category: "Dia a dia" },
  { src: "/images/conteudodigital5.jpeg", alt: "Dia a dia 5", category: "Dia a dia" },
];

const CATEGORIES = ["Todos", "Ensaios", "Desfiles", "Moda", "Dia a dia"];

// Label amigável (singular) para a badge de categoria em cada foto
const CATEGORY_LABELS: Record<string, string> = {
  Ensaios: "Ensaio",
  Desfiles: "Desfile",
  Moda: "Moda",
  "Dia a dia": "Dia a dia",
};

function CategoryBadge({ category }: { category: string }) {
  const label = CATEGORY_LABELS[category] ?? category;
  return (
    <span
      className="absolute bottom-2.5 left-2.5 z-10 rounded-full px-2.5 py-1 text-[11px] leading-none font-semibold tracking-tight"
      style={{
        fontFamily: "var(--font-dm)",
        color: "#4A1F8F",
        background: "rgba(255,255,255,0.82)",
        border: "1px solid rgba(201,167,255,0.6)",
        boxShadow: "0 2px 8px rgba(46,23,79,0.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {label}
    </span>
  );
}

function PhotoCard({ photo }: { photo: (typeof PHOTOS)[0] }) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden img-placeholder aspect-[3/4] relative"
      style={{ border: "1px solid rgba(109,60,201,0.12)" }}
    >
      {photo.src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          {/* Degradê inferior sutil só para dar legibilidade à badge */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{ background: "linear-gradient(to top, rgba(46,23,79,0.28), transparent)" }}
            aria-hidden="true"
          />
          <CategoryBadge category={photo.category} />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="#6D3CC9" strokeWidth="1.5"/>
            <path d="M3 9a2 2 0 012-2h1.5L8 5h8l1.5 2H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#6D3CC9" strokeWidth="1.5"/>
          </svg>
          <p className="text-xs text-center" style={{ color: "#8B6BB0", fontFamily: "var(--font-dm)" }}>
            {photo.alt}
          </p>
          <span
            className="pill"
            style={{ background: "rgba(109,60,201,0.12)", color: "#6D3CC9", fontSize: "0.65rem" }}
          >
            {photo.category}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Todos");
  const ref = useIntersectionReveal();

  const filtered = active === "Todos" ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  // Exibe apenas fotos com src real; o resto vira empty state
  const visible = filtered.filter((p) => p.src);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-[24rem] h-[24rem] rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
        style={{ background: "radial-gradient(circle, #6D3CC9 0%, transparent 70%)" }}
      />
      {/* Section decorations */}
      <Camera    size={36}  color="#6D3CC9" opacity={0.22} className="absolute top-16 right-16 hidden md:block deco-float" />
      <Ring      size={80}  color="#C9A7FF" opacity={0.12} className="absolute top-8 left-0 hidden lg:block" />
      <Star      size={28}  color="#FFD84D" opacity={0.38} className="absolute top-20 left-20 hidden lg:block deco-twinkle" style={{ animationDelay: "1.3s" }} />
      <TinyStar  size={22}  color="#C9A7FF" opacity={0.45} className="absolute bottom-24 right-24 hidden md:block deco-twinkle" style={{ animationDelay: "0.8s" }} />
      <Sparkle   size={26}  color="#6D3CC9" opacity={0.28} className="absolute top-28 right-36 hidden lg:block deco-twinkle" style={{ animationDelay: "1.9s" }} />
      <Ribbon    size={28}  color="#C9A7FF" opacity={0.3}  className="absolute bottom-36 left-16 hidden lg:block deco-float" style={{ animationDelay: "0.6s" }} />
      <FlowerDot size={26}  color="#C9A7FF" opacity={0.32} className="absolute bottom-16 right-10 hidden lg:block deco-twinkle" style={{ animationDelay: "1.5s" }} />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <div data-reveal className="opacity-0">
            <span className="section-label">Galeria</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
            >
              Portfólio
              <br />
              <span className="italic" style={{ color: "#6D3CC9" }}>fotográfico</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 deco-line w-12" />
        </div>

        {/* Category filters */}
        <div data-reveal className="opacity-0 flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="pill transition-all duration-200"
              style={
                active === cat
                  ? { background: "#6D3CC9", color: "#fff" }
                  : { background: "#EEE6FF", color: "#6D3CC9" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="#C9A7FF" strokeWidth="1.5"/>
              <path d="M3 9a2 2 0 012-2h1.5L8 5h8l1.5 2H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#C9A7FF" strokeWidth="1.5"/>
            </svg>
            <p className="text-sm" style={{ fontFamily: "var(--font-dm)", color: "#8B6BB0" }}>
              Em breve, novas fotos desta categoria.
            </p>
          </div>
        )}

        {visible.length > 0 && (() => {
          const shouldCarousel = visible.length > 5;

          return (
            <>
              {/* Mobile carousel — only when > 5 images.
                  grid-flow-col fills column-by-column (top then bottom), so both rows
                  always slide together. auto-cols-[44vw] keeps every card identical.
                  The scroll container ends exactly at the last column — no empty space. */}
              {shouldCarousel && (
                <div
                  className="md:hidden -mx-6 px-5 pb-4 snap-x snap-mandatory overflow-x-auto"
                  style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                  aria-label="Galeria de fotos"
                >
                  <div className="grid grid-rows-2 grid-flow-col auto-cols-[44vw] gap-3">
                    {visible.map((photo, i) => (
                      <div
                        key={`${active}-${photo.src}-${i}`}
                        className={`animate-fade-in${i % 4 === 0 ? " snap-start" : ""}`}
                        style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both" }}
                      >
                        <div
                          className="card-hover rounded-2xl overflow-hidden img-placeholder aspect-[5/8] relative"
                          style={{ border: "1px solid rgba(109,60,201,0.12)" }}
                        >
                          {photo.src ? (
                            <>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                              />
                              <div
                                className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                                style={{ background: "linear-gradient(to top, rgba(46,23,79,0.28), transparent)" }}
                                aria-hidden="true"
                              />
                              <CategoryBadge category={photo.category} />
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center p-4">
                              <p className="text-xs text-center" style={{ color: "#8B6BB0", fontFamily: "var(--font-dm)" }}>
                                {photo.alt}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile grid — when ≤ 5 images */}
              {!shouldCarousel && (
                <div className="md:hidden grid grid-cols-2 gap-4">
                  {visible.map((photo, i) => (
                    <div
                      key={`${active}-${photo.src}-${i}`}
                      className="animate-fade-in"
                      style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both" }}
                    >
                      <PhotoCard photo={photo} />
                    </div>
                  ))}
                </div>
              )}

              {/* Desktop grid — unchanged */}
              <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
                {visible.map((photo, i) => (
                  <div
                    key={`${active}-${photo.src}-${i}`}
                    className="animate-fade-in"
                    style={{ animationDelay: `${i * 0.05}s`, animationFillMode: "both" }}
                  >
                    <PhotoCard photo={photo} />
                  </div>
                ))}
              </div>
            </>
          );
        })()}

        {/* To add photos: place files in /public/images/ and update the PHOTOS array above */}
      </div>
    </section>
  );
}
