import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";
import { contact } from "@/content/site";
import { termsHero, termsIntro, termsSections } from "@/content/terms";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description:
    "The terms of use governing the Project Influence India Services product suite — accounts, eligibility, conduct, liability, charges and gratuities.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero {...termsHero} />

      <div className="scroll-stack">
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* ---------- contents rail ---------- */}
              <nav
                aria-label="Terms sections"
                className="sticky-head lg:col-span-4"
              >
                <Reveal>
                  <p className="label flex items-center gap-4 text-brand">
                    Contents
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </p>
                </Reveal>
                <ol className="mt-6 flex flex-col">
                  {termsSections.map((section, i) => (
                    <Reveal key={section.id} delay={i * 40} as="li">
                      <Link
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-4 border-b border-line-soft py-3 transition-colors duration-300 hover:text-brand"
                      >
                        <span className="label text-[0.65rem] text-ink-30 transition-colors duration-300 group-hover:text-brand">
                          {section.index}
                        </span>
                        <span className="text-[0.92rem] leading-snug">
                          {section.title}
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </ol>

                <Reveal delay={200}>
                  <p className="mt-8 text-[0.85rem] leading-relaxed text-ink-50">
                    Questions about these terms? Write to{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-brand underline underline-offset-4"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                </Reveal>
              </nav>

              {/* ---------- the document ---------- */}
              <div className="lg:col-span-7 lg:col-start-6">
                {/* introduction */}
                <Reveal>
                  <Eyebrow className="mb-6">{termsIntro.eyebrow}</Eyebrow>
                </Reveal>
                {termsIntro.body.map((para, i) => (
                  <Reveal key={para} delay={80 + i * 60}>
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

                {/* numbered clauses */}
                {termsSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="mt-14 scroll-mt-32 border-t border-line pt-10 first:mt-16"
                  >
                    <Reveal>
                      <p className="label text-brand">{section.index}</p>
                    </Reveal>
                    <HeadingLines
                      lines={[section.title]}
                      size="d4"
                      className="mt-4 max-w-[18ch]"
                    />

                    {"body" in section
                      ? section.body.map((para, i) => (
                          <Reveal key={para} delay={100 + i * 50}>
                            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">
                              {para}
                            </p>
                          </Reveal>
                        ))
                      : null}

                    {"list" in section ? (
                      <ol className="mt-7 flex flex-col gap-px bg-line">
                        {section.list.map((item, i) => (
                          <Reveal
                            key={item}
                            delay={100 + i * 50}
                            as="li"
                            className="flex gap-4 bg-paper py-5 pr-2 text-[0.92rem] leading-relaxed text-ink-70"
                          >
                            <span className="label shrink-0 text-[0.65rem] text-brand">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item}
                          </Reveal>
                        ))}
                      </ol>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
