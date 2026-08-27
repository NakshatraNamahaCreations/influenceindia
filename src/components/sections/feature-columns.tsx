import { Reveal } from "@/components/ui/reveal";

export function FeatureColumns({
  features,
  tone = "default",
}: {
  features: readonly { title: readonly string[]; body: string }[];
  tone?: "default" | "invert";
}) {
  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/65" : "text-ink-70";
  const index = tone === "invert" ? "text-paper/30" : "text-ink-30";

  return (
    <div className={`grid border-t ${border} md:grid-cols-3`}>
      {features.map((feature, i) => (
        <Reveal
          key={feature.title.join(" ")}
          delay={i * 110}
          className={`flex flex-col gap-8 border-b ${border} py-10 md:border-b-0 ${
            i > 0 ? `md:border-l ${border} md:pl-9` : "md:pr-9"
          } ${i === 1 ? "md:px-9" : ""}`}
        >
          <span className={`label ${index}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="display d5">
            {feature.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className={`text-[0.95rem] leading-relaxed ${muted}`}>
            {feature.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
