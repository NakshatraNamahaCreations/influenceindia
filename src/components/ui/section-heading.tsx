import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/** Two-column section intro: heading left, supporting copy + CTA right. */
export function SectionHeading({
  eyebrow,
  lines,
  mutedCount,
  body,
  cta,
  tone = "default",
  size = "d2",
  className = "",
}: {
  eyebrow?: string;
  lines: readonly string[];
  mutedCount?: number;
  body?: readonly string[];
  cta?: { label: string; href: string };
  tone?: "default" | "invert";
  size?: "d1" | "d2" | "d3" | "d4";
  className?: string;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-12 lg:gap-16 ${className}`}>
      <div className="sticky-head lg:col-span-7">
        {eyebrow ? (
          <Reveal>
            <Eyebrow
              tone={tone === "invert" ? "invert" : "default"}
              className="mb-7"
            >
              {eyebrow}
            </Eyebrow>
          </Reveal>
        ) : null}
        <HeadingLines
          lines={lines}
          mutedCount={mutedCount}
          size={size}
          tone={tone}
        />
      </div>

      {body || cta ? (
        <div className="flex flex-col gap-7 lg:col-span-5 lg:pt-3">
          {body?.map((p, i) => (
            <Reveal key={p.slice(0, 24)} delay={120 + i * 70}>
              <p className="lede">{p}</p>
            </Reveal>
          ))}
          {cta ? (
            <Reveal delay={240}>
              <Button
                href={cta.href}
                variant={tone === "invert" ? "invert-ghost" : "ghost"}
                className="w-fit"
              >
                {cta.label}
              </Button>
            </Reveal>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
