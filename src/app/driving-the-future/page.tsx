import type { Metadata } from "next";
import Link from "next/link";

import {
  ChapterDark,
  ChapterLight,
  Tick,
} from "@/components/sections/brief-chapter";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { StatBand } from "@/components/sections/stat-band";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { brief } from "@/content/driving-future";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Driving the Future: Influence India's (MH) solutions",
  description:
    "Influence India's (MH) solutions for corporate business — our value proposition, regulatory tailwinds, the unit economics of MH against traditional IHP staffing, and our disruptive integrated mass hiring offering.",
};

export default function DrivingTheFuturePage() {
  const [ihp, mh] = brief.chapters[2].compare.columns;

  /* the jump index: the four chapters plus the two closing sections */
  const contents = [
    ...brief.chapters.map((c) => ({
      id: c.id,
      index: c.index,
      kicker: c.kicker,
    })),
    {
      id: brief.offering.id,
      index: brief.offering.index,
      kicker: brief.offering.kicker,
    },
    { id: brief.about.id, index: brief.about.index, kicker: brief.about.kicker },
  ];

  return (
    <>
      {/* text-only hero: hero-workforce.jpg already fronts What we do */}
      <PageHero {...brief.hero} />

      <div className="scroll-stack">
        {/* ---------- headline figures ---------- */}
        <section className="shell">
          <div className="shell-inner pt-14 md:pt-16">
            <StatBand intro="The brief in four figures" stats={brief.stats} />
          </div>
        </section>

        {/* ---------- opening statement + jump index ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <Reveal>
                  <Eyebrow className="mb-7">{brief.overture.eyebrow}</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={brief.overture.headingLines}
                  mutedCount={1}
                  size="d3"
                />
              </div>
              <div className="lg:col-span-6 lg:pt-2">
                <Reveal delay={120}>
                  <p className="lede">{brief.overture.lead}</p>
                </Reveal>
                {brief.overture.body.map((para, i) => (
                  <Reveal key={para} delay={180 + i * 60}>
                    <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-ink-70">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* jump index */}
            <Reveal delay={120}>
              <p className="label mt-16 flex items-center gap-4 text-brand">
                {brief.contentsHeading}
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

        {/* ---------- 01 value proposition ---------- */}
        <ChapterLight chapter={brief.chapters[0]} />

        {/* ---------- 02 regulatory tailwinds (dark) ---------- */}
        <ChapterDark chapter={brief.chapters[1]} />

        {/* ---------- 03 unit economics + MH vs IHP ---------- */}
        <section
          id={brief.chapters[2].id}
          className="scroll-mt-32 border-t border-line bg-surface"
        >
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-5">
                  <Reveal>
                    <Eyebrow className="mb-7">
                      {brief.chapters[2].index} — {brief.chapters[2].kicker}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={[brief.chapters[2].title]}
                    size="d4"
                    className="max-w-[14ch]"
                  />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  {brief.chapters[2].body.map((para, i) => (
                    <Reveal key={para} delay={120 + i * 70}>
                      <p
                        className={
                          i === 0
                            ? "lede"
                            : "mt-5 text-[0.95rem] leading-relaxed text-ink-70"
                        }
                      >
                        {para}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* the comparison */}
              <Reveal delay={120}>
                <p className="label mt-16 flex items-center gap-4 text-brand">
                  {brief.chapters[2].compare.heading}
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {/* IHP — the status quo, deliberately flat */}
                <Reveal>
                  <article className="h-full rounded-2xl border border-line bg-paper p-7 md:p-8">
                    <div className="flex items-baseline gap-3">
                      <span className="display text-[1.6rem] text-ink-30">
                        {ihp.tag}
                      </span>
                      <span className="label text-ink-50">{ihp.label}</span>
                    </div>
                    <ul className="mt-7 space-y-4">
                      {ihp.rows.map((row) => (
                        <li
                          key={row}
                          className="flex gap-3.5 border-t border-line-soft pt-4 text-[0.9rem] leading-relaxed text-ink-50 first:border-0 first:pt-0"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-px w-3.5 shrink-0 bg-ink-30"
                          />
                          {row}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>

                {/* MH — the recommendation, carried on the charcoal ground */}
                <Reveal delay={110}>
                  <article className="invert-section relative isolate h-full overflow-hidden rounded-2xl p-7 md:p-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_100%_0%,rgba(192,214,78,0.18),transparent_62%)]"
                    />
                    <div className="flex items-baseline gap-3">
                      <span className="display text-[1.6rem] text-accent">
                        {mh.tag}
                      </span>
                      <span className="label text-paper/70">{mh.label}</span>
                    </div>
                    <ul className="mt-7 space-y-4">
                      {mh.rows.map((row) => (
                        <li
                          key={row}
                          className="flex gap-3.5 border-t border-line-invert-soft pt-4 text-[0.9rem] leading-relaxed text-paper/85 first:border-0 first:pt-0"
                        >
                          <Tick tone="invert" />
                          {row}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 04 business impact ---------- */}
        <section
          id={brief.chapters[3].id}
          className="scroll-mt-32 border-t border-line bg-paper"
        >
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="sticky-head lg:col-span-5">
                  <Reveal>
                    <Eyebrow className="mb-7">
                      {brief.chapters[3].index} — {brief.chapters[3].kicker}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={[brief.chapters[3].title]}
                    size="d4"
                    className="max-w-[14ch]"
                  />
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  {brief.chapters[3].body.map((para, i) => (
                    <Reveal key={para} delay={120 + i * 70}>
                      <p
                        className={
                          i === 0
                            ? "lede"
                            : "mt-5 text-[0.95rem] leading-relaxed text-ink-70"
                        }
                      >
                        {para}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
                {brief.chapters[3].metrics.map((metric, i) => (
                  <Reveal
                    key={metric.label}
                    delay={i * 80}
                    className="bg-paper px-6 py-9"
                  >
                    <p className="display text-[clamp(1.5rem,2vw,2.1rem)] leading-none text-brand">
                      {metric.value}
                    </p>
                    <p className="label mt-4 text-ink-50">{metric.label}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 05 integrated offering ---------- */}
        <section
          id={brief.offering.id}
          className="invert-section relative isolate scroll-mt-32 overflow-hidden"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_0%_0%,rgba(192,214,78,0.16),transparent_60%)]"
          />
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
                <div className="lg:col-span-7">
                  <Reveal>
                    <Eyebrow tone="invert" className="mb-7">
                      {brief.offering.index} — {brief.offering.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={brief.offering.headingLines}
                    mutedCount={1}
                    size="d3"
                    tone="invert"
                  />
                </div>
                <Reveal delay={140} className="lg:col-span-5 lg:pb-2">
                  <p className="lede">{brief.offering.intro}</p>
                </Reveal>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-2">
                {brief.offering.items.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 2) * 90}>
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
                        {item.title}
                      </h3>
                      <p className="relative mt-3.5 max-w-xl text-[0.9rem] leading-relaxed text-paper/80">
                        {item.body}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 06 about ---------- */}
        <section
          id={brief.about.id}
          className="scroll-mt-32 border-t border-line bg-paper"
        >
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                {/* the commitment set as a lockup rather than a photograph —
                    gtp-community.jpg already carries the GTP page, and no image
                    on this site is used twice */}
                <Reveal className="lg:col-span-5">
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-2xl bg-brand-soft"
                    />
                    <div
                      className="relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-8 md:p-10"
                      style={{ aspectRatio: "4/5" }}
                    >
                      <p className="label text-brand">The commitment</p>
                      <div>
                        <p className="display text-[clamp(2.6rem,5vw,4.4rem)] leading-none text-brand">
                          EQ<span className="text-ink-30">:</span>EC
                        </p>
                        <p className="mt-5 max-w-[22ch] text-[0.95rem] leading-relaxed text-ink-70">
                          Educational Qualification converted into Employment
                          Commitment.
                        </p>
                      </div>
                      <dl className="flex gap-8">
                        <div>
                          <dt className="display text-[1.5rem] leading-none text-ink">
                            100+
                          </dt>
                          <dd className="label mt-2 text-ink-50">Clients</dd>
                        </div>
                        <div>
                          <dt className="display text-[1.5rem] leading-none text-ink">
                            150+
                          </dt>
                          <dd className="label mt-2 text-ink-50">Businesses</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </Reveal>

                <div className="lg:col-span-6 lg:col-start-7">
                  <Reveal>
                    <Eyebrow className="mb-7">
                      {brief.about.index} — {brief.about.eyebrow}
                    </Eyebrow>
                  </Reveal>
                  <HeadingLines
                    lines={brief.about.headingLines}
                    mutedCount={1}
                    size="d4"
                  />
                  {brief.about.body.map((para, i) => (
                    <Reveal key={para} delay={120 + i * 70}>
                      <p
                        className={
                          i === 0
                            ? "lede mt-7"
                            : "mt-5 text-[0.95rem] leading-relaxed text-ink-70"
                        }
                      >
                        {para}
                      </p>
                    </Reveal>
                  ))}

                  <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                    {brief.about.highlights.map((item, i) => (
                      <Reveal
                        key={item.label}
                        delay={i * 80}
                        className="bg-paper px-5 py-6"
                      >
                        <p className="display text-[1.35rem] leading-none text-brand">
                          {item.value}
                        </p>
                        <p className="mt-3 text-[0.8rem] leading-snug text-ink-50">
                          {item.label}
                        </p>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={200}>
                    <div className="mt-9">
                      <Button href={brief.about.cta.href} variant="ghost">
                        {brief.about.cta.label}
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- conclusion ---------- */}
        <section className="invert-section relative isolate overflow-hidden">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(192,214,78,0.14),transparent_65%)]"
          />
          <div className="shell">
            <div className="shell-inner section-y">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className="lg:col-span-4">
                  <Eyebrow tone="invert">{brief.conclusion.eyebrow}</Eyebrow>
                </Reveal>
                <div className="lg:col-span-8">
                  <Reveal delay={100}>
                    <p className="font-display text-[clamp(1.35rem,2.2vw,2.4rem)] font-medium leading-[1.35] tracking-[-0.01em]">
                      {brief.conclusion.quote}
                    </p>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-paper/80">
                      {brief.conclusion.body}
                    </p>
                  </Reveal>
                  <Reveal delay={220}>
                    <p className="mt-9 text-[0.95rem] leading-relaxed text-paper/80">
                      {brief.conclusion.emailLead}{" "}
                      <a
                        href={`mailto:${brief.conclusion.email}`}
                        className="text-accent underline underline-offset-4 transition-colors duration-300 hover:text-paper"
                      >
                        {brief.conclusion.email}
                      </a>
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Button
                        href={`mailto:${brief.conclusion.email}`}
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

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
