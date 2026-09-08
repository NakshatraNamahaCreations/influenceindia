import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/content/site";
import { drivingFuture } from "@/content/systems";

/**
 * The corporate-staffing brief, laid out on the charcoal ground so it reads as
 * one argument rather than four more sections: four numbered pillars over a
 * ghosted index, the integrated offering as a lime-ruled grid, and the closing
 * statement carrying the contact address.
 */
export function DrivingFuture() {
  return (
    <section className="invert-section relative isolate overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_100%_0%,rgba(192,214,78,0.16),transparent_60%)]"
      />

      <div className="shell">
        <div className="shell-inner section-y">
          {/* heading + opening statement */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="invert" className="mb-7">
                  {drivingFuture.eyebrow}
                </Eyebrow>
              </Reveal>
              <HeadingLines
                lines={drivingFuture.headingLines}
                mutedCount={1}
                size="d3"
                tone="invert"
              />
            </div>
            <Reveal delay={140} className="lg:col-span-5 lg:pb-2">
              <p className="lede">{drivingFuture.intro}</p>
            </Reveal>
          </div>

          {/* the four pillars */}
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {drivingFuture.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 2) * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-accent/45 hover:bg-white/[0.07] md:p-8">
                  <span
                    aria-hidden="true"
                    className="display pointer-events-none absolute -bottom-8 right-2 select-none text-[6.5rem] leading-none text-white/[0.05]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="label text-[0.6rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-5 text-[clamp(1rem,1.05vw,1.22rem)] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-3.5 max-w-xl text-[0.9rem] leading-relaxed text-paper/80">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* the integrated offering */}
          <Reveal delay={120}>
            <p className="label mt-16 flex items-center gap-4 text-accent">
              {drivingFuture.offeringHeading}
              <span aria-hidden="true" className="h-px flex-1 bg-line-invert" />
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {drivingFuture.offering.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 80}>
                <article className="group h-full border-t-2 border-accent/40 pt-6 transition-colors duration-500 hover:border-accent">
                  <h3 className="display text-[clamp(0.95rem,1vw,1.12rem)] leading-snug transition-colors duration-500 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-[0.88rem] leading-relaxed text-paper/75">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* about + closing statement */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={120} className="lg:col-span-6">
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 md:p-8">
                <h3 className="display text-[clamp(1rem,1.05vw,1.22rem)] leading-snug">
                  {drivingFuture.about.title}
                </h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-paper/80">
                  {drivingFuture.about.body}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="lg:col-span-6">
              <div className="flex h-full flex-col justify-center">
                <p className="font-display text-[clamp(1.05rem,1.4vw,1.5rem)] font-medium leading-[1.45] tracking-[-0.01em]">
                  {drivingFuture.conclusion}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href="/driving-the-future"
                    variant="invert"
                    className="w-fit"
                  >
                    Read the full brief
                  </Button>
                  <Button
                    href={`mailto:${contact.email}`}
                    variant="invert-ghost"
                    className="w-fit"
                  >
                    Write to us
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
