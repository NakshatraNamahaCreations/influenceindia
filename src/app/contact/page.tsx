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
  {
    label: "Corporate office",
    value: contact.headOffice.lines.join(", "),
    icon: "office" as const,
  },
  {
    label: "General enquiries",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "mail" as const,
  },
  {
    label: "Careers",
    value: contact.careersEmail,
    href: `mailto:${contact.careersEmail}`,
    icon: "careers" as const,
  },
  { label: "Office hours", value: contact.hours, icon: "hours" as const },
];

/** 24px line glyphs for the detail cards. */
const glyphs = {
  office: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  careers: (
    <>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M2.5 12h19" />
    </>
  ),
  hours: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        headingLines={["Join hands with", "Influence India Services"]}
        mutedCount={1}
        body="Embark on a journey towards a sustainable working sector. Tell us what you need and our representative will be in touch."
        image="/images/contact-hero.jpg"
        imageAlt="Influence India Services team in discussion at the Bengaluru office"
      />

      {/* page body below the hero */}
      <div className="scroll-stack">
        {/* ---------- details ---------- */}
        <section className="shell">
          <div className="shell-inner section-y">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {details.map((detail, i) => {
                const value = (
                  <span className="font-display block break-words text-[0.95rem] font-semibold leading-snug tracking-[-0.01em]">
                    {detail.value}
                  </span>
                );

                return (
                  <Reveal as="li" key={detail.label} delay={i * 80}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-line-soft bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface/60">
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                      />

                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-paper"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          {glyphs[detail.icon]}
                        </svg>
                      </span>

                      <p className="label mt-6 text-[0.6rem] text-ink-50">
                        {detail.label}
                      </p>

                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-2.5 block transition-colors duration-300 hover:text-brand"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2.5">{value}</p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </ul>

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
