// SVG icon system — all illustrated, multi-color, hardcoded palette
// viewBox: 0 0 48 48 across all icons; sizes vary by section container

import { ReactNode } from "react";

// ── Container ────────────────────────────────────────────────────────────────

interface IconBoxProps {
  bg: string;
  color: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export function IconBox({ bg, color, size = "md", children, className = "" }: IconBoxProps) {
  const dim = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-14 h-14" : "w-12 h-12";
  return (
    <div
      className={`${dim} rounded-2xl flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ background: bg, color }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

// ── PorQueTrabalhar icons (md=48px container → width/height="26") ─────────────

export function IconChat() {
  // Two speech bubbles: large lilac + small purple with star
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Large lilac bubble */}
      <path d="M4 6Q4 2 8 2H32Q36 2 36 6V22Q36 26 32 26H20L14 32V26H8Q4 26 4 22Z"
        fill="#C4B5FD" fillOpacity="0.92" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round"/>
      {/* Three dots inside */}
      <circle cx="14" cy="14" r="2.5" fill="#7C3AED"/>
      <circle cx="20" cy="14" r="2.5" fill="#7C3AED"/>
      <circle cx="26" cy="14" r="2.5" fill="#7C3AED"/>
      {/* Sparkle above */}
      <path d="M38 4L39 1L40 4L43 4L40.5 6L41.5 9L38 7L34.5 9L35.5 6L33 4Z" fill="#FFD84D"/>
      {/* Small purple bubble (lower right) */}
      <path d="M20 24Q20 20 24 20H44Q48 20 48 24V34Q48 38 44 38H38L34 42V38H24Q20 38 20 34Z"
        fill="#7C3AED" stroke="#5B21B6" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Star inside small bubble */}
      <path d="M32 26L33 23.5L34 26L36.5 26L34.5 27.8L35.3 30.5L33 28.8L30.7 30.5L31.5 27.8L29.5 26Z"
        fill="#FFD84D"/>
    </svg>
  );
}

export function IconVideoCamera() {
  // Camera body with lens, viewfinder and star flash
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Camera body */}
      <rect x="2" y="14" width="32" height="22" rx="5" fill="#C4B5FD" fillOpacity="0.95" stroke="#7C3AED" strokeWidth="2"/>
      {/* Top bump/viewfinder */}
      <rect x="9" y="8" width="14" height="8" rx="3.5" fill="#7C3AED"/>
      {/* Recording light */}
      <circle cx="27" cy="12" r="2.5" fill="#F87171"/>
      {/* Lens rings */}
      <circle cx="16" cy="25" r="8" fill="#2E174F" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="16" cy="25" r="5.5" fill="#6D28D9"/>
      <circle cx="16" cy="25" r="2.5" fill="#A78BFA"/>
      <circle cx="14" cy="23" r="1.2" fill="white" fillOpacity="0.65"/>
      {/* Video triangles (play/record) */}
      <path d="M36 18L46 25L36 32Z" fill="#6D28D9" stroke="#5B21B6" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Star flash burst */}
      <path d="M32 6L33.2 2.5L34.4 6L38 6L35.2 8.2L36.3 12L33.2 9.8L30.1 12L31.2 8.2L28.4 6Z"
        fill="#FFD84D"/>
    </svg>
  );
}

export function IconTarget() {
  // Bullseye with checkmark + yellow star
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="26" r="20" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2.5"/>
      <circle cx="24" cy="26" r="13" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="24" cy="26" r="7" fill="#7C3AED"/>
      {/* White checkmark */}
      <path d="M18 26L22 30L30 20" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Star top-right */}
      <path d="M40 8L41.2 4.5L42.4 8L46 8L43.2 10.2L44.3 14L41.2 11.8L38.1 14L39.2 10.2L36.4 8Z" fill="#FFD84D"/>
    </svg>
  );
}

export function IconLayers() {
  // Stacked creative cards (yellow → pink → purple) with star
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Bottom card (yellow, rotated) */}
      <rect x="4" y="26" width="40" height="18" rx="4"
        fill="#FFFBEA" stroke="#D97706" strokeWidth="1.5"
        transform="rotate(-8 24 35)"/>
      {/* Middle card (pink) */}
      <rect x="4" y="24" width="40" height="18" rx="4"
        fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5"
        transform="rotate(5 24 33)"/>
      {/* Top card (purple, flat) */}
      <rect x="4" y="18" width="40" height="18" rx="4"
        fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5"/>
      {/* Content lines on top card */}
      <rect x="10" y="23" width="22" height="3" rx="1.5" fill="#A78BFA" fillOpacity="0.8"/>
      <rect x="10" y="29" width="15" height="2.5" rx="1.2" fill="#A78BFA" fillOpacity="0.4"/>
      {/* Star sparkle */}
      <path d="M39 5L40 2L41 5L44 5L41.5 7L42.5 10L39 8L35.5 10L36.5 7L34 5Z" fill="#FFD84D"/>
    </svg>
  );
}

export function IconPhone() {
  // Smartphone with 4-icon social grid + stories bar
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Phone body */}
      <rect x="9" y="2" width="30" height="44" rx="7" fill="#6D28D9" stroke="#4C1D95" strokeWidth="1.5"/>
      {/* Screen */}
      <rect x="12" y="8" width="24" height="30" rx="3" fill="#F5F3FF"/>
      {/* Notch */}
      <rect x="19" y="3.5" width="10" height="3" rx="1.5" fill="#4C1D95"/>
      {/* Home indicator */}
      <rect x="20" y="43" width="8" height="2.5" rx="1.2" fill="#4C1D95"/>
      {/* App 1 - Heart/Like (pink) */}
      <rect x="14" y="11" width="9" height="9" rx="2.5" fill="#FCE7F3"/>
      <path d="M18.5 17.5C18.5 17.5 15 15.2 15 13C15 11.8 16 11 17.2 11C18 11 18.5 11.4 18.5 11.4C18.5 11.4 19 11 19.8 11C21 11 22 11.8 22 13C22 15.2 18.5 17.5 18.5 17.5Z"
        fill="#EC4899" transform="translate(-0.5 0.5)"/>
      {/* App 2 - Star (yellow) */}
      <rect x="25" y="11" width="9" height="9" rx="2.5" fill="#FFFBEA"/>
      <path d="M29.5 13L30.4 15.5H33L31 17L31.8 19.5L29.5 18L27.2 19.5L28 17L26 15.5H28.6Z"
        fill="#D97706"/>
      {/* App 3 - Play (purple) */}
      <rect x="14" y="22" width="9" height="9" rx="2.5" fill="#EDE9FE"/>
      <path d="M17.5 24.5L17.5 28.5L21.5 26.5Z" fill="#7C3AED"/>
      {/* App 4 - Grid (lilac) */}
      <rect x="25" y="22" width="9" height="9" rx="2.5" fill="#EDE9FE"/>
      <rect x="27" y="24" width="3" height="3" rx="0.8" fill="#A78BFA"/>
      <rect x="31" y="24" width="3" height="3" rx="0.8" fill="#A78BFA"/>
      <rect x="27" y="28" width="3" height="3" rx="0.8" fill="#C4B5FD"/>
      <rect x="31" y="28" width="3" height="3" rx="0.8" fill="#C4B5FD"/>
      {/* Stories bar */}
      <rect x="13" y="33" width="6" height="4" rx="1.5" fill="#C4B5FD" fillOpacity="0.9"/>
      <rect x="21" y="33" width="6" height="4" rx="1.5" fill="#F9A8D4" fillOpacity="0.9"/>
      <rect x="29" y="33" width="6" height="4" rx="1.5" fill="#FDE68A" fillOpacity="0.9"/>
    </svg>
  );
}

export function IconStar() {
  // Pink heart with golden sparkle rays — Imagem autêntica
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Heart outer */}
      <path d="M24 42C24 42 4 29 4 16C4 10.5 8.5 6 14 6C17.8 6 21 8 24 12C27 8 30.2 6 34 6C39.5 6 44 10.5 44 16C44 29 24 42 24 42Z"
        fill="#FBCFE8" stroke="#DB2777" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Heart inner glow */}
      <path d="M24 38C24 38 8 27 8 17C8 13.5 10.5 11 14 11C17 11 20 13 24 17C28 13 31 11 34 11C37.5 11 40 13.5 40 17C40 27 24 38 24 38Z"
        fill="#F9A8D4" fillOpacity="0.45"/>
      {/* Sparkle rays */}
      <line x1="24" y1="2" x2="24" y2="5.5" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="36" y1="5" x2="34" y2="7.5" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="42" y1="14" x2="39.5" y2="15" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="12" y1="5" x2="14" y2="7.5" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="6" y1="14" x2="8.5" y2="15" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Center star */}
      <path d="M24 15L25.5 19.5H30L26.5 22L28 26.5L24 24L20 26.5L21.5 22L18 19.5H22.5Z"
        fill="#FFD84D"/>
    </svg>
  );
}

// ── AreasAtuacao icons (md=48px → width="26") ─────────────────────────────────

export function IconCamera() {
  // DSLR camera — grip, lens rings, mode dial, flash star
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Camera body */}
      <rect x="2" y="16" width="44" height="28" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Top hump */}
      <path d="M14 16L16 8H32L34 16Z" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Mode dial */}
      <circle cx="40" cy="12" r="4.5" fill="#7C3AED"/>
      <circle cx="40" cy="12" r="2" fill="#A78BFA"/>
      {/* Left grip */}
      <rect x="2" y="16" width="9" height="16" rx="4" fill="#C4B5FD"/>
      {/* Lens outer (dark) */}
      <circle cx="22" cy="30" r="12" fill="#2E174F" stroke="#7C3AED" strokeWidth="2"/>
      {/* Lens ring */}
      <circle cx="22" cy="30" r="8.5" fill="#6D28D9"/>
      {/* Lens inner */}
      <circle cx="22" cy="30" r="5" fill="#A78BFA"/>
      <circle cx="22" cy="30" r="2" fill="#EDE9FE"/>
      {/* Lens glint */}
      <circle cx="19" cy="27" r="1.5" fill="white" fillOpacity="0.7"/>
      {/* Hotshoe flash */}
      <rect x="16" y="7" width="10" height="3.5" rx="1.5" fill="#7C3AED" opacity="0.8"/>
      {/* Flash star burst */}
      <path d="M40 22L41.2 18L42.4 22L46 22L43.2 24.3L44.3 28.5L41.2 26.2L38.1 28.5L39.2 24.3L36.4 22Z"
        fill="#FFD84D"/>
    </svg>
  );
}

export function IconHanger() {
  // Clothes hanger (gold hook) with pink A-line dress
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Hook arc (gold) */}
      <path d="M24 7C24 7 31 7 31 14C31 18 24 19 24 19"
        stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* Hanger shoulder bar */}
      <path d="M4 24L24 19L44 24"
        stroke="#7C3AED" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Dress A-line */}
      <path d="M18 24L10 46H38L30 24Z"
        fill="#FBCFE8" fillOpacity="0.95" stroke="#DB2777" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* Dress bodice sheen */}
      <path d="M21 24L17 36H24V24Z" fill="#F9A8D4" fillOpacity="0.45"/>
      {/* Waist belt */}
      <rect x="18" y="29" width="12" height="3" rx="1.5" fill="#DB2777" fillOpacity="0.75"/>
      {/* Star sparkle */}
      <path d="M37 8L38 5L39 8L42 8L39.5 10L40.5 13L37 11L33.5 13L34.5 10L32 8Z" fill="#FFD84D"/>
    </svg>
  );
}

export function IconCrown() {
  // Fashion crown with gems — Desfiles
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Crown base band */}
      <rect x="5" y="34" width="38" height="10" rx="4" fill="#6D28D9"/>
      {/* Crown spikes */}
      <path d="M7 34L14 12L21 26L24 8L27 26L34 12L41 34Z"
        fill="#FFD84D" stroke="#D97706" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* Crown highlight */}
      <path d="M10 34L16 17L20 27L24 12L28 27L32 17L38 34Z"
        fill="#FDE68A" fillOpacity="0.4"/>
      {/* Gem on left spike */}
      <circle cx="14" cy="13" r="3.5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5"/>
      {/* Gem on center spike */}
      <circle cx="24" cy="9" r="3.5" fill="#F9A8D4" stroke="#DB2777" strokeWidth="1.5"/>
      {/* Gem on right spike */}
      <circle cx="34" cy="13" r="3.5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5"/>
      {/* Base rivets */}
      <circle cx="16" cy="39" r="2" fill="#FDE68A"/>
      <circle cx="24" cy="39" r="2" fill="#FDE68A"/>
      <circle cx="32" cy="39" r="2" fill="#FDE68A"/>
    </svg>
  );
}

export function IconMic() {
  // Illustrated microphone on stand with sparkle rays — Eventos & Divulgação
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Mic capsule */}
      <rect x="17" y="2" width="14" height="24" rx="7" fill="#7C3AED"/>
      {/* Grille lines */}
      <line x1="19.5" y1="8"  x2="28.5" y2="8"  stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19.5" y1="12" x2="28.5" y2="12" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19.5" y1="16" x2="28.5" y2="16" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19.5" y1="20" x2="28.5" y2="20" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Stand arch */}
      <path d="M10 24Q10 36 24 36Q38 36 38 24"
        stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* Pole */}
      <line x1="24" y1="36" x2="24" y2="44" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Base */}
      <line x1="16" y1="44" x2="32" y2="44" stroke="#6D28D9" strokeWidth="4.5" strokeLinecap="round"/>
      {/* Sparkle rays */}
      <line x1="36" y1="7"  x2="38.5" y2="4.5" stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="42" y1="14" x2="46" y2="14"    stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="37" y1="22" x2="40" y2="24"    stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Star */}
      <path d="M41 7L42 4.5L43 7L46 7L43.5 9L44.5 12L41 10L37.5 12L38.5 9L36 7Z" fill="#FFD84D"/>
    </svg>
  );
}

// ── Formacao icons (lg=56px → width="30") — already illustrated ──────────────

export function IconRunway() {
  // Fashion model on runway with A-line dress, spotlight star — ALREADY ILLUSTRATED
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M6 46L24 28L42 46Z" fill="#EDE9FE" fillOpacity="0.7"/>
      <rect x="5" y="44" width="38" height="3" rx="1.5" fill="#A78BFA" fillOpacity="0.5"/>
      <path d="M24 28L24 44" stroke="#C4B5FD" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.6"/>
      <path d="M21 17.5L14 43L34 43L27 17.5Z" fill="#EC4899" fillOpacity="0.92"/>
      <path d="M22.5 17.5L18 36L24 36L24 17.5Z" fill="#F9A8D4" fillOpacity="0.45"/>
      <rect x="20.5" y="22" width="7" height="2.5" rx="1.2" fill="#9D174D" fillOpacity="0.7"/>
      <rect x="22.5" y="12.5" width="3" height="5" rx="1.5" fill="#FDBA74"/>
      <circle cx="24" cy="10" r="5.5" fill="#FDBA74"/>
      <path d="M18.5 10C18.5 6 21 3.5 24 3.5C27 3.5 29.5 6 29.5 10C28 12 26.5 13 24 13C21.5 13 20 12 18.5 10Z" fill="#4C1D95"/>
      <circle cx="27" cy="5" r="3" fill="#6D28D9"/>
      <path d="M21 25L16.5 29" stroke="#FDBA74" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M20 43L18 47" stroke="#FDBA74" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M28 43L30 47" stroke="#FDBA74" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M38 7L39.2 3.5L40.4 7L44 7L41.3 9.2L42.3 13L39.2 10.8L36.1 13L37.1 9.2L34.4 7Z" fill="#F59E0B"/>
      <path d="M37 8.5L33 5" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <path d="M41.5 7L44 3" stroke="#FDE68A" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

export function IconMasks() {
  // Comedy (gold) + Tragedy (purple) theater masks — ALREADY ILLUSTRATED
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="17" cy="20" rx="13" ry="16" fill="#C4B5FD" fillOpacity="0.9"/>
      <ellipse cx="17" cy="20" rx="13" ry="16" fill="none" stroke="#6D28D9" strokeWidth="2"/>
      <path d="M9 12Q17 9 25 12" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      <ellipse cx="12" cy="17" rx="3" ry="3.5" fill="#6D28D9" fillOpacity="0.25"/>
      <ellipse cx="22" cy="17" rx="3" ry="3.5" fill="#6D28D9" fillOpacity="0.25"/>
      <path d="M9.5 13.5Q12 12 14.5 13.5" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M19.5 13.5Q22 12 24.5 13.5" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M11 27Q17 23 23 27" stroke="#5B21B6" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="17" cy="33" rx="2" ry="3" fill="#7C3AED" fillOpacity="0.3"/>
      <ellipse cx="31" cy="26" rx="14" ry="16" fill="#FDE68A" fillOpacity="0.96"/>
      <ellipse cx="31" cy="26" rx="14" ry="16" fill="none" stroke="#D97706" strokeWidth="2"/>
      <path d="M22 17Q31 14 40 17" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      <ellipse cx="26" cy="23" rx="3" ry="3.5" fill="#D97706" fillOpacity="0.3"/>
      <ellipse cx="36" cy="23" rx="3" ry="3.5" fill="#D97706" fillOpacity="0.3"/>
      <path d="M23 19Q26 17 29 19" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M33 19Q36 17 39 19" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M24 32Q31 39 38 32" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="23" cy="30" r="3" fill="#F9A8D4" fillOpacity="0.65"/>
      <circle cx="39" cy="30" r="3" fill="#F9A8D4" fillOpacity="0.65"/>
    </svg>
  );
}

export function IconActivity() {
  // Gymnast in star-jump pose — ALREADY ILLUSTRATED
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="7" rx="7" ry="5.5" fill="#7C3AED"/>
      <circle cx="29" cy="4" r="2.5" fill="#DB2777"/>
      <circle cx="24" cy="9.5" r="5.5" fill="#FDBA74"/>
      <rect x="22" y="14.5" width="4" height="4" rx="2" fill="#FDBA74"/>
      <ellipse cx="24" cy="23.5" rx="5" ry="7.5" fill="#7C3AED"/>
      <path d="M19.5 21Q24 24 28.5 21" stroke="#A78BFA" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M20.5 18L5 8" stroke="#7C3AED" strokeWidth="5.5" strokeLinecap="round"/>
      <circle cx="5" cy="8" r="3.5" fill="#FDBA74"/>
      <path d="M27.5 18L43 8" stroke="#7C3AED" strokeWidth="5.5" strokeLinecap="round"/>
      <circle cx="43" cy="8" r="3.5" fill="#FDBA74"/>
      <path d="M21 29L7 44" stroke="#5B21B6" strokeWidth="5.5" strokeLinecap="round"/>
      <path d="M27 29L41 44" stroke="#5B21B6" strokeWidth="5.5" strokeLinecap="round"/>
      <path d="M12 22L13 19.5L14 22L16.5 22L14.5 23.8L15.3 26.5L13 24.8L10.7 26.5L11.5 23.8L9.5 22Z" fill="#F59E0B"/>
      <path d="M36 19L37 16.5L38 19L40.5 19L38.5 20.8L39.3 23.5L37 21.8L34.7 23.5L35.5 20.8L33.5 19Z" fill="#F59E0B"/>
    </svg>
  );
}

export function IconBallet() {
  // Pink satin ballet slippers with ribbons and bows — ALREADY ILLUSTRATED
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M3 31Q3 26 9 25H23Q28 25 29 28Q29.5 31.5 27 33H7Q3 33 3 31Z"
        fill="#FBCFE8" fillOpacity="0.95" stroke="#DB2777" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M4.5 30Q5 27 8 26" stroke="#F9A8D4" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M4 30L5 27L8.5 25.5" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      <path d="M3 31Q3.5 28 7 26.5" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 25L10 13" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M17 25L16 14" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M13.5 13Q9.5 9.5 8 11Q7.5 13 11 13.5Q13 14 13.5 13Z" fill="#DB2777"/>
      <path d="M13.5 13Q18 10 19.5 11.5Q20 13 16.5 13.5Q14.5 14 13.5 13Z" fill="#DB2777"/>
      <circle cx="13.5" cy="13" r="2.2" fill="#9D174D"/>
      <path d="M19 38Q19 33 25 32H39Q44 32 45 35Q45.5 38.5 43 40H23Q19 40 19 38Z"
        fill="#FBCFE8" fillOpacity="0.95" stroke="#DB2777" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M20.5 37Q21 34 24 33" stroke="#F9A8D4" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M19 38Q19.5 35 23 33.5" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 32L26 20" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M33 32L32 21" stroke="#FBCFE8" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M29.5 20Q25.5 16.5 24 18Q23.5 20 27 20.5Q29 21 29.5 20Z" fill="#DB2777"/>
      <path d="M29.5 20Q34 17 35.5 18.5Q36 20 32.5 20.5Q30.5 21 29.5 20Z" fill="#DB2777"/>
      <circle cx="29.5" cy="20" r="2.2" fill="#9D174D"/>
    </svg>
  );
}

export function IconBook() {
  // Three stacked colorful books + pencil — 4º Ano Escolar
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Bottom book (yellow) */}
      <rect x="4" y="33" width="40" height="11" rx="3.5" fill="#FEF9C3" stroke="#D97706" strokeWidth="1.5"/>
      <rect x="4" y="33" width="7" height="11" rx="2.5" fill="#D97706"/>
      {/* Middle book (pink) */}
      <rect x="5" y="22" width="38" height="13" rx="3.5" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5"/>
      <rect x="5" y="22" width="7" height="13" rx="2.5" fill="#DB2777"/>
      {/* Top book (purple) */}
      <rect x="6" y="11" width="36" height="13" rx="3.5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5"/>
      <rect x="6" y="11" width="7" height="13" rx="2.5" fill="#7C3AED"/>
      {/* Content lines on top book */}
      <line x1="17" y1="16" x2="36" y2="16" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="20" x2="30" y2="20" stroke="#A78BFA" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Pencil (top-right diagonal) */}
      <rect x="34" y="2" width="5" height="14" rx="2.5" fill="#FFD84D" stroke="#D97706" strokeWidth="1.2" transform="rotate(25 34 9)"/>
      <path d="M39 10L42 12L40 15Z" fill="#FDBA74" transform="rotate(25 40 12)"/>
      <circle cx="41" cy="13" r="1.5" fill="#2E174F" transform="rotate(25 41 13)"/>
    </svg>
  );
}

export function IconCross() {
  // Open book with elegant cross on cover — Catequese
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Book body */}
      <path d="M6 4Q4 4 4 7V42Q4 44 7 44H42Q44 44 44 42V7Q44 4 42 4Z"
        fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Spine */}
      <rect x="4" y="4" width="8" height="40" rx="2.5" fill="#C4B5FD"/>
      {/* Bottom page curve */}
      <path d="M4 40Q7 44 12 44H42" stroke="#A78BFA" strokeWidth="1.5" fill="none"/>
      {/* Page lines */}
      <line x1="16" y1="14" x2="38" y2="14" stroke="#C4B5FD" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="16" y1="18" x2="36" y2="18" stroke="#C4B5FD" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Gold glow behind cross */}
      <ellipse cx="27" cy="28" rx="10" ry="10" fill="#FFD84D" fillOpacity="0.2"/>
      {/* Cross */}
      <rect x="24.5" y="18" width="5" height="20" rx="2.5" fill="#7C3AED"/>
      <rect x="17" y="24" width="20" height="5" rx="2.5" fill="#7C3AED"/>
      {/* Gold accent sparkles */}
      <circle cx="38" cy="12" r="2.2" fill="#FFD84D" fillOpacity="0.9"/>
      <circle cx="40" cy="38" r="1.5" fill="#FFD84D" fillOpacity="0.8"/>
    </svg>
  );
}

export function IconMusic() {
  // Microphone with musical note + sparkle — Canto
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Mic capsule */}
      <rect x="13" y="2" width="14" height="24" rx="7" fill="#7C3AED"/>
      {/* Grille lines */}
      <line x1="15.5" y1="8"  x2="24.5" y2="8"  stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.5" y1="12" x2="24.5" y2="12" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.5" y1="16" x2="24.5" y2="16" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="15.5" y1="20" x2="24.5" y2="20" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Stand arch */}
      <path d="M7 24Q7 36 20 36Q33 36 33 24"
        stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      {/* Pole */}
      <line x1="20" y1="36" x2="20" y2="44" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Base */}
      <line x1="12" y1="44" x2="28" y2="44" stroke="#6D28D9" strokeWidth="4" strokeLinecap="round"/>
      {/* Musical note (right side) */}
      <line x1="36" y1="8" x2="36" y2="20" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="33.5" cy="20" r="3.5" fill="#DB2777"/>
      <line x1="36" y1="8" x2="44" y2="5" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="42" cy="17" r="3.5" fill="#DB2777"/>
      <line x1="44" y1="5" x2="44" y2="17" stroke="#DB2777" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Sparkle */}
      <path d="M40 24L41 21L42 24L45 24L42.5 26L43.5 29L40 27L36.5 29L37.5 26L35 24Z"
        fill="#FFD84D"/>
    </svg>
  );
}

export function IconClapper() {
  // Film clapper with diagonal stripes + film reel — TV & Cinema / Atuação
  return (
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Body */}
      <rect x="3" y="18" width="42" height="27" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Top bar */}
      <rect x="3" y="6" width="42" height="7" rx="3" fill="#6D28D9"/>
      {/* Clapper top piece (hinged flap with diagonals) */}
      <path d="M3 13L3 6M45 6L45 13" stroke="#4C1D95" strokeWidth="1" fill="none"/>
      {/* Diagonal stripe sections */}
      <path d="M3 13L10 6" stroke="#C4B5FD" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M14 13L21 6" stroke="#C4B5FD" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M25 13L32 6" stroke="#C4B5FD" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M36 13L43 6" stroke="#C4B5FD" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="3" y1="13" x2="45" y2="13" stroke="#5B21B6" strokeWidth="2"/>
      {/* Body content lines */}
      <rect x="8" y="22" width="18" height="3" rx="1.5" fill="#A78BFA" fillOpacity="0.8"/>
      <rect x="8" y="27" width="13" height="2.5" rx="1.2" fill="#A78BFA" fillOpacity="0.5"/>
      <rect x="8" y="32" width="16" height="2.5" rx="1.2" fill="#A78BFA" fillOpacity="0.3"/>
      {/* Film reel (right side) */}
      <circle cx="36" cy="31" r="10" fill="none" stroke="#7C3AED" strokeWidth="2"/>
      <circle cx="36" cy="31" r="5.5" fill="#C4B5FD" fillOpacity="0.35"/>
      <circle cx="36" cy="31" r="2.5" fill="#7C3AED"/>
    </svg>
  );
}

export function IconWaves() {
  // Beach fitness: sun + running figure + wave + sand — Funcional na Areia
  return (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Sun */}
      <circle cx="39" cy="10" r="6.5" fill="#FFD84D"/>
      <line x1="39" y1="1"   x2="39" y2="4"   stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="46" y1="4"   x2="44" y2="6"   stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="48" y1="10"  x2="45" y2="10"  stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="46" y1="16"  x2="44" y2="14"  stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32" y1="4"   x2="34" y2="6"   stroke="#FFD84D" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Running figure */}
      <circle cx="15" cy="11" r="4.5" fill="#FDBA74"/>
      {/* Torso */}
      <path d="M15 15L12 25L16 25L15 31" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Arms */}
      <path d="M15 19L8 16" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      <path d="M15 19L21 23" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      {/* Legs */}
      <path d="M12 25L7 32" stroke="#5B21B6" strokeWidth="3" strokeLinecap="round"/>
      <path d="M16 25L21 32" stroke="#5B21B6" strokeWidth="3" strokeLinecap="round"/>
      {/* Wave */}
      <path d="M2 40C5 37 8 37 11 40C14 43 17 43 20 40C23 37 26 37 29 40C32 43 35 43 38 40C41 37 44 37 47 40"
        stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Sandy ground */}
      <path d="M2 44C10 42 22 43 34 42C40 41.5 45 43 47 44"
        stroke="#D97706" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ── PerfilTecnico icons (sm=40px → width="22") ───────────────────────────────

export function IconShoe() {
  // Flat shoe / sapatilha — clear SIDE VIEW: toe pointing right, heel at left, sole at bottom
  // Horizontal silhouette immediately readable as a shoe at small sizes
  return (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* SOLE — flat horizontal strip at bottom, establishes shoe shape immediately */}
      <path d="M10 52 Q34 57 56 52 L56 56 Q34 62 10 57 Z" fill="#6D28D9"/>

      {/* MAIN UPPER — elongated body: heel at left, rounded toe at right */}
      {/* heel-back → heel-top → collar-curve → vamp-top → toe-curve → front → sole-arc → close */}
      <path d="M10 52 L10 34 Q13 25 23 22 Q38 16 52 27 Q59 33 59 44 L59 52 Q34 55 10 52 Z"
        fill="#C4B5FD"/>

      {/* HEEL BLOCK — small darker block at base-back to define low heel */}
      <rect x="8" y="46" width="5" height="8" rx="1.5" fill="#6D28D9"/>

      {/* COLLAR OPENING — dark area at top-left where foot enters the shoe */}
      <path d="M10 34 Q13 25 23 22 Q24 30 20 38 Q16 45 10 45 Z"
        fill="#7C3AED" opacity="0.6"/>

      {/* VAMP SHEEN — glossy highlight across the front-top of the shoe */}
      <path d="M30 20 Q44 15 57 30"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.38"/>

      {/* ACCENT — small decorative detail (bow / button) on vamp */}
      <circle cx="43" cy="27" r="3.2" fill="#FFD84D" opacity="0.92"/>
    </svg>
  );
}

export function IconDress() {
  // Dress on mannequin stand — silhouette based on reference: fitted bodice + flared skirt + pole + tripod base
  return (
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {/* DRESS BODY — shoulders → fitted bodice → narrow waist → wide flared skirt */}
      <path d="M26 8 Q16 10 14 18 Q12 24 14 30 Q18 34 24 36 Q12 44 6 54 L58 54 Q52 44 40 36 Q46 34 50 30 Q52 24 50 18 Q48 10 38 8 Q36 4 34 6 Q32 10 30 6 Q28 4 26 8Z"
        fill="#C4B5FD"/>
      {/* SKIRT volume shading — inner darker tone for depth */}
      <path d="M24 36 Q12 44 6 54 L22 54 Q28 46 32 40 Q36 46 42 54 L58 54 Q52 44 40 36 Q36 40 32 44 Q28 40 24 36Z"
        fill="#9061F9" fillOpacity="0.28"/>
      {/* NECK */}
      <ellipse cx="32" cy="4" rx="5" ry="4" fill="#7C3AED"/>
      {/* SPAGHETTI STRAPS */}
      <line x1="26" y1="8" x2="22" y2="20" stroke="#EDE9FE" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="38" y1="8" x2="42" y2="20" stroke="#EDE9FE" strokeWidth="2.5" strokeLinecap="round"/>
      {/* YELLOW MEASURING TAPE at waist */}
      <path d="M22 36 Q32 40 42 36" stroke="#FFD84D" strokeWidth="3.5" strokeLinecap="round"/>
      {/* POLE */}
      <rect x="30" y="54" width="4" height="7" rx="2" fill="#7C3AED"/>
      {/* TRIPOD BASE */}
      <path d="M20 61 Q32 59 44 61" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <line x1="32" y1="61" x2="20" y2="64" stroke="#5B21B6" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="32" y1="61" x2="44" y2="64" stroke="#5B21B6" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCalendar() {
  // Purple calendar with highlighted date star — Idade
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Body */}
      <rect x="4" y="8" width="40" height="36" rx="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Header */}
      <rect x="4" y="8" width="40" height="13" rx="5" fill="#7C3AED"/>
      <rect x="4" y="16" width="40" height="5" fill="#7C3AED"/>
      {/* Hook tabs */}
      <line x1="16" y1="4" x2="16" y2="12" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="4" x2="32" y2="12" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
      {/* Date dots row 1 */}
      <circle cx="12" cy="28" r="2" fill="#A78BFA"/>
      <circle cx="20" cy="28" r="2" fill="#A78BFA"/>
      <circle cx="28" cy="28" r="2" fill="#A78BFA"/>
      <circle cx="36" cy="28" r="2" fill="#A78BFA"/>
      {/* Date dots row 2 */}
      <circle cx="12" cy="37" r="2" fill="#C4B5FD"/>
      <circle cx="20" cy="37" r="2" fill="#C4B5FD"/>
      {/* Highlighted star date */}
      <rect x="24" y="32" width="14" height="10" rx="3" fill="#FFD84D" fillOpacity="0.35"/>
      <path d="M31 33.5L32 36H34.5L32.5 37.8L33.3 40.5L31 38.8L28.7 40.5L29.5 37.8L27.5 36H30Z"
        fill="#D97706"/>
    </svg>
  );
}

export function IconRuler() {
  // Vertical ruler with measurement highlight + arrows — Altura
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Ruler body */}
      <rect x="17" y="2" width="14" height="44" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Long ticks (right side) */}
      <line x1="24" y1="6"  x2="29" y2="6"  stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="14" x2="29" y2="14" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="22" x2="29" y2="22" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="30" x2="29" y2="30" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
      <line x1="24" y1="38" x2="29" y2="38" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
      {/* Short ticks */}
      <line x1="24" y1="10" x2="27.5" y2="10" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="18" x2="27.5" y2="18" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="26" x2="27.5" y2="26" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="34" x2="27.5" y2="34" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="24" y1="42" x2="27.5" y2="42" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Highlighted band */}
      <rect x="17" y="20" width="14" height="10" rx="2" fill="#FFD84D" fillOpacity="0.35"/>
      {/* Up/down arrows */}
      <path d="M9 10L9 4L6 7M9 4L12 7" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M9 38L9 44L6 41M9 44L12 41" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="9" y1="10" x2="9" y2="38" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

export function IconPin() {
  // Map pin (purple teardrop) with gold star — Localização
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Pin body */}
      <path d="M24 4C16 4 10 10.5 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.5 32 4 24 4Z"
        fill="#C4B5FD" stroke="#7C3AED" strokeWidth="2.5"/>
      {/* Inner circle */}
      <circle cx="24" cy="18" r="8" fill="#7C3AED"/>
      {/* Gold star */}
      <path d="M24 12L25.5 16.5H30.5L26.5 19L28 23.5L24 21L20 23.5L21.5 19L17.5 16.5H22.5Z"
        fill="#FFD84D"/>
      {/* Shine */}
      <ellipse cx="18" cy="13" rx="3" ry="4" fill="white" fillOpacity="0.2"/>
    </svg>
  );
}

export function IconBadge() {
  // ID/profile card with photo circle and sparkle — Perfil
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Card body */}
      <rect x="6" y="10" width="36" height="32" rx="4" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
      {/* Header */}
      <rect x="6" y="10" width="36" height="11" rx="4" fill="#7C3AED"/>
      <rect x="6" y="16" width="36" height="5" fill="#7C3AED"/>
      {/* Lanyard hole */}
      <rect x="21" y="6" width="6" height="6" rx="2" fill="#A78BFA"/>
      {/* Photo avatar */}
      <circle cx="18" cy="27" r="7.5" fill="#C4B5FD" stroke="#7C3AED" strokeWidth="1.5"/>
      <circle cx="18" cy="25" r="3" fill="#7C3AED"/>
      <path d="M11 32Q12 28 18 28Q24 28 25 32" fill="#7C3AED"/>
      {/* Text lines */}
      <rect x="28" y="22" width="11" height="3" rx="1.5" fill="#A78BFA" fillOpacity="0.9"/>
      <rect x="28" y="27" width="8" height="2.5" rx="1.2" fill="#A78BFA" fillOpacity="0.5"/>
      <rect x="28" y="32" width="10" height="2.5" rx="1.2" fill="#A78BFA" fillOpacity="0.35"/>
      {/* Sparkle badge star */}
      <path d="M36 36L37 33L38 36L41 36L38.5 38L39.5 41L36 39L32.5 41L33.5 38L31 36Z"
        fill="#FFD84D"/>
    </svg>
  );
}

export function IconTrophy() {
  // Gold trophy cup with star + purple base — Diferencial
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Cup body */}
      <path d="M12 6H36V24C36 32 30 36 24 36C18 36 12 32 12 24V6Z"
        fill="#FDE68A" stroke="#D97706" strokeWidth="2" strokeLinejoin="round"/>
      {/* Handles */}
      <path d="M12 10Q5 10 5 18Q5 23 12 23" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M36 10Q43 10 43 18Q43 23 36 23" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Shine on cup top */}
      <path d="M16 9Q20 7 24 7Q28 7 32 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"/>
      {/* Star on cup */}
      <path d="M24 12L25.5 17H30.5L26.5 20L28 25L24 22L20 25L21.5 20L17.5 17H22.5Z"
        fill="#D97706"/>
      {/* Stem */}
      <rect x="21" y="36" width="6" height="7" rx="2" fill="#D97706"/>
      {/* Base */}
      <rect x="13" y="43" width="22" height="4.5" rx="2.5" fill="#7C3AED"/>
    </svg>
  );
}

export function IconGrid() {
  // Smartphone with 4-app grid + stories — Plataformas (PerfilTecnico sm)
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Phone body */}
      <rect x="10" y="2" width="28" height="44" rx="7" fill="#6D28D9" stroke="#4C1D95" strokeWidth="1.5"/>
      {/* Screen */}
      <rect x="13" y="8" width="22" height="32" rx="3" fill="#F5F3FF"/>
      {/* Notch */}
      <rect x="19" y="3.5" width="10" height="3" rx="1.5" fill="#4C1D95"/>
      {/* Home indicator */}
      <rect x="20" y="42" width="8" height="2.5" rx="1.2" fill="#4C1D95"/>
      {/* 2×2 grid */}
      <rect x="15" y="11" width="8" height="8" rx="2" fill="#FBCFE8"/>
      <rect x="25" y="11" width="8" height="8" rx="2" fill="#EDE9FE"/>
      <rect x="15" y="21" width="8" height="8" rx="2" fill="#FFFBEA"/>
      <rect x="25" y="21" width="8" height="8" rx="2" fill="#EDE9FE"/>
      {/* Heart */}
      <path d="M19 17.5C19 17.5 16.5 15.5 17 13.5C17.3 12.5 18.1 12 19 12C19.5 12 19.8 12.3 19 13C18.2 12.3 18.5 12 19 12C19.9 12 20.7 12.5 21 13.5C21.5 15.5 19 17.5 19 17.5Z"
        fill="#EC4899"/>
      {/* Star */}
      <path d="M29 13L29.7 15H32L30.2 16.2L30.8 18.2L29 17L27.2 18.2L27.8 16.2L26 15H28.3Z"
        fill="#7C3AED"/>
      {/* Play */}
      <path d="M18 23.5L18 27.5L22 25.5Z" fill="#D97706"/>
      {/* Camera dot */}
      <rect x="26" y="23" width="6" height="5" rx="1.5" fill="#A78BFA"/>
      <circle cx="29" cy="25.5" r="1.5" fill="#6D28D9"/>
      {/* Story bar */}
      <rect x="14" y="31" width="5" height="6" rx="1.5" fill="#C4B5FD" fillOpacity="0.9"/>
      <rect x="21" y="31" width="5" height="6" rx="1.5" fill="#F9A8D4" fillOpacity="0.9"/>
      <rect x="28" y="31" width="5" height="6" rx="1.5" fill="#FDE68A" fillOpacity="0.9"/>
    </svg>
  );
}
