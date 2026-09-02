export const site = {
  name: "Influence India Services",
  shortName: "Influence India",
  tagline: "Your future dreams come true today",
  description:
    "Influence India Services is a sustainable staffing and job-providing-as-a-service company — sourcing, training, certifying and managing skilled workforces for corporate and non-corporate entities across India.",
  url: "https://projectinfluenceindia.com",
} as const;

export const nav = [
  { label: "About us", href: "/about" },
  { label: "What we do", href: "/what-we-do" },
  { label: "GTP", href: "/gtp" },
  { label: "Systems", href: "/systems" },
  { label: "Careers", href: "/careers" },
  { label: "Resources", href: "/resources" },
] as const;

export const contact = {
  headOffice: {
    label: "Corporate office",
    lines: [
      "69, 1st Floor, Opposite Kuntamaramma Temple",
      "Arehalli, AGS Layout Main Road",
      "Banashankari 3rd Stage",
      "Bengaluru 560061, Karnataka, India",
    ],
    /** one-line form for tight spots such as the mobile menu */
    short: "Banashankari 3rd Stage, Bengaluru 560061",
  },
  locations: ["Bengaluru", "Mumbai & Pune", "Chennai", "Hyderabad", "Gujarat", "Uttar Pradesh", "Bhubaneswar"],
  email: "contact@projectinfluenceindia.com",
  careersEmail: "careers@projectinfluenceindia.com",
  hotline: "1800 000 000",
  /** Digits only, with country code and no "+" — used to build the wa.me link. */
  whatsapp: "919606329992",
  hours: "Monday – Saturday / 10:00AM – 6:00PM",
} as const;

/** Slim ticker strip above the main navigation. */
export const ticker = [
  "Right staffing",
  "Elevate entity growth",
  "PAN-India sourcing",
  "Staffing services",
  "Managed services",
  "Skill adoption",
] as const;

export const tickerNews = [
  "OSTP — onsite skill training programs now live",
  "Grow Together Policy: 21 footprints published",
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "What we do", href: "/what-we-do" },
      { label: "Grow Together Policy", href: "/gtp" },
      { label: "Job eco-system", href: "/systems" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Right staffing", href: "/what-we-do#right-staffing" },
      { label: "Elevate entity growth", href: "/what-we-do#elevate-growth" },
      { label: "PAN-India sourcing & recruiting", href: "/what-we-do#pan-india" },
      { label: "Staffing services", href: "/what-we-do#staffing-services" },
      { label: "Managed services", href: "/what-we-do#managed-services" },
      { label: "Skill adoption", href: "/what-we-do#skill-adoption" },
      { label: "Onsite skill training (OSTP)", href: "/what-we-do#skill-adoption" },
      { label: "Unique platform", href: "/what-we-do#platform" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Corporate & IT services", href: "/what-we-do" },
      { label: "Hospitality", href: "/what-we-do" },
      { label: "Facility management", href: "/what-we-do" },
      { label: "Banking & financial services", href: "/what-we-do" },
      { label: "Retail & e-commerce", href: "/what-we-do" },
      { label: "Manufacturing & industrial", href: "/what-we-do" },
      { label: "Logistics & warehousing", href: "/what-we-do" },
      { label: "Healthcare support", href: "/what-we-do" },
    ],
  },
] as const;

/** Studio credit shown in the footer. Add `url` to make it a link. */
export const developer = {
  name: "Nakshatra Namaha Creations",
  url: "",
} as const;

export const legalLinks = [
  { label: "Code of conduct", href: "/gtp" },
  { label: "Privacy policy", href: "/contact" },
  { label: "Terms & conditions", href: "/contact" },
  { label: "Grow Together Policy", href: "/gtp" },
] as const;
