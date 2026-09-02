import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { MediaHero } from "@/components/sections/media-hero";
import { ServiceIndex } from "@/components/sections/service-index";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";
import {
  capabilityStrip,
  platformCards,
  serviceGroups,
  serviceIndexIntro,
  servicesHeroTicker,
  technologyStatement,
} from "@/content/service-index";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Creating a workspace and a more skilful atmosphere through sustainable job solutions for the working sector in India.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <MediaHero
        eyebrow="What we do"
        headingLines={["Nationwide", "workforce", "coverage"]}
        mutedCount={2}
        src="/images/hero-workforce.jpg"
        video="/videos/hero-workforce.mp4"
        ticker={servicesHeroTicker}
      />

      <div className="scroll-stack">
        {/* ---------- technology statement ---------- */}
        <section className="shell">
          <div className="shell-inner flex flex-col items-center py-[clamp(5rem,9vw,9rem)] text-center">
            <HeadingLines
              lines={technologyStatement.headingLines}
              accentCount={1}
              size="d2"
              className="text-center"
            />
            <Reveal delay={160}>
              <p className="mx-auto mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-ink-70">
                {technologyStatement.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- platform cards ---------- */}
        <section className="border-t border-line">
          <div className="shell">
            <div className="shell-inner grid gap-px bg-line md:grid-cols-2">
              {platformCards.map((card, i) => (
                <Reveal key={card.name} delay={i * 100} className="bg-paper">
                  <Media src={card.image} alt={card.name} label={card.imageLabel} ratio="16/9" tone={i === 1 ? "brand" : "light"} />
                  <div className="p-8 md:p-10">
                    <h3 className="display d5">{card.name}</h3>
                    <p className="mt-5 max-w-md text-[0.93rem] leading-relaxed text-ink-70">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- capability strip ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-3">
                <p className="text-[0.95rem] leading-relaxed text-ink-70">{capabilityStrip.body}</p>
              </Reveal>
              <div className="grid grid-cols-3 gap-px bg-line lg:col-span-9">
                {capabilityStrip.images.map((image, i) => (
                  <Reveal key={image.label} delay={i * 90} className="bg-surface">
                    <Media src={image.src} alt={image.label} label={image.label} ratio="3/4" />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- pinned service index ---------- */}
        <section className="border-t border-line">
          <div className="shell">
            <div className="shell-inner grid gap-10 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-7">
                <Reveal>
                  <Eyebrow className="mb-7">{serviceIndexIntro.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={serviceIndexIntro.headingLines}
                  mutedCount={serviceIndexIntro.mutedCount}
                  size="d2"
                />
              </div>
              <Reveal delay={140} className="lg:col-span-5 lg:pt-3">
                <p className="lede">{serviceIndexIntro.body}</p>
              </Reveal>
            </div>
          </div>

          <ServiceIndex groups={serviceGroups} />
        </section>

        {/* ---------- enquiry form ---------- */}
        <section id="know-more" className="scroll-mt-28 border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <EnquiryForm />
            </div>
          </div>
        </section>

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
