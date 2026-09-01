"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 6500;

/**
 * Pillar showcase — a spotlight stage that plays itself.
 *
 * One pillar holds a charcoal stage at a time, over a ghosted index numeral
 * and a lime glow, with story-style segments across the top counting down to
 * the hand-over and a tab strip along the bottom. Hovering, focusing or
 * picking a tab takes control back from the timer.
 *
 * The running segment is driven straight into the DOM node from a rAF loop
 * rather than through state, so 60fps progress never re-renders the stage —
 * only an actual hand-over does.
 */
export function PillarShowcase({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    startRef.current = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startRef.current) / DURATION);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
      if (progress >= 1) {
        startRef.current = now;
        setActive((current) => (current + 1) % count);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, count, active]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive((current) => (current - 1 + count) % count);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive((current) => (current + 1) % count);
    }
  };

  const item = items[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative isolate overflow-hidden rounded-[1.75rem] bg-ink text-paper"
    >
      {/* lime glow + ghosted numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_100%_0%,rgba(192,214,78,0.2),transparent_58%)]"
      />
      <span
        key={`ghost-${active}`}
        aria-hidden="true"
        className="pillar-in display pointer-events-none absolute -bottom-14 -right-2 -z-10 select-none text-[13rem] leading-none text-white/[0.055] md:text-[17rem]"
      >
        {String(active + 1).padStart(2, "0")}
      </span>

      {/* hand-over segments */}
      <div className="flex gap-1.5 px-7 pt-7 md:px-10 md:pt-8">
        {items.map((segment, i) => (
          <span
            key={segment.title}
            className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
          >
            <span
              ref={i === active ? barRef : undefined}
              className={`block h-full origin-left rounded-full bg-accent ${
                i < active ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </span>
        ))}
      </div>

      {/* stage */}
      <div
        role="tabpanel"
        id={`pillar-panel-${active}`}
        aria-labelledby={`pillar-tab-${active}`}
        className="flex min-h-[19rem] flex-col justify-center px-7 py-10 md:min-h-[21rem] md:px-10 md:py-12"
      >
        <div key={active} className="pillar-in">
          <p className="label mb-5 text-accent">
            Pillar {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="display max-w-[16ch] text-[clamp(1.4rem,2vw,2.15rem)] leading-[1.1]">
            {item.title}
          </h3>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-paper/80">
            {item.body}
          </p>
        </div>
      </div>

      {/* tab strip */}
      <div
        role="tablist"
        aria-label="Pillars"
        onKeyDown={onKeyDown}
        className="grid sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.title}
              type="button"
              role="tab"
              id={`pillar-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`pillar-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group relative flex items-start gap-3 border-t border-white/12 px-6 py-5 text-left transition-colors duration-500 ${
                isActive ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-[2px] origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "scale-x-100 bg-accent"
                    : "scale-x-0 bg-accent group-hover:scale-x-100"
                }`}
              />
              <span
                aria-hidden="true"
                className={`label text-[0.6rem] transition-colors duration-500 ${
                  isActive ? "text-accent" : "text-paper/45"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`display text-[0.8rem] leading-snug transition-colors duration-500 ${
                  isActive ? "text-paper" : "text-paper/70 group-hover:text-paper"
                }`}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
