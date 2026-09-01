import { VideoBand } from "@/components/sections/video-band";
import { CtaBand } from "@/components/sections/cta-band";
import { EcosystemDiagram } from "@/components/sections/ecosystem-diagram";
import { FaqSection } from "@/components/sections/faq-section";
import { FeatureColumns } from "@/components/sections/feature-columns";
import { Hero } from "@/components/sections/hero";
import { PillarShowcase } from "@/components/sections/pillar-showcase";
import { PromiseModule } from "@/components/sections/promise-module";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUsList } from "@/components/sections/why-us";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  closingCta,
  disruption,
  hero,
  promise,
  reliability,
  servicesIntro,
  testimonialsSection,
  whyUs,
} from "@/content/home";
import { faqs } from "@/content/partners";
import { pillars, services } from "@/content/services";

export default function HomePage() {
  return (
    <>
      <Hero {...hero} />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- promise + stats (pinned column module) ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <PromiseModule
              headingLines={promise.headingLines}
              mutedCount={promise.mutedCount}
              body={promise.body}
              cta={promise.cta}
              statsIntro={promise.statsIntro}
              stats={promise.stats}
            />
          </div>
        </section>

        {/* ---------- services ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <SectionHeading
                lines={servicesIntro.headingLines}
                mutedCount={servicesIntro.mutedCount}
                body={servicesIntro.body}
                cta={servicesIntro.cta}
              />
              <div className="mt-14">
                <ServiceGrid services={services} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- reliability ---------- */}
        <section className="invert-section">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-7">
                  <Reveal>
                    <Eyebrow tone="invert" className="mb-7">
                      {reliability.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={reliability.headingLines}
                    size="d2"
                    tone="invert"
                  />
                </div>
                <Reveal delay={140} className="lg:col-span-5 lg:pt-3">
                  <p className="lede">{reliability.body}</p>
                </Reveal>
              </div>

              <div className="mt-14">
                <FeatureColumns features={reliability.features} tone="invert" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ecosystem diagram ---------- */}
        <EcosystemDiagram />

        {/* ---------- four pillars + visual ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">
                    Transforming the placement experience
                  </Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={[
                    "We constantly explore",
                    "innovative ways to shape",
                    "a sustainable workforce",
                  ]}
                  mutedCount={2}
                  size="d4"
                />
                <Reveal delay={140}>
                  <p className="label mt-9 flex items-center gap-3 text-ink-30">
                    {String(pillars.length).padStart(2, "0")} pillars
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <PillarShowcase items={pillars} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- disruption / cost ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <SectionHeading
                lines={disruption.headingLines}
                mutedCount={disruption.mutedCount}
                body={[disruption.body]}
              />
              <div className="mt-14 grid gap-px border-t border-line bg-line md:grid-cols-3">
                {disruption.cards.map((card, i) => (
                  <Reveal
                    key={card.title}
                    delay={i * 90}
                    className="group bg-surface p-8 transition-colors duration-500 hover:bg-paper md:p-9"
                  >
                    <p className="display text-[clamp(2.2rem,2.9vw,3.4rem)] leading-none text-brand">
                      {card.value}
                    </p>
                    <h3 className="display mt-5 text-[clamp(0.95rem,1vw,1.15rem)] leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-ink-70">
                      {card.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- video band ---------- */}
        <VideoBand
          video="/videos/training-band.mp4"
          poster="/images/training-band-poster.jpg"
          eyebrow="Skill training"
          headingLines={["Skills built", "before deployment"]}
          caption="Every aspirant is trained, assessed and certified before they reach your floor."
        />

        {/* ---------- why us ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">{whyUs.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={[whyUs.heading]}
                  size="d4"
                  className="max-w-[15ch]"
                />
                <Reveal delay={140}>
                  <p className="label mt-9 flex items-center gap-3 text-ink-30">
                    {String(whyUs.items.length).padStart(2, "0")} reasons
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <WhyUsList items={whyUs.items} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- testimonials ---------- */}
        <section className="border-t border-line bg-paper">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <Reveal>
                    <Eyebrow className="mb-6">
                      {testimonialsSection.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={testimonialsSection.headingLines}
                    mutedCount={testimonialsSection.mutedCount}
                    size="d3"
                  />
                </div>
                <Reveal delay={140} className="lg:col-span-5 lg:pb-2">
                  <p className="lede">{testimonialsSection.body}</p>
                </Reveal>
              </div>
              <div className="mt-14">
                <Testimonials items={testimonialsSection.items} />
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
