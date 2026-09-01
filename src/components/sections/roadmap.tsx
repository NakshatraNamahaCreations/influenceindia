"use client";

import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/ui/reveal";

/**
 * Scroll-drawn roadmap.
 *
 * A lime line draws down a spine as the section passes the viewport. Each stop
 * lights as the line reaches it — its node fills, a connector draws out to the
 * card, and the card itself slides in from its own side — so the list plays as
 * a journey instead of sitting there as a long column. The final stop is the
 * destination and is treated as one.
 *
 * The drawn line is written straight into the DOM node from a rAF-throttled
 * scroll listener; only crossing a stop re-renders, so a long list stays cheap
 * to scroll. Everything renders visible until mount, so the copy is never
 * hidden behind JS.
 */
export function Roadmap({
  items,
  tone = "invert",
}: {
  items: readonly string[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let queued = false;

    const measure = () => {
      queued = false;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.72 - rect.top) / rect.height),
      );

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`;
      }
      setReached((current) => {
        const next = Math.round(progress * items.length);
        return next === current ? current : next;
      });
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(measure);
    };

    raf = requestAnimationFrame(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const accentBg = invert ? "bg-accent" : "bg-brand";
  const track = invert ? "bg-white/15" : "bg-line";
  const dotIdle = invert ? "border-white/25 bg-ink" : "border-line bg-paper";
  const cardIdle = invert
    ? "border-white/10 bg-white/[0.04] hover:border-accent/40 hover:bg-white/[0.07]"
    : "border-line-soft bg-paper hover:border-brand/40 hover:bg-surface";
  const cardLive = invert
    ? "border-accent/25 bg-white/[0.06]"
    : "border-brand/25 bg-surface";
  const text = invert ? "text-paper/88" : "text-ink-70";
  const chipIdle = invert
    ? "border-white/15 text-paper/45"
    : "border-line text-ink-30";
  const chipLive = invert
    ? "border-accent/40 bg-accent/10 text-accent"
    : "border-brand/40 bg-brand-soft text-brand";

  const shown = Math.min(items.length, reached);

  return (
    <div ref={containerRef} className="relative">
      {/* progress pill — rides along while the section is on screen */}
      <div className="pointer-events-none sticky top-24 z-20 mb-10 flex justify-center">
        <span
          className={`pointer-events-auto flex items-center gap-3 rounded-[var(--radius-pill)] border px-5 py-2.5 backdrop-blur-md ${
            invert ? "border-white/20 bg-ink/95" : "border-line bg-paper/95"
          }`}
        >
          <span className={`label text-[0.62rem] ${invert ? "text-accent" : "text-brand"}`}>
            {String(Math.max(1, shown)).padStart(2, "0")}
            <span className={invert ? "mx-1.5 text-paper/45" : "mx-1.5 text-ink-30"}>
              /
            </span>
            {String(items.length).padStart(2, "0")}
          </span>
          <span className={`h-1 w-24 overflow-hidden rounded-full ${track}`}>
            <span
              className={`block h-full rounded-full transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${accentBg}`}
              style={{ width: `${(shown / items.length) * 100}%` }}
            />
          </span>
        </span>
      </div>

      {/* spine */}
      <span
        aria-hidden="true"
        className={`absolute bottom-0 left-[0.4375rem] top-0 w-px lg:left-1/2 ${track}`}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[0.4375rem] top-0 w-px lg:left-1/2"
      >
        <span
          ref={fillRef}
          className={`block h-full w-px origin-top scale-y-0 shadow-[0_0_14px_rgba(192,214,78,0.55)] ${accentBg}`}
        />
      </span>

      <ol className="relative">
        {items.map((item, i) => {
          const live = i < reached;
          const current = i === reached - 1;
          const goal = i === items.length - 1;
          const left = i % 2 === 0;

          return (
            <li
              key={item}
              className="relative py-3 pl-10 lg:grid lg:grid-cols-2 lg:gap-16 lg:py-4 lg:pl-0"
            >
              {/* node */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-[1.6rem] flex h-[0.9375rem] w-[0.9375rem] items-center justify-center rounded-full border-2 transition-all duration-500 lg:left-1/2 lg:-ml-[0.46875rem] ${
                  live ? `border-transparent ${accentBg}` : dotIdle
                }`}
              >
                {current ? (
                  <span
                    className={`absolute inset-0 animate-ping rounded-full opacity-60 motion-reduce:animate-none ${accentBg}`}
                  />
                ) : null}
              </span>

              {/* connector from spine to card */}
              <span
                aria-hidden="true"
                className={`absolute top-[2.05rem] h-px w-6 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${accentBg} ${
                  live ? "scale-x-100" : "scale-x-0"
                } left-[0.9rem] ${
                  left
                    ? "lg:left-auto lg:right-1/2 lg:mr-[0.47rem] lg:origin-right"
                    : "lg:left-1/2 lg:ml-[0.47rem] lg:origin-left"
                }`}
              />

              <Reveal
                delay={60}
                className={
                  left
                    ? "lg:col-start-1 lg:row-start-1 lg:flex lg:justify-end"
                    : "lg:col-start-2 lg:row-start-1"
                }
              >
                <div
                  className={`group rounded-2xl border p-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:p-6 lg:max-w-md ${
                    goal
                      ? invert
                        ? "border-accent bg-accent text-ink"
                        : "border-brand bg-brand text-paper"
                      : live
                        ? cardLive
                        : cardIdle
                  } ${left ? "lg:text-right" : ""}`}
                >
                  <span
                    className={`label inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[0.58rem] transition-colors duration-500 ${
                      goal
                        ? invert
                          ? "border-ink/25 text-ink"
                          : "border-white/40 text-paper"
                        : live
                          ? chipLive
                          : chipIdle
                    }`}
                  >
                    {goal ? (
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-3 w-3"
                      >
                        <path d="M4 14V2.5M4 3h7.5l-1.5 2.5L11.5 8H4" />
                      </svg>
                    ) : null}
                    {String(i + 1).padStart(2, "0")}
                    {goal ? (
                      <>
                        <span aria-hidden="true" className="opacity-40">
                          ·
                        </span>
                        Goal
                      </>
                    ) : null}
                  </span>

                  <p
                    className={`mt-3 leading-relaxed ${
                      goal
                        ? "display text-[clamp(1rem,1.05vw,1.2rem)] leading-snug"
                        : `text-[0.9rem] ${text}`
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
