import Link from "next/link";

import {
  ChapterDark,
  ChapterLight,
  Tick,
} from "@/components/sections/brief-chapter";
import { StatBand } from "@/components/sections/stat-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { article } from "@/content/charging-forward";

/**
 * The body of the "Charging Forward" article — everything between the hero and
 * the closing CTA. Shared so the article reads in full both on its own page
 * (/charging-forward) and inline on the Resources page beneath the card index.
 */
export function ChargingForwardBody() {
  /* the four OSTP chapters, then the three corporate-case sections */
  const contents = [
    ...article.chapters.map((c) => ({
      id: c.id,
      index: c.index,
      kicker: c.kicker,
    })),
    ...article.advantages.sections.map((s) => ({
      id: s.id,
      index: `0${Number(s.index) + 4}`,
      kicker: s.title,
    })),
  ];

  return (
    <>
      {/* ---------- full document title + figures ---------- */}
      <section className="shell">
        <div className="shell-inner pt-14 md:pt-16">
          <Reveal>
            <p className="label max-w-4xl text-ink-50">
              {article.fullTitle}
            </p>
          </Reveal>
          <div className="mt-10">
            <StatBand
              intro="The network today"
              stats={article.stats}
            />
          </div>
        </div>
      </section>

      {/* ---------- opening statement + jump index ---------- */}
      <section className="shell">
        <div className="shell-inner section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow className="mb-7">{article.overture.eyebrow}</Eyebrow>
              </Reveal>
              <HeadingLines
                lines={article.overture.headingLines}
                mutedCount={1}
                size="d3"
              />
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <Reveal delay={120}>
                <p className="lede">{article.overture.lead}</p>
              </Reveal>
              {article.overture.body.map((para, i) => (
                <Reveal key={para} delay={180 + i * 60}>
                  <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-ink-70">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <p className="label mt-16 flex items-center gap-4 text-brand">
              {article.contentsHeading}
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {contents.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 70} className="bg-paper">
                <li>
                  <Link
                    href={`#${item.id}`}
                    className="group flex h-full items-baseline gap-5 px-6 py-7 transition-colors duration-300 hover:bg-surface"
                  >
                    <span className="label text-[0.68rem] text-brand">
                      {item.index}
                    </span>
                    <span className="display text-[clamp(0.95rem,1vw,1.1rem)] leading-snug transition-colors duration-300 group-hover:text-brand">
                      {item.kicker}
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- part one: the OSTP network ---------- */}
      <ChapterLight chapter={article.chapters[0]} />
      <ChapterDark chapter={article.chapters[1]} />
      <ChapterLight chapter={article.chapters[2]} surface />
      <ChapterLight chapter={article.chapters[3]} />

      {/* ---------- charged-up call to action ---------- */}
      <section className="invert-section relative isolate overflow-hidden">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(192,214,78,0.16),transparent_65%)]"
        />
        <div className="shell">
          <div className="shell-inner py-[clamp(3.5rem,6vw,6rem)]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <HeadingLines
                  lines={["Ready to get charged", "up about the future?"]}
                  mutedCount={1}
                  size="d4"
                  tone="invert"
                />
              </Reveal>
              <div className="lg:col-span-6 lg:col-start-7">
                <Reveal delay={120}>
                  <p className="lede">
                    Contact Influence India Services today at{" "}
                    <a
                      href={`mailto:${article.charge.email}`}
                      className="text-accent underline underline-offset-4 transition-colors duration-300 hover:text-paper"
                    >
                      {article.charge.email}
                    </a>{" "}
                    to discuss your Skilled Staffing needs and explore how we
                    can help you make the switch to SAAS (Staffing as a
                    Service).
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="display mt-8 text-[clamp(1.2rem,1.8vw,1.9rem)] leading-snug text-accent">
                    {article.charge.signoff}
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button
                      href={`mailto:${article.charge.email}`}
                      variant="invert"
                      className="w-fit"
                    >
                      Write to us
                    </Button>
                    <Button
                      href="/contact"
                      variant="invert-ghost"
                      className="w-fit"
                    >
                      Contact the team
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- part two: the corporate case ---------- */}
      <section
        id={article.advantages.id}
        className="scroll-mt-32 border-t border-line bg-paper"
      >
        <div className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <Eyebrow className="mb-7">
                    {article.advantages.eyebrow}
                  </Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={article.advantages.headingLines}
                  mutedCount={2}
                  size="d3"
                />
              </div>
              <Reveal delay={140} className="lg:col-span-5 lg:pb-2">
                <p className="lede">{article.advantages.intro}</p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">
                  {article.advantages.body}
                </p>
              </Reveal>
            </div>

            {/* the three advantages, each with its named sub-points */}
            <div className="mt-16 flex flex-col gap-px bg-line">
              {article.advantages.sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 bg-paper pt-14 first:pt-0"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                      <Reveal>
                        <p className="display text-[clamp(2.4rem,3.4vw,3.6rem)] leading-none text-brand/25">
                          {section.index}
                        </p>
                      </Reveal>
                      <HeadingLines
                        lines={[section.title]}
                        size="d4"
                        className="mt-5 max-w-[15ch]"
                      />
                    </div>

                    <div className="lg:col-span-6 lg:col-start-7">
                      <Reveal delay={120}>
                        <p className="lede">{section.lead}</p>
                      </Reveal>

                      <div className="mt-9 grid gap-4 sm:grid-cols-2">
                        {section.items.map((item, i) => (
                          <Reveal key={item.title} delay={160 + i * 80}>
                            <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-500 hover:border-brand/45 hover:bg-brand-soft/60">
                              <div className="flex items-start gap-3">
                                <Tick />
                                <h3 className="display text-[clamp(0.95rem,1vw,1.1rem)] leading-snug">
                                  {item.title}
                                </h3>
                              </div>
                              <p className="mt-3.5 text-[0.9rem] leading-relaxed text-ink-70">
                                {item.body}
                              </p>
                            </article>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pb-14" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
