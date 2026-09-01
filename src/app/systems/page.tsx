import type { Metadata } from "next";

import { BenefitCards } from "@/components/sections/benefit-cards";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { Steps } from "@/components/sections/steps";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
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
      <PageHero
        {...systemsHero}
        image="/images/systems-hero.jpg"
        imageAlt="Team members working together at the Influence India office"
      />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- join and grow ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow className="mb-7">Unbeatable benefits</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={["Join and grow together", "for a better career"]}
                  mutedCount={1}
                  size="d3"
                />
              </div>
              <Reveal delay={140} className="lg:col-span-5 lg:pb-2">
                <p className="lede">
                  Grow up to infinite in your career. Join the future community
                  of staffing solutions built around your career goals.
                </p>
              </Reveal>
            </div>

            <div className="mt-14">
              <BenefitCards
                items={benefits}
                cta={{
                  label: "Start your application",
                  href: "/contact",
                  body: "Four steps from first contact to a certified job role. Talk to our Bengaluru team and we will take it from there.",
                }}
              />
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
                    size="d3"
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
                  <p className="label mt-8 flex items-center gap-3 text-paper/55">
                    {String(steps.length).padStart(2, "0")} steps
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-line-invert"
                    />
                  </p>
                </Reveal>
              </div>

              <div className="mt-16">
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
