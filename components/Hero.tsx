"use client";
import { useEffect, useRef } from "react";
import { Sparkle, TinyStar, Star, Camera, Wave, Crown, Ribbon } from "@/components/Deco";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll("[data-anim]").forEach((c, i) => {
      (c as HTMLElement).style.animationDelay = `${i * 0.12}s`;
      (c as HTMLElement).classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section className="relative min-h-screen hero-mesh overflow-hidden flex items-center">
      {/* Decorative blobs */}
      <div
        className="absolute top-[-6rem] right-[-6rem] w-[32rem] h-[32rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,167,255,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-4rem] left-[-5rem] w-[22rem] h-[22rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(109,60,201,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 pt-28 pb-12 md:py-0 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-center">

          {/* ── Text side ── */}
          <div ref={ref} className="order-1 flex flex-col gap-5 relative">
            {/* Aesthetic decorations */}
            <Sparkle  size={36} color="#6D3CC9" opacity={0.36} className="absolute -right-2 top-16 hidden sm:block deco-twinkle" />
            <TinyStar size={22} color="#C9A7FF" opacity={0.55} className="absolute right-10 top-10 hidden lg:block deco-twinkle" style={{ animationDelay: "1.3s" }} />
            <TinyStar size={20} color="#FFD84D" opacity={0.5}  className="absolute right-4 bottom-28 hidden lg:block deco-twinkle" style={{ animationDelay: "2.1s" }} />
            <Crown    size={28} color="#6D3CC9" opacity={0.25} className="absolute -left-2 top-6 hidden lg:block deco-float" style={{ animationDelay: "0.5s" }} />
            <Star     size={24} color="#FFD84D" opacity={0.45} className="absolute left-4 bottom-36 hidden lg:block deco-twinkle" style={{ animationDelay: "1.8s" }} />
            <Wave     size={56} color="#C9A7FF" opacity={0.2}  className="absolute left-0 bottom-16 hidden lg:block" />

            {/* Label */}
            <div data-anim className="opacity-0">
              <span className="section-label">Media Kit Digital · 2026</span>
            </div>

            {/* Name */}
            <div data-anim className="opacity-0">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05]"
                style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
              >
                Manu
                <br />
                <span className="italic" style={{ color: "#6D3CC9" }}>
                  Freixas
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div data-anim className="opacity-0 flex flex-col gap-1.5">
              <p
                className="text-xs sm:text-sm md:text-base uppercase tracking-[0.12em] sm:tracking-[0.18em]"
                style={{ color: "#8B6BB0", fontFamily: "var(--font-dm)" }}
              >
                Artista mirim · Modelo · Criadora de conteúdo
              </p>
              {/* Location badge */}
              <span
                className="inline-flex items-center gap-1.5 self-start pill mt-0.5"
                style={{
                  background: "rgba(109,60,201,0.08)",
                  color: "#6D3CC9",
                  border: "1px solid rgba(109,60,201,0.18)",
                }}
              >
                <svg width="11" height="13" viewBox="0 0 12 16" fill="currentColor">
                  <path d="M6 0C3.243 0 1 2.243 1 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.757-2.243-5-5-5zm0 7.5A2.5 2.5 0 113.5 5 2.503 2.503 0 016 7.5z" />
                </svg>
                Rio de Janeiro — RJ
              </span>
            </div>

            <div data-anim className="opacity-0 deco-line w-16 my-1" />

            {/* Headline */}
            <div data-anim className="opacity-0">
              <p
                className="text-base md:text-lg leading-relaxed max-w-md font-medium"
                style={{ fontFamily: "var(--font-dm)", color: "#2E174F" }}
              >
                Versatilidade, presença e comunicação para moda, campanhas, audiovisual, desfiles e projetos digitais.
              </p>
            </div>

            {/* Body */}
            <div data-anim className="opacity-0">
              <p
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-dm)", color: "#4A3B62", fontWeight: 300 }}
              >
                Com presença digital em crescimento, Manu Freixas une carisma, desenvoltura diante das câmeras e facilidade de comunicação para projetos de moda, conteúdo, audiovisual e publicidade.
              </p>
            </div>

            {/* CTAs */}
            <div data-anim className="opacity-0 flex flex-wrap gap-3 mt-1">
              <a
                href="#portfolio"
                className="px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
                style={{
                  background: "#6D3CC9",
                  color: "#fff",
                  fontFamily: "var(--font-dm)",
                  boxShadow: "0 4px 20px rgba(109,60,201,0.3)",
                }}
              >
                Ver portfólio
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#6D3CC9] bg-transparent px-8 py-3 text-sm font-semibold text-[#6D3CC9] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#2E174F] hover:bg-[#2E174F] hover:text-white hover:shadow-[0_12px_28px_rgba(46,23,79,0.22)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E174F] focus-visible:ring-offset-2"
                style={{
                  fontFamily: "var(--font-dm)",
                }}
              >
                Entrar em contato
              </a>
            </div>

            {/* Tags */}
            <div data-anim className="opacity-0 flex flex-wrap gap-2 mt-1">
              {[
                "Versatilidade",
                "Oratória",
                "Presença digital",
                "Moda & Audiovisual",
              ].map((tag) => (
                <span
                  key={tag}
                  className="pill"
                  style={{
                    background: "rgba(255,216,77,0.14)",
                    color: "#7A5B00",
                    border: "1px solid rgba(255,216,77,0.5)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Photo side ── */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Photo-side decorations */}
              <Camera   size={28} color="#6D3CC9" opacity={0.3}  className="absolute -left-8 top-1/3 hidden lg:block deco-float" style={{ animationDelay: "1s" }} />
              <Sparkle  size={22} color="#FFD84D" opacity={0.5}  className="absolute -left-4 top-1/4 hidden lg:block deco-twinkle" style={{ animationDelay: "2.4s" }} />
              <TinyStar size={20} color="#C9A7FF" opacity={0.5}  className="absolute right-0 top-8 hidden lg:block deco-twinkle" style={{ animationDelay: "0.7s" }} />
              <Ribbon   size={30} color="#C9A7FF" opacity={0.32} className="absolute -right-4 bottom-16 hidden lg:block deco-float" style={{ animationDelay: "1.8s" }} />
              {/* Glow frame */}
              <div
                className="absolute -inset-3 rounded-3xl opacity-25 blur-sm"
                style={{
                  background: "linear-gradient(135deg, #C9A7FF, #FFD84D)",
                }}
              />

              {/* Main photo container */}
              <div
                className="relative w-[82vw] max-w-72 aspect-[3/4] md:w-80 md:h-[28rem] md:aspect-auto md:max-w-none lg:w-[430px] lg:h-[540px] lg:max-w-[430px] xl:w-[460px] xl:h-[575px] xl:max-w-[460px] rounded-3xl overflow-hidden"
                style={{ border: "2px solid rgba(109,60,201,0.18)" }}
              >
                <img
                  src="/images/hero-manu.jpg"
                  alt="Manu Freixas — artista mirim, modelo e criadora de conteúdo"
                  className="w-full h-full object-cover object-[center_38%]"
                />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -left-5 px-4 py-3 rounded-2xl shadow-lg"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(109,60,201,0.1)",
                  boxShadow: "0 4px 20px rgba(109,60,201,0.12)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "#8B6BB0", fontFamily: "var(--font-dm)" }}
                >
                  Altura
                </p>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
                >
                  1,36 m
                </p>
              </div>

              <div
                className="absolute -top-4 -right-5 px-4 py-3 rounded-2xl shadow-lg"
                style={{ background: "#2E174F" }}
              >
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "#C9A7FF", fontFamily: "var(--font-dm)" }}
                >
                  Manequim
                </p>
                <p
                  className="text-xl font-bold text-white mt-0.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  12
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
        <p
          className="text-[10px] tracking-[0.22em] uppercase"
          style={{ fontFamily: "var(--font-dm)", color: "#8B6BB0" }}
        >
          scroll
        </p>
        <div
          className="w-px h-8 animate-pulse"
          style={{
            background: "linear-gradient(to bottom, #6D3CC9, transparent)",
          }}
        />
      </div>
    </section>
  );
}
