import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://manufreixas.com.br"; // substitua pela URL real quando publicar

export const metadata: Metadata = {
  title: "Manu Freixas | Artista Mirim, Modelo e Criadora de Conteúdo",
  description:
    "Media kit digital de Manu Freixas, artista mirim, modelo e criadora de conteúdo do Rio de Janeiro, com atuação em moda, campanhas, audiovisual, desfiles e projetos digitais.",
  keywords: [
    "Manu Freixas",
    "artista mirim",
    "modelo mirim",
    "criadora de conteúdo",
    "media kit",
    "Rio de Janeiro",
    "moda infantil",
    "passarela mirim",
    "atuação mirim",
    "criança modelo",
    "influenciadora mirim",
  ],
  authors: [{ name: "Manu Freixas" }],
  openGraph: {
    title: "Manu Freixas | Media Kit",
    description:
      "Artista mirim, modelo e criadora de conteúdo do Rio de Janeiro.",
    url: SITE_URL,
    siteName: "Manu Freixas",
    locale: "pt_BR",
    type: "website",
    // Descomente quando tiver a imagem OG:
    // images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Manu Freixas - Media Kit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu Freixas | Artista Mirim, Modelo e Criadora de Conteúdo",
    description:
      "Artista mirim, modelo e criadora de conteúdo do Rio de Janeiro.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7FF] text-[#211A2E]">
        {children}
      </body>
    </html>
  );
}
