import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { WhistleblowingBody } from "@/components/sections/whistleblowing-body";
import { closingCta } from "@/content/home";
import { whistleblowingHero } from "@/content/whistleblowing";

export const metadata: Metadata = {
  title: "Whistleblowing policy",
  description:
    "How to raise a bona fide concern about actual or suspected wrongdoing at Influence India Services — what counts as whistleblowing, who is covered, how disclosures are investigated, and the protection given to whistleblowers.",
};

export default function WhistleblowingPolicyPage() {
  return (
    <>
      <PageHero {...whistleblowingHero} />
      <div className="scroll-stack">
        <WhistleblowingBody />
        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
