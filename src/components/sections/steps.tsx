import { Reveal } from "@/components/ui/reveal";

export function Steps({
  steps,
  tone = "default",
}: {
  steps: readonly { step: string; title: string; body: string }[];
  tone?: "default" | "invert";
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/65" : "text-ink-70";

  return (
    <ol className={`border-t ${border}`}>
      {steps.map((item, i) => (
        <Reveal
          as="li"
          key={item.step}
          delay={i * 80}
          className={`border-b ${border}`}
        >
          <div className="grid gap-5 py-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <span className={`label ${tone === "invert" ? "text-accent" : "text-brand"}`}>{item.step}</span>
              <p className="display d2 mt-3 leading-none opacity-15">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <h3 className="display d5 md:col-span-4">{item.title}</h3>
            <p
              className={`text-[0.95rem] leading-relaxed ${muted} md:col-span-5`}
            >
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
