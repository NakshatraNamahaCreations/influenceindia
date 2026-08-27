export type IndexedService = {
  id: string;
  name: string;
  tagline: string;
  paragraphs: [string, string];
  image?: string;
  imageLabel: string;
};

export type ServiceGroup = {
  label: string;
  tone: "dark" | "light";
  items: IndexedService[];
};

/**
 * Two groups feeding the pinned service index. The first runs on black, the
 * second on the light surface — the reference switches theme between groups.
 */
export const serviceGroups: ServiceGroup[] = [
  {
    label: "Core services",
    tone: "dark",
    items: [
      {
        id: "right-staffing",
        name: "Right staffing",
        tagline: "The right people. Matched to the role.",
        paragraphs: [
          "Staffing plans tailored to your corporate and non-corporate needs, drawing on a pool of certified aspirants who are trained before they ever reach your floor. We optimise staffing strategies with analytics rather than guesswork.",
          "Reliable, affordable, skilful and certified staffing delivered through one advanced, technology-driven platform — covering seamless opportunities, implementation and recruitment from a single point of contact.",
        ],
        image: "/images/svc-right-staffing.jpg",
        imageLabel: "Certified aspirants on shift",
      },
      {
        id: "elevate-growth",
        name: "Elevate entity growth",
        tagline: "Growth, without the hiring drag.",
        paragraphs: [
          "Elevate your entity's growth by embracing a sustainable recruiting solution built on premium, well-mannered and knowledgeable people, supported by trainers who keep standards consistent across every deployment.",
          "A convenient and intuitive platform makes recruitment stress-free — with assistance for streamlined staffing, managing and replacement, so you can optimise budget potential while recruiting with real cost efficiency.",
        ],
        image: "/images/svc-elevate-growth.jpg",
        imageLabel: "Client onboarding session",
      },
      {
        id: "pan-india",
        name: "PAN-India sourcing",
        tagline: "Sourced anywhere. Managed everywhere.",
        paragraphs: [
          "A seamless opportunity experience, anytime and from anywhere, backed by extensive infrastructure to manage staffing, recruiting and training across the country's major corridors.",
          "Strategic collaboration ensures competitive quality staffing, with 24/7, 365-day helplines and centralised locations delivering an uninterrupted flow of skilled manpower.",
        ],
        image: "/images/svc-pan-india.jpg",
        imageLabel: "PAN-India sourcing network",
      },
      {
        id: "staffing-services",
        name: "Staffing services",
        tagline: "Cover that never leaves a gap.",
        paragraphs: [
          "Sustainable, efficient and replacement staffing for your entity, delivered through a tech-driven system that produces significant savings against conventional recruitment.",
          "We integrate seamlessly into existing operations and working patterns, with customised strategies built for your particular workspace and ecosystem — so an absence never becomes an outage.",
        ],
        image: "/images/svc-staffing-services.jpg",
        imageLabel: "Replacement cover in action",
      },
      {
        id: "managed-services",
        name: "Managed services",
        tagline: "End to end. One operating centre.",
        paragraphs: [
          "Sustainable staffing for end-to-end recruitment needs, provided across PAN-India locations through our proprietary staffing management solution and experienced trainers.",
          "A centralised network and team operating centre ensures recruitment efficiency and transparency, with experts optimising skilling and educating while ensuring zero compliance gaps with clients.",
        ],
        image: "/images/svc-managed-services.jpg",
        imageLabel: "Central operating centre",
      },
      {
        id: "skill-adoption",
        name: "Skill adoption",
        tagline: "Skills that arrive job-ready.",
        paragraphs: [
          "Accelerate your work efficiency and quality while future-proofing your recognition — empowering your organisation to adopt skill and drive positive change across the working sector.",
          "Tailored end-to-end staffing management for corporate and hospitality industries, with suitable staff deployed to a work structure built to fit, and expert training supporting every individual entity.",
        ],
        image: "/images/svc-skill-adoption.jpg",
        imageLabel: "Skill training programme",
      },
    ],
  },
  {
    label: "Integrated solutions",
    tone: "light",
    items: [
      {
        id: "ostp",
        name: "Onsite skill training",
        tagline: "Training that happens on your floor.",
        paragraphs: [
          "Our Onsite Skill Training Programs (OSTP) put trainers where the work actually happens, upgrading capability without pulling people away from your operation.",
          "Periodic training and skill-upgrading programs keep the deployed workforce current, with zero investment required from your entity for training, enhancement or enrolment.",
        ],
        image: "/images/pillars-training.jpg",
        imageLabel: "Onsite training programme",
      },
      {
        id: "dos",
        name: "Dedicated operation system",
        tagline: "Every roster, visible in real time.",
        paragraphs: [
          "A central Dedicated Operation System (DOS) provides real-time monitoring of attendance, rosters and performance across every site we manage.",
          "Paired with an onsite managing team, it gives you full visibility and hassle-free working management — decisions made on live data rather than end-of-month reports.",
        ],
        image: "/images/platform-dos.jpg",
        imageLabel: "Operations dashboard",
      },
      {
        id: "platform",
        name: "Tracking & sourcing platform",
        tagline: "One platform for placement and sourcing.",
        paragraphs: [
          "A unique platform that unlocks insights, maximises impact and delivers convenience — comprehensive features and cutting-edge technology for an ever-growing industry.",
          "Advanced telematics give real-time availability of recruiters and recruitments, with a tracking app offering 100% placement and sourcing facility on a sustainable, scalable and secure base.",
        ],
        image: "/images/cap-1.jpg",
        imageLabel: "Tracking application",
      },
      {
        id: "verification",
        name: "Verification & compliance",
        tagline: "Verified before they are deployed.",
        paragraphs: [
          "Every service provider passes thorough background verification and police verification (PVC) before deployment, ensuring the safety and reliability of the people on your site.",
          "Robust security systems and compliance measures are implemented across the work sector, with experts ensuring zero compliance gaps with clients.",
        ],
        image: "/images/cap-2.jpg",
        imageLabel: "Verification and documentation",
      },
      {
        id: "support",
        name: "24/7 client support",
        tagline: "Real people, 365 days a year.",
        paragraphs: [
          "A 24/7 helpline and client support desk backed by serviceable onsite management — whether it is a routine roster update or an urgent replacement.",
          "Trust, reliability, affordability and quality-assured support, future-proofed against unemployment crises and staffing shocks alike.",
        ],
        image: "/images/cap-3.jpg",
        imageLabel: "Client support desk",
      },
      {
        id: "analytics",
        name: "Workforce analytics",
        tagline: "Decisions backed by your own data.",
        paragraphs: [
          "Proprietary tools and algorithms facilitate optimisation based on a real understanding of corporate staffing demand, vacancy patterns and conversion rates.",
          "Transparent, data-driven recruitment gives you real-time analytics to connect with requirements, optimise vacancies and run demand-responsive services.",
        ],
        image: "/images/promise-team.jpg",
        imageLabel: "Analytics and reporting",
      },
    ],
  },
];

export const serviceIndexIntro = {
  eyebrow: "Our services",
  headingLines: ["Driving sustainable change", "with impactful solutions"],
  mutedCount: 1,
  body: "Every service is delivered by trained, certified people and supported by an integrated system that keeps quality, transparency and cost under control.",
};

export const technologyStatement = {
  headingLines: ["Technology", "driven staffing", "& visibility"],
  accentFirstLine: true,
  body: "Every placement is delivered by Influence India's own trained workforce and supported by an integrated operating system — sourcing, skilling, deployment and monitoring under one accountable team.",
};

export const platformCards = [
  {
    name: "Dedicated Operation System",
    body: "Attendance, rosters, performance and replacement requests are managed through our central DOS, giving clients full documentation control and live visibility across every deployed site.",
    image: "/images/card-dos.jpg",
    imageLabel: "DOS control room",
  },
  {
    name: "Influence Tracking App",
    body: "Aspirants and clients get access to live placement status, seamless enrolment, real-time training records and deployment updates — with 100% placement and sourcing facility built in.",
    image: "/images/card-app.jpg",
    imageLabel: "Tracking app interface",
  },
];

export const capabilityStrip = {
  body: "We deliver scalable staffing solutions tailored to modern business demands — helping entities reduce attrition, improve workforce visibility, and deploy skilled people efficiently with confidence across corporate and non-corporate sectors.",
  images: [
    { label: "Deployed workforce", src: "/images/strip-1.jpg" },
    { label: "Training centre", src: "/images/strip-2.jpg" },
    { label: "Client operations", src: "/images/strip-3.jpg" },
  ],
};

export const servicesHeroTicker = [
  "Right staffing",
  "Elevate entity growth",
  "PAN-India sourcing and recruiting",
  "Staffing services",
  "Managed services",
  "Skill adoption and OSTP",
];
