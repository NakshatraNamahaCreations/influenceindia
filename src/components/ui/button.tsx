import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "invert" | "invert-ghost";

const base =
  "group inline-flex items-center gap-3 rounded-[var(--radius-pill)] px-6 py-3.5 uppercase leading-none transition-colors duration-300 whitespace-nowrap";

/** Label treatment: the small tracked UI style by default, nav sizing in the header. */
const faces = {
  mono: "font-mono text-[0.72rem] tracking-[0.12em]",
  nav: "nav-link",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-brand",
  ghost:
    "border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper",
  invert: "bg-paper text-ink hover:bg-brand hover:text-paper",
  "invert-ghost":
    "border border-line-invert text-paper hover:bg-paper hover:text-ink",
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
