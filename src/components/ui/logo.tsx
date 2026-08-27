import Link from "next/link";

export function Logo({
  tone = "default",
  className = "",
}: {
  tone?: "default" | "invert";
  className?: string;
}) {
  const color = tone === "invert" ? "text-paper" : "text-ink";
  const sub = tone === "invert" ? "text-paper/50" : "text-ink-50";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${color} ${className}`}
      aria-label="Influence India Services — home"
    >
      <svg
        viewBox="0 0 44 24"
        className="h-5 w-9 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 12c0-4.4-2.7-8-6-8s-6 3.6-6 8 2.7 8 6 8 6-3.6 6-8Zm0 0c0 4.4 2.7 8 6 8s6-3.6 6-8-2.7-8-6-8-6 3.6-6 8Z"
          stroke="currentColor"
          strokeWidth="2.4"
          className="transition-[stroke] duration-300 group-hover:stroke-[var(--color-brand)]"
        />
        <path
          d="M32 4v16M38 4v16"
          stroke="currentColor"
          strokeWidth="2.4"
          opacity="0.25"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="display text-[0.95rem] tracking-[0.02em]">
          Influence India
        </span>
        <span className={`label mt-1 text-[0.58rem] tracking-[0.22em] ${sub}`}>
          Services
        </span>
      </span>
    </Link>
  );
}
