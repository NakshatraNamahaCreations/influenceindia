import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";

/**
 * The chapter layout shared by the long-form brief pages (/driving-the-future,
 * /charging-forward): a sticky numbered heading beside the prose, with an
 * optional checklist beneath. Two grounds, one structure — light chapters sit
 * on paper, dark ones on the charcoal with a lime glow, so a long read
 * alternates instead of running flat.
 */

export type BriefChapter = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  body: readonly string[];
  points?: readonly string[];
};

/** Small tick used through the chapter checklists. */
export function Tick({ tone = "default" }: { tone?: "default" | "invert" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`mt-[0.35rem] h-3.5 w-3.5 shrink-0 ${
        tone === "invert" ? "text-accent" : "text-brand"
      }`}
    >
      <path
        d="M2 8.5 6 12.5 14 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ChapterLight({
  chapter,
  surface = false,
}: {
  chapter: BriefChapter;
  /** sit the chapter on the off-white rather than pure paper */
  surface?: boolean;
}) {
  return (
    <section
      id={chapter.id}
      className={`scroll-mt-32 border-t border-line ${
        surface ? "bg-surface" : "bg-paper"
      }`}
    >
      <div className="shell">
        <div className="shell-inner section-y">
          <ChapterBody chapter={chapter} tone="default" />
        </div>
      </div>
    </section>
  );
}

export function ChapterDark({ chapter }: { chapter: BriefChapter }) {
  return (
    <section
      id={chapter.id}
      className="invert-section relative isolate scroll-mt-32 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_100%_100%,rgba(192,214,78,0.14),transparent_60%)]"
      />
      <div className="shell">
        <div className="shell-inner section-y">
          <ChapterBody chapter={chapter} tone="invert" />
        </div>
      </div>
    </section>
  );
}

export function ChapterBody({
  chapter,
  tone,
}: {
  chapter: BriefChapter;
  tone: "default" | "invert";
}) {
  const invert = tone === "invert";

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="sticky-head lg:col-span-5">
          <Reveal>
            <Eyebrow tone={invert ? "invert" : "default"} className="mb-7">
              {chapter.index} — {chapter.kicker}
            </Eyebrow>
          </Reveal>
          <HeadingLines
            lines={[chapter.title]}
            size="d4"
            tone={tone}
            className="max-w-[16ch]"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {chapter.body.map((para, i) => (
            <Reveal key={para} delay={120 + i * 70}>
              <p
                className={
                  i === 0
                    ? "lede"
                    : `mt-5 text-[0.95rem] leading-relaxed ${
                        invert ? "text-paper/80" : "text-ink-70"
                      }`
                }
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {chapter.points ? (
        <ul
          className={`mt-14 grid gap-px sm:grid-cols-2 ${
            invert ? "bg-line-invert-soft" : "bg-line"
          }`}
        >
          {chapter.points.map((point, i) => (
            <Reveal
              key={point}
              delay={(i % 2) * 80}
              as="li"
              className={`flex gap-3.5 px-6 py-7 text-[0.92rem] leading-relaxed ${
                invert ? "bg-ink text-paper/85" : "bg-paper text-ink-70"
              }`}
            >
              <Tick tone={invert ? "invert" : "default"} />
              {point}
            </Reveal>
          ))}
        </ul>
      ) : null}
    </>
  );
}
