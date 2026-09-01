import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { Steps } from "@/components/sections/steps";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";
import { faqs } from "@/content/partners";
import { benefits, steps, systemsHero } from "@/content/systems";

export const metadata: Metadata = {
  title: "Job eco-system",
  description:
    "Become an Influence India team member — seamless earning opportunities, unbeatable benefits and a four-step application process.",
};

export default function SystemsPage() {
  return (
    <>
      <PageHero {...systemsHero} />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- join and grow ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">Unbeatable benefits</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={["Join and grow together", "for a better career"]}
                  mutedCount={1}
                  size="d2"
                />
                <Reveal delay={140}>
                  <p className="lede mt-8">
                    Grow up to infinite in your career. Join the future
                    community of staffing solutions built around your career
                    goals.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-10">
                    <Media src="/images/systems-team.jpg" alt="Influence India team" ratio="4/3" />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <ul className="border-t border-line">
                  {benefits.map((benefit, i) => (
                    <Reveal
                      as="li"
                      key={benefit.index}
                      delay={i * 70}
                      className="border-b border-line"
                    >
                      <div className="group grid gap-3 py-8 md:grid-cols-12 md:gap-6">
                        <span className="label text-ink-30 md:col-span-1">
                          {benefit.index}
                        </span>
                        <h3 className="display d6 transition-colors duration-500 group-hover:text-brand md:col-span-5">
                          {benefit.title}
                        </h3>
                        <p className="text-[0.93rem] leading-relaxed text-ink-70 md:col-span-6">
                          {benefit.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- application process ---------- */}
        <section className="invert-section">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-6">
                  <Reveal>
                    <Eyebrow tone="invert" className="mb-7">
                      Application process
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={[
                      "Take the first step",
                      "towards becoming a",
                      "trusted service provider",
                    ]}
                    mutedCount={2}
                    size="d2"
                    tone="invert"
                  />
                </div>
                <Reveal
                  delay={140}
                  className="lg:col-span-5 lg:col-start-8 lg:pt-3"
                >
                  <p className="lede">
                    Join our team of skilled professionals and start providing
                    top-notch service to our clients. Four steps, from first
                    contact to certified deployment.
                  </p>
                  <div className="mt-8">
                    <Media
                      src="/images/systems-apply.jpg"
                      alt="Application and interview"
                      ratio="16/10"
                      tone="dark"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="mt-14">
                <Steps steps={steps} tone="invert" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- faq ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <FaqSection items={faqs} />
            </div>
          </div>
        </section>

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
