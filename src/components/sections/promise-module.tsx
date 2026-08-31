import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

/**
 * The reference site's signature scroll module: the left column (the oversized
 * two-tone heading) pins to the top while the right column — copy, CTA, then
 * the stats stacked one per row — scrolls past it.
 */
export function PromiseModule({
  headingLines,
  mutedCount,
  body,
  cta,
  statsIntro,
  stats,
}: {
  headingLines: readonly string[];
  mutedCount: number;
  body: readonly string[];
  cta: { label: string; href: string };
  statsIntro: string;
  stats: readonly { value: number; suffix?: string; label: string }[];
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* ---- pinned column ---- */}
      <div className="lg:sticky lg:top-36 lg:col-span-6 lg:self-start">
        <HeadingLines lines={headingLines} mutedCount={mutedCount} size="d2" />
      </div>

      {/* ---- scrolling column ---- */}
      <div className="flex flex-col lg:col-span-5 lg:col-start-8">
        <div className="flex flex-col gap-6">
          {body.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 20)} delay={i * 80}>
              <p className="lede">{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <Button href={cta.href} variant="ghost" className="mt-2 w-fit">
              {cta.label}
            </Button>
          </Reveal>
        </div>

        <div className="mt-24 lg:mt-40">
          <Reveal>
            <p className="label border-b border-line pb-5 text-ink-50">{statsIntro}</p>
          </Reveal>

          <dl>
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 60}
                className="flex flex-col-reverse justify-end gap-3 border-b border-line py-12 lg:py-20"
              >
                <dt className="text-[0.95rem] text-ink-70">{stat.label}</dt>
                <dd className="display d2 leading-none">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
