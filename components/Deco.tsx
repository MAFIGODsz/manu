// Aesthetic decorative icons — thin-stroke SVG system for Manu Freixas landing page
// All elements are pointer-events-none and aria-hidden. Accepts style prop for animationDelay etc.

import type { CSSProperties } from "react"

type DecoProps = {
  size?: number
  color?: string
  opacity?: number
  className?: string
  style?: CSSProperties
}

// ── Existing icons ───────────────────────────────────────────

// 4-point diamond sparkle — ✦ style
export function Sparkle({ size = 20, color = "#6D3CC9", opacity = 0.42, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z"
        stroke={color} strokeWidth="1.15" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
    </svg>
  )
}

// Tiny cross-star with center dot
export function TinyStar({ size = 12, color = "#6D3CC9", opacity = 0.5, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <line x1="7" y1="1.5" x2="7" y2="12.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="1.5" y1="7" x2="12.5" y2="7" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.4" fill={color} />
    </svg>
  )
}

// Minimal thin-stroke heart
export function Heart({ size = 18, color = "#6D3CC9", opacity = 0.4, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 18" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M10 16 C7 13.5 2 10 2 6.5 C2 4 3.8 2 6.5 2 C8 2 9.4 2.9 10 4.2 C10.6 2.9 12 2 13.5 2 C16.2 2 18 4 18 6.5 C18 10 13 13.5 10 16 Z"
        stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.08" />
    </svg>
  )
}

// Large editorial open-quote mark
export function QuoteMark({ size = 56, color = "#C9A7FF", opacity = 0.15, className = "", style }: DecoProps) {
  return (
    <span aria-hidden="true"
      className={`pointer-events-none select-none leading-none block ${className}`}
      style={{ fontSize: size, color, opacity, fontFamily: "Georgia, 'Times New Roman', serif", lineHeight: 1, ...style }}>
      &ldquo;
    </span>
  )
}

// Three cascading accent dashes — editorial style
export function Dashes({ size = 22, color = "#6D3CC9", opacity = 0.32, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={14} viewBox="0 0 22 14" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <line x1="0" y1="1"  x2="9"  y2="1"  stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="2" y1="7"  x2="15" y2="7"  stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="5" y1="13" x2="22" y2="13" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

// ── New icons ────────────────────────────────────────────────

// Camera — for model/photography sections
export function Camera({ size = 20, color = "#6D3CC9", opacity = 0.4, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 20" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M1 7 C1 5.3 2.3 4 4 4 L7 4 L8 2 L16 2 L17 4 L20 4 C21.7 4 23 5.3 23 7 L23 17 C23 18.7 21.7 20 20 20 L4 20 C2.3 20 1 18.7 1 17 Z"
        stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.3" />
      <circle cx="19" cy="7" r="1" fill={color} />
    </svg>
  )
}

// Music note — single eighth note, for Canto / music
export function MusicNote({ size = 16, color = "#6D3CC9", opacity = 0.42, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 20" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <ellipse cx="4" cy="16" rx="3" ry="2.2" stroke={color} strokeWidth="1.2" />
      <line x1="7" y1="15" x2="7" y2="2" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 2 C9.5 1.5 12 3 11 6.5 C9.5 4.5 8 4 7 4.5"
        stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// Hanger — fashion / model / moda
export function Hanger({ size = 20, color = "#6D3CC9", opacity = 0.38, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 22" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M12 1 C14 1 15 2.5 14 5 C13 6 12.5 6.5 12 7 L2 18 L22 18 L12 7"
        stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="18" x2="22" y2="18" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

// Clapperboard — audiovisual / atuação
export function Clapper({ size = 20, color = "#6D3CC9", opacity = 0.38, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 22" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <rect x="1" y="8" width="22" height="13" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M1 8 L4 2 L22 5.5 L22 8 L1 8 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="7"  y1="3.2" x2="6"  y2="8" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <line x1="13" y1="4.2" x2="12" y2="8" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      <line x1="19" y1="5.5" x2="18" y2="8" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

// Crown — minimal 3-peak, editorial / destaque
export function Crown({ size = 20, color = "#6D3CC9", opacity = 0.35, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 18" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M1 16 L1 9 L7 14 L12 2 L17 14 L23 9 L23 16 L1 16 Z"
        stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.07" />
    </svg>
  )
}

// Wave — organic, decorative horizontal flow
export function Wave({ size = 40, color = "#C9A7FF", opacity = 0.28, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={12} viewBox="0 0 40 12" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M0 6 C5 0 10 0 15 6 C20 12 25 12 30 6 C35 0 40 0 40 6"
        stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// Arrow up — growth, trending, presença digital
export function ArrowUp({ size = 16, color = "#C9A7FF", opacity = 0.4, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 18" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <line x1="7" y1="17" x2="7" y2="2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <polyline points="2,7 7,2 12,7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// Play circle — content creation
export function PlayCircle({ size = 18, color = "#6D3CC9", opacity = 0.38, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.3" />
      <path d="M9 7.5 L18 12 L9 16.5 Z" stroke={color} strokeWidth="1.1" strokeLinejoin="round" fill={color} fillOpacity="0.12" />
    </svg>
  )
}

// Ring — abstract decorative circle, versatile
export function Ring({ size = 30, color = "#C9A7FF", opacity = 0.2, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <circle cx="15" cy="15" r="13" stroke={color} strokeWidth="1.2" />
      <circle cx="15" cy="15" r="8" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" />
    </svg>
  )
}

// Five-point star — more decorative than TinyStar
export function Star({ size = 18, color = "#FFD84D", opacity = 0.45, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M12 2 L14 8.8 L21 8.8 L15.5 13 L17.5 19.8 L12 15.5 L6.5 19.8 L8.5 13 L3 8.8 L10 8.8 Z"
        stroke={color} strokeWidth="1.1" strokeLinejoin="round" fill={color} fillOpacity="0.15" />
    </svg>
  )
}

// Ribbon / Bow — fashion, laço discreto
export function Ribbon({ size = 22, color = "#C9A7FF", opacity = 0.4, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={Math.round(size * 0.65)} viewBox="0 0 30 20" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M15 10 C13 7 6 3 2 5 C5 8 12 10 15 10 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <path d="M15 10 C17 7 24 3 28 5 C25 8 18 10 15 10 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <path d="M15 10 C13 13 6 17 2 15 C5 12 12 10 15 10 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <path d="M15 10 C17 13 24 17 28 15 C25 12 18 10 15 10 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill={color} fillOpacity="0.1" />
      <circle cx="15" cy="10" r="1.8" fill={color} fillOpacity="0.35" />
    </svg>
  )
}

// FlowerDot — petit flower, aesthetic / fashion
export function FlowerDot({ size = 18, color = "#C9A7FF", opacity = 0.4, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" />
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" transform="rotate(120 12 12)" />
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" transform="rotate(180 12 12)" />
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" transform="rotate(240 12 12)" />
      <ellipse cx="12" cy="6"  rx="2.8" ry="4.5" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" transform="rotate(300 12 12)" />
      <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.35" />
    </svg>
  )
}

// DiamondLine — 3 diamonds in a row, editorial accent
export function DiamondLine({ size = 32, color = "#6D3CC9", opacity = 0.35, className = "", style }: DecoProps) {
  return (
    <svg width={size} height={Math.round(size * 0.4)} viewBox="0 0 32 13" fill="none"
      aria-hidden="true" className={`pointer-events-none ${className}`} style={{ opacity, ...style }}>
      <path d="M4 6.5 L6.5 2 L9 6.5 L6.5 11 Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" />
      <path d="M13.5 6.5 L16 2 L18.5 6.5 L16 11 Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" />
      <path d="M23 6.5 L25.5 2 L28 6.5 L25.5 11 Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.15" />
    </svg>
  )
}
