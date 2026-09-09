import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  HeroHeading,
  heroWordsDuration,
} from "@/components/ui/hero-heading";

export function Hero({
  eyebrow,
  headingLines,
  body,
  ctas,
  video,
  poster,
}: {
  eyebrow: string;
  headingLines: readonly string[];
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
  // when the headline's last word lands — everything after it trails this
  const settle = heroWordsDuration(headingLines) + 260;

  return (
    <section className="invert-section relative isolate overflow-hidden">
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
            {/* scrim: dark enough under the type to hold contrast, light enough
                above it that the film is not washed out */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 to-ink/25" />
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
          <div className="hero-in mb-9" style={{ ["--hero-delay" as string]: "0ms" }}>
            <Eyebrow tone="invert">{eyebrow}</Eyebrow>
          </div>

          <HeroHeading
            lines={headingLines}
            sweepLines={1}
            className="max-w-[18ch]"
          />

          {/* the copy and buttons come in once the last word has landed */}
          <div className="mt-12 grid gap-9 lg:grid-cols-12 lg:items-end">
            <div
              className="hero-in lg:col-span-6"
              style={{ ["--hero-delay" as string]: `${settle + 120}ms` }}
            >
              <p className="lede max-w-2xl">{body}</p>
            </div>
            <div
              className="hero-in lg:col-span-6 lg:justify-self-end"
              style={{ ["--hero-delay" as string]: `${settle + 220}ms` }}
            >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
