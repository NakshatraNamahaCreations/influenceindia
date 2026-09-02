"use client";

import { useEffect, useRef, useState } from "react";

import { ArrowIcon } from "@/components/ui/button";
import { Media } from "@/components/ui/media";
import type { ServiceGroup } from "@/content/service-index";

/**
 * Pinned service index, matching the reference's Services page:
 *
 *  - left: a sticky nav listing every service in its group; the entry for the
 *    block currently in view is filled as a solid pill
 *  - centre: a sticky image that swaps to the active service, with a dashed rail
 *  - right: the detail blocks, which scroll; anything not active is dimmed
 *
 * The first group runs on black, the second on the light surface.
 */
export function ServiceIndex({
  groups,
  ctaLabel = "Let's talk",
  ctaHref = "/contact",
}: {
  groups: ServiceGroup[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const flat = groups.flatMap((group) => group.items);
  const [activeId, setActiveId] = useState(flat[0]?.id ?? "");
  const blockRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top of the reading band
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const id = visible[0].target.getAttribute("data-service-id");
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    blockRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeGroup = groups.find((g) => g.items.some((i) => i.id === activeId)) ?? groups[0];
  const dark = activeGroup?.tone === "dark";

  const scrollTo = (id: string) => {
    blockRefs.current.get(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`relative transition-colors duration-700 ${
        dark ? "invert-section" : "bg-surface text-ink"
      }`}
    >
      <div className="shell">
        <div className="shell-inner grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          {/* ---- sticky index nav ---- */}
          <nav
            aria-label="Services"
            className="lg:sticky lg:top-36 lg:col-span-3 lg:self-start"
          >
            {groups.map((group) => (
              <div key={group.label} className="mb-8">
                <p
                  className={`label mb-3 px-3 py-1.5 text-[0.6rem] ${
                    dark ? "bg-paper/10 text-paper/45" : "bg-ink/10 text-ink-50"
                  }`}
                >
                  {group.label}
                </p>
                <ul>
                  {group.items.map((item) => {
                    const active = item.id === activeId;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          aria-current={active ? "true" : undefined}
                          className={`label block w-full px-3 py-2.5 text-left text-[0.66rem] transition-colors duration-300 ${
                            active
                              ? dark
                                ? "bg-paper text-ink"
                                : "bg-ink text-paper"
                              : dark
                                ? "text-paper/70 hover:text-paper"
                                : "text-ink-50 hover:text-ink"
                          }`}
                        >
                          {item.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* ---- sticky image + dashed rail ---- */}
          <div className="hidden lg:sticky lg:top-36 lg:col-span-3 lg:block lg:self-start">
            <div className="relative">
              <span
                className={`absolute -left-8 top-0 bottom-0 border-l border-dashed ${
                  dark ? "border-paper/20" : "border-ink/20"
                }`}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden">
                {flat.map((item) => (
                  <div
                    key={item.id}
                    className={`transition-opacity duration-500 ${
                      item.id === activeId ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                    }`}
                  >
                    <Media
                      src={item.image}
                      alt={item.image ? item.name : ""}
                      label={item.imageLabel}
                      ratio="3/4"
                      tone={dark ? "dark" : "light"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ---- scrolling detail blocks ---- */}
          <div className="lg:col-span-6">
            {flat.map((item, i) => {
              const active = item.id === activeId;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  data-service-id={item.id}
                  ref={(el) => {
                    if (el) blockRefs.current.set(item.id, el);
                  }}
                  className={`scroll-mt-28 border-t py-12 transition-opacity duration-500 first:border-t-0 md:py-16 ${
                    dark ? "border-line-invert" : "border-line"
                  } ${active ? "opacity-100" : "opacity-35"}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="display d3">{item.name}</h3>
                      <p className="display d6 mt-3 font-normal normal-case tracking-normal">
                        {item.tagline}
                      </p>
                    </div>
                    <span
                      className={`label shrink-0 pt-2 text-[0.6rem] ${dark ? "text-paper/45" : "text-ink-30"}`}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col gap-5">
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className={`max-w-xl text-[0.95rem] leading-relaxed ${
                          dark ? "text-paper/85" : "text-ink-70"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <a
                    href={ctaHref}
                    className={`group mt-9 inline-flex items-center gap-3 rounded-[var(--radius-pill)] border px-6 py-3.5 font-mono text-[0.7rem] uppercase leading-none tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 ${
                      dark
                        ? "border-accent/45 bg-accent/10 text-accent hover:bg-accent hover:text-ink"
                        : "border-brand/45 bg-brand-soft text-brand hover:bg-brand hover:text-paper"
                    }`}
                  >
                    {ctaLabel}
                    <ArrowIcon />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
