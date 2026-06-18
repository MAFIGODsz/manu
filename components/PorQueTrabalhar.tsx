"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Crown, Sparkle, Heart, Star, TinyStar, Camera, Ribbon, FlowerDot } from "@/components/Deco";
import {
  IconBox, IconChat, IconVideoCamera, IconTarget,
  IconLayers, IconPhone, IconStar,
} from "@/components/SvgIcons";

const REASONS = [
  {
    Icon: IconChat,
    iconBg: "#EEE6FF", iconColor: "#6D3CC9",
    title: "Boa comunicação",
    desc: "Clareza, espontaneidade e vocabulário expressivo que facilita campanhas, entrevistas e apresentações.",
  },
  {
    Icon: IconVideoCamera,
    iconBg: "#EDE9FE", iconColor: "#7C3AED",
    title: "Desenvoltura nas câmeras",
    desc: "Naturalidade diante de câmeras fotográficas e de vídeo, sem inibição e com expressão genuína.",
  },
  {
    Icon: IconTarget,
    iconBg: "#EEE6FF", iconColor: "#6D3CC9",
    title: "Facilidade para direção",
    desc: "Atenta às instruções de fotógrafos, diretores e estilistas. Executa com precisão e entrega rápida.",
  },
  {
    Icon: IconLayers,
    iconBg: "#FFFBEA", iconColor: "#D97706",
    title: "Perfil versátil",
    desc: "Transita entre moda, audiovisual, passarela, dança e conteúdo digital com igual qualidade e entrega.",
  },
  {
    Icon: IconPhone,
    iconBg: "#F5EEFF", iconColor: "#8B4EC9",
    title: "Múltiplas plataformas",
    desc: "Presença ativa no Instagram, TikTok e YouTube, com público em crescimento e conteúdo autêntico.",
  },
  {
    Icon: IconStar,
    iconBg: "#FDF2F8", iconColor: "#BE185D",
    title: "Imagem autêntica",
    desc: "Carismática, moderna e real — uma imagem que gera identificação genuína e conexão com o público.",
  },
];

const CARD_DECOS = ["sparkle", "camera", "star", "heart", "tinystar", "crown"] as const;

export default function PorQueTrabalhar() {
  const ref = useIntersectionReveal();

  return (
    <section id="por-que" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,60,201,0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">
        <Crown     size={34}  color="#6D3CC9" opacity={0.22} className="absolute top-0 right-8 hidden md:block deco-float" />
        <Sparkle   size={26}  color="#FFD84D" opacity={0.4}  className="absolute top-8 right-20 hidden lg:block deco-twinkle" style={{ animationDelay: "0.9s" }} />
        <TinyStar  size={22}  color="#C9A7FF" opacity={0.45} className="absolute top-4 left-4 hidden lg:block deco-twinkle" style={{ animationDelay: "1.7s" }} />
        <Ribbon    size={30}  color="#C9A7FF" opacity={0.28} className="absolute bottom-10 right-8 hidden lg:block deco-float" style={{ animationDelay: "0.5s" }} />
        <FlowerDot size={26}  color="#C9A7FF" opacity={0.3}  className="absolute bottom-20 left-6 hidden lg:block deco-twinkle" style={{ animationDelay: "1.4s" }} />

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <div data-reveal className="opacity-0">
            <span className="section-label">Diferenciais</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
            >
              Por que trabalhar
              <br />
              <span className="italic" style={{ color: "#6D3CC9" }}>com a Manu?</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 w-12 h-0.5 rounded" style={{ background: "#6D3CC9" }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              data-reveal
              className="opacity-0 card-hover p-7 rounded-3xl flex flex-col gap-4 relative"
              style={{
                background: "#fff",
                border: "1px solid rgba(109,60,201,0.09)",
                boxShadow: "0 2px 24px rgba(109,60,201,0.06)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {CARD_DECOS[i] === "sparkle"  && <Sparkle  size={22} color="#6D3CC9" opacity={0.28} className="absolute top-4 right-4 deco-twinkle" style={{ animationDelay: `${i * 0.5}s` }} />}
              {CARD_DECOS[i] === "camera"   && <Camera   size={24} color="#6D3CC9" opacity={0.25} className="absolute top-4 right-4" />}
              {CARD_DECOS[i] === "star"     && <Star     size={24} color="#FFD84D" opacity={0.5}  className="absolute top-4 right-4 deco-twinkle" style={{ animationDelay: "1s" }} />}
              {CARD_DECOS[i] === "heart"    && <Heart    size={24} color="#6D3CC9" opacity={0.28} className="absolute top-4 right-4 deco-float"   style={{ animationDelay: "0.7s" }} />}
              {CARD_DECOS[i] === "tinystar" && <TinyStar size={22} color="#C9A7FF" opacity={0.5}  className="absolute top-4 right-4 deco-twinkle" style={{ animationDelay: "1.4s" }} />}
              {CARD_DECOS[i] === "crown"    && <Crown    size={24} color="#6D3CC9" opacity={0.28} className="absolute top-4 right-4 deco-float"   style={{ animationDelay: "0.3s" }} />}

              <IconBox bg={r.iconBg} color={r.iconColor}>
                <r.Icon />
              </IconBox>

              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
              >
                {r.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm)", color: "#6A5980", fontWeight: 300 }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div data-reveal className="opacity-0 mt-16 mx-auto max-w-2xl">
          <div
            className="p-8 rounded-3xl text-center flex flex-col gap-4"
            style={{
              background: "linear-gradient(135deg, #2E174F, #6D3CC9)",
              boxShadow: "0 8px 40px rgba(109,60,201,0.25)",
            }}
          >
            <div className="flex justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  stroke="#FFD84D" strokeWidth="1.5" strokeLinejoin="round"
                  fill="#FFD84D" fillOpacity="0.35"
                />
              </svg>
            </div>
            <p
              className="text-xl md:text-2xl font-medium italic leading-snug"
              style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}
            >
              &ldquo;Versatilidade não é fazer tudo — é fazer cada coisa com presença total.&rdquo;
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-dm)", color: "#C9A7FF" }}
            >
              — A essência da Manu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
