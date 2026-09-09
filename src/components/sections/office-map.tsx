import { ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/content/site";

const { headOffice, hours, hotline, hotlineHref, email } = contact;
const { lat, lng, url } = headOffice.map;

/**
 * The corporate office on a map. Google's `output=embed` endpoint needs no API
 * key, so the map costs nothing to run and cannot break on a billing change;
 * it is lazy-loaded so it never delays the rest of the page.
 */
export function OfficeMap() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="shell">
        <div className="shell-inner section-y">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* address column */}
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-7">Find us</Eyebrow>
              </Reveal>
              <HeadingLines
                lines={["Visit our", "Bengaluru office"]}
                mutedCount={1}
                size="d4"
              />

              <Reveal delay={120}>
                <address className="mt-7 not-italic text-[0.95rem] leading-relaxed text-ink-70">
                  {headOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </Reveal>

              <Reveal delay={160}>
                <dl className="mt-8 flex flex-col gap-5 border-t border-line pt-7">
                  <div>
                    <dt className="label text-ink-50">Open</dt>
                    <dd className="mt-1.5 text-[0.9rem] text-ink-70">
                      {hours}
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-ink-50">Call</dt>
                    <dd className="mt-1.5 text-[0.9rem]">
                      <a
                        href={hotlineHref}
                        className="text-brand underline underline-offset-4"
                      >
                        {hotline}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label text-ink-50">Email</dt>
                    <dd className="mt-1.5 text-[0.9rem]">
                      <a
                        href={`mailto:${email}`}
                        className="text-brand underline underline-offset-4"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-brand px-6 py-3.5 font-mono text-[0.72rem] uppercase leading-none tracking-[0.12em] text-paper shadow-[0_10px_24px_-12px_rgba(92,122,28,0.9)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-ink"
                >
                  <span>Get directions</span>
                  <ArrowIcon />
                </a>
              </Reveal>
            </div>

            {/* the map */}
            <Reveal delay={140} className="lg:col-span-8">
              <div className="relative">
                {/* the same lime block that sits behind the page heroes */}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-2/3 w-2/3 rounded-2xl bg-brand-soft"
                />
                <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                  <iframe
                    title="Influence India Services corporate office on Google Maps"
                    src={`https://maps.google.com/maps?q=${lat},${lng}&z=16&hl=en&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[20rem] w-full border-0 sm:h-[26rem] lg:h-[30rem]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
