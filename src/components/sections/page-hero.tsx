import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";

/**
 * Page hero. Text-only by default; pass `image` and the hero splits into a
 * copy column beside a banner, with the heading moving into the column rather
 * than running the full width — a full-bleed heading above a half-width
 * banner leaves a hole where the copy should be.
 */
export function PageHero({
  eyebrow,
  headingLines,
  mutedCount,
  body,
  ctas,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  headingLines: readonly string[];
  mutedCount?: number;
  body: string;
  ctas?: readonly {
    label: string;
    href: string;
    variant: "primary" | "ghost";
  }[];
  /** optional banner alongside the copy */
  image?: string;
  imageAlt?: string;
}) {
  const buttons = ctas ? (
    <div className="flex flex-wrap gap-3">
      {ctas.map((cta) => (
        <Button
          key={cta.label}
          href={cta.href}
          variant={cta.variant === "primary" ? "primary" : "ghost"}
        >
          {cta.label}
        </Button>
      ))}
    </div>
  ) : null;

  if (!image) {
    return (
      <section className="border-b border-line bg-paper">
        <div className="shell">
          <div className="shell-inner pb-16 pt-16 md:pb-20 md:pt-24">
            <Reveal>
              <Eyebrow className="mb-8">{eyebrow}</Eyebrow>
            </Reveal>
            <HeadingLines
              as="h1"
              lines={headingLines}
              mutedCount={mutedCount}
              size="d2"
              className="max-w-[20ch]"
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <Reveal delay={140} className="lg:col-span-7">
                <p className="lede max-w-2xl">{body}</p>
              </Reveal>
              {buttons ? (
                <Reveal
                  delay={200}
                  className="lg:col-span-5 lg:justify-self-end"
                >
                  {buttons}
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-line bg-paper">
      <div className="shell">
        <div className="shell-inner pb-16 pt-14 md:pb-20 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* copy */}
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
              </Reveal>
              <HeadingLines
                as="h1"
                lines={headingLines}
                mutedCount={mutedCount}
                size="d3"
                className="max-w-[16ch]"
              />
              <Reveal delay={140}>
                <p className="lede mt-7 max-w-xl">{body}</p>
              </Reveal>
              {buttons ? (
                <Reveal delay={200}>
                  <div className="mt-9">{buttons}</div>
                </Reveal>
              ) : null}
            </div>

            {/* banner */}
            <Reveal delay={220} className="lg:col-span-6">
              <div className="relative">
                {/* soft lime block, offset behind the frame */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-2xl bg-brand-soft"
                />
                {/* lime corner rule, offset the other way */}
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-brand"
                />
                <Media
                  src={image}
                  alt={imageAlt}
                  ratio="4/3"
                  className="relative rounded-2xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
