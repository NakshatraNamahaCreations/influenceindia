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
}: {
  lines: readonly string[];
  className?: string;
  start?: number;
  step?: number;
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
      {rows.map(({ line, words, offset }) => (
        <span key={line} className="hero-line">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="hero-word"
              style={{
                ["--hero-delay" as string]: `${start + (offset + i) * step}ms`,
              }}
            >
              {i === words.length - 1 ? word : `${word} `}
            </span>
          ))}
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
