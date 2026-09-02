"use client";

import { useEffect, useState } from "react";

const STEP_MS = 1500;

/**
 * The coverage list with a spotlight travelling through it, city by city —
 * a quieter way of saying "PAN-India" than stating it again in copy.
 *
 * Renders inline (footer) or as pills (contact page). The cycle pauses on
 * hover and does not run at all under reduced motion, where the list is just
 * a list.
 */
export function Locations({
  items,
  variant = "inline",
  tone = "invert",
}: {
  items: readonly string[];
  variant?: "inline" | "pills";
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % items.length),
      STEP_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, items.length]);

  const hover = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };

  if (variant === "inline") {
    return (
      <p className="text-[0.9rem] leading-relaxed" {...hover}>
        {items.map((city, i) => (
          <span key={city}>
            {i > 0 ? (
              <span
                aria-hidden="true"
                className={invert ? "mx-2 text-paper/35" : "mx-2 text-ink-30"}
              >
                /
              </span>
            ) : null}
            <span
              className={`transition-all duration-500 ${
                i === active
                  ? invert
                    ? "text-accent drop-shadow-[0_0_12px_rgba(192,214,78,0.45)]"
                    : "text-brand"
                  : invert
                    ? "text-paper/88"
                    : "text-ink-70"
              }`}
            >
              {city}
            </span>
          </span>
        ))}
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-2" {...hover}>
      {items.map((city, i) => {
        const lit = i === active;
        return (
          <li
            key={city}
            className={`rounded-[var(--radius-pill)] border px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              lit
                ? "-translate-y-0.5 border-brand bg-brand text-paper shadow-[0_6px_20px_-8px_rgba(92,122,28,0.7)]"
                : "border-line text-ink-70"
            }`}
          >
            {city}
            {i === 0 ? (
              <span
                className={`ml-2 transition-colors duration-500 ${
                  lit ? "text-accent" : "text-brand"
                }`}
              >
                HQ
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
