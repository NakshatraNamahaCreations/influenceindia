export function Eyebrow({
  children,
  className = "",
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "invert" | "brand";
}) {
  const dot =
    tone === "invert" ? "bg-paper" : tone === "brand" ? "bg-brand" : "bg-ink";
  const text =
    tone === "invert"
      ? "text-paper/70"
      : tone === "brand"
        ? "text-brand"
        : "text-ink-50";

  return (
    <p className={`label flex items-center gap-2.5 ${text} ${className}`}>
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
