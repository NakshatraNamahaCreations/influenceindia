import { Reveal } from "@/components/ui/reveal";

/**
 * "Why us" reasons — a numbered list sized to sit beside a sticky heading
 * rather than run the full page width, so the title and body stack instead
 * of stretching into three thin columns.
 */
export function WhyUsList({
  items,
  tone = "default",
}: {
  items: readonly { title: string; body: string }[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const border = invert ? "border-line-invert" : "border-line-soft";
  const muted = invert ? "text-paper/80" : "text-ink-70";
  const title = invert ? "text-paper" : "text-ink";
  const hover = invert ? "hover:bg-white/[0.03]" : "hover:bg-surface/70";
  const badge = invert
    ? "border-white/20 text-paper/65 group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
    : "border-line text-ink-30 group-hover:border-brand group-hover:bg-brand group-hover:text-paper";

  return (
    <ul className={`border-t ${border}`}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={i * 70}
          className={`border-b ${border}`}
        >
          <div
            className={`group -mx-4 flex gap-5 rounded-2xl px-4 py-7 transition-colors duration-500 md:gap-6 ${hover}`}
          >
            <span
              aria-hidden="true"
              className={`label mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.6rem] transition-colors duration-500 ${badge}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-2.5">
              <h3
                className={`display text-[clamp(1rem,1.05vw,1.22rem)] leading-snug transition-colors duration-500 ${title} ${
                  invert ? "group-hover:text-accent" : "group-hover:text-brand"
                }`}
              >
                {item.title}
              </h3>
              <p className={`max-w-2xl text-[0.9rem] leading-relaxed ${muted}`}>
                {item.body}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
