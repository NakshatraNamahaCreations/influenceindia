import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

/**
 * Hairline-divided stat row. Uses a 1px gap over a line-coloured background so
 * the dividers stay perfect no matter how many columns wrap.
 */
export function StatBand({
  intro,
  stats,
  tone = "default",
  surface = "bg-paper",
}: {
  intro?: string;
  stats: readonly { value: number; suffix?: string; label: string }[];
  tone?: "default" | "invert";
  surface?: string;
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/50" : "text-ink-50";
  const divider = tone === "invert" ? "bg-line-invert" : "bg-line";
  const cell = tone === "invert" ? "bg-ink" : surface;

  const cols =
    stats.length >= 5
      ? "lg:grid-cols-5"
      : stats.length === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <div className={`border-t ${border}`}>
      {intro ? (
        <Reveal>
          <p className={`label py-6 ${muted}`}>{intro}</p>
        </Reveal>
      ) : null}

      {/* negative margin keeps the first cell's text flush with the section edge
          while the 1px gaps read as hairline dividers */}
      <dl className={`-mx-6 grid gap-px ${divider} sm:grid-cols-2 ${cols}`}>
        {/* column-reverse keeps dt-before-dd valid while showing the figure first */}
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className={`flex flex-col-reverse justify-end gap-2 px-6 py-9 ${cell}`}
          >
            <dt className={`label ${muted}`}>{stat.label}</dt>
            <dd className="display d3 leading-none">
              <Counter value={stat.value} suffix={stat.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  );
}
