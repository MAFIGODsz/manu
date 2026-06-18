// TechIcons.tsx — minimal icon set for Perfil Técnico section only.
// All icons use currentColor so they inherit the iconColor set by IconBox.
// Style: clean stroke-based, subtle fill, no decorative extras. Feels like a spec sheet.

export function TechCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.07"/>
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.8"/>
      <line x1="8"  y1="2" x2="8"  y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="8"  cy="14" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="14" r="1.2" fill="currentColor"/>
      <circle cx="16" cy="14" r="1.2" fill="currentColor"/>
      <circle cx="8"  cy="18" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="18" r="1.2" fill="currentColor"/>
    </svg>
  );
}

export function TechRuler() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* vertical measurement line with double arrowheads */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <polyline points="9,5.5 12,2 15,5.5"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="9,18.5 12,22 15,18.5"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* tick marks */}
      <line x1="12" y1="8"  x2="8"  y2="8"  stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>
      <line x1="12" y1="12" x2="7"  y2="12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <line x1="12" y1="16" x2="8"  y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55"/>
    </svg>
  );
}

export function TechShoe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* flat shoe silhouette, side view — heel left, toe right */}
      <path d="M2 17 L2 12 Q3.5 8 8 7 Q14 5 20 9 Q23 11 23 15 L23 17 Q13 20 2 17 Z"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.08"
        strokeLinejoin="round"/>
      {/* collar: darker fill marks where the foot enters */}
      <path d="M2 12 Q3.5 8 8 7 Q8.5 11 6 14 Z"
        fill="currentColor" fillOpacity="0.22"/>
    </svg>
  );
}

export function TechHanger() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* classic clothes hanger — universally understood for fashion/mannequin */}
      <path d="M12 2 C14.2 2 15.5 3.8 14 5.8 C13.2 6.8 12.5 7.4 12 8 L2 17 L22 17 L12 8"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function TechPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 C8 2 5 5.1 5 9 C5 14 12 22 12 22 C12 22 19 14 19 9 C19 5.1 16 2 12 2 Z"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.1"/>
      <circle cx="12" cy="9" r="3"
        stroke="currentColor" strokeWidth="1.5"
        fill="currentColor" fillOpacity="0.28"/>
    </svg>
  );
}

export function TechUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.1"/>
      <path d="M4 20 C4 16.1 7.6 13 12 13 C16.4 13 20 16.1 20 20"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function TechTrophy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* cup */}
      <path d="M8 2 H16 V12 C16 15.8 14 18 12 19 C10 18 8 15.8 8 12 Z"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.1"
        strokeLinejoin="round"/>
      {/* handles */}
      <path d="M8 4 Q4 4 4 8 Q4 12 8 12"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 4 Q20 4 20 8 Q20 12 16 12"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* stem + base */}
      <line x1="12" y1="19" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8"  y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"   strokeLinecap="round"/>
    </svg>
  );
}

export function TechPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="1" width="14" height="22" rx="3"
        stroke="currentColor" strokeWidth="1.8"
        fill="currentColor" fillOpacity="0.08"/>
      {/* top / bottom dividers */}
      <line x1="5"  y1="5"  x2="19" y2="5"  stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
      <line x1="5"  y1="19" x2="19" y2="19" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
      {/* 2×2 app grid */}
      <rect x="7"  y="7"  width="4" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.15"/>
      <rect x="13" y="7"  width="4" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.15"/>
      <rect x="7"  y="13" width="4" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.15"/>
      <rect x="13" y="13" width="4" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.1" fill="currentColor" fillOpacity="0.15"/>
      {/* home indicator */}
      <line x1="10" y1="21" x2="14" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
    </svg>
  );
}
