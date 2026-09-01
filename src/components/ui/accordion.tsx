"use client";

import { useId, useState } from "react";

/**
 * FAQ accordion — one card per question.
 *
 * Each row carries its own index, and the open row lifts onto a soft brand
 * ground with a lime spine down its left edge, so the answer you are reading
 * is obvious at a glance in a long list. Questions are set in the display
 * face but in sentence case: full sentences in the site's uppercase display
 * read as shouting at this size.
 */
export function Accordion({
  items,
  invert = false,
}: {
  items: readonly { q: string; a: string }[];
  invert?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  const card = invert
    ? "border-white/12 hover:border-white/25 hover:bg-white/[0.03]"
    : "border-line-soft hover:border-line hover:bg-surface/60";
  const cardOpen = invert
    ? "border-accent/40 bg-white/[0.055]"
    : "border-brand/35 bg-brand-soft/70";
  const spine = invert ? "bg-accent" : "bg-brand";
  const question = invert ? "text-paper" : "text-ink";
  const questionHover = invert
    ? "group-hover:text-accent"
    : "group-hover:text-brand";
  const answer = invert ? "text-paper/80" : "text-ink-70";

  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;

        const index = invert
          ? isOpen
            ? "text-accent"
            : "text-paper/45"
          : isOpen
            ? "text-brand"
            : "text-ink-30";

        const toggle = isOpen
          ? invert
            ? "rotate-45 border-accent bg-accent text-ink"
            : "rotate-45 border-brand bg-brand text-paper"
          : invert
            ? "border-white/25 text-paper/85 group-hover:border-accent group-hover:text-accent"
            : "border-line text-ink-50 group-hover:border-brand group-hover:text-brand";

        return (
          <li
            key={item.q}
            className={`relative overflow-hidden rounded-2xl border transition-colors duration-500 ${
              isOpen ? cardOpen : card
            }`}
          >
            {/* lime spine on the open row */}
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 w-[3px] origin-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${spine} ${
                isOpen ? "scale-y-100" : "scale-y-0"
              }`}
            />

            <h3>
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start gap-4 px-5 py-5 text-left md:gap-6 md:px-7 md:py-6"
              >
                <span
                  aria-hidden="true"
                  className={`label mt-[0.3em] shrink-0 text-[0.62rem] transition-colors duration-300 ${index}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 font-display text-[clamp(1rem,0.95vw,1.18rem)] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300 ${question} ${questionHover}`}
                >
                  {item.q}
                </span>

                <span
                  aria-hidden="true"
                  className={`mt-[0.15em] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${toggle}`}
                >
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                    <path
                      d="M8 1.5v13M1.5 8h13"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-2xl pb-6 pl-5 pr-14 text-[0.9rem] leading-relaxed transition-opacity duration-500 md:pb-7 md:pl-[4.6rem] md:pr-16 ${answer} ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
