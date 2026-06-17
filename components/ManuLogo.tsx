"use client";

export type LogoVariant = "default" | "light" | "compact";
export type LogoSize = "sm" | "md" | "lg";

interface ManuLogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const heightMap: Record<LogoSize, string> = {
  sm: "24px",
  md: "32px",
  lg: "46px",
};

// ─────────────────────────────────────────────────────────────────────────────
// ManuLogo
// Rendered as inline SVG so:
//   • Google Translate never touches SVG <text> elements
//   • translate="no" + class="notranslate" add a second safety layer
//   • Playfair Display (loaded by Next.js globally) renders correctly inline
// ─────────────────────────────────────────────────────────────────────────────
export function ManuLogo({ variant = "default", size = "md", className }: ManuLogoProps) {
  const isLight = variant === "light";

  const manuColor    = isLight ? "#EDE9FE" : "#2E174F";
  const freixasColor = isLight ? "#C9A7FF" : "#6D3CC9";

  // ── Compact monogram ─────────────────────────────────────────────────────
  if (variant === "compact") {
    return (
      <span
        className={`notranslate ${className ?? ""}`}
        aria-label="Manu Freixas"
        translate="no"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2.1rem",
          height: "2.1rem",
          borderRadius: "9px",
          background: isLight ? "rgba(201,167,255,0.12)" : "rgba(109,60,201,0.09)",
          border: `1.5px solid ${isLight ? "rgba(201,167,255,0.3)" : "rgba(109,60,201,0.2)"}`,
          flexShrink: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 26"
          aria-hidden="true"
          style={{ height: "15px", width: "auto" }}
        >
          <text
            x="2"
            y="21"
            fontFamily="'Playfair Display', Georgia, serif"
            fontWeight="700"
            fontStyle="italic"
            fontSize="18"
            fill={freixasColor}
            letterSpacing="-0.3"
          >
            mf
          </text>
        </svg>
      </span>
    );
  }

  // ── Full wordmark ─────────────────────────────────────────────────────────
  //
  // Layout (viewBox 0 0 218 46):
  //   "Manu"    → x=4,  y=34, fontSize=24, weight=700, tracked +2.5 (editorial)
  //   "Freixas" → x=88, y=34, fontSize=27, italic, weight=600 (preserves reference)
  //   Yellow F swash → teardrop at F crossbar terminal (from reference logo)
  //   Sparkle ✦ → minimal, top-right (subtle detail only)
  //   NO underline / signature line
  //
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 218 46"
      role="img"
      aria-label="Manu Freixas"
      className={`notranslate ${className ?? ""}`}
      // @ts-expect-error – HTML translate attribute on SVG
      translate="no"
      style={{
        height: heightMap[size],
        width: "auto",
        display: "block",
        overflow: "visible",
        flexShrink: 0,
      }}
    >
      <title>Manu Freixas</title>

      {/* ── "Manu" — Playfair Display 700, generous tracking, deep purple ── */}
      {/* letter-spacing 2.5 gives the editorial fashion feel matching "Freixas" presence */}
      <text
        x="4"
        y="34"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="24"
        fill={manuColor}
        letterSpacing="2.5"
      >
        Manu
      </text>

      {/* ── "Freixas" — preserved exactly: Playfair 600 italic, vibrant purple ── */}
      <text
        x="88"
        y="34"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontStyle="italic"
        fontSize="27"
        fill={freixasColor}
      >
        Freixas
      </text>

      {/* ── Yellow calligraphic swash through the F crossbar ── */}
      {/* Matches reference logo: a flowing curved stroke integrated into the F,
          not a separate decorative element. No fills, no blobs, no stars. */}
      <path
        d="M 87 30 C 92 22 99 16 106 19"
        stroke="#FFD84D"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.92"
        aria-hidden="true"
      />
    </svg>
  );
}
