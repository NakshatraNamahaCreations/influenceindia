import Link from "next/link";

import { ArrowIcon } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export type BenefitIcon =
  | "pay"
  | "inclusion"
  | "wellness"
  | "recognition"
  | "growth";

/** 24px line glyphs, stroked in the inherited colour. */
const glyphs: Record<BenefitIcon, React.ReactNode> = {
  pay: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.75" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  inclusion: (
    <>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M4.5 19.5c1.5-3.1 4.2-4.65 7.5-4.65s6 1.55 7.5 4.65" />
    </>
  ),
  wellness: (
    <path d="M12 20s-7-4.1-7-9a3.9 3.9 0 0 1 7-2.6A3.9 3.9 0 0 1 19 11c0 4.9-7 9-7 9z" />
  ),
  recognition: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.4 7.6 21l4.4-2.5L16.4 21 15 13.4" />
    </>
  ),
  growth: (
    <>
      <path d="M3.5 16.5l5-5 3.5 2.75 6.5-6.75" />
      <path d="M14.5 7.5h4.5V12" />
    </>
  ),
};

/**
 * Benefit tiles — an icon, the benefit, and its detail, laid out as a grid
 * that a call-to-action tile closes off.
 *
 * Each tile inverts to charcoal on hover, so the grid reads as one system
 * rather than five outlined boxes. The icon comes from the content entry
 * rather than the render order, so reordering or inserting a benefit cannot
 * silently hand it the wrong glyph.
 */
export function BenefitCards({
  items,
  cta,
}: {
  items: readonly {
    index: string;
    title: string;
    body: string;
    icon?: BenefitIcon;
  }[];
  cta?: { label: string; href: string; body: string };
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.index} delay={(i % 3) * 90}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line-soft bg-paper p-7 transition-colors duration-500 hover:border-ink hover:bg-ink">
            <span
              aria-hidden="true"
              className="label absolute right-6 top-6 text-[0.6rem] text-ink-30 transition-colors duration-500 group-hover:text-accent"
            >
              {item.index}
            </span>

            <span
              aria-hidden="true"
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-colors duration-500 group-hover:bg-accent group-hover:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                {glyphs[item.icon ?? "recognition"]}
              </svg>
            </span>

            <h3 className="display mt-8 max-w-[15ch] text-[clamp(0.98rem,1.02vw,1.18rem)] leading-snug transition-colors duration-500 group-hover:text-paper">
              {item.title}
            </h3>

            <p className="mt-3.5 text-[0.88rem] leading-relaxed text-ink-70 transition-colors duration-500 group-hover:text-paper/80">
              {item.body}
            </p>
          </article>
        </Reveal>
      ))}

      {cta ? (
        <Reveal as="li" delay={(items.length % 3) * 90}>
          <Link
            href={cta.href}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-7 text-paper transition-colors duration-500 hover:bg-brand"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_100%_0%,rgba(192,214,78,0.22),transparent_60%)] transition-opacity duration-500 group-hover:opacity-0"
            />

            <p className="relative text-[0.88rem] leading-relaxed text-paper/85 transition-colors duration-500 group-hover:text-paper/92">
              {cta.body}
            </p>

            <span className="relative mt-10 inline-flex items-center gap-3">
              <span className="display text-[clamp(1rem,1.05vw,1.2rem)] leading-snug">
                {cta.label}
              </span>
              <ArrowIcon className="text-accent transition-colors duration-500 group-hover:text-paper" />
            </span>
          </Link>
        </Reveal>
      ) : null}
    </ul>
  );
}
