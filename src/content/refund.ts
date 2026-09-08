/**
 * Refund policy. Every clause below is drawn verbatim from the refund,
 * cancellation, charges and gratuity provisions of the supplied Terms of Use
 * (see `terms.ts`) — nothing here states more than the Terms already do. If a
 * fuller standalone refund policy is drafted, replace these clauses with it.
 */

export const refundHero = {
  eyebrow: "Refund policy",
  headingLines: ["Refunds &", "cancellations"],
  mutedCount: 1,
  body:
    "How charges, cancellations and refunds work across the Influence India Services product suite. These provisions form part of our terms and conditions.",
};

export const refundIntro =
  "You understand that use of the Services may result in charges to you for the services or goods you receive from Influence India Services. After you have received services or goods obtained through your use of the Services, Influence India Services will facilitate your payment of the applicable Charges received. All Charges will be inclusive of applicable taxes where required by law.";

export const refundSections = [
  {
    id: "refunds",
    index: "01",
    title: "Refunds",
    body: [
      "Charges paid by you are final and non-refundable, unless otherwise determined by Influence India Services.",
      "Please note that Influence India Services shall determine the city in which your trip commences as your address on record Influence India Services, wherever available.",
    ],
  },
  {
    id: "cancellations",
    index: "02",
    title: "Cancellations",
    body: [
      "You may elect to cancel your request for services or goods at any time prior to arrival, in which case you may be charged a cancellation fee. This payment structure is intended to compensate Influence India Services for the services or goods provided.",
    ],
  },
  {
    id: "charges",
    index: "03",
    title: "Charges and taxes",
    body: [
      "Influence India Services reserves the right to charge you amounts for, among others, applicable tolls, fees and charges incurred for the provision of services by the Third Party Providers, charges for the Services, pickup facility provided at various places, each along with applicable taxes (including but not limited to GST).",
      "Further, you acknowledge and agree that Charges applicable in certain geographical areas may increase substantially during times of high demand. Influence India Services will use reasonable efforts to inform you of Charges that may apply, provided that you will be responsible for Charges incurred under your Account regardless of your awareness of such Charges or the amounts thereof.",
    ],
  },
  {
    id: "payment",
    index: "04",
    title: "Payment and receipts",
    body: [
      "All Charges are due immediately and payment will be facilitated by Influence India Services using the preferred payment method designated in your Account, after which Influence India Services will send you a receipt by email. If your primary Account payment method is determined to be expired, invalid or otherwise not able to be charged, you agree that Influence India Services may use a secondary payment method in your Account, if available.",
      "As between you and Influence India Services, Influence India Services reserves the right to establish, remove and/or revise the Charges for any or all services or goods obtained through the use of the Services at any time in Influence India Services sole discretion.",
    ],
  },
  {
    id: "promotions",
    index: "05",
    title: "Promotional offers and discounts",
    body: [
      "Influence India Services may from time to time provide certain users with promotional offers, subscriptions and discounts that may result in discounted amounts charged for the same or similar services or goods obtained through the use of the Services, and you agree that such promotional offers, subscriptions and discounts, unless also made available to you, shall have no bearing on your use of the Services or the Charges applied to you.",
    ],
  },
  {
    id: "gratuities",
    index: "06",
    title: "Gratuities",
    body: [
      "Any representation by Influence India Services (on Influence India Services website, in the Application, or in Influence India Services marketing materials) to the effect that tipping is “voluntary,” “not required,” and/or “included” in the payments you make for services or goods provided is not intended to suggest that Influence India Services provides any additional amounts, beyond those described above.",
      "You understand and agree that, while you are free to provide additional payment as a gratuity to any Third Party Provider who provides you with services or goods obtained through the Service, you are under no obligation to do so. Gratuities are voluntary.",
      "After you have received services or goods obtained through the Service, you will have the opportunity to rate your experience and leave additional feedback about your Third Party Provider.",
    ],
  },
] as const;
