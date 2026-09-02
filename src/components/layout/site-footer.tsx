import Link from "next/link";

import { Locations } from "@/components/ui/locations";
import { Logo } from "@/components/ui/logo";
import { contact, developer, footerColumns, legalLinks, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="invert-section">
      <div className="shell">
        <div className="shell-inner">
          {/* top: wordmark + tagline */}
          <div className="flex flex-col gap-8 border-b border-line-invert py-14 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-6">
              <Logo tone="invert" size="lg" />
              <p className="display d3 max-w-2xl">{site.tagline}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="label group flex items-center gap-3 text-paper/75 transition-colors hover:text-paper"
            >
              {contact.email}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* link columns */}
          <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-5">
                <p className="label text-paper/55">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-paper/88 transition-colors duration-300 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="label text-paper/55">
                  {contact.headOffice.label}
                </p>
                <address className="text-[0.9rem] not-italic text-paper/88">
                  {contact.headOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex flex-col gap-3">
                <p className="label text-paper/55">Locations</p>
                <Locations items={contact.locations} />
              </div>

              <div className="flex flex-col gap-3">
                <p className="label text-paper/55">Get in touch</p>
                <div className="flex flex-col gap-1 text-[0.9rem] text-paper/88">
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.careersEmail}`}
                    className="transition-colors hover:text-accent"
                  >
                    {contact.careersEmail}
                  </a>
                  <span className="text-paper/65">{contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* legal */}
          <div className="flex flex-col gap-5 border-t border-line-invert py-8 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="label text-paper/55 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
            <p className="label flex flex-wrap items-center gap-x-2 gap-y-1 text-paper/55">
              <span>
                © {new Date().getFullYear()} {site.name}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Developed by{" "}
                {developer.url ? (
                  <a
                    href={developer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {developer.name}
                  </a>
                ) : (
                  <span className="text-paper/75">{developer.name}</span>
                )}
              </span>
            </p>

            {/* back to top — an in-page anchor, so it inherits the site's
                Lenis easing and still works with smooth scrolling off */}
            <a
              href="#top"
              className="group flex shrink-0 items-center gap-3 self-start md:self-auto"
            >
              <span className="label text-paper/55 transition-colors duration-300 group-hover:text-accent">
                Back to top
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line-invert text-paper transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <path
                    d="M8 14V2M3 7l5-5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
