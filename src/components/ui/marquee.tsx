export function Marquee({
  items,
  duration = 45,
  reverse = false,
  className = "",
  itemClassName = "",
}: {
  items: readonly string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center whitespace-nowrap ${itemClassName}`}
            aria-hidden={i >= items.length}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
