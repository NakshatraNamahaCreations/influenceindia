import type { Metadata } from "next";

import { ChargingForwardBody } from "@/components/sections/charging-forward-body";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { article } from "@/content/charging-forward";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Charging forward: pioneering seamless staffing in India",
  description:
    "Influence India Services pioneers seamless staffing solutions in India — 20 OSTP locations, collaboration with government and education partners, and the corporate case for staffing as a service.",
};

export default function ChargingForwardPage() {
  return (
    <>
      {/* text-only hero: res-1.jpg already fronts this article's card on
          Resources, and no photograph is used twice across the site */}
      <PageHero {...article.hero} />

      <div className="scroll-stack">
        <ChargingForwardBody />
        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
