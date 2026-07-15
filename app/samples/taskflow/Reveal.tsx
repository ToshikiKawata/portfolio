"use client";

import { useEffect } from "react";

// ページ内の .reveal 要素を監視し、画面に入ったら .reveal-visible を付与する
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      els.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
