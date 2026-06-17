"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Crown, Sparkle, TinyStar, Ring, Star, Ribbon } from "@/components/Deco";
import { IconBox } from "@/components/SvgIcons";
import {
  TechCalendar, TechRuler, TechShoe, TechHanger,
  TechPin, TechUser, TechTrophy, TechPhone,
} from "@/components/TechIcons";

const PROFILE = [
  { Icon: TechCalendar, iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Idade",       value: "10 anos"                          },
  { Icon: TechRuler,    iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Altura",      value: "1,36 m"                           },
  { Icon: TechShoe,     iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Calçado",     value: "32 / 33"                          },
  { Icon: TechHanger,   iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Manequim",    value: "12"                               },
  { Icon: TechPin,      iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Localização", value: "Rio de Janeiro — RJ"              },
  { Icon: TechUser,     iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Perfil",      value: "Artista · Modelo · Criadora"      },
  { Icon: TechTrophy,   iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Diferencial", value: "Versatilidade & Oratória"         },
  { Icon: TechPhone,    iconBg: "rgba(201,167,255,0.15)", iconColor: "#C9A7FF", label: "Plataformas", value: "Instagram · TikTok · YouTube"     },
];

export default function PerfilTecnico() {
  const ref = useIntersectionReveal();

  return (
    <section id="perfil" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#2E174F" }}>
      <Ring     size={120} color="#C9A7FF" opacity={0.12} className="absolute -top-10 -right-10 hidden md:block" />
      <TinyStar size={22}  color="#C9A7FF" opacity={0.4}  className="absolute top-20 right-24 hidden lg:block deco-twinkle" />
      <Star     size={26}  color="#FFD84D" opacity={0.38} className="absolute top-10 left-12 hidden lg:block deco-twinkle" style={{ animationDelay: "1.0s" }} />
      <Ribbon   size={30}  color="#C9A7FF" opacity={0.28} className="absolute bottom-16 left-8 hidden lg:block deco-float" style={{ animationDelay: "0.5s" }} />

      <div ref={ref} className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 relative">
            <Crown   size={30} color="#C9A7FF" opacity={0.3}  className="absolute -top-2 right-0 hidden lg:block deco-float" />
            <Sparkle size={24} color="#FFD84D" opacity={0.4}  className="absolute top-14 right-4 hidden lg:block deco-twinkle" style={{ animationDelay: "1.5s" }} />
            <div data-reveal className="opacity-0">
              <span className="section-label" style={{ color: "#C9A7FF" }}>
                Especificações
              </span>
            </div>
            <div data-reveal className="opacity-0">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}
              >
                Perfil
                <br />
                <span className="italic" style={{ color: "#C9A7FF" }}>
                  técnico
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
                  color: "rgba(201,167,255,0.65)",
                  fontWeight: 300,
                }}
              >
                Informações essenciais para marcas, lojas, produtoras, fotógrafos e agências avaliarem Manu para seus projetos.
              </p>
            </div>

            {/* CTA */}
            <div data-reveal className="opacity-0 mt-2">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-85"
                style={{
                  background: "#6D3CC9",
                  color: "#fff",
                  fontFamily: "var(--font-dm)",
                  boxShadow: "0 4px 20px rgba(109,60,201,0.35)",
                }}
              >
                Fazer uma proposta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: profile grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {PROFILE.map((item, i) => (
              <div
                key={item.label}
                data-reveal
                className="opacity-0 p-4 md:p-5 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(201,167,255,0.07)",
                  border: "1px solid rgba(201,167,255,0.12)",
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <IconBox bg={item.iconBg} color={item.iconColor} size="sm">
                  <item.Icon />
                </IconBox>
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-dm)",
                    color: "rgba(201,167,255,0.45)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="font-semibold text-sm md:text-base leading-snug"
                  style={{ fontFamily: "var(--font-playfair)", color: "#fff" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
