"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number; // 0-100
};

export default function ProgressGauge({ value }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  // 画面に入ったらアニメーション開始
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setStarted(true);
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  // 数字のカウントアップ
  useEffect(() => {
    if (!started || displayValue === value) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayValue(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, value]);

  const complete = value >= 100;

  return (
    <div ref={ref} className="flex items-center gap-3">
      <span className="w-8 shrink-0 text-[11px] font-semibold text-muted">
        進捗
      </span>
      <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-line/60">
        <div
          className={`relative h-full rounded-full transition-[width] duration-1000 ease-out ${
            complete
              ? "bg-gradient-to-r from-emerald-500 to-green-400"
              : "bg-gradient-to-r from-accent to-violet-500"
          }`}
          style={{ width: started ? `${value}%` : "0%" }}
        >
          {!complete && (
            <div className="gauge-stripes absolute inset-0 opacity-40" />
          )}
        </div>
      </div>
      <span
        className={`w-12 shrink-0 text-right font-mono text-sm font-bold tabular-nums ${
          complete ? "text-green-500 dark:text-green-400" : "text-accent"
        }`}
      >
        {displayValue}%
      </span>
    </div>
  );
}
