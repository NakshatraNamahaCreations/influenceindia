"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

type Item = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
};

const AUTOPLAY_MS = 8000;

/**
 * Testimonial slider — three cards on stage at once (two on tablet, one on
 * phones), the rest paged in.
 *
 * Paging is a native scroll-snap container rather than a transform track: the
 * card widths stay pure CSS, so the correct number of cards is on screen from
 * the first paint with no measurement, and touch swipe / trackpad scrolling
 * come for free. The arrows and dots just scroll it by one viewport.
 *
 * Named testimonials deliberately fall back to a monogram rather than stock
 * faces — presenting a photograph of a real, identifiable person as an
 * employee giving a quote they never gave is a misrepresentation.
 */
export function Testimonials({
  items,
  tone = "default",
}: {
  items: readonly Item[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [paused, setPaused] = useState(false);

  // how many viewport-fuls the track holds, recomputed whenever it resizes
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () =>
      setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [items]);

  const goTo = useCallback((next: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => goTo(page - 1 < 0 ? pages - 1 : page - 1), [goTo, page, pages]);
  const next = useCallback(() => goTo((page + 1) % pages), [goTo, page, pages]);

  // autoplay — only when there is something to page to
  useEffect(() => {
    if (paused || pages < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, pages, next]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  const card = invert
    ? "border-white/12 bg-white/[0.04] hover:border-accent/50"
    : "border-line-soft bg-paper hover:border-brand/45";
  const quoteText = invert ? "text-paper/90" : "text-ink-90";
  const muted = invert ? "text-paper/65" : "text-ink-50";
  const glyph = invert ? "text-accent" : "text-brand";
  const rule = invert ? "border-white/12" : "border-line-soft";
  const control = invert
    ? "border-white/20 text-paper hover:border-accent hover:bg-accent hover:text-ink"
    : "border-line text-ink hover:border-ink hover:bg-ink hover:text-paper";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul
        ref={trackRef}
        onScroll={onScroll}
        data-lenis-prevent
        aria-label="Testimonials"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.name}
            delay={(i % 3) * 110}
            className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <figure
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${card}`}
            >
              {/* lime hairline that draws across the top on hover */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 ${
                  invert ? "bg-accent" : "bg-brand"
                }`}
              />

              <span
                aria-hidden="true"
                className={`display text-[2.5rem] leading-[0.6] ${glyph}`}
              >
                &ldquo;
              </span>

              <blockquote
                className={`mt-7 flex-1 text-[0.95rem] leading-relaxed ${quoteText}`}
              >
                {item.quote}
              </blockquote>

              <figcaption
                className={`mt-8 flex items-center gap-4 border-t ${rule} pt-6`}
              >
                {item.photo ? (
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Media
                      src={item.photo}
                      alt={item.name}
                      ratio="1/1"
                      className="h-full w-full"
                    />
                  </span>
                ) : (
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-semibold ${
                      invert ? "bg-accent text-ink" : "bg-brand text-paper"
                    }`}
                    aria-hidden="true"
                  >
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                )}

                <span className="flex flex-col gap-1">
                  <span className="label text-[0.68rem]">{item.name}</span>
                  <span className={`text-[0.8rem] leading-snug ${muted}`}>
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      {/* ---- controls: only once there is more than one screenful ---- */}
      {pages > 1 && (
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className={`label text-[0.66rem] ${muted}`}>
              {String(page + 1).padStart(2, "0")}
              <span className="mx-1.5 opacity-40">/</span>
              {String(pages).padStart(2, "0")}
            </span>

            <span className="flex items-center gap-1.5">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonials page ${i + 1}`}
                  aria-current={i === page}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === page
                      ? `w-8 ${invert ? "bg-accent" : "bg-brand"}`
                      : `w-3 ${
                          invert
                            ? "bg-white/25 hover:bg-white/50"
                            : "bg-ink-30 hover:bg-ink-50"
                        }`
                  }`}
                />
              ))}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <CarouselButton
              label="Previous testimonials"
              onClick={prev}
              className={control}
              direction="left"
            />
            <CarouselButton
              label="Next testimonials"
              onClick={next}
              className={control}
              direction="right"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  className,
  direction,
}: {
  label: string;
  onClick: () => void;
  className: string;
  direction: "left" | "right";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={`h-3.5 w-3.5 ${direction === "left" ? "rotate-180" : ""}`}
      >
        <path
          d="M1 8h13M9 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
