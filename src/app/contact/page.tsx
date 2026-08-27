import type { Metadata } from "next";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { FaqSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/content/partners";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Join hands with Influence India Services. Share your details and our representative will contact you.",
};

const details = [
  { label: "Corporate office", value: contact.headOffice.lines.join(", ") },
  {
    label: "General enquiries",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    label: "Careers",
    value: contact.careersEmail,
    href: `mailto:${contact.careersEmail}`,
  },
  { label: "Office hours", value: contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        headingLines={["Join hands with", "Influence India Services"]}
        mutedCount={1}
        body="Embark on a journey towards a sustainable working sector. Tell us what you need and our representative will be in touch."
      />

      {/* everything after the hero scrolls over it — the pinned-hero stack */}
      <div className="scroll-stack">
        {/* ---------- details ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-px border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {details.map((detail, i) => (
                <Reveal
                  key={detail.label}
                  delay={i * 80}
                  className="bg-paper py-8 pr-6"
                >
                  <p className="label text-ink-50">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="display d6 mt-4 block break-words transition-colors hover:text-brand"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="display d6 mt-4 break-words">
                      {detail.value}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-12 flex flex-col gap-5 border-t border-line pt-9">
                <Eyebrow>Our locations</Eyebrow>
                <ul className="flex flex-wrap gap-2">
                  {contact.locations.map((location, i) => (
                    <li
                      key={location}
                      className={`rounded-[var(--radius-pill)] px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] ${
                        i === 0
                          ? "bg-ink text-paper"
                          : "border border-line text-ink-70"
                      }`}
                    >
                      {location}
                      {i === 0 ? (
                        <span className="ml-2 text-accent">HQ</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- form ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner section-y">
              <EnquiryForm />
            </div>
          </div>
        </section>

        {/* ---------- faq ---------- */}
        <section className="invert-section">
          <div className="shell">
            <div className="shell-inner section-y">
              <FaqSection items={faqs} tone="invert" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
