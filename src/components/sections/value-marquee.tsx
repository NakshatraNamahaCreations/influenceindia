/**
 * The commitments as two counter-running belts.
 *
 * Pure CSS: each belt holds its half of the list twice and slides by exactly
 * 50%, so the loop is seamless with no JS and no measurement. The belts run
 * edge to edge with no mask, so cards stay at full contrast on both sides.
 * Hovering pauses the belt under the cursor (`.marquee-track:hover`), and the
 * whole animation
 * is off under reduced motion, where it degrades to a horizontally scrollable
 * row rather than a frozen one.
 */
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
            className={`marquee-track gap-4 ${row.reverse ? "marquee-reverse" : ""}`}
            style={{ ["--marquee-duration" as string]: `${duration}s` }}
          >
            {[...row.entries, ...row.entries].map((point, i) => {
              const index = row.offset + (i % row.entries.length) + 1;
              return (
                <article
                  key={`${point}-${i}`}
                  aria-hidden={i >= row.entries.length}
                  className="group flex w-[17rem] shrink-0 flex-col gap-4 rounded-2xl border border-line-soft bg-paper p-6 transition-colors duration-500 hover:border-brand/45 hover:bg-brand-soft/50 md:w-[20rem]"
                >
                  <span className="label text-[0.6rem] text-ink-30 transition-colors duration-500 group-hover:text-brand">
                    {String(index).padStart(2, "0")}
                  </span>
                  <p className="display text-[clamp(0.95rem,1vw,1.12rem)] leading-snug transition-colors duration-500 group-hover:text-brand">
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
