import Link from "next/link";

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
              <Logo tone="invert" />
              <p className="display d3 max-w-2xl">{site.tagline}</p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="label group flex items-center gap-3 text-paper/60 transition-colors hover:text-paper"
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
                <p className="label text-paper/40">{col.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-paper/75 transition-colors duration-300 hover:text-brand"
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
                <p className="label text-paper/40">
                  {contact.headOffice.label}
                </p>
                <address className="text-[0.9rem] not-italic text-paper/75">
                  {contact.headOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex flex-col gap-3">
                <p className="label text-paper/40">Locations</p>
                <p className="text-[0.9rem] text-paper/75">
                  {contact.locations.join(" / ")}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="label text-paper/40">Get in touch</p>
                <div className="flex flex-col gap-1 text-[0.9rem] text-paper/75">
                  <a
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-brand"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`mailto:${contact.careersEmail}`}
                    className="transition-colors hover:text-brand"
                  >
                    {contact.careersEmail}
                  </a>
                  <span className="text-paper/50">{contact.hours}</span>
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
                    className="label text-paper/40 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="label flex flex-wrap items-center gap-x-2 gap-y-1 text-paper/40">
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
                    className="text-paper/60 transition-colors hover:text-paper"
                  >
                    {developer.name}
                  </a>
                ) : (
                  <span className="text-paper/60">{developer.name}</span>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
