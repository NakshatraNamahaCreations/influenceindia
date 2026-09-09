/**
 * The home hero's headline. The rest of the site reveals on scroll, but the
 * hero is already on screen when the page loads, so it plays on load instead:
 * each word rises out of its own mask, a beat behind the one before it.
 *
 * Word-level rather than line-level, because the hero's lines are long enough
 * that a whole line arriving at once reads as a slab; word by word, the line
 * assembles in front of the reader.
 */
export function HeroHeading({
  lines,
  className = "",
  /** ms before the first word moves */
  start = 120,
  /** ms between one word and the next */
  step = 65,
  sweepLines = 0,
}: {
  lines: readonly string[];
  className?: string;
  start?: number;
  step?: number;
  /** render the first N lines in the drifting lime-through-white blend */
  sweepLines?: number;
}) {
  /* each line's delay offset is the number of words before it */
  const rows = lines.map((line, li) => ({
    line,
    words: line.split(" "),
    offset: lines
      .slice(0, li)
      .reduce((n, previous) => n + previous.split(" ").length, 0),
  }));

  return (
    <h1 className={`display d1 ${className}`}>
      {rows.map(({ line, words, offset }, li) => (
        <span key={line} className="hero-line">
          {words.map((word, i) => {
            const text = i === words.length - 1 ? word : `${word} `;
            return (
              /* the mask animation lives on the outer span and the blend on an
                 inner one: both are `animation`, and one element cannot carry
                 the two */
              <span
                key={`${word}-${i}`}
                className="hero-word"
                style={{
                  ["--hero-delay" as string]: `${start + (offset + i) * step}ms`,
                }}
              >
                {li < sweepLines ? (
                  <span className="text-brand-sweep-invert">{text}</span>
                ) : (
                  text
                )}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/** The delay the last word of `lines` lands on — so what follows can trail it. */
export function heroWordsDuration(
  lines: readonly string[],
  start = 120,
  step = 65,
) {
  const words = lines.reduce((n, line) => n + line.split(" ").length, 0);
  return start + (words - 1) * step;
}
