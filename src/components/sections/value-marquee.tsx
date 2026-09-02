/**
 * The commitments as two counter-running belts.
 *
 * Cards cycle through three tints — paper, lime and charcoal — so a long belt
 * of equal-length statements reads as rhythm rather than as identical boxes.
 *
 * Pure CSS: each belt holds its half of the list twice and slides by exactly
 * 50%, so the loop is seamless with no JS and no measurement. The belts run
 * edge to edge with no mask, so cards stay at full contrast on both sides.
 * Hovering pauses the belt under the cursor (`.marquee-track:hover`), and the
 * whole animation
 * is off under reduced motion, where it degrades to a horizontally scrollable
 * row rather than a frozen one.
 */
const skins = [
  {
    card: "border-line-soft bg-paper hover:border-brand hover:bg-brand-soft",
    chip: "bg-brand-soft text-brand",
    text: "text-ink",
  },
  {
    card: "border-brand/30 bg-brand-soft hover:border-brand hover:bg-brand",
    chip: "bg-brand text-paper",
    text: "text-brand group-hover:text-paper",
  },
  {
    card: "border-ink bg-ink hover:border-accent hover:bg-accent",
    chip: "bg-accent text-ink",
    text: "text-paper group-hover:text-ink",
  },
] as const;

export function ValueMarquee({
  items,
  duration = 60,
}: {
  items: readonly string[];
  duration?: number;
}) {
  const half = Math.ceil(items.length / 2);
  const rows = [
    { entries: items.slice(0, half), offset: 0, reverse: false },
    { entries: items.slice(half), offset: half, reverse: true },
  ];

  return (
    <div className="flex flex-col gap-4">
      {rows.map((row) => (
        <div
          key={row.offset}
          className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className={`marquee-track gap-4 py-1 ${row.reverse ? "marquee-reverse" : ""}`}
            style={{ ["--marquee-duration" as string]: `${duration}s` }}
          >
            {[...row.entries, ...row.entries].map((point, i) => {
              const index = row.offset + (i % row.entries.length);
              const skin = skins[index % skins.length];
              return (
                <article
                  key={`${point}-${i}`}
                  aria-hidden={i >= row.entries.length}
                  className={`group flex w-[17rem] shrink-0 items-start gap-4 rounded-2xl border p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(47,43,44,0.5)] md:w-[20rem] ${skin.card}`}
                >
                  <span
                    aria-hidden="true"
                    className={`label flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.6rem] ${skin.chip}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`display pt-1.5 text-[clamp(0.95rem,1vw,1.12rem)] leading-snug transition-colors duration-500 ${skin.text}`}
                  >
                    {point}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
