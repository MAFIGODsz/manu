import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DigitalPresence from "@/components/DigitalPresence";
import AreasAtuacao from "@/components/AreasAtuacao";
import Formacao from "@/components/Formacao";
import PerfilTecnico from "@/components/PerfilTecnico";
import Portfolio from "@/components/Portfolio";
import Parcerias from "@/components/Parcerias";
import PorQueTrabalhar from "@/components/PorQueTrabalhar";
import Contato from "@/components/Contato";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_LINK =
  "https://wa.me/5521964068920?text=" +
  encodeURIComponent(
    "Olá! Vi o media kit da Manu Freixas e gostaria de fazer uma proposta."
  );

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DigitalPresence />
        <AreasAtuacao />
        <Formacao />
        <PerfilTecnico />
        <Portfolio />
        <Parcerias />
        <PorQueTrabalhar />
        <Contato />
      </main>
      <WhatsAppButton />

      {/* ── Footer ── */}
      <footer
        className="py-10 md:py-12"
        style={{
          background: "#1A0E30",
          borderTop: "1px solid rgba(201,167,255,0.08)",
        }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              {/* Logo — versão clara (footer escuro), sem fundo; PNG transparente */}
              <span
                className="notranslate inline-flex"
                aria-label="Manu Freixas"
                translate="no"
              >
                <img
                  src="/images/logo-manu-freixas-light.png"
                  alt="Manu Freixas"
                  className="h-7 md:h-8 w-auto block select-none"
                  draggable={false}
                />
              </span>
              <p
                className="text-xs tracking-wider uppercase text-center md:text-left"
                style={{
                  fontFamily: "var(--font-dm)",
                  color: "rgba(201,167,255,0.45)",
                  letterSpacing: "0.1em",
                }}
              >
                Artista mirim · Modelo · Criadora de conteúdo
              </p>
              <p
                className="text-xs mt-1"
                style={{
                  fontFamily: "var(--font-dm)",
                  color: "rgba(201,167,255,0.3)",
                }}
              >
                Rio de Janeiro — RJ
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/manufreixasoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(201,167,255,0.08)",
                  border: "1px solid rgba(201,167,255,0.15)",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C9A7FF" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="#C9A7FF" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1" fill="#C9A7FF" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@familiamanufreixas2020"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(201,167,255,0.08)",
                  border: "1px solid rgba(201,167,255,0.15)",
                }}
              >
                <svg width="15" height="17" viewBox="0 0 24 24" fill="#C9A7FF">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@manufreixas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(201,167,255,0.08)",
                  border: "1px solid rgba(201,167,255,0.15)",
                }}
              >
                <svg width="18" height="14" viewBox="0 0 24 24" fill="#C9A7FF">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A0E30" />
                </svg>
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.25)",
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="rgba(37,211,102,0.9)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-8 pt-6 flex flex-col items-center gap-2 text-center"
            style={{ borderTop: "1px solid rgba(201,167,255,0.07)" }}
          >
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-dm)",
                color: "rgba(201,167,255,0.28)",
              }}
            >
              © {new Date().getFullYear()} Manu Freixas · Media Kit Digital · Todos os direitos reservados
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-dm)",
                color: "rgba(201,167,255,0.22)",
              }}
            >
              Desenvolvido por{" "}
              <a
                href="https://instagram.com/thepixeloo"
                target="_blank"
                rel="noopener noreferrer"
                className="pixeloo-link"
              >
                Pixeloo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
