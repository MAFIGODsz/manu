"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Heart, Sparkle, TinyStar, Star, Wave, DiamondLine, Crown } from "@/components/Deco";

const WA_LINK =
  "https://wa.me/5521964068920?text=" +
  encodeURIComponent(
    "Olá! Vi o media kit da Manu Freixas e gostaria de fazer uma proposta."
  );

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@manufreixasoficial",
    url: "https://instagram.com/manufreixasoficial",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C9A7FF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="#C9A7FF" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="#C9A7FF" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@familiamanufreixas2020",
    url: "https://tiktok.com/@familiamanufreixas2020",
    icon: (
      <svg width="17" height="20" viewBox="0 0 24 24" fill="#C9A7FF">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "@manufreixas",
    url: "https://youtube.com/@manufreixas",
    icon: (
      <svg width="22" height="16" viewBox="0 0 24 24" fill="#C9A7FF">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#2E174F" />
      </svg>
    ),
  },
];

export default function Contato() {
  const ref = useIntersectionReveal();

  return (
    <section
      id="contato"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#2E174F" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-12 translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, #C9A7FF 0%, transparent 70%)",
          opacity: 0.12,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[18rem] h-[18rem] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"
        style={{
          background: "radial-gradient(circle, rgba(255,216,77,0.15) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Aesthetic decorations */}
        <Heart       size={36}  color="#C9A7FF" opacity={0.3}  className="absolute top-8 left-8 hidden md:block deco-float" />
        <Sparkle     size={28}  color="#FFD84D" opacity={0.35} className="absolute top-12 right-10 hidden md:block deco-twinkle" style={{ animationDelay: "1.8s" }} />
        <TinyStar    size={22}  color="#FFD84D" opacity={0.4}  className="absolute top-20 left-20 hidden lg:block deco-twinkle" style={{ animationDelay: "0.9s" }} />
        <Star        size={28}  color="#C9A7FF" opacity={0.25} className="absolute bottom-24 right-12 hidden md:block deco-twinkle" style={{ animationDelay: "1.2s" }} />
        <Wave        size={72}  color="#C9A7FF" opacity={0.1}  className="absolute bottom-10 left-0 hidden lg:block" />
        <Heart       size={24}  color="#C9A7FF" opacity={0.2}  className="absolute bottom-32 left-24 hidden lg:block deco-float" style={{ animationDelay: "1.5s" }} />
        <DiamondLine size={40}  color="#C9A7FF" opacity={0.22} className="absolute top-6 right-28 hidden lg:block" />
        <Crown       size={28}  color="#C9A7FF" opacity={0.22} className="absolute bottom-16 right-20 hidden lg:block deco-float" style={{ animationDelay: "0.7s" }} />
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-7">

          <div data-reveal className="opacity-0">
            <span className="section-label" style={{ color: "#C9A7FF" }}>
              Vamos trabalhar juntos?
            </span>
          </div>

          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}
            >
              Fale com a
              <br />
              <span className="italic" style={{ color: "#C9A7FF" }}>
                responsável
              </span>
            </h2>
          </div>

          <div
            data-reveal
            className="opacity-0 w-12 h-0.5 rounded"
            style={{ background: "#FFD84D" }}
          />

          <div data-reveal className="opacity-0">
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "var(--font-dm)",
                color: "rgba(201,167,255,0.7)",
                fontWeight: 300,
              }}
            >
              Está pensando em uma campanha, desfile, ensaio, projeto digital ou parceria com a Manu? Entre em contato e apresente sua proposta.
            </p>
          </div>

          {/* Legal notice */}
          <div
            data-reveal
            className="opacity-0 w-full p-5 rounded-2xl"
            style={{
              background: "rgba(255,216,77,0.08)",
              border: "1px solid rgba(255,216,77,0.25)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", color: "#FFD84D" }}
            >
              Todos os contatos, propostas e parcerias são tratados diretamente com a{" "}
              <strong>responsável legal</strong>.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div data-reveal className="opacity-0 flex flex-col items-center gap-3 w-full relative">
            <Sparkle size={20} color="#FFD84D" opacity={0.5} className="absolute -top-3 left-1/2 -translate-x-8 deco-twinkle" style={{ animationDelay: "0.4s" }} />
            <Sparkle size={18} color="#C9A7FF" opacity={0.45} className="absolute -top-2 left-1/2 translate-x-6 deco-twinkle" style={{ animationDelay: "1.2s" }} />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-2xl active:scale-95"
              style={{
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-dm)",
                boxShadow: "0 6px 28px rgba(37,211,102,0.35)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar pelo WhatsApp
            </a>

            {/* E-mail placeholder */}
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-dm)",
                color: "rgba(201,167,255,0.35)",
              }}
            >
              E-mail profissional em breve
            </p>
          </div>

          {/* Social links */}
          <div data-reveal className="opacity-0 flex flex-wrap items-center justify-center gap-3 mt-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(201,167,255,0.1)",
                  border: "1px solid rgba(201,167,255,0.18)",
                }}
              >
                {s.icon}
                <span
                  className="text-xs"
                  style={{ fontFamily: "var(--font-dm)", color: "#C9A7FF" }}
                >
                  {s.handle}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
