import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/content/site";

export function FaqSection({
  items,
  tone = "default",
}: {
  items: readonly { q: string; a: string }[];
  tone?: "default" | "invert";
}) {
  const invert = tone === "invert";

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* ---- left rail: heading + the "still stuck?" card, sticky on desktop ---- */}
      <div className="sticky-head lg:col-span-4">
        <Reveal>
          <Eyebrow tone={invert ? "invert" : "default"} className="mb-6">
            F.A.Q
          </Eyebrow>
        </Reveal>

        <HeadingLines
          lines={["Straightforward", "answers"]}
          size="d4"
          tone={invert ? "invert" : "default"}
        />

        <Reveal delay={120}>
          <p
            className={`mt-5 max-w-sm text-[0.95rem] leading-relaxed ${
              invert ? "text-paper/75" : "text-ink-70"
            }`}
          >
            So you can move forward with confidence.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p
            className={`label mt-7 flex items-center gap-3 ${
              invert ? "text-paper/55" : "text-ink-30"
            }`}
          >
            {String(items.length).padStart(2, "0")} questions
            <span
              aria-hidden="true"
              className={`h-px flex-1 ${invert ? "bg-line-invert" : "bg-line"}`}
            />
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div
            className={`mt-7 rounded-2xl border p-6 ${
              invert
                ? "border-white/12 bg-white/[0.04]"
                : "border-line-soft bg-surface"
            }`}
          >
            <p
              className={`text-[0.9rem] leading-relaxed ${
                invert ? "text-paper/80" : "text-ink-70"
              }`}
            >
              Still have questions? Our team answers within one working day.
            </p>
            <Button
              href={`mailto:${contact.email}`}
              variant={invert ? "invert" : "primary"}
              className="mt-5 w-fit"
            >
              Email us
            </Button>
          </div>
        </Reveal>
      </div>

      {/* ---- the questions ---- */}
      <div className="lg:col-span-8">
        <Accordion items={items} invert={invert} />
      </div>
    </div>
  );
}
