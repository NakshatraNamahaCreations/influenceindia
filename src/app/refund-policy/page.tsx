import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";
import { refundHero, refundIntro, refundSections } from "@/content/refund";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Refund policy",
  description:
    "How charges, cancellations and refunds work across the Influence India Services product suite — refunds, cancellation fees, taxes, payment methods, promotional offers and gratuities.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero {...refundHero} />

      <div className="scroll-stack">
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* ---------- contents rail ---------- */}
              <nav
                aria-label="Refund policy sections"
                className="sticky-head lg:col-span-4"
              >
                <Reveal>
                  <p className="label flex items-center gap-4 text-brand">
                    Contents
                    <span aria-hidden="true" className="h-px flex-1 bg-line" />
                  </p>
                </Reveal>
                <ol className="mt-6 flex flex-col">
                  {refundSections.map((section, i) => (
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
                  <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                    <p className="label text-brand">Raise a query</p>
                    <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-70">
                      For a question about a charge, a cancellation fee or a
                      refund, write to{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-brand underline underline-offset-4"
                      >
                        {contact.email}
                      </a>{" "}
                      or call {contact.hotline}.
                    </p>
                    <p className="mt-4 text-[0.8rem] leading-relaxed text-ink-50">
                      {contact.hours}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <p className="mt-6 text-[0.85rem] leading-relaxed text-ink-50">
                    These provisions form part of our{" "}
                    <Link
                      href="/terms"
                      className="text-brand underline underline-offset-4"
                    >
                      terms and conditions
                    </Link>
                    .
                  </p>
                </Reveal>
              </nav>

              {/* ---------- the policy ---------- */}
              <div className="lg:col-span-7 lg:col-start-6">
                <Reveal>
                  <Eyebrow className="mb-6">Charges</Eyebrow>
                </Reveal>
                <Reveal delay={80}>
                  <p className="lede">{refundIntro}</p>
                </Reveal>

                {refundSections.map((section) => (
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
                    {section.body.map((para, i) => (
                      <Reveal key={para} delay={100 + i * 50}>
                        <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">
                          {para}
                        </p>
                      </Reveal>
                    ))}
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
