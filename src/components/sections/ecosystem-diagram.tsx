import { Eyebrow } from "@/components/ui/eyebrow";
import { HeadingLines } from "@/components/ui/heading-lines";
import { Reveal } from "@/components/ui/reveal";
import { ecosystem } from "@/content/ecosystem";

const CANVAS = { w: 1200, h: 760 };
const MARK = { x: 390, y: 236, w: 420, h: 325 };

// where the labels and their dots sit on each side of the canvas
const LEFT = { text: 300, dot: 322 };
const RIGHT = { text: 900, dot: 878 };

/**
 * Capability diagram: the brand mark at the centre with labelled callouts
 * radiating outward on dashed leader lines.
 *
 * The whole thing is one SVG on a fixed viewBox, so the lines, dots and labels
 * can never drift out of alignment as the viewport changes — they scale as a
 * single unit. Below `md` the diagram is replaced by a plain list, since
 * hairline leader lines are illegible at phone widths.
 */
export function EcosystemDiagram() {
  const { capabilities } = ecosystem;

  return (
    <section className="border-t border-line bg-surface">
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
          <Reveal delay={120} className="mt-14 hidden md:block">
            <svg
              viewBox={`0 0 ${CANVAS.w} ${CANVAS.h}`}
              className="h-auto w-full"
              role="img"
              aria-label="Influence India Services capabilities: right staffing, PAN-India sourcing, onsite skill training, managed services, dedicated operation system, and 24/7 client support."
            >
              {/* soft halo behind the mark */}
              <circle
                cx={CANVAS.w / 2}
                cy={400}
                r={230}
                fill="var(--color-brand-soft)"
                opacity="0.7"
              />
              <circle
                cx={CANVAS.w / 2}
                cy={400}
                r={230}
                fill="none"
                stroke="var(--color-brand)"
                strokeOpacity="0.18"
                strokeDasharray="3 7"
              />

              <image
                href="/brand/logo-mark.png"
                x={MARK.x}
                y={MARK.y}
                width={MARK.w}
                height={MARK.h}
                preserveAspectRatio="xMidYMid meet"
              />

              {capabilities.map((cap) => {
                const left = cap.side === "left";
                const anchor = left ? LEFT : RIGHT;
                const path = `M ${anchor.dot} ${cap.y} H ${cap.elbowX} V ${cap.endY}`;

                return (
                  <g key={cap.id}>
                    <path
                      d={path}
                      fill="none"
                      stroke="var(--color-ink)"
                      strokeOpacity="0.28"
                      strokeWidth="1.5"
                      strokeDasharray="5 6"
                    />
                    <circle
                      cx={anchor.dot}
                      cy={cap.y}
                      r="8"
                      fill="var(--color-brand)"
                    />
                    <text
                      x={anchor.text}
                      y={cap.y}
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
          <ul className="mt-12 grid gap-px border-t border-line bg-line sm:grid-cols-2 md:hidden">
            {capabilities.map((cap) => (
              <li key={cap.id} className="flex items-center gap-3 bg-surface px-5 py-5">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <span className="nav-link text-ink">
                  {cap.lines.join(" ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
