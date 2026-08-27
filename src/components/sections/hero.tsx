import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

export function Hero({
  eyebrow,
  headingLines,
  mutedCount,
  body,
  ctas,
  video,
  poster,
}: {
  eyebrow: string;
  headingLines: readonly string[];
  mutedCount?: number;
  body: string;
  /** optional background video with poster frame */
  video?: string;
  poster?: string;
  ctas: readonly {
    label: string;
    href: string;
    variant: "primary" | "ghost";
  }[];
}) {
  return (
    <section className="hero-pin invert-section relative isolate overflow-hidden">
      {/* backdrop: background video when supplied, else grid + glow */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {video ? (
          <>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              preload="metadata"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.7) 1px, transparent 1px)",
                backgroundSize: "clamp(3rem, 6vw, 6rem) clamp(3rem, 6vw, 6rem)",
              }}
            />
            <div className="absolute -right-[10%] top-[-20%] h-[42rem] w-[42rem] rounded-full bg-brand opacity-40 blur-[140px]" />
            <div className="absolute -left-[15%] bottom-[-30%] h-[36rem] w-[36rem] rounded-full bg-accent opacity-[0.18] blur-[150px]" />
          </>
        )}
      </div>

      <div className="shell">
        <div className="shell-inner flex min-h-[clamp(34rem,78vh,48rem)] flex-col justify-end pt-24 pb-14 md:pt-32 md:pb-20">
          <Reveal>
            <Eyebrow tone="invert" className="mb-9">
              {eyebrow}
            </Eyebrow>
          </Reveal>

          <HeadingLines
            as="h1"
            lines={headingLines}
            mutedCount={mutedCount}
            size="d1"
            tone="invert"
            className="max-w-[18ch]"
          />

          <div className="mt-12 grid gap-9 border-t border-line-invert pt-9 lg:grid-cols-12 lg:items-end">
            <Reveal delay={160} className="lg:col-span-6">
              <p className="lede max-w-2xl">{body}</p>
            </Reveal>
            <Reveal delay={240} className="lg:col-span-6 lg:justify-self-end">
              <div className="flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href + cta.label}
                    href={cta.href}
                    variant={
                      cta.variant === "primary" ? "invert" : "invert-ghost"
                    }
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
