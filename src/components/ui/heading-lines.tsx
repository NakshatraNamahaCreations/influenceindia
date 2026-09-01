import { Reveal } from "@/components/ui/reveal";

/**
 * Multi-line uppercase display heading. Each line sits in its own overflow
 * mask and rises into place with a stagger once the heading scrolls into view —
 * the reference site's signature heading animation.
 */
export function HeadingLines({
  lines,
  emphasis,
  size = "d2",
  tone = "default",
  className = "",
  as: Tag = "h2",
  stagger = 110,
  animate = true,
  mutedCount = 0,
  accentCount = 0,
}: {
  lines: readonly string[];
  emphasis?: string;
  size?: "d1" | "d2" | "d3" | "d4";
  tone?: "default" | "invert";
  className?: string;
  as?: React.ElementType;
  /** ms between each line */
  stagger?: number;
  animate?: boolean;
  /** render the first N lines in the muted tone, the rest at full contrast */
  mutedCount?: number;
  /** render the first N lines in the brand colour */
  accentCount?: number;
}) {
  const accent = tone === "invert" ? "text-accent" : "text-brand";
  /* the logo's two colours in one line — green bleeding through the grey,
     drifting slowly so the muted lines are never flat */
  const muted =
    tone === "invert" ? "text-brand-sweep-invert" : "text-brand-sweep";

  const renderLine = (line: string) => {
    if (emphasis && line.includes(emphasis)) {
      const [before, after] = line.split(emphasis);
      return (
        <>
          {before}
          <span className={accent}>{emphasis}</span>
          {after}
        </>
      );
    }
    return line;
  };

  const shade = (i: number) =>
    i < accentCount ? accent : i < mutedCount ? muted : undefined;

  // Static: plain lines, no mask. The mask relies on `.is-visible` being applied
  // by Reveal, so rendering it without the wrapper would leave the text
  // permanently translated out of view.
  if (!animate) {
    return (
      <Tag className={`display ${size} ${className}`}>
        {lines.map((line, i) => (
          <span key={line} className={`block ${shade(i) ?? ""}`.trim()}>
            {renderLine(line)}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Reveal mode="trigger">
      <Tag className={`display ${size} ${className}`}>
        {lines.map((line, i) => (
          <span key={line} className="line-mask">
            <span
              className={shade(i)}
              style={{ ["--line-delay" as string]: `${i * stagger}ms` }}
            >
              {renderLine(line)}
            </span>
          </span>
        ))}
      </Tag>
    </Reveal>
  );
}
