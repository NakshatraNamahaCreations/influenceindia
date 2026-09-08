import type { Metadata } from "next";
import Link from "next/link";

import { ChargingForwardBody } from "@/components/sections/charging-forward-body";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ArrowIcon, Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { article } from "@/content/charging-forward";
import { articles, resourcesHero, resourcesIntro } from "@/content/resources";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Keep up with the trustable future of staffing and recruitment. Insights on the sustainable staffing industry, career growth and infrastructure.",
};

/**
 * A card is a link once its article has a page of its own; the ones still to be
 * written stay as plain previews rather than dead links.
 */
function ArticleShell({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const className = "flex h-full flex-col";
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <article className={className}>{children}</article>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        {...resourcesHero}
        image="/images/resources-hero.jpg"
        imageAlt="Attendees taking notes at an Influence India skill and careers session"
      />

      {/* page body below the hero */}
      <div className="scroll-stack">
        <section className="shell">
          <div className="shell-inner section-y">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="sticky-head lg:col-span-5">
                <Reveal>
                  <Eyebrow className="mb-7">Powerful insights</Eyebrow>
                </Reveal>
                <HeadingLines
                  lines={["Read our informative blogs"]}
                  size="d3"
                />
              </div>
              <Reveal
                delay={140}
                className="lg:col-span-6 lg:col-start-7 lg:pt-3"
              >
                <p className="lede">{resourcesIntro}</p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-px border-t border-line bg-line lg:grid-cols-3">
              {articles.map((post, i) => (
                <Reveal
                  key={post.title}
                  delay={i * 100}
                  className="group bg-paper"
                >
                  <ArticleShell href={post.href}>
                    <Media
                      src={post.image}
                      alt={post.title}
                      label={post.category}
                      ratio="16/10"
                      tone={i === 1 ? "brand" : "light"}
                    />
                    <div className="flex flex-1 flex-col gap-4 p-8">
                      <div className="flex items-center gap-3">
                        <span className="label text-brand">
                          {post.category}
                        </span>
                        <span className="label text-ink-30">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="display d5 transition-colors duration-500 group-hover:text-brand">
                        {post.title}
                      </h3>
                      <p className="text-[0.95rem] leading-relaxed text-ink-70">
                        {post.excerpt}
                      </p>
                      <span
                        className={`label mt-auto flex items-center gap-3 pt-6 ${
                          post.href
                            ? "text-brand"
                            : "text-ink-30"
                        }`}
                      >
                        {post.href ? "Read article" : "Coming soon"}
                        {post.href ? <ArrowIcon /> : null}
                      </span>
                    </div>
                  </ArticleShell>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <p className="label mt-10 text-ink-50">
                More articles are published here as the resource hub grows.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- featured article, in full ---------- */}
        <section className="border-t border-line bg-surface">
          <div className="shell">
            <div className="shell-inner pt-[clamp(3.5rem,6vw,6rem)]">
              <Reveal>
                <Eyebrow className="mb-7">Featured article</Eyebrow>
              </Reveal>
              <HeadingLines
                lines={["Charging forward:", "pioneering seamless", "staffing in India"]}
                mutedCount={2}
                size="d3"
              />
              <Reveal delay={140}>
                <p className="lede mt-7 max-w-3xl">{article.hero.body}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <Button href="/charging-forward" variant="ghost">
                    Open as its own page
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <ChargingForwardBody />

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
