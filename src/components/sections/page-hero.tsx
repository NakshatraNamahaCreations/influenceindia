import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  headingLines,
  mutedCount,
  body,
  ctas,
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
}) {
  return (
    <section className="hero-pin border-b border-line bg-paper">
      <div className="shell">
        <div className="shell-inner pt-16 pb-16 md:pt-24 md:pb-20">
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
            {ctas ? (
              <Reveal delay={200} className="lg:col-span-5 lg:justify-self-end">
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
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
