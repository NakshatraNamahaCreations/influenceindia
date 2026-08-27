"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/**
 * The orange "work with us" disc from the reference's closing CTA. It rests
 * beside the heading and eases toward the pointer while the cursor is over the
 * section, with two lagging ghost discs producing the motion trail.
 *
 * Pointer tracking is enhancement only — with no JS, on touch, or under reduced
 * motion the disc simply sits at its resting position and works as a link.
 */
export function CtaCursorCircle({ href, label }: { href: string; label: string }) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const discRef = useRef<HTMLAnchorElement | null>(null);
  const ghostRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const layer = layerRef.current;
    const disc = discRef.current;
    if (!layer || !disc) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const section = layer.parentElement;
    if (!section) return;

    // resting offset relative to the disc's laid-out position
    let targetX = 0;
    let targetY = 0;
    const pos = [
      { x: 0, y: 0, lerp: 0.14 },
      { x: 0, y: 0, lerp: 0.09 },
      { x: 0, y: 0, lerp: 0.06 },
    ];

    const onMove = (event: PointerEvent) => {
      const discBox = disc.getBoundingClientRect();
      const restX = discBox.left + discBox.width / 2 - targetX;
      const restY = discBox.top + discBox.height / 2 - targetY;
      targetX = event.clientX - restX;
      targetY = event.clientY - restY;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    let frame = requestAnimationFrame(function tick() {
      pos.forEach((p) => {
        p.x += (targetX - p.x) * p.lerp;
        p.y += (targetY - p.y) * p.lerp;
      });

      disc.style.transform = `translate3d(${pos[0].x}px, ${pos[0].y}px, 0)`;
      ghostRefs.current.forEach((ghost, i) => {
        if (ghost) {
          ghost.style.transform = `translate3d(${pos[i + 1].x}px, ${pos[i + 1].y}px, 0)`;
        }
      });

      frame = requestAnimationFrame(tick);
    });

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={layerRef} className="pointer-events-none relative">
      {/* trailing ghosts */}
      {[0, 1].map((ghost) => (
        <span
          key={ghost}
          ref={(el) => {
            ghostRefs.current[ghost] = el;
          }}
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-accent"
          style={{ opacity: ghost === 0 ? 0.4 : 0.18 }}
        />
      ))}

      <Link
        ref={discRef}
        href={href}
        className="pointer-events-auto flex h-[6.25rem] w-[6.25rem] shrink-0 items-center justify-center rounded-full bg-accent px-3 text-center font-mono text-[0.66rem] uppercase leading-[1.35] tracking-[0.08em] text-paper will-change-transform"
      >
        {label}
      </Link>
    </div>
  );
}
