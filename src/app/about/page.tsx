import { VideoBand } from "@/components/sections/video-band";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { StatBand } from "@/components/sections/stat-band";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import {
  aboutHero,
  aims,
  footprint,
  infinity,
  mission,
  valuePoints,
} from "@/content/about";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Creating good work opportunities for Indian youth — leading the transition towards a sustainable workspace in India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutHero} />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- mission ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">{mission.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines lines={[mission.heading]} size="d3" />
                <Reveal delay={140}>
                  <div className="mt-10">
                    <Media src="/images/about-onboarding.jpg" alt="Corporate onboarding" ratio="3/2" />
                  </div>
                </Reveal>
              </div>

              <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-2">
                {mission.paragraphs.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={120 + i * 80}>
                    <p className="lede">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <StatBand intro="Our aim" stats={aims} />
            </div>
          </div>
        </section>

        {/* ---------- what we stand for ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="sticky-head lg:col-span-6">
                  <Reveal>
                    <Eyebrow className="mb-7">What we stand for</Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={["Twelve commitments", "behind every placement"]}
                    mutedCount={1}
                    size="d2"
                  />
                </div>
              </div>

              <ul className="mt-14 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {valuePoints.map((point, i) => (
                  <Reveal
                    as="li"
                    key={point}
                    delay={(i % 3) * 70}
                    className="group bg-surface p-8"
                  >
                    <span className="label text-ink-30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="display d6 mt-5 transition-colors duration-500 group-hover:text-brand">
                      {point}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- inspired by infinity ---------- */}
        <section className="invert-section relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute right-[-12%] top-[-30%] h-[36rem] w-[36rem] rounded-full bg-brand opacity-30 blur-[140px]" />
          </div>
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-6">
                  <Reveal>
                    <Eyebrow tone="invert" className="mb-7">
                      {infinity.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines lines={[infinity.heading]} size="d2" />
                  <Reveal delay={160}>
                    <p
                      className="display mt-12 text-[clamp(6rem,14vw,13rem)] leading-none text-accent"
                      aria-hidden="true"
                    >
                      &infin;
                    </p>
                  </Reveal>
                </div>
                <div className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8 lg:pt-3">
                  {infinity.paragraphs.map((p, i) => (
                    <Reveal key={p.slice(0, 20)} delay={140 + i * 80}>
                      <p className="lede">{p}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- video band ---------- */}
        <VideoBand
          video="/videos/city-band.mp4"
          poster="/images/city-band-poster.jpg"
          eyebrow="Across India"
          headingLines={["From Bengaluru", "to every corridor"]}
          caption="Thirty-plus cities, one accountable operating team."
        />

        {/* ---------- footprint ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-7">
                <Reveal>
                  <Eyebrow className="mb-7">{footprint.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={[footprint.heading]}
                  size="d3"
                  className="max-w-[18ch]"
                />
                <Reveal delay={140}>
                  <p className="lede mt-8 max-w-2xl">{footprint.body}</p>
                </Reveal>
              </div>

              <div className="flex flex-col gap-10 lg:col-span-5">
                <Reveal delay={120}>
                  <div className="border-t border-line pt-7">
                    <p className="label text-ink-50">{footprint.now.label}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {footprint.now.cities.map((city) => (
                        <li
                          key={city}
                          className="rounded-[var(--radius-pill)] bg-ink px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-paper"
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="border-t border-line pt-7">
                    <p className="label text-ink-50">{footprint.next.label}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {footprint.next.cities.map((city) => (
                        <li
                          key={city}
                          className="rounded-[var(--radius-pill)] border border-line px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-70 transition-colors duration-300 hover:border-ink hover:text-ink"
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={260}>
                  <Media src="/images/bengaluru-city.jpg" alt="Bengaluru city" ratio="21/9" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
