import { VideoBand } from "@/components/sections/video-band";
import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Testimonials } from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import {
  careersHero,
  culture,
  culturePillars,
  openPositions,
  positionMeta,
} from "@/content/careers";
import { testimonialsSection } from "@/content/home";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join our unique system innovators — a community of doers, dreamers and changemakers reshaping the future of workspace in India.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero {...careersHero} />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- culture ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">A community of doers</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={["Doers, dreamers", "and changemakers"]}
                  mutedCount={1}
                  size="d2"
                />
                <Reveal delay={160}>
                  <div className="mt-10">
                    <Media src="/images/careers-life.jpg" alt="Life at Influence India" ratio="4/3" />
                  </div>
                </Reveal>
              </div>

              <div className="flex flex-col gap-7 lg:col-span-6 lg:col-start-7 lg:pt-2">
                {culture.paragraphs.map((p, i) => (
                  <Reveal key={p.slice(0, 20)} delay={120 + i * 80}>
                    <p className="lede">{p}</p>
                  </Reveal>
                ))}
                <Reveal delay={280}>
                  <div className="mt-2 border-t border-line pt-7">
                    <p className="label text-brand">{culture.gtc.label}</p>
                    <p className="display d5 mt-4">{culture.gtc.body}</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 grid gap-px border-t border-line bg-line md:grid-cols-3">
              {culturePillars.map((pillar, i) => (
                <Reveal
                  key={pillar.index}
                  delay={i * 90}
                  className="bg-paper p-8 md:p-9"
                >
                  <span className="label text-ink-30">{pillar.index}</span>
                  <h3 className="display d5 mt-5">{pillar.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-70">
                    {pillar.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- word from our team ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12">
                <div className="sticky-head lg:col-span-7">
                  <Reveal>
                    <Eyebrow className="mb-7">A word from our team</Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={["Moments from our stories of success"]}
                    size="d2"
                    className="max-w-[16ch]"
                  />
                </div>
                <Reveal delay={140} className="lg:col-span-5">
                  <Media
                    src="/images/careers-team.jpg"
                    alt="Our team"
                    ratio="16/10"
                  />
                </Reveal>
              </div>
              <div className="mt-14">
                <Testimonials items={testimonialsSection.items} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- video band ---------- */}
        <VideoBand
          video="/videos/study-band.mp4"
          poster="/images/study-band-poster.jpg"
          eyebrow="Life at Influence India"
          headingLines={["Learn, grow", "and lead"]}
          caption="Internal exams, certification and promotion make up 75% of our management roles."
        />

        {/* ---------- open positions ---------- */}
        <section id="open-positions" className="scroll-mt-28 shell">
          <div className="shell-inner section-y">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-6">
                <Reveal>
                  <Eyebrow className="mb-7">Open positions</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={["Seven full-time roles", "open right now"]}
                  mutedCount={1}
                  size="d2"
                />
              </div>
              <Reveal
                delay={140}
                className="lg:col-span-5 lg:col-start-8 lg:pt-3"
              >
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-7">
                  {[
                    ["City", positionMeta.city],
                    ["State", positionMeta.state],
                    ["Country", positionMeta.country],
                    ["Industry", positionMeta.industry],
                    ["Job type", positionMeta.jobType],
                    ["Experience", positionMeta.experience],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1">
                      <dt className="label text-ink-50">{label}</dt>
                      <dd className="text-[0.95rem]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <ul className="mt-14 border-t border-line">
              {openPositions.map((position, i) => (
                <Reveal
                  as="li"
                  key={position.role}
                  delay={i * 60}
                  className="border-b border-line"
                >
                  <div className="group grid items-center gap-4 py-7 md:grid-cols-12 md:gap-8">
                    <span className="label text-ink-30 md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="display d5 transition-colors duration-500 group-hover:text-brand md:col-span-4">
                      {position.role}
                    </h3>
                    <span className="label text-ink-50 md:col-span-2">
                      {position.type}
                    </span>
                    <span className="label text-ink-50 md:col-span-3">
                      {position.experience}
                    </span>
                    <div className="md:col-span-2 md:justify-self-end">
                      <Button
                        href={`mailto:${contact.careersEmail}?subject=Application — ${position.role}`}
                        variant="ghost"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-12 flex flex-col gap-4 border-t border-line pt-9">
                <p className="label text-ink-50">Ready to drive change</p>
                <p className="display d4 max-w-[22ch]">
                  Explore our careers and be part of the future of the staffing
                  solution industry.
                </p>
                <p className="lede max-w-xl">
                  For a job description, or to send your resume, write to{" "}
                  <a
                    href={`mailto:${contact.careersEmail}`}
                    className="text-brand underline underline-offset-4"
                  >
                    {contact.careersEmail}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBand
          headingLines={["Take a bold", "step with us"]}
          body="For a bright career and future on board — Influence India Services Team."
          ctas={[
            {
              label: "Send your resume",
              href: `mailto:${contact.careersEmail}`,
              variant: "primary",
            },
            { label: "Job eco-system", href: "/systems", variant: "ghost" },
          ]}
        />
      </div>
    </>
  );
}
