"use client";

import { useState } from "react";

export function Accordion({
  items,
  invert = false,
}: {
  items: readonly { q: string; a: string }[];
  invert?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const border = invert ? "border-line-invert" : "border-line";
  const muted = invert ? "text-paper/70" : "text-ink-70";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`border-b ${border}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-8 py-6 text-left md:py-8"
            >
              <span className="display d6 pr-4 transition-colors duration-300 group-hover:text-brand">
                {item.q}
              </span>
              <span
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${border} transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M8 1v14M1 8h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-3xl pb-8 text-[0.98rem] leading-relaxed ${muted}`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
