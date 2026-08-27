import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";
import {
  commitment,
  footprints,
  gtpHero,
  gtpIntro,
  safeEnvironment,
  smartStaffing,
} from "@/content/gtp";

export const metadata: Metadata = {
  title: "GTP — Grow Together Policy",
  description:
    "Sustainable staffing is not just a service we provide, but a responsibility we embrace. The Grow Together Policy and our 21 footprints.",
};

export default function GtpPage() {
  return (
    <>
      <PageHero {...gtpHero} />

      {/* everything after the hero scrolls over it — the pinned-hero stack */}
      <div className="scroll-stack">
        {/* ---------- intro ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal>
                  <div className="border-l-2 border-brand pl-7">
                    <p className="display d5">
                      A sustainable staffing company is not just a service we
                      provide, but a responsibility we embrace.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={140}>
                  <div className="mt-10">
                    <Media src="/images/gtp-community.jpg" alt="Grow together" ratio="4/3" />
                  </div>
                </Reveal>
              </div>

              <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7">
                {gtpIntro.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={100 + i * 80}>
                    <p className="lede">{p}</p>
                  </Reveal>
                ))}
                <Reveal delay={340}>
                  <p className="display d6 mt-4 border-t border-line pt-7 text-brand">
                    {commitment}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- footprints ---------- */}
        <section className="invert-section">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-6">
                  <Reveal>
                    <Eyebrow tone="invert" className="mb-7">
                      Footprints
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={["Twenty-one footprints", "we are leaving behind"]}
                    mutedCount={1}
                    size="d2"
                    tone="invert"
                  />
                </div>
                <Reveal
                  delay={140}
                  className="lg:col-span-5 lg:col-start-8 lg:pt-3"
                >
                  <p className="lede">
                    Every commitment below is measurable, published, and
                    reviewed — the operating conscience of the Grow Together
                    Policy.
                  </p>
                </Reveal>
              </div>

              <ul className="mt-14 grid gap-px border-t border-line-invert bg-line-invert md:grid-cols-2 lg:grid-cols-3">
                {footprints.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={(i % 3) * 60}
                    className="group bg-ink p-7"
                  >
                    <span className="label text-paper/30 transition-colors duration-500 group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/75">
                      {item}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- safe environment ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-6">
                <Reveal>
                  <Eyebrow className="mb-7">{safeEnvironment.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={[safeEnvironment.heading]}
                  size="d2"
                  className="max-w-[16ch]"
                />
              </div>
              <div className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8 lg:pt-3">
                {safeEnvironment.paragraphs.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={140 + i * 80}>
                    <p className="lede">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-14 grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {safeEnvironment.pillars.map((pillar, i) => (
                <Reveal
                  key={pillar.index}
                  delay={i * 80}
                  className="bg-paper p-8"
                >
                  <span className="label text-ink-30">{pillar.index}</span>
                  <h3 className="display d6 mt-5">{pillar.title}</h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-70">
                    {pillar.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- smart staffing ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-5">
                  <HeadingLines lines={[smartStaffing.heading]} size="d2" />
                  <Reveal delay={120}>
                    <div className="mt-10">
                      <Media
                        src="/images/gtp-analytics.jpg"
                        alt="Real-time analytics"
                        ratio="16/10"
                      />
                    </div>
                  </Reveal>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <ul className="border-t border-line">
                    {smartStaffing.points.map((point, i) => (
                      <Reveal
                        as="li"
                        key={point}
                        delay={i * 80}
                        className="border-b border-line"
                      >
                        <div className="flex items-start gap-5 py-7">
                          <span className="label text-ink-30">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="display d6">{point}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
