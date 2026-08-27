export const hero = {
  eyebrow: "Influence India Services",
  headingLines: ["One system", "Every step of the career"],
  mutedCount: 1,
  video: "/videos/home-team.mp4",
  poster: "/images/home-poster.jpg",
  body:
    "Sourcing, skill training, certification and onsite management — unified across India under one accountable team. We are emerging the opportunities to the un-sourced world.",
  ctas: [
    { label: "Talk with us", href: "/contact", variant: "primary" as const },
    { label: "What we do", href: "/what-we-do", variant: "ghost" as const },
  ],
};

export const promise = {
  // split into four lines so the first two can sit muted behind the payoff,
  // matching the reference's two-tone display heading
  headingLines: ["We build the", "workforce.", "We own", "the outcome."],
  mutedCount: 2,
  body: [
    "With sourcing, training, deployment and onsite management under one roof and one accountable team, your workforce performs the way your business demands: predictably, transparently, and without excuses.",
    "That means no finger-pointing between vendors. No attrition lost in handoffs. Just one team, accountable from the first interview to everyday performance on your floor.",
  ],
  cta: { label: "Learn more about us", href: "/about" },
  statsIntro: "From countless journeys, clarity emerges",
  stats: [
    { value: 100, suffix: "%", label: "Skilled workforce target" },
    { value: 250, suffix: "+", label: "Companies collaboration" },
    { value: 30, suffix: "+", label: "Cities across India" },
  ],
};

export const servicesIntro = {
  headingLines: ["Everything your workforce needs.", "Under one system."],
  mutedCount: 1,
  body: [
    "From sourcing to skilling, from certification to onsite management, we bring an integrated system across every staffing discipline.",
    "Our integrated service network means one partner, one point of contact, and total visibility from enrolment to deployment.",
  ],
  cta: { label: "Our services", href: "/what-we-do" },
};

export const reliability = {
  eyebrow: "Reliability",
  headingLines: ["Reliability", "at every milestone"],
  body:
    "Fully skilled workforce and trainers, managed end to end — ensuring quality, transparency, visibility, endurance, efficiency and high performance.",
  features: [
    {
      title: ["Real-time", "workforce", "monitoring"],
      body:
        "A central Dedicated Operation System (DOS) tracks attendance, rosters and performance at every milestone. Live visibility means faster decisions and zero guesswork.",
    },
    {
      title: ["PAN-India", "network", "coverage"],
      body:
        "From Bengaluru to every major corridor, our sourcing and training network spans the cities and sectors your business relies on.",
    },
    {
      title: ["24/7", "client", "support"],
      body:
        "Real people, 365 days a year. Whether it is a routine roster update or an urgent replacement, we pick up the phone and we own the outcome.",
    },
  ],
};

export const disruption = {
  headingLines: ["Built for entities that", "can't afford", "disruption."],
  mutedCount: 2,
  body:
    "Zero investment for entities on training, enhancement and enrolment programs. Up to 65% more affordable than your current cost of recruitment, with zero cost escalation across multi-year agreements.",
  cards: [
    {
      value: "65%",
      title: "More affordable",
      body: "Up to 65% more affordable than your current investment in recruits, with a flat multi-year budget.",
    },
    {
      value: "0",
      title: "Zero capex",
      body: "Zero capital expenditure and zero investment on training, enhancement and enrolment programs.",
    },
    {
      value: "100%",
      title: "Owned management",
      body: "100% owned management provides complete control and availability of skilled manpower.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Staffing that works as hard as you do.",
  items: [
    {
      title: "One point of contact",
      body: "No more chasing multiple vendors. One team manages sourcing, training, deployment and replacement end to end.",
    },
    {
      title: "Full workforce visibility",
      body: "Transparent, data-driven recruitment with real-time monitoring and proactive updates before issues become gaps.",
    },
    {
      title: "Compliance you can trust",
      body: "Trained, verified and certified employees — background checks and police verification (PVC) completed before deployment.",
    },
    {
      title: "Flat, transparent pricing",
      body: "Sector-friendly pricing and zero capital expenditure, for a financially advantageous skilled working solution.",
    },
    {
      title: "Fast replacement resolution",
      body: "Assistance for streamlined staffing, managing and replacement — so an absence never becomes an outage.",
    },
  ],
};

export const testimonialsSection = {
  eyebrow: "Our people",
  heading: "Trusted by entities and aspirants across India",
  items: [
    {
      quote:
        "I started my journey as a marketing executive and today I am proud to be working as a marketing senior manager, leading a wonderful team. Over the years I have witnessed how tremendously Influence India can transform. Along with the company's progress I too have grown, both personally and professionally.",
      photo: "/images/portrait-1.jpg",
      name: "Mohan Arya",
      role: "Senior Manager, Marketing",
    },
    {
      quote:
        "The onsite management team and the central operation system removed the guesswork from our rosters. We stopped chasing vendors and started planning our floor with confidence.",
      photo: "/images/portrait-2.jpg",
      name: "Operations Lead",
      role: "Corporate client, Bengaluru",
    },
    {
      quote:
        "I joined as a fresher. The training, the assessment and the certification made me employable in weeks — and the placement was equivalent to my education.",
      photo: "/images/portrait-3.jpg",
      name: "Certified Aspirant",
      role: "Service provider, Karnataka",
    },
  ],
};

export const closingCta = {
  headingLines: ["Ready to", "drive", "change?"],
  body:
    "We are here to help you grow without hassle. No call centres, no runaround — just experienced people ready to help.",
  ctas: [
    { label: "Work with us", href: "/contact", variant: "primary" as const },
    { label: "Explore careers", href: "/careers", variant: "ghost" as const },
  ],
};
