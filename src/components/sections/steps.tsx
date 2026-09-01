import { Reveal } from "@/components/ui/reveal";

/**
 * Application process — a four-stop track.
 *
 * On desktop the stops sit on a single rule that a lime line draws across as
 * the section arrives; below that they stack as a plain numbered grid, since a
 * connector that snakes between wrapped columns reads as noise rather than
 * progress.
 */
export function Steps({
  steps,
  tone = "default",
}: {
  steps: readonly { step: string; title: string; body: string }[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const accent = invert ? "text-accent" : "text-brand";
  const muted = invert ? "text-paper/75" : "text-ink-70";
  const track = invert ? "bg-white/15" : "bg-line";
  const fill = invert ? "bg-accent" : "bg-brand";
  const node = invert
    ? "border-white/25 bg-ink text-paper group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
    : "border-line bg-paper text-ink group-hover:border-brand group-hover:bg-brand group-hover:text-paper";

  return (
    <Reveal mode="trigger">
      <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* the rule the stops sit on — desktop only */}
        <span
          aria-hidden="true"
          className={`absolute left-6 right-6 top-6 hidden h-px lg:block ${track}`}
        >
          <span className={`draw-x block h-px w-full ${fill}`} />
        </span>

        {steps.map((item, i) => (
          <Reveal as="li" key={item.step} delay={i * 110} className="group">
            <span
              aria-hidden="true"
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500 ${node}`}
            >
              <span className="display text-[0.95rem] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>

            <span className={`label mt-7 block text-[0.62rem] ${accent}`}>
              {item.step}
            </span>

            <h3 className="display mt-3 text-[clamp(1rem,1.05vw,1.2rem)] leading-snug">
              {item.title}
            </h3>

            <p className={`mt-4 text-[0.88rem] leading-relaxed ${muted}`}>
              {item.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </Reveal>
  );
}
