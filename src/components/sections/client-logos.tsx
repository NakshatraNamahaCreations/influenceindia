import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { clientLogos, darkCardLogos } from "@/content/clients";

/**
 * The client logo strip: two rows travelling in opposite directions, running
 * on their own without a control to press. It is the same CSS marquee the
 * ticker uses — no JavaScript, no timers, and it stops for anyone who prefers
 * reduced motion. Hovering a row pauses it so a logo can be read.
 *
 * Each logo sits on its own white card of a fixed size and is contained, not
 * cropped, so wordmarks and square marks line up whatever shape they arrive in
 * and every logo has the same clean ground behind it — several arrive with a
 * white background baked in, which would otherwise show as a pale block on the
 * section's off-white. Colours are the logo's own; hovering lifts the card.
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
        {doubled.map((src, i) => {
          // white-on-transparent artwork needs the dark ground it was drawn for
          const onDark = darkCardLogos.includes(src);

          return (
          <div
            key={`${src}-${i}`}
            aria-hidden={i >= logos.length}
            className={`group mx-1.5 flex h-[5.5rem] w-[10.5rem] shrink-0 items-center justify-center rounded-2xl border px-5 shadow-[0_1px_2px_rgba(47,43,44,0.04)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(47,43,44,0.35)] sm:mx-2.5 sm:h-[6.75rem] sm:w-[13rem] sm:px-8 ${
              onDark
                ? "border-ink bg-ink hover:border-accent"
                : "border-line-soft bg-paper hover:border-brand/40"
            }`}
          >
            <Image
              src={src}
              alt=""
              width={320}
              height={160}
              sizes="15rem"
              className="max-h-[3.25rem] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.05] sm:max-h-[4.25rem]"
            />
          </div>
          );
        })}
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
            <Eyebrow>Trusted by</Eyebrow>
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
