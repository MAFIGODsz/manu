"use client";
import { useEffect, useRef } from "react";

// Observa o container e anima filhos com [data-reveal] quando entram na viewport
export function useIntersectionReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("animate-fade-up");
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
