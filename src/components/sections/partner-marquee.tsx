import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

export function PartnerMarquee({
  eyebrow,
  heading,
  body,
  rows,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  rows: readonly (readonly string[])[];
  tone?: "default" | "invert";
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const chip =
    tone === "invert"
      ? "border-line-invert text-paper/75 hover:border-paper hover:text-paper"
      : "border-line text-ink-70 hover:border-ink hover:text-ink";

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow
              tone={tone === "invert" ? "invert" : "default"}
              className="mb-6"
            >
              {eyebrow}
            </Eyebrow>
          </Reveal>
          <HeadingLines
            lines={[heading]}
            size="d3"
            tone={tone === "invert" ? "invert" : "default"}
          />
        </div>
        {body ? (
          <Reveal delay={120} className="lg:col-span-5 lg:pt-2">
            <p className="lede">{body}</p>
          </Reveal>
        ) : null}
      </div>

      <div className={`flex flex-col gap-4 border-t ${border} pt-10`}>
        {rows.map((row, i) => (
          <Marquee
            key={i}
            items={row}
            duration={i % 2 === 0 ? 70 : 85}
            reverse={i % 2 === 1}
            itemClassName={`mx-2 rounded-[var(--radius-pill)] border px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-300 ${chip}`}
          />
        ))}
      </div>
    </div>
  );
}
