import Image from "next/image";

/**
 * Image slot. Pass `src` to render a real photograph; without one it renders a
 * designed placeholder that keeps the layout honest and names the shot that
 * belongs there. Swapping in artwork never changes the surrounding layout.
 */
export function Media({
  src,
  alt = "",
  label,
  ratio = "4/3",
  tone = "light",
  className = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  ratio?: string;
  tone?: "light" | "dark" | "brand";
  className?: string;
  priority?: boolean;
}) {
  const tones = {
    light: "bg-surface text-ink-30",
    dark: "bg-ink text-paper/45",
    brand: "bg-brand text-paper/75",
  } as const;

  return (
    <div
      className={`relative overflow-hidden ${tones[tone]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-cover"
          priority={priority}
        />
      ) : (
        <>
          {/* soft diagonal wash so the slot reads as intentional, not broken */}
          <span
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(135deg, currentColor 0%, transparent 45%, transparent 55%, currentColor 100%)",
              opacity: 0.12,
            }}
            aria-hidden="true"
          />
          {/* corner ticks */}
          <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-current opacity-40" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-current opacity-40" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-current opacity-40" aria-hidden="true" />
          <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-current opacity-40" aria-hidden="true" />
          {label ? (
            <span className="label absolute inset-x-4 bottom-4 text-center text-[0.6rem] opacity-70">
              {label}
            </span>
          ) : null}
        </>
      )}
    </div>
  );
}
