import { HeadingLines } from "@/components/ui/heading-lines";
import { Marquee } from "@/components/ui/marquee";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

/**
 * Full-bleed media hero used on the services page: background imagery under a
 * dark scrim, the display heading anchored bottom-left, and a mono ticker strip
 * running along the bottom edge. Pins while the page scrolls over it.
 */
export function MediaHero({
  eyebrow,
  headingLines,
  mutedCount = 1,
  src,
  video,
  imageLabel,
  ticker,
}: {
  eyebrow?: string;
  headingLines: readonly string[];
  mutedCount?: number;
  src?: string;
  /** optional background video; `src` doubles as its poster frame */
  video?: string;
  imageLabel?: string;
  ticker: readonly string[];
}) {
  return (
    <section className="invert-section relative isolate overflow-hidden">
      {/* background media + scrim */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={src}
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : src ? (
          <Media src={src} alt="" ratio="16/9" className="h-full w-full" priority />
        ) : (
          <div className="h-full w-full bg-ink">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "clamp(3rem,6vw,6rem) clamp(3rem,6vw,6rem)",
              }}
            />
            <div className="absolute -right-[12%] top-[-25%] h-[40rem] w-[40rem] rounded-full bg-brand opacity-35 blur-[150px]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/50" />
      </div>

      <div className="shell">
        <div className="shell-inner flex min-h-[clamp(28rem,66vh,42rem)] flex-col justify-end pt-20 pb-16 md:pt-28 md:pb-20">
          {eyebrow ? (
            <Reveal>
              <Eyebrow tone="invert" className="mb-8">
                {eyebrow}
              </Eyebrow>
            </Reveal>
          ) : null}
          <HeadingLines
            as="h1"
            lines={headingLines}
            mutedCount={mutedCount}
            size="d1"
            tone="invert"
            animate={false}
            className="max-w-[16ch]"
          />
          {imageLabel && !src ? (
            <p className="label mt-8 text-paper/50">{imageLabel}</p>
          ) : null}
        </div>
      </div>

      {/* bottom ticker strip */}
      <div className="border-t border-line-invert bg-ink/60 backdrop-blur-sm">
        <div className="flex h-10 items-center">
          <Marquee
            items={ticker}
            duration={60}
            className="flex-1"
            itemClassName="label px-6 text-[0.62rem] text-paper/75 before:mr-6 before:text-accent before:content-['·']"
          />
        </div>
      </div>
    </section>
  );
}
