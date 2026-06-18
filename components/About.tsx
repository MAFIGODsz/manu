"use client";
import { useState, useEffect, useRef } from "react";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Sparkle, QuoteMark, TinyStar, Heart, Ribbon } from "@/components/Deco";

const AUTO_SWAP_DELAY = 6500;

const IMAGES = [
  {
    src: "/images/sobre-manu.jpg",
    alt: "Manu Freixas em ensaio editorial",
  },
  {
    src: "/images/sobre-manu-2.jpg",
    alt: "Manu Freixas nos bastidores",
  },
];

export default function About() {
  const ref = useIntersectionReveal();
  const [swapped, setSwapped] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const primary   = swapped ? IMAGES[1] : IMAGES[0];
  const secondary = swapped ? IMAGES[0] : IMAGES[1];

  // Troca imediatamente — a animação CSS (animate-swap-main) cuida do fade-in
  const doSwap = () => setSwapped((s) => !s);

  const scheduleAuto = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(function tick() {
      setSwapped((s) => !s);
      timerRef.current = setTimeout(tick, AUTO_SWAP_DELAY);
    }, AUTO_SWAP_DELAY);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    scheduleAuto();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSwap = () => {
    doSwap();
    scheduleAuto();
  };

  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(109,60,201,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: image pair */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">

              {/* Main image */}
              <div
                className="w-64 h-80 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl img-placeholder"
                style={{ border: "2px solid rgba(109,60,201,0.12)" }}
              >
                <img
                  key={primary.src}
                  src={primary.src}
                  alt={primary.alt}
                  className="w-full h-full object-cover rounded-3xl animate-swap-main"
                  style={{ objectPosition: "center top" }}
                />
              </div>

              {/* Thumbnail — overflow:visible so the hint badge can peek above */}
              <button
                type="button"
                onClick={handleSwap}
                className="absolute -bottom-6 -right-6 w-36 h-24 md:w-40 md:h-28 rounded-2xl group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D3CC9] focus-visible:ring-offset-2"
                aria-label="Alternar foto principal"
                style={{
                  border: "2px solid rgba(255,216,77,0.4)",
                  cursor: "pointer",
                  padding: 0,
                  background: "transparent",
                  overflow: "visible",
                }}
              >
                {/* Inner clip wrapper — rounds and hides image overflow */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #EEE6FF 0%, #DDD0FF 100%)",
                  }}
                >
                  <img
                    key={secondary.src}
                    src={secondary.src}
                    alt={secondary.alt}
                    className="w-full h-full object-cover animate-swap-thumb transition-all duration-300 group-hover:scale-110 group-hover:brightness-105"
                    style={{ objectPosition: "center 15%" }}
                  />
                  {/* Subtle hover tint */}
                  <span
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{ background: "rgba(46,23,79,0.18)" }}
                  />
                </div>

                {/* ── Swap hint badge ── floats above the thumbnail */}
                <span
                  className="swap-hint-badge absolute w-9 h-9 rounded-full flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                  style={{
                    top: "-0.85rem",
                    left: "-0.85rem",
                    zIndex: 20,
                    background: "rgba(255,255,255,0.97)",
                    border: "1.5px solid rgba(109,60,201,0.22)",
                    boxShadow:
                      "0 2px 16px rgba(109,60,201,0.16), 0 0 0 3px rgba(201,167,255,0.10)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {/* Two-arrow exchange SVG */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* up arrow */}
                    <path
                      d="M6.5 12V5.5M6.5 5.5L4 8M6.5 5.5L9 8"
                      stroke="#6D3CC9"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* down arrow */}
                    <path
                      d="M11.5 6V12.5M11.5 12.5L9 10M11.5 12.5L14 10"
                      stroke="#6D3CC9"
                      strokeWidth="1.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Yellow accent dot */}
                  <span
                    className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                    style={{ background: "#FFD84D", border: "1.5px solid white" }}
                    aria-hidden="true"
                  />
                </span>
              </button>

              {/* Yellow dot accent */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full pointer-events-none"
                style={{ background: "#FFD84D" }}
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col gap-6 relative order-1 lg:order-2">
            {/* Aesthetic decorations */}
            <QuoteMark size={64} color="#C9A7FF" opacity={0.22} className="absolute -top-4 -left-3 hidden md:block" />
            <Sparkle   size={28} color="#FFD84D" opacity={0.48} className="absolute top-2 right-0 hidden lg:block deco-twinkle" style={{ animationDelay: "0.6s" }} />
            <TinyStar  size={22} color="#C9A7FF" opacity={0.45} className="absolute -top-2 left-24 hidden lg:block deco-twinkle" style={{ animationDelay: "1.4s" }} />
            <Heart     size={26} color="#6D3CC9" opacity={0.18} className="absolute bottom-8 right-4 hidden lg:block deco-float" style={{ animationDelay: "0.9s" }} />
            <Ribbon    size={30} color="#C9A7FF" opacity={0.3}  className="absolute bottom-20 left-0 hidden lg:block deco-float" style={{ animationDelay: "1.6s" }} />
            <div data-reveal className="opacity-0">
              <span className="section-label">Quem é Manu Freixas</span>
            </div>

            <div data-reveal className="opacity-0">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
              >
                Presença, arte
                <br />
                <span className="italic" style={{ color: "#6D3CC9" }}>
                  e versatilidade
                </span>
              </h2>
            </div>

            <div data-reveal className="opacity-0 deco-line w-12" />

            <div data-reveal className="opacity-0 flex flex-col gap-4">
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm)", color: "#4A3B62", fontWeight: 300 }}
              >
                Manu Freixas é uma artista mirim, modelo e criadora de conteúdo do Rio de Janeiro. Com carisma, desenvoltura e excelente comunicação, Manu transita com naturalidade por diferentes áreas, como fotografia, moda, provador, vídeo looks, desfiles, atuação e projetos digitais.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-dm)", color: "#4A3B62", fontWeight: 300 }}
              >
                Sua rotina de formação inclui canto, passarela, teatro, TV e cinema, ginástica, ballet e outras atividades que fortalecem sua{" "}
                <strong style={{ color: "#6D3CC9", fontWeight: 600 }}>expressão corporal</strong>,
                {" "}presença cênica e disciplina. Com presença ativa no Instagram, TikTok e YouTube, Manu vem construindo uma imagem moderna, autêntica e versátil para marcas, lojas, campanhas e produções.
              </p>
            </div>

            {/* Notice */}
            <div data-reveal className="opacity-0">
              <div
                className="p-4 rounded-2xl flex gap-3 items-start"
                style={{
                  background: "#EEE6FF",
                  border: "1px solid rgba(109,60,201,0.12)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "#6D3CC9" }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="white"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm)", color: "#4A3B62" }}
                >
                  Contatos, propostas e parcerias são tratados diretamente com a{" "}
                  <strong style={{ color: "#2E174F" }}>responsável legal</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
