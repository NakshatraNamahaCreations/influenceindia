import Image from "next/image";
import Link from "next/link";

/**
 * The supplied Influence India Services lockup, used exactly as provided —
 * mark and wordmark together, nothing re-set in web type. The tagline is not
 * part of this lockup; it runs in the top bar instead.
 *
 * On dark grounds we swap to the `-light` variant, where the logo's charcoal
 * elements are lifted to white and the greens are preserved; the charcoal
 * would otherwise disappear against the footer.
 */
/* `md` is sized to sit just inside the header bar at each step of its own
   scale — 4.5rem on phones, 6rem from `sm`, 7.5rem from `md` — so the mark
   fills the bar without ever changing its height. */
const sizes = {
  md: "h-11 sm:h-16 md:h-[5.5rem]",
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
        width={1600}
        height={1081}
        priority
        className={`${sizes[size]} w-auto transition-transform duration-500 group-hover:scale-[1.03]`}
      />
    </Link>
  );
}
