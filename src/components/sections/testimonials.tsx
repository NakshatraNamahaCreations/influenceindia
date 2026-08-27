import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

/**
 * Stacked testimonial rows: portrait plus name/role in a narrow left column,
 * the quote running wide on the right — the reference's layout.
 */
export function Testimonials({
  items,
  tone = "default",
}: {
  items: readonly { quote: string; name: string; role: string; photo?: string }[];
  tone?: "default" | "invert";
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/50" : "text-ink-50";
  const quote = tone === "invert" ? "text-paper/85" : "text-ink-90";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => (
        <Reveal
          key={item.name}
          delay={i * 70}
          className={`grid gap-8 border-b ${border} py-12 md:grid-cols-12 md:gap-16 md:py-16`}
        >
          <figcaption className="flex flex-col gap-4 md:col-span-3">
            <div className="w-[7.5rem]">
              <Media
                src={item.photo}
                alt={item.photo ? item.name : ""}
                label="Portrait"
                ratio="4/5"
                tone={tone === "invert" ? "dark" : "light"}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="label">{item.name}</span>
              <span className={`label text-[0.65rem] leading-relaxed ${muted}`}>{item.role}</span>
            </div>
          </figcaption>

          <blockquote className={`text-[1.05rem] leading-relaxed md:col-span-8 md:col-start-5 ${quote}`}>
            {item.quote}
          </blockquote>
        </Reveal>
      ))}
    </div>
  );
}
