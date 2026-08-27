import Link from "next/link";

import { CtaCursorCircle } from "@/components/sections/cta-cursor-circle";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

/**
 * Closing call to action, matching the reference: a compact black band with
 * faint concentric rings, a centred display heading, a small flat orange circle
 * button sitting to the right of the heading's first line, and tight centred
 * support copy beneath.
 */
export function CtaBand({
  heading,
  headingLines,
  body,
  ctas,
}: {
  heading?: string;
  headingLines?: readonly string[];
  body: string;
  ctas: readonly { label: string; href: string; variant: "primary" | "ghost" }[];
}) {
  const lines = headingLines ?? (heading ? [heading] : []);
  const [primary, ...rest] = ctas;

  return (
    <section className="invert-section relative isolate overflow-hidden">
      {/* faint concentric rings — no glow, just hairlines on black */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((ring) => (
          <span
            key={ring}
            className="absolute rounded-full border border-paper/[0.055]"
            style={{ width: `${26 + ring * 15}rem`, height: `${26 + ring * 15}rem` }}
          />
        ))}
      </div>

      <div className="shell">
        <div className="shell-inner flex flex-col items-center py-[clamp(4rem,7vw,7.5rem)] text-center">
          <div className="relative inline-block">
            <HeadingLines lines={lines} size="d2" tone="invert" className="text-center" />

            {primary ? (
              <Reveal
                delay={260}
                className="mt-8 flex justify-center md:absolute md:top-1 md:left-full md:mt-0 md:ml-8 lg:ml-12"
              >
                <CtaCursorCircle href={primary.href} label={primary.label} />
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={140}>
            <p className="mx-auto mt-8 max-w-[21rem] text-[0.92rem] leading-relaxed text-paper/60">
              {body}
            </p>
          </Reveal>

          {rest.length ? (
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-2">
                {rest.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className="label text-paper/50 underline underline-offset-4 transition-colors duration-300 hover:text-paper"
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
