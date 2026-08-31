import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

/**
 * Testimonial cards: a lime quote glyph, the quote, then a monogram (or
 * photograph, when one is supplied) with the person's name and role.
 *
 * Named testimonials deliberately fall back to a monogram rather than stock
 * faces — presenting a photograph of a real, identifiable person as an
 * employee giving a quote they never gave is a misrepresentation.
 */
export function Testimonials({
  items,
  tone = "invert",
}: {
  items: readonly { quote: string; name: string; role: string; photo?: string }[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";
  const cardBg = invert ? "bg-paper/[0.04]" : "bg-paper";
  const cardBorder = invert ? "border-line-invert" : "border-line";
  const quoteText = invert ? "text-paper/85" : "text-ink-90";
  const muted = invert ? "text-paper/50" : "text-ink-50";
  const glyph = invert ? "text-accent" : "text-brand";

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.name} delay={i * 110}>
          <figure
            className={`group flex h-full flex-col border ${cardBorder} ${cardBg} p-8 transition-colors duration-500 hover:border-brand md:p-9`}
          >
            <span
              className={`display text-[3.5rem] leading-[0.7] ${glyph}`}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              className={`mt-6 flex-1 text-[1rem] leading-relaxed ${quoteText}`}
            >
              {item.quote}
            </blockquote>

            <figcaption
              className={`mt-8 flex items-center gap-4 border-t ${cardBorder} pt-6`}
            >
              {item.photo ? (
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Media
                    src={item.photo}
                    alt={item.name}
                    ratio="1/1"
                    className="h-full w-full"
                  />
                </span>
              ) : (
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    invert ? "bg-accent text-ink" : "bg-brand text-paper"
                  } text-[0.85rem] font-semibold`}
                  aria-hidden="true"
                >
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              )}

              <span className="flex flex-col gap-1">
                <span className="label text-[0.68rem]">{item.name}</span>
                <span className={`text-[0.8rem] leading-snug ${muted}`}>
                  {item.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
