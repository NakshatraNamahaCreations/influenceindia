import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { WhistleblowingBody } from "@/components/sections/whistleblowing-body";
import { closingCta } from "@/content/home";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "Influence India Services policy on raising bona fide concerns about actual or suspected wrongdoing — what is covered, how a disclosure is made and investigated, and the protection given to whistleblowers.",
};

/**
 * The footer's privacy link points here. The document itself is the company's
 * whistleblowing policy, so the page keeps that name in its heading rather than
 * presenting the text as something it is not.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        headingLines={["Whistleblowing", "policy"]}
        mutedCount={1}
        body="Influence India Services believes in conducting business based on the highest standards of professionalism, accountability, transparency, honesty, integrity and ethical behaviour. This policy sets out how to raise a bona fide concern, and how you are protected when you do."
      />
      <div className="scroll-stack">
        <WhistleblowingBody />
        <CtaBand {...closingCta} />
      </div>
    </>
  );
}
