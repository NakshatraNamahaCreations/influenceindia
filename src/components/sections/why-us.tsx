import { Reveal } from "@/components/ui/reveal";

export function WhyUsList({
  items,
  tone = "default",
}: {
  items: readonly { title: string; body: string }[];
  tone?: "default" | "invert";
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/65" : "text-ink-70";
  const index = tone === "invert" ? "text-paper/30" : "text-ink-30";

  return (
    <ul className={`border-t ${border}`}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={i * 70}
          className={`border-b ${border}`}
        >
          <div className="group grid gap-4 py-8 transition-colors duration-500 md:grid-cols-12 md:items-baseline md:gap-8">
            <span className={`label ${index} md:col-span-1`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="display d5 transition-colors duration-500 group-hover:text-brand md:col-span-5">
              {item.title}
            </h3>
            <p
              className={`text-[0.95rem] leading-relaxed ${muted} md:col-span-6`}
            >
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
