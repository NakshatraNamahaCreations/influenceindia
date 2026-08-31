import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { ecosystem } from "@/content/ecosystem";

const CANVAS = { w: 1200, h: 780 };
const HUB = { cx: 600, cy: 400, r: 205 };

// where the labels and their dots sit on each side of the canvas
const LEFT = { text: 296, dot: 320 };
const RIGHT = { text: 904, dot: 880 };

/** Point on the hub ring at a given angle (degrees, 0 = right, clockwise). */
function ringPoint(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: HUB.cx + HUB.r * Math.cos(rad),
    y: HUB.cy + HUB.r * Math.sin(rad),
  };
}

/**
 * Capability diagram: the workforce at the centre, with labelled callouts
 * radiating outward on dashed leader lines.
 *
 * The whole thing is one SVG on a fixed viewBox, so lines, dots and labels
 * scale as a single unit and can never drift apart. Every leader line
 * terminates on a point computed from the ring's own geometry, so the joins
 * stay exact no matter how the angles are re-tuned in content.
 *
 * Below `md` the diagram is replaced by a plain list — hairline leader lines
 * are illegible at phone widths.
 */
export function EcosystemDiagram() {
  const { capabilities, centre } = ecosystem;

  return (
    <section className="relative isolate overflow-hidden border-t border-line bg-surface">
      {/* soft brand wash behind the hub */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[130px]"
        style={{ background: "var(--color-brand-bright)" }}
        aria-hidden="true"
      />

      <div className="shell">
        <div className="shell-inner section-y">
          {/* ---- heading ---- */}
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <Eyebrow className="mb-7">{ecosystem.eyebrow}</Eyebrow>
            </Reveal>
            <HeadingLines
              lines={ecosystem.headingLines}
              size="d3"
              className="text-center"
            />
            {/* payoff line carries the brand green, as the reference does */}
            <HeadingLines
              lines={[ecosystem.accentLine]}
              accentCount={1}
              size="d3"
              className="text-center"
            />
            <Reveal delay={200}>
              <p className="mx-auto mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-ink-70">
                {ecosystem.body}
              </p>
            </Reveal>
          </div>

          {/* ---- diagram (md and up) ---- */}
          <Reveal delay={120} className="mt-12 hidden md:block">
            <svg
              viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`}
              className="h-auto w-full"
              role="img"
              aria-label="Influence India Services capabilities radiating from the workforce at the centre: right staffing, PAN-India sourcing, onsite skill training, managed services, dedicated operation system, and 24/7 client support."
            >
              <defs>
                <clipPath id="eco-hub-clip">
                  <circle cx={HUB.cx} cy={HUB.cy} r={HUB.r} />
                </clipPath>
                <radialGradient id="eco-hub-veil" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="var(--color-ink)" stopOpacity="0" />
                  <stop offset="100%" stopColor="var(--color-ink)" stopOpacity="0.35" />
                </radialGradient>
              </defs>

              {/* concentric rings */}
              <circle
                cx={HUB.cx}
                cy={HUB.cy}
                r={HUB.r + 86}
                fill="none"
                stroke="var(--color-ink)"
                strokeOpacity="0.08"
                strokeDasharray="2 10"
              />
              <circle
                cx={HUB.cx}
                cy={HUB.cy}
                r={HUB.r + 44}
                fill="none"
                stroke="var(--color-brand)"
                strokeOpacity="0.22"
                strokeDasharray="3 9"
              />

              {/* the workforce at the centre */}
              <image
                href={centre.src}
                x={HUB.cx - HUB.r}
                y={HUB.cy - HUB.r}
                width={HUB.r * 2}
                height={HUB.r * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#eco-hub-clip)"
              />
              <circle
                cx={HUB.cx}
                cy={HUB.cy}
                r={HUB.r}
                fill="url(#eco-hub-veil)"
                clipPath="url(#eco-hub-clip)"
              />
              <circle
                cx={HUB.cx}
                cy={HUB.cy}
                r={HUB.r}
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth="3"
              />

              {capabilities.map((cap) => {
                const left = cap.side === "left";
                const anchor = left ? LEFT : RIGHT;
                const end = ringPoint(cap.angle);
                // horizontal run out of the label, then a drop onto the ring
                const path = `M ${anchor.dot} ${cap.labelY} H ${end.x} V ${end.y}`;

                return (
                  <g key={cap.id}>
                    <path
                      d={path}
                      fill="none"
                      stroke="var(--color-ink)"
                      strokeOpacity="0.3"
                      strokeWidth="1.5"
                      strokeDasharray="5 6"
                    />
                    {/* terminal marker, sitting exactly on the ring */}
                    <circle cx={end.x} cy={end.y} r="5" fill="var(--color-brand)" />
                    {/* label dot */}
                    <circle
                      cx={anchor.dot}
                      cy={cap.labelY}
                      r="9"
                      fill="var(--color-brand)"
                    />
                    <circle
                      cx={anchor.dot}
                      cy={cap.labelY}
                      r="15"
                      fill="none"
                      stroke="var(--color-brand)"
                      strokeOpacity="0.3"
                    />
                    <text
                      x={anchor.text}
                      y={cap.labelY}
                      textAnchor={left ? "end" : "start"}
                      fill="var(--color-brand)"
                      style={{
                        fontFamily: "var(--font-nav)",
                        fontWeight: 600,
                        fontSize: "27px",
                      }}
                    >
                      <tspan x={anchor.text} dy="-6">
                        {cap.lines[0]}
                      </tspan>
                      <tspan x={anchor.text} dy="32">
                        {cap.lines[1]}
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </svg>
          </Reveal>

          {/* ---- list fallback (below md) ---- */}
          <div className="mt-12 md:hidden">
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border-[3px] border-brand">
              <Image
                src={centre.src}
                alt={centre.alt}
                fill
                sizes="14rem"
                className="object-cover"
              />
            </div>
            <ul className="mt-10 grid gap-px border-t border-line bg-line sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li
                  key={cap.id}
                  className="flex items-center gap-3 bg-surface px-5 py-5"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <span className="nav-link text-ink">{cap.lines.join(" ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
