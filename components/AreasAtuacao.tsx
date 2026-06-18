"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Camera, Hanger, Crown, Clapper, PlayCircle, Star, Sparkle, TinyStar, Wave, Ribbon } from "@/components/Deco";
import {
  IconBox, IconCamera, IconHanger, IconCrown,
  IconClapper, IconPhone, IconMic,
} from "@/components/SvgIcons";

const AREAS = [
  {
    Icon: IconCamera,
    title: "Modelo Fotográfica",
    desc: "Experiência em ensaios fotográficos profissionais, com facilidade para poses, expressões e direção.",
    color: "#6D3CC9",
    bg: "#EEE6FF",
    deco: "camera",
  },
  {
    Icon: IconHanger,
    title: "Provador & Looks",
    desc: "Referência para apresentação de coleções, peças e styling com naturalidade e charme editorial.",
    color: "#8B4EC9",
    bg: "#F5EEFF",
    deco: "hanger",
  },
  {
    Icon: IconCrown,
    title: "Desfiles",
    desc: "Passarela com postura, ritmo e presença. Formação específica em desfiles e apresentações.",
    color: "#7A3CC0",
    bg: "#EDE3FF",
    deco: "crown",
  },
  {
    Icon: IconClapper,
    title: "Atuação & Audiovisual",
    desc: "Formação em teatro, TV e cinema. Expressividade natural e facilidade para seguir direção de cena.",
    color: "#5A2CB0",
    bg: "#E8DBFF",
    deco: "clapper",
  },
  {
    Icon: IconPhone,
    title: "Criadora de Conteúdo",
    desc: "Produção de conteúdo autêntico para Instagram, TikTok e YouTube com engajamento crescente.",
    color: "#9B59D0",
    bg: "#F3EAFF",
    deco: "play",
  },
  {
    Icon: IconMic,
    title: "Eventos & Divulgação",
    desc: "Participação em eventos, lançamentos e ações de marca com excelente oratória e comunicação.",
    color: "#6D3CC9",
    bg: "#EEE6FF",
    deco: "star",
  },
];

export default function AreasAtuacao() {
  const ref = useIntersectionReveal();

  return (
    <section id="atuacao" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full"
        style={{ background: "radial-gradient(circle, #C9A7FF 0%, transparent 70%)", opacity: 0.08 }}
      />

      <Sparkle  size={32} color="#6D3CC9" opacity={0.28} className="absolute top-12 right-16 hidden md:block deco-twinkle" />
      <TinyStar size={22} color="#C9A7FF" opacity={0.45} className="absolute top-20 right-8  hidden lg:block deco-twinkle" style={{ animationDelay: "1.2s" }} />
      <Wave     size={60} color="#C9A7FF" opacity={0.12} className="absolute bottom-8 right-0 hidden lg:block" />
      <Ribbon   size={30} color="#C9A7FF" opacity={0.3}  className="absolute bottom-20 left-8 hidden lg:block deco-float" style={{ animationDelay: "0.8s" }} />

      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <div data-reveal className="opacity-0">
            <span className="section-label">O que ela faz</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
            >
              Áreas de
              <br />
              <span className="italic" style={{ color: "#6D3CC9" }}>atuação</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 deco-line w-12" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AREAS.map((area, i) => (
            <div
              key={area.title}
              data-reveal
              className="opacity-0 card-hover p-6 rounded-3xl flex flex-col gap-3 relative"
              style={{
                background: area.bg,
                border: `1px solid ${area.color}22`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {area.deco === "camera"  && <Camera     size={26} color={area.color} opacity={0.3}  className="absolute top-4 right-4 deco-twinkle" />}
              {area.deco === "hanger"  && <Hanger     size={26} color={area.color} opacity={0.3}  className="absolute top-4 right-4 deco-float"   style={{ animationDelay: "0.4s" }} />}
              {area.deco === "crown"   && <Crown      size={26} color={area.color} opacity={0.3}  className="absolute top-4 right-4 deco-float"   style={{ animationDelay: "0.8s" }} />}
              {area.deco === "clapper" && <Clapper    size={26} color={area.color} opacity={0.3}  className="absolute top-4 right-4 deco-twinkle" style={{ animationDelay: "1.2s" }} />}
              {area.deco === "play"    && <PlayCircle size={26} color={area.color} opacity={0.3}  className="absolute top-4 right-4 deco-float"   style={{ animationDelay: "0.6s" }} />}
              {area.deco === "star"    && <Star       size={26} color={area.color} opacity={0.35} className="absolute top-4 right-4 deco-twinkle" style={{ animationDelay: "1.6s" }} />}

              <IconBox bg={`${area.color}18`} color={area.color}>
                <area.Icon />
              </IconBox>

              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-playfair)", color: area.color }}
              >
                {area.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm)", color: "#4A3B62", fontWeight: 300 }}
              >
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
