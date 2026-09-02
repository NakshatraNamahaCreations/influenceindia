import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "invert" | "invert-ghost";

const base =
  "group inline-flex items-center gap-3 rounded-[var(--radius-pill)] px-6 py-3.5 uppercase leading-none whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5";

/** Label treatment: the small tracked UI style by default, nav sizing in the header. */
const faces = {
  mono: "font-mono text-[0.72rem] tracking-[0.12em]",
  nav: "nav-link",
} as const;

/* Buttons lead with the logo's green rather than charcoal: brand on light
   grounds, the brighter lime on dark ones, each lifting on hover. */
const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-paper shadow-[0_10px_24px_-12px_rgba(92,122,28,0.9)] hover:bg-ink hover:shadow-[0_14px_28px_-12px_rgba(47,43,44,0.55)]",
  ghost:
    "border border-brand/45 bg-brand-soft text-brand hover:border-brand hover:bg-brand hover:text-paper",
  invert:
    "bg-accent text-ink shadow-[0_10px_26px_-12px_rgba(192,214,78,0.75)] hover:bg-paper",
  "invert-ghost":
    "border border-accent/45 bg-accent/10 text-accent hover:bg-accent hover:text-ink",
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path
        d="M1 8h13M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  variant?: Variant;
  face?: keyof typeof faces;
  className?: string;
  arrow?: boolean;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Button({
  href,
  variant = "primary",
  face = "mono",
  className = "",
  arrow = true,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${faces[face]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow ? <ArrowIcon /> : null}
    </Link>
  );
}
