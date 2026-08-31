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
    "Every service radiates from one accountable team — sourced, skilled, certified, deployed and monitored under a single system.",

  /**
   * Six capabilities placed around the mark. `side` decides which way the
   * label sits; the coordinates are on the diagram's 1200×760 canvas.
   */
  capabilities: [
    {
      id: "right-staffing",
      lines: ["Right", "Staffing"],
      side: "left" as const,
      y: 150,
      elbowX: 452,
      endY: 292,
    },
    {
      id: "pan-india",
      lines: ["PAN-India", "Sourcing"],
      side: "left" as const,
      y: 340,
      elbowX: 416,
      endY: 402,
    },
    {
      id: "ostp",
      lines: ["Onsite Skill", "Training"],
      side: "left" as const,
      y: 578,
      elbowX: 462,
      endY: 486,
    },
    {
      id: "managed-services",
      lines: ["Managed", "Services"],
      side: "right" as const,
      y: 168,
      elbowX: 762,
      endY: 300,
    },
    {
      id: "dos",
      lines: ["Dedicated", "Operation System"],
      side: "right" as const,
      y: 356,
      elbowX: 792,
      endY: 414,
    },
    {
      id: "support",
      lines: ["24/7 Client", "Support"],
      side: "right" as const,
      y: 590,
      elbowX: 748,
      endY: 502,
    },
  ],
};
