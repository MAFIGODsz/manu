"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { MusicNote, Sparkle, TinyStar, Wave, Crown, Heart } from "@/components/Deco";
import {
  IconBox, IconBook, IconCross, IconMusic, IconRunway,
  IconMasks, IconClapper, IconActivity, IconBallet, IconWaves,
} from "@/components/SvgIcons";

const ITEMS = [
  { Icon: IconBook,     iconBg: "#EEE6FF", iconColor: "#6D3CC9", label: "4º Ano Escolar",    cat: "Educação" },
  { Icon: IconCross,    iconBg: "#FFFBEA", iconColor: "#D97706", label: "Catequese",          cat: "Desenvolvimento" },
  { Icon: IconMusic,    iconBg: "#EDE9FE", iconColor: "#7C3AED", label: "Canto",              cat: "Artes" },
  { Icon: IconRunway,   iconBg: "#FFF0F8", iconColor: "#DB2777", label: "Passarela",          cat: "Moda" },
  { Icon: IconMasks,    iconBg: "#FFFBEA", iconColor: "#8B4EC9", label: "Teatro",             cat: "Artes Cênicas" },
  { Icon: IconClapper,  iconBg: "#EDE3FF", iconColor: "#6D3CC9", label: "TV & Cinema",        cat: "Audiovisual" },
  { Icon: IconActivity, iconBg: "#EDE9FE", iconColor: "#7C3AED", label: "Ginástica",          cat: "Esporte" },
  { Icon: IconBallet,   iconBg: "#FFF0F7", iconColor: "#BE185D", label: "Ballet",             cat: "Dança" },
  { Icon: IconWaves,    iconBg: "#FFFBEA", iconColor: "#D97706", label: "Funcional na Areia", cat: "Esporte" },
];

const CAT_COLORS: Record<string, { bg: string; text: string }> = {
  "Educação":       { bg: "#EEE6FF", text: "#6D3CC9" },
  "Desenvolvimento":{ bg: "#FFF8DC", text: "#8A6800" },
  "Artes":          { bg: "#F5EEFF", text: "#7A3CC0" },
  "Moda":           { bg: "#EDE3FF", text: "#5A2CB0" },
  "Artes Cênicas":  { bg: "#E8DBFF", text: "#4A2090" },
  "Audiovisual":    { bg: "#F3EAFF", text: "#9B59D0" },
  "Esporte":        { bg: "#EAFAF1", text: "#1E8449" },
  "Dança":          { bg: "#FDF2F8", text: "#AF5F8D" },
};

export default function Formacao() {
  const ref = useIntersectionReveal();

  return (
    <section
      id="formacao"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FAF7FF 0%, #F0E8FF 100%)" }}
    >
      <MusicNote size={40} color="#6D3CC9" opacity={0.22} className="absolute top-16 right-12 hidden md:block deco-float" />
      <TinyStar  size={22} color="#C9A7FF" opacity={0.5}  className="absolute top-24 right-28 hidden lg:block deco-twinkle" style={{ animationDelay: "1.1s" }} />
      <Wave      size={68} color="#C9A7FF" opacity={0.18} className="absolute bottom-12 left-8 hidden md:block" />
      <Sparkle   size={28} color="#FFD84D" opacity={0.4}  className="absolute bottom-20 right-16 hidden lg:block deco-twinkle" style={{ animationDelay: "2s" }} />
      <Crown     size={28} color="#6D3CC9" opacity={0.2}  className="absolute top-8 left-12 hidden lg:block deco-float" style={{ animationDelay: "0.7s" }} />
      <Heart     size={26} color="#C9A7FF" opacity={0.25} className="absolute top-20 left-28 hidden lg:block deco-twinkle" style={{ animationDelay: "1.8s" }} />

      <div ref={ref} className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <div data-reveal className="opacity-0">
            <span className="section-label">Rotina & Dedicação</span>
          </div>
          <div data-reveal className="opacity-0">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
            >
              Formação &
              <br />
              <span className="italic" style={{ color: "#6D3CC9" }}>desenvolvimento</span>
            </h2>
          </div>
          <div data-reveal className="opacity-0 w-12 h-0.5 rounded" style={{ background: "#6D3CC9" }} />
          <div data-reveal className="opacity-0">
            <p
              className="text-base max-w-md text-center leading-relaxed"
              style={{ fontFamily: "var(--font-dm)", color: "#4A3B62", fontWeight: 300 }}
            >
              Uma rotina intensa e multidisciplinar que forma não só a artista, mas o caráter.
            </p>
          </div>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => {
            const c = CAT_COLORS[item.cat] ?? { bg: "#EEE6FF", text: "#6D3CC9" };
            return (
              <div
                key={item.label}
                data-reveal
                className="opacity-0 card-hover flex flex-col items-center gap-3 p-6 rounded-3xl text-center"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(109,60,201,0.1)",
                  boxShadow: "0 2px 16px rgba(109,60,201,0.06)",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <IconBox bg={item.iconBg} color={item.iconColor} size="lg" className="mx-auto">
                  <item.Icon />
                </IconBox>
                <p
                  className="font-semibold text-base leading-snug"
                  style={{ fontFamily: "var(--font-playfair)", color: "#2E174F" }}
                >
                  {item.label}
                </p>
                <span
                  className="pill text-xs"
                  style={{ background: c.bg, color: c.text }}
                >
                  {item.cat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
