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
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <Reveal>
          <Eyebrow
            tone={tone === "invert" ? "invert" : "default"}
            className="mb-6"
          >
            F.A.Q
          </Eyebrow>
        </Reveal>
        <HeadingLines
          lines={["Straightforward", "answers"]}
          size="d3"
          tone={tone === "invert" ? "invert" : "default"}
        />
        <Reveal delay={120}>
          <p className="lede mt-6">So you can move forward with confidence.</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 flex flex-col gap-4">
            <p
              className={`text-[0.9rem] ${tone === "invert" ? "text-paper/55" : "text-ink-50"}`}
            >
              Still have questions? Our team is here to help.
            </p>
            <Button
              href={`mailto:${contact.email}`}
              variant={tone === "invert" ? "invert" : "primary"}
              className="w-fit"
            >
              Email us
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-8">
        <Accordion items={items} invert={tone === "invert"} />
      </div>
    </div>
  );
}
