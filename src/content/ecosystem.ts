/**
 * "At the centre of the professional ecosystem" — the capability diagram.
 * The heading is lifted almost verbatim from page 1 of the handwritten brief.
 */
export const ecosystem = {
  eyebrow: "The ecosystem",
  headingLines: [
    "At the centre of the",
    "professional ecosystem,",
    "we lead the imagination and",
  ],
  accentLine: "creation of your career, today!",
  body:
    "Your workforce sits at the centre — sourced, skilled, certified, deployed and monitored by one accountable team. Every service radiates from it.",

  centre: {
    src: "/images/ecosystem-centre.jpg",
    alt: "An Influence India team together in the workplace",
  },

  /**
   * Six capabilities placed around the hub. `angle` is where the leader line
   * meets the centre ring (degrees, 0 = right, clockwise); `labelY` is where
   * the label sits. Both are resolved against the diagram's 1200×780 canvas,
   * so a leader line always terminates exactly on the ring.
   */
  capabilities: [
    { id: "right-staffing", lines: ["Right", "Staffing"], side: "left" as const, labelY: 150, angle: 215 },
    { id: "pan-india", lines: ["PAN-India", "Sourcing"], side: "left" as const, labelY: 400, angle: 180 },
    { id: "ostp", lines: ["Onsite Skill", "Training"], side: "left" as const, labelY: 620, angle: 145 },
    { id: "managed-services", lines: ["Managed", "Services"], side: "right" as const, labelY: 150, angle: 325 },
    { id: "dos", lines: ["Dedicated", "Operation System"], side: "right" as const, labelY: 400, angle: 0 },
    { id: "support", lines: ["24/7 Client", "Support"], side: "right" as const, labelY: 620, angle: 35 },
  ],
};
