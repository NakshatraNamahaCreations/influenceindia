import Image from "next/image";
import Link from "next/link";

/**
 * The supplied Influence India Services lockup, used exactly as provided —
 * mark, wordmark and tagline together, nothing re-set in web type.
 *
 * On dark grounds we swap to the `-light` variant, where the logo's charcoal
 * elements are lifted to white and the greens are preserved; the charcoal
 * would otherwise disappear against the footer.
 */
const sizes = {
  md: "h-14 md:h-20",
  lg: "h-24 md:h-32",
} as const;

export function Logo({
  tone = "default",
  size = "md",
  className = "",
}: {
  tone?: "default" | "invert";
  size?: keyof typeof sizes;
  className?: string;
}) {
  const invert = tone === "invert";

  return (
    <Link
      href="/"
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label="Influence India Services — home"
    >
      <Image
        src={invert ? "/brand/logo-full-light.png" : "/brand/logo-full.png"}
        alt=""
        width={1200}
        height={894}
        priority
        className={`${sizes[size]} w-auto transition-transform duration-500 group-hover:scale-[1.03]`}
      />
    </Link>
  );
}
