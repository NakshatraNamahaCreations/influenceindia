import { VideoBand } from "@/components/sections/video-band";
import { CtaBand } from "@/components/sections/cta-band";
import { EcosystemDiagram } from "@/components/sections/ecosystem-diagram";
import { FaqSection } from "@/components/sections/faq-section";
import { FeatureColumns } from "@/components/sections/feature-columns";
import { Hero } from "@/components/sections/hero";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { PromiseModule } from "@/components/sections/promise-module";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyUsList } from "@/components/sections/why-us";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
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
import { faqs, partnersRowOne, partnersRowTwo } from "@/content/partners";
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
                  size="d3"
                />
                <Reveal delay={150}>
                  <div className="mt-10">
                    <Media src="/images/home-pillars.jpg" alt="Training session" ratio="4/3" />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <ul className="border-t border-line">
                  {pillars.map((pillar, i) => (
                    <Reveal
                      as="li"
                      key={pillar.index}
                      delay={i * 80}
                      className="border-b border-line"
                    >
                      <div className="group flex flex-col gap-3 py-8">
                        <div className="flex items-baseline gap-5">
                          <span className="label text-ink-30">
                            {pillar.index}
                          </span>
                          <h3 className="display d5 transition-colors duration-500 group-hover:text-brand">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="max-w-2xl pl-11 text-[0.95rem] leading-relaxed text-ink-70">
                          {pillar.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
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
                    className="bg-surface p-9"
                  >
                    <p className="display d2 leading-none text-brand">
                      {card.value}
                    </p>
                    <h3 className="display d6 mt-6">{card.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-70">
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
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="sticky-head lg:col-span-6">
                <Reveal>
                  <Eyebrow className="mb-7">{whyUs.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={[whyUs.heading]}
                  size="d2"
                  className="max-w-[14ch]"
                />
              </div>
            </div>
            <div className="mt-14">
              <WhyUsList items={whyUs.items} />
            </div>
          </div>
        </section>

        {/* ---------- testimonials ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="sticky-head lg:col-span-7">
                  <Reveal>
                    <Eyebrow className="mb-7">
                      {testimonialsSection.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={[testimonialsSection.heading]}
                    size="d2"
                    className="max-w-[16ch]"
                  />
                </div>
              </div>
              <div className="mt-14">
                <Testimonials items={testimonialsSection.items} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- partners ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <PartnerMarquee
              eyebrow="Our clients"
              heading="Get a chance to work with"
              body="Our certified aspirants are deployed into roles across some of the most demanding entities operating in India."
              rows={[partnersRowOne, partnersRowTwo]}
            />
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
