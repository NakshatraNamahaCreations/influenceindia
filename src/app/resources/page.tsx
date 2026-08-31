import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Media } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { articles, resourcesHero, resourcesIntro } from "@/content/resources";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Keep up with the trustable future of staffing and recruitment. Insights on the sustainable staffing industry, career growth and infrastructure.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero {...resourcesHero} />

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
              {articles.map((article, i) => (
                <Reveal
                  key={article.title}
                  delay={i * 100}
                  className="group bg-paper"
                >
                  <article className="flex h-full flex-col">
                    <Media
                      src={article.image}
                      alt={article.title}
                      label={article.category}
                      ratio="16/10"
                      tone={i === 1 ? "brand" : "light"}
                    />
                    <div className="flex flex-1 flex-col gap-4 p-8">
                      <div className="flex items-center gap-3">
                        <span className="label text-brand">
                          {article.category}
                        </span>
                        <span className="label text-ink-30">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="display d5 transition-colors duration-500 group-hover:text-brand">
                        {article.title}
                      </h3>
                      <p className="text-[0.95rem] leading-relaxed text-ink-70">
                        {article.excerpt}
                      </p>
                      <span className="label mt-auto flex items-center gap-3 pt-6 text-ink-50">
                        Read article
                        <ArrowIcon />
                      </span>
                    </div>
                  </article>
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

        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
