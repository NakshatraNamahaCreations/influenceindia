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
          <div className="shell-inner flex h-[6rem] items-center justify-between gap-8 md:h-[7.5rem]">
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
                    className={`nav-link rounded-[var(--radius-pill)] px-4 py-3 transition-colors duration-300 hover:text-brand ${
                      active ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
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
                className="nav-link flex h-11 items-center gap-2.5 rounded-[var(--radius-pill)] border border-line px-4 lg:hidden"
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
        className={`invert-section fixed inset-0 z-30 flex flex-col justify-between pt-[11rem] pb-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
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
              className="display d4 border-b border-line-invert py-5 transition-colors duration-300 hover:text-accent"
              style={{
                transitionDelay: open ? `${120 + i * 45}ms` : "0ms",
                transform: open ? "none" : "translateY(1rem)",
                opacity: open ? 1 : 0,
              }}
            >
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
            <a href={`mailto:${contact.email}`} className="hover:text-paper">
              {contact.email}
            </a>
            <span>{contact.headOffice.short}</span>
          </div>
        </div>
      </div>
    </>
  );
}
