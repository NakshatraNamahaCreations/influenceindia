/**
 * "Charging Forward" — the supplied OSTP / staffing-as-a-service article,
 * given its own page at /charging-forward and linked from Resources. The copy
 * is the document as written; only words broken in the source have been
 * repaired ("Sservices", "bungeoning", "statting", "workin", "Hassel") so the
 * page reads. Part two of the document — the corporate case for sustainable
 * staffing — runs as three numbered sections beneath the first.
 */

export const article = {
  hero: {
    eyebrow: "Resources — infrastructure, sustainable staffing",
    headingLines: ["Charging forward:", "pioneering seamless", "staffing in India"],
    mutedCount: 2,
    body:
      "India's Corporate Business crave Skilled Work Force, and Influence India Services is on a mission to deliver it. We're the smartest sustainable staffing company in India, and we know the major roadblock for staffing adoption is skilled work force — the fear of running out of juice before finding a Skilled work force.",
    ctas: [
      { label: "Talk to our team", href: "/contact", variant: "primary" as const },
      { label: "All resources", href: "/resources", variant: "ghost" as const },
    ],
  },

  /** The full document title, kept intact under the hero. */
  fullTitle:
    "Charging Forward: Influence India Services Pioneers Seamless Staffing solution in India — Infrastructure, Sustainable Staffing",

  stats: [
    { value: 20, suffix: "", label: "OSTP locations across India" },
    { value: 100, suffix: "%", label: "Skill education at no cost" },
    { value: 3, suffix: "", label: "Collaboration partners: government, education, private" },
  ],

  overture: {
    eyebrow: "The good news",
    headingLines: ["Conquering the", "skilled workforce anxiety"],
    lead:
      "Here's the good news: we're conquering this anxiety by building a robust network of Skill Training Programs with Education across India.",
    body: [
      "In addition, we are working with businesses to fill any Skill gaps at their Work Place by setting up on site Skill Training Programs at company offices.",
    ],
  },

  contentsHeading: "In this article",

  /** Part one — the OSTP network. */
  chapters: [
    {
      id: "collaboration",
      index: "01",
      kicker: "Building a network through collaboration",
      title: "A vast network of OSTP across India",
      body: [
        "As a B2B Staffing-as-a-Service (SaaS) company, Influence India Services provides a vast network of OSTP (Onsite Skill Training Programs) across India.",
        "This impressive OSTP infrastructure in India wasn't built alone.",
      ],
    },
    {
      id: "together",
      index: "02",
      kicker: "Building a network, together",
      title: "Hand-in-hand with government and education",
      body: [
        "We believe in collaboration. That's why we're working hand-in-hand with governments, Education Institutions, and Private Educational Entities. This means efficient (STP) with reliable Skill Education at no cost — a win-win for everyone!",
        "It not only supports the growing demand for Skilled Staffing but also contributes to the overall infrastructure and sustainability goals of our Job Seekers and Work Provider.",
      ],
      points: [
        "Governments",
        "Education Institutions",
        "Private Educational Entities",
        "Reliable skill education at no cost",
      ],
    },
    {
      id: "sustainable-future",
      index: "03",
      kicker: "Staffing as a service for a sustainable future",
      title: "Built to last, built to expand",
      body: [
        "Our Immense Staffing solutions are built to last. We use a modular design for easy expansion as demand grows, and we're investing in future-proof technology to keep pace with next-generation Staffing Recruitments.",
        "Sustainability is at our core, with features like OSTP and Sourcing options that get the most out of every Business Requirements.",
        "Presently Influence India Services has 20 (OSTP) locations strategically located for our Staffing Requirements, all of these OSTP are also open to the Educational Institutions. We are committed to continuous expansion, driven by both Team size and Qualified Job Aspirants utilization data.",
      ],
      points: [
        "Modular design for easy expansion as demand grows",
        "Future-proof technology for next-generation recruitment",
        "20 OSTP locations, open to educational institutions",
        "Expansion driven by team size and utilization data",
      ],
    },
    {
      id: "recruitment-revolution",
      index: "04",
      kicker: "Join the recruitment revolution",
      title: "We're building a skilled workforce future",
      body: [
        "Influence India Services aren't just building an OSTP's, we're building a Skilled work force future. We're a partner of choice for businesses and corporations seeking to embrace Staffing solutions with confidence. Our focus on internal use today translates to a data-driven, user-centric JOB Aspirants and job providers tomorrow.",
        "By prioritizing scalability, sustainability, and job Aspirant well-being, Influence India Services OSTP infrastructure is designed to grow alongside India's Staffing Solution revolution.",
        "Join us as we pave the way for a OSTP, more sustainable mode of Staffing.",
      ],
    },
  ],

  /** The mid-article call to action, verbatim from the document. */
  charge: {
    eyebrow: "Ready to get charged up about the future?",
    body:
      "Contact Influence India Services today at connect@project-Influenceindiaservices.com to discuss your Skilled Staffing needs and explore how we can help you make the switch to SAAS (Staffing as a Service).",
    email: "connect@project-Influenceindiaservices.com",
    signoff: "Together, let's Grow India.",
  },

  /** Part two — the corporate case. */
  advantages: {
    id: "corporate-advantages",
    eyebrow: "The corporate case",
    headingLines: ["The economic and", "career advantages", "are undeniable"],
    intro:
      "As India's corporate landscape embraces sustainable staffing solution, particularly staffing-as-a-service, the economic and individual career advantages are undeniable. With its vast human capital and burgeoning Global Capability Centres (GCCs), India is uniquely positioned to lead the charge in staffing industry.",
    body:
      "For corporations managing large teams, providing affordable isn't just a responsible choice — it's a strategic business move that influences cost, productivity, and corporate reputation.",
    sections: [
      {
        id: "cost-efficiency",
        index: "01",
        title: "Cost efficiency: the case for staffing solution",
        lead:
          "Forward-thinking companies are transitioning from high cost to reliable source of staffing, reaping long-term financial benefits.",
        items: [
          {
            title: "Lower operational costs",
            body:
              "Staffing companies reduces cost and training expenses compared to self reliable alternatives. Partnering with eMaaS providers further reduces employee individual costs over time.",
          },
          {
            title: "Fleet optimization",
            body:
              "By leveraging data analytics, companies can optimize the performance and usage patterns, cutting operational costs while enhancing efficiency.",
          },
        ],
      },
      {
        id: "employee-wellbeing",
        index: "02",
        title: "Improved employee wellbeing and productivity",
        lead:
          "Adopting staffing solutions contributes to healthier working ecosystem, reducing work load and improving employee wellbeing.",
        items: [
          {
            title: "Healthier workforces",
            body:
              "Staffing reduces the time line of recruiting, leading to stable work culture. This minimizes work related hassle, resulting in lower absenteeism and enhanced employee productivity.",
          },
          {
            title: "Boosting satisfaction",
            body:
              "Employees are increasingly seeking out stable and healthier responsible employers. Offering good career options helps attract and retain talent, while fostering higher engagement.",
          },
        ],
      },
      {
        id: "stable-jobs",
        index: "03",
        title: "Creating stable jobs and supporting ecosystem growth",
        lead:
          "The shift to staffing solution is creating new opportunities across multiple sectors, with corporates playing a pivotal role in accelerating India's working ecosystem.",
        items: [
          {
            title: "Driving staffing infrastructure",
            body:
              "Corporate demand for eMaaS encourages investment in staffing solutions, training programs, and skilled out-put, spurring job creation and economic growth.",
          },
          {
            title: "Sustainable service expansion",
            body:
              "Staffing solution-hailing services are scaling up, generating employment in staff management career, and corporate service, while positioning companies as industry leaders in sustainability.",
          },
        ],
      },
    ],
  },
} as const;
