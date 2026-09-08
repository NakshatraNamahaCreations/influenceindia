import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/content/site";
import {
  adoption,
  definitions,
  letter,
  sections,
} from "@/content/whistleblowing";

/**
 * The body of the policy — everything between the hero and the closing CTA.
 * Shared so the same document serves both /privacy-policy (the footer's
 * privacy link) and /whistleblowing-policy.
 */
export function WhistleblowingBody() {
  const contents = [
    { id: "definitions", index: "00", title: "Definitions" },
    ...sections.map((s) => ({ id: s.id, index: s.index, title: s.title })),
  ];

  return (
    <>
      {/* ---------- the covering letter ---------- */}
      <section className="border-b border-line bg-surface">
        <div className="shell">
          <div className="shell-inner py-[clamp(3rem,5vw,4.5rem)]">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <Eyebrow>A note to colleagues</Eyebrow>
              </Reveal>
              <div className="lg:col-span-7 lg:col-start-6">
                <Reveal delay={80}>
                  <p className="display text-[clamp(1.1rem,1.4vw,1.5rem)]">
                    {letter.greeting}
                  </p>
                </Reveal>
                {letter.body.map((para, i) => (
                  <Reveal key={para} delay={120 + i * 60}>
                    <p
                      className={
                        i === 0
                          ? "lede mt-6"
                          : "mt-5 text-[0.95rem] leading-relaxed text-ink-70"
                      }
                    >
                      {para}
                    </p>
                  </Reveal>
                ))}
                <Reveal delay={300}>
                  <p className="label mt-8 text-brand">{letter.signoff}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shell">
        <div className="shell-inner section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* ---------- contents rail ---------- */}
            <nav
              aria-label="Policy sections"
              className="sticky-head lg:col-span-4"
            >
              <Reveal>
                <p className="label flex items-center gap-4 text-brand">
                  Contents
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </p>
              </Reveal>
              <ol className="mt-6 flex flex-col">
                {contents.map((item, i) => (
                  <Reveal key={item.id} delay={i * 35} as="li">
                    <Link
                      href={`#${item.id}`}
                      className="group flex items-baseline gap-4 border-b border-line-soft py-3 transition-colors duration-300 hover:text-brand"
                    >
                      <span className="label text-[0.65rem] text-ink-30 transition-colors duration-300 group-hover:text-brand">
                        {item.index}
                      </span>
                      <span className="text-[0.92rem] leading-snug">
                        {item.title}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ol>

              <Reveal delay={240}>
                <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                  <p className="label text-brand">Raise a disclosure</p>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-70">
                    Write to the Compliance Officer, or send a sealed envelope
                    marked “For Compliance Officer — Whistleblowing Policy” to
                    the Company Secretary at our registered office.
                  </p>
                  <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-50">
                    {contact.headOffice.short}
                  </p>
                </div>
              </Reveal>
            </nav>

            {/* ---------- the policy ---------- */}
            <div className="lg:col-span-7 lg:col-start-6">
              {/* definitions */}
              <section id="definitions" className="scroll-mt-32">
                <Reveal>
                  <p className="label text-brand">00</p>
                </Reveal>
                <HeadingLines
                  lines={["Definitions"]}
                  size="d4"
                  className="mt-4"
                />
                <dl className="mt-8 flex flex-col gap-px bg-line">
                  {definitions.map((entry, i) => (
                    <Reveal
                      key={entry.term}
                      delay={i * 60}
                      className="bg-paper py-6"
                    >
                      <dt className="display text-[clamp(0.95rem,1vw,1.1rem)] text-brand">
                        {entry.term}
                      </dt>
                      {entry.body.map((para) => (
                        <dd
                          key={para}
                          className="mt-3 ml-0 text-[0.93rem] leading-relaxed text-ink-70"
                        >
                          {para}
                        </dd>
                      ))}
                    </Reveal>
                  ))}
                </dl>
              </section>

              {/* numbered clauses */}
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mt-14 scroll-mt-32 border-t border-line pt-10"
                >
                  <Reveal>
                    <p className="label text-brand">{section.index}</p>
                  </Reveal>
                  <HeadingLines
                    lines={[section.title]}
                    size="d4"
                    className="mt-4 max-w-[20ch]"
                  />

                  {"body" in section
                    ? section.body.map((para, i) => (
                        <Reveal key={para} delay={100 + i * 40}>
                          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">
                            {para}
                          </p>
                        </Reveal>
                      ))
                    : null}

                  {"bullets" in section ? (
                    <ul className="mt-7 grid gap-px bg-line sm:grid-cols-2">
                      {section.bullets.map((item, i) => (
                        <Reveal
                          key={item}
                          delay={(i % 2) * 60}
                          as="li"
                          className="flex gap-3 bg-paper px-5 py-4 text-[0.9rem] leading-relaxed text-ink-70"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                          />
                          {item}
                        </Reveal>
                      ))}
                    </ul>
                  ) : null}

                  {"list" in section ? (
                    <ol className="mt-7 flex flex-col gap-px bg-line">
                      {section.list.map((item, i) => (
                        <Reveal
                          key={item}
                          delay={40 + i * 30}
                          as="li"
                          className="flex gap-4 bg-paper py-5 pr-2 text-[0.93rem] leading-relaxed text-ink-70"
                        >
                          <span className="label shrink-0 text-[0.65rem] text-brand">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </Reveal>
                      ))}
                    </ol>
                  ) : null}

                  {"outro" in section
                    ? section.outro.map((para, i) => (
                        <Reveal key={para} delay={80 + i * 40}>
                          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">
                            {para}
                          </p>
                        </Reveal>
                      ))
                    : null}
                </section>
              ))}

              {/* adoption block */}
              <div className="mt-16 rounded-2xl border border-line bg-surface p-7 md:p-8">
                <Reveal>
                  <p className="display text-[clamp(1rem,1.1vw,1.25rem)] leading-snug">
                    {adoption.title}
                  </p>
                </Reveal>

                <dl className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  <Reveal delay={80}>
                    <dt className="label text-brand">
                      {adoption.adoptedLabel}
                    </dt>
                    <dd className="mt-2 text-[0.9rem] text-ink-70">
                      {adoption.adoptedValue}
                    </dd>
                  </Reveal>

                  <Reveal delay={120}>
                    <dt className="label text-brand">
                      {adoption.addressLabel}
                    </dt>
                    <dd className="mt-2 text-[0.9rem] leading-relaxed text-ink-70">
                      {adoption.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </Reveal>

                  <Reveal delay={160}>
                    <dt className="label text-brand">
                      {adoption.emailLabel}
                    </dt>
                    <dd className="mt-2 text-[0.9rem] text-ink-70">
                      {adoption.email}
                    </dd>
                    <dd className="mt-3 border-l-2 border-brand/50 pl-3 text-[0.8rem] leading-relaxed text-ink-50">
                      {adoption.emailNote}
                    </dd>
                  </Reveal>

                  <Reveal delay={200}>
                    <dt className="label text-brand">
                      {adoption.contactLabel}
                    </dt>
                    <dd className="mt-2 text-[0.9rem] text-ink-70">
                      <a
                        href={`mailto:${contact.email}`}
                        className="underline underline-offset-4 transition-colors duration-300 hover:text-brand"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </Reveal>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
