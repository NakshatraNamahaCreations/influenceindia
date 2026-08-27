export type Service = {
  id: string;
  index: string;
  title: [string, string];
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "right-staffing",
    index: "01",
    title: ["Right", "Staffing"],
    summary:
      "Empower your corporate and non-corporate staffing needs with certified aspirants, matched to the roles you actually run.",
    points: [
      "Staffing plans tailored to your needs",
      "Optimising staffing strategies with analytics",
      "Reliable, affordable, skilful and certified staffing",
      "Advanced technology-driven, one-spot staffing solution",
      "Seamless opportunities, implementation and recruitment",
    ],
  },
  {
    id: "elevate-growth",
    index: "02",
    title: ["Elevate", "Entity Growth"],
    summary:
      "Elevate your entity's growth by embracing a sustainable recruiting solution built on premium, well-mannered, skilled aspirants.",
    points: [
      "Premium, well-mannered, skilled aspirants and knowledgeable trainers",
      "Convenient and intuitive platform for efficient staffing",
      "Stress-free, reliable, affordable recruitment and managing",
      "Assistance for streamlined staffing, managing and replacement",
      "Optimise budget potential while recruiting with cost efficiency",
    ],
  },
  {
    id: "pan-india",
    index: "03",
    title: ["PAN-India", "Sourcing & Recruiting"],
    summary:
      "A seamless opportunity experience, anytime and from anywhere, powered by extensive infrastructure across the country.",
    points: [
      "Seamless opportunity experience anytime, from anywhere",
      "Extensive infrastructure to manage staffing, recruiting and training",
      "Strategic collaboration to ensure competitive quality staffing",
      "24/7, 365 days helplines, client support and solutions",
      "Centralised locations with uninterrupted flow of skilled manpower",
    ],
  },
  {
    id: "staffing-services",
    index: "04",
    title: ["Staffing", "Services"],
    summary:
      "Sustainable, efficient and replacement staffing service for your entity, delivered through a tech-driven system.",
    points: [
      "Efficient and reliable staffing solutions using a tech-driven system",
      "Significant savings from sustainable staffing",
      "Seamless integration into existing operations and working patterns",
      "Customised strategies for a suitable work space and ecosystem",
      "Replacement cover that keeps your floor running",
    ],
  },
  {
    id: "managed-services",
    index: "05",
    title: ["Managed", "Services"],
    summary:
      "Sustainable staffing for end-to-end recruitment needs, provided to PAN-India locations under one operating centre.",
    points: [
      "Managed services provided across PAN-India locations",
      "Proprietary staffing management solution",
      "Seamless integration with experienced trainers and management",
      "Centralised network and team operating centre for efficiency and transparency",
      "Experts to optimise skilling, educating and ensure zero compliance gaps",
    ],
  },
  {
    id: "skill-adoption",
    index: "06",
    title: ["Skill", "Adoption"],
    summary:
      "Accelerating your work efficiency and quality — future-proofing your recognition through onsite skill training programs.",
    points: [
      "Empowering organisations to adopt skill and drive positive change",
      "Tailored end-to-end staffing management for corporate and hospitality",
      "Deployment of suitable staff to a work structure tailored to fit",
      "Customised patterns for every individual sector and industry",
      "Expert training and support for every individual entity and staffing need",
    ],
  },
];

export const pillars = [
  {
    index: "01",
    title: "Advanced system technology",
    body: "Fully skilled workforce and trainers, managed to ensure quality, transparency, visibility, endurance, efficiency and high performance.",
  },
  {
    index: "02",
    title: "Robust training infrastructure",
    body: "Supports the seamless operation of our workforce — eliminating capability gaps and enabling hassle-free working management.",
  },
  {
    index: "03",
    title: "Flat budget, affordable",
    body: "Sector-friendly pricing and zero capital expenditure for a financially advantageous skilled working solution.",
  },
  {
    index: "04",
    title: "Integrated offering",
    body: "Combines trainers, skilled workforce, cutting-edge technology and dedicated onsite and offsite trainer teams for a holistic solution.",
  },
];

export const disruptors = [
  "100% owned management provides complete control and availability of manpower",
  "Zero capex — quick and easy system while recruiting an employee",
  "A connected team provides safety and quality assurance",
  "Trained, verified and certified employees",
  "Flat budget, multi-year, with zero training and enhancement charges",
];

export const assuranceStack = [
  {
    title: "Trained and certified aspirants",
    body: "Every service provider is skilled, assessed, certified and police-verified before deployment.",
  },
  {
    title: "Onsite managing team + DOS",
    body: "A dedicated operation system with real-time monitoring, backed by an onsite management team.",
  },
  {
    title: "Data science and analytics",
    body: "Proprietary tools and algorithms that optimise staffing based on a real understanding of corporate demand.",
  },
  {
    title: "Integrated facility management",
    body: "Technology-driven systems that manage the working people and the workplace together.",
  },
];

export const platform = {
  eyebrow: "Unique platform",
  heading: "Unlocks insights. Maximises impact. Delivers convenience.",
  points: [
    "Comprehensive features and cutting-edge technology for an ever-growing industry",
    "Advanced telematics for real-time availability of recruiters and recruitments",
    "Robust security systems and compliance measures implemented across the work sector",
    "Tracking app with 100% placement and sourcing facility",
    "Sustainable, scalable and secure platform for all your job and recruitment needs",
  ],
};

export const aspirantsApart = [
  { title: "Performance incentives", body: "Performance-linked incentives that pay for outstanding delivery." },
  { title: "Certified & qualified", body: "Service providers arrive certified, qualified and skilled for the role." },
  { title: "Hours of skill training", body: "Continuous skill training hours drive service provider satisfaction." },
  { title: "Quality & transparency", body: "High-quality productivity and transparency, ensured and measured." },
];

/** Displayed in the "know more" enquiry form. */
export const enquiryTopics = [
  "Right staffing",
  "Elevate entity growth",
  "PAN-India sourcing & recruiting",
  "Staffing services",
  "Managed services",
  "Skill adoption / OSTP",
];
