import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { NavBar } from "@/components/layout/nav-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { TickerBar } from "@/components/layout/ticker-bar";
import { site } from "@/content/site";

import "./globals.css";

/**
 * One family across the whole site — display headings, body copy, navigation
 * and the small uppercase labels all resolve to Montserrat.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Sustainable staffing and job solutions in India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning: browser extensions (Grammarly, QuillBot, etc.)
       inject attributes onto <html> before React hydrates, which otherwise
       reports a false mismatch. It only covers this element's attributes. */
    <html
      lang="en-IN"
      className={montserrat.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-pill)] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <TickerBar />
        <NavBar />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
