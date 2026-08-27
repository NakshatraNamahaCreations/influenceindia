import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

/**
 * Full-bleed video band — the reference uses these as breathing room between
 * dense sections (its aerial ship shot). Muted, looping, poster-backed.
 */
export function VideoBand({
  video,
  poster,
  eyebrow,
  headingLines,
  mutedCount = 1,
  caption,
  height = "clamp(22rem,58vh,36rem)",
}: {
  video: string;
  poster?: string;
  eyebrow?: string;
  headingLines?: readonly string[];
  mutedCount?: number;
  caption?: string;
  height?: string;
}) {
  return (
    <section className="invert-section relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="none"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
      </div>

      <div className="shell">
        <div
          className="shell-inner flex flex-col justify-end py-14"
          style={{ minHeight: height }}
        >
          {eyebrow ? (
            <Reveal>
              <Eyebrow tone="invert" className="mb-6">
                {eyebrow}
              </Eyebrow>
            </Reveal>
          ) : null}

          {headingLines ? (
            <HeadingLines
              lines={headingLines}
              mutedCount={mutedCount}
              size="d3"
              tone="invert"
              className="max-w-[18ch]"
            />
          ) : null}

          {caption ? (
            <Reveal delay={140}>
              <p className="lede mt-6 max-w-xl">{caption}</p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
