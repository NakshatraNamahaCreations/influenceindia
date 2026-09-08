import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { clientLogos } from "@/content/clients";

/**
 * The client logo strip: two rows travelling in opposite directions, running
 * on their own without a control to press. It is the same CSS marquee the
 * ticker uses — no JavaScript, no timers, and it stops for anyone who prefers
 * reduced motion. Hovering a row pauses it so a logo can be read.
 *
 * Each logo sits in a fixed cell and is contained, not cropped, so wordmarks
 * and square marks line up on one baseline whatever shape they arrive in.
 */
function Row({
  logos,
  duration,
  reverse = false,
}: {
  logos: readonly string[];
  duration: number;
  reverse?: boolean;
}) {
  // doubled so the track can loop seamlessly at -50%
  const doubled = [...logos, ...logos];

  return (
    <div className="mask-fade-x overflow-hidden">
      <div
        className={`marquee-track items-center ${reverse ? "marquee-reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            aria-hidden={i >= logos.length}
            className="group flex h-[4.5rem] w-[9rem] shrink-0 items-center justify-center px-4 sm:h-[5.5rem] sm:w-[11rem] sm:px-6"
          >
            <Image
              src={src}
              alt=""
              width={220}
              height={110}
              sizes="11rem"
              className="max-h-[2.75rem] w-auto max-w-full object-contain opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[3.25rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  const half = Math.ceil(clientLogos.length / 2);
  const topRow = clientLogos.slice(0, half);
  const bottomRow = clientLogos.slice(half);

  return (
    <section className="border-y border-line bg-surface">
      <div className="shell">
        <div className="shell-inner py-[clamp(3rem,5vw,4.5rem)]">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
              <Eyebrow>Trusted by</Eyebrow>
              <p className="label text-ink-30">
                {clientLogos.length} organisations and counting
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* full-bleed: the rows run edge to edge, not inside the shell */}
      <div className="flex flex-col gap-3 pb-[clamp(3rem,5vw,4.5rem)] sm:gap-5">
        <Row logos={topRow} duration={62} />
        <Row logos={bottomRow} duration={74} reverse />
      </div>
    </section>
  );
}
