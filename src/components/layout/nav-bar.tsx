"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { contact, nav } from "@/content/site";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // a tap on a link already closes the menu; resetting on a route change also
  // covers the back button and anything else that navigates while it is open
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the menu, so the overlay is never a trap on a phone
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="shell">
          <div className="shell-inner flex h-[4.5rem] items-center justify-between gap-4 sm:h-[6rem] sm:gap-8 md:h-[7.5rem]">
            <Logo />

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Primary"
            >
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`nav-link group relative rounded-[var(--radius-pill)] px-4 py-3 transition-colors duration-300 hover:text-brand ${
                      active ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {/* rule draws in from the left on hover and stays put on
                        the current page */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-1.5 h-[2px] origin-left rounded-full bg-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                face="nav"
                className="hidden sm:inline-flex"
              >
                Contact us
              </Button>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="nav-link flex h-11 items-center gap-2.5 rounded-[var(--radius-pill)] border border-line px-3.5 sm:px-4 lg:hidden"
              >
                {open ? "Close" : "Menu"}
                <span className="flex flex-col gap-[3px]" aria-hidden="true">
                  <span
                    className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                      open ? "translate-y-[4px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-px w-4 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                      open ? "-translate-y-[4px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`invert-section fixed inset-0 z-30 flex flex-col justify-between gap-10 overflow-y-auto overscroll-contain pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[6.75rem] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:pt-[8.5rem] md:pt-[10rem] lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="shell flex flex-col" aria-label="Mobile">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`display group relative flex items-center gap-3.5 border-b border-line-invert py-4 text-[clamp(1.35rem,6.5vw,2.4rem)] transition-colors duration-300 hover:text-accent sm:gap-4 sm:py-5 ${
                pathname === item.href ? "text-accent" : ""
              }`}
              style={{
                transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
                transform: open ? "none" : "translateY(1rem)",
                opacity: open ? 1 : 0,
              }}
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  pathname === item.href
                    ? "w-6"
                    : "w-0 group-hover:w-6"
                }`}
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shell flex flex-col gap-6">
          <Button
            href="/contact"
            variant="invert"
            className="w-fit"
            onClick={() => setOpen(false)}
          >
            Contact us
          </Button>
          <div className="label flex flex-col gap-1 text-paper/65">
            <a
              href={`mailto:${contact.email}`}
              className="normal-case tracking-[0.02em] hover:text-paper"
            >
              {contact.email}
            </a>
            <span>{contact.headOffice.short}</span>
          </div>
        </div>
      </div>
    </>
  );
}
