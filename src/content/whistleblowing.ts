/**
 * Whistleblowing policy — the supplied document, given its own page. The
 * wording is as written; you asked for the sentences to be corrected, so words
 * broken in the source have been repaired ("DEFINTIONS", "titied",
 * "Pitferation", "Witful", "independerit", "It allegations", "Clint Sites",
 * "3hd stage") without changing what any clause says.
 *
 * Flagged for review, not silently changed: the reporting address in the
 * source is whistleblower@project-lithium.com — another company's domain.
 */

export const whistleblowingHero = {
  eyebrow: "Whistleblowing policy",
  headingLines: ["Speak up", "with confidence"],
  mutedCount: 1,
  body:
    "Influence India Services believes in conducting business based on the highest standards of professionalism, accountability, transparency, honesty, integrity and ethical behaviour. This policy sets out how to raise a bona fide concern, and how you are protected when you do.",
};

/** The covering letter that opens the document. */
export const letter = {
  greeting: "Dear Colleagues,",
  body: [
    "Influence India Services (“Influence India Services” or “the Company”) believes in conducting business based on highest standards of professionalism, accountability, transparency, honesty, integrity and ethical behaviour. To maintain these standards, the Company encourages its employees who have bona fide concerns about any actual or suspected wrongdoing to come forward and express these concerns in a responsible and effective manner without any fear. This is also because it gives us an opportunity to correct a situation prior to legal action or adverse publicity.",
    "To achieve this objective, it is felt necessary by the management of the Company to define a whistleblowing policy which will appropriately address bona fide concerns that individuals within the Company or working for the Company might have, while also offering to such whistleblowers protection from victimization, harassment or unfair treatment.",
    "You are requested to read the attached whistleblowing policy and submit the attached acknowledgement.",
  ],
  signoff: "— Compliance Officer",
};

export const definitions = [
  {
    term: "Board",
    body: ["Means board of directors of the Company."],
  },
  {
    term: "Employee",
    body: [
      "Means every employee of the Company (whether working in India or abroad), including the directors in the employment of the Company.",
    ],
  },
  {
    term: "Protected Disclosure",
    body: [
      "Means a concern raised by a written communication in Good Faith that discloses or demonstrates information that may evidence unethical or improper activity. Protected Disclosures should be factual and not speculative in nature.",
      "For the purposes of this Policy, a Whistleblower shall be deemed to be communicating in “good faith” if there is a reasonable basis for communication of unethical and improper practices or any other alleged wrongful conduct. Good faith shall be deemed lacking when the Whistleblower does not have personal knowledge on a factual basis for communication or where the Whistleblower knew or reasonably should have known that the communication about unethical and improper practices or alleged wrongful conduct is malicious, false or frivolous.",
    ],
  },
  {
    term: "Subject",
    body: [
      "Means a person or group of persons against or in relation to whom a Protected Disclosure is made or evidence gathered during the course of an investigation under this Policy.",
    ],
  },
  {
    term: "Whistleblower",
    body: [
      "Means any person mentioned under the paragraph titled “Coverage of the policy” making a Protected Disclosure under this Policy.",
    ],
  },
] as const;

export const sections = [
  {
    id: "introduction",
    index: "01",
    title: "Introduction",
    body: [
      "Influence India Services is committed to developing an open and transparent culture where it is safe for all Employees (as defined hereinafter) to report their bona fide concerns about any perceived wrongdoing within the Company and field work client sites. This Policy, therefore, envisages to provide an avenue for Employees to report bona fide concerns over any perceived wrongdoing within the Company.",
      "It should be clarified that the Policy is not designed to question financial or business decisions taken by the Company nor should it be used to reconsider any matters which have been investigated under harassment, grievance or disciplinary policies and procedures. Further, the Policy neither releases employees from their duty of confidentiality in the course of their work, nor is it a route for taking up a grievance about a personal situation.",
    ],
  },
  {
    id: "what-is-whistleblowing",
    index: "02",
    title: "What is whistleblowing?",
    body: [
      "Whistleblowing is the confidential disclosure by an individual to a person with supervisory authority of any bona fide concern encountered in the workplace relating to a perceived wrongdoing. The Company considers such wrongdoings to include any actual or suspected:",
    ],
    bullets: [
      "Criminal or civil offence (including fraud, corruption, bribery or theft).",
      "Immoral, illegal or unethical conduct and serious irregularities.",
      "Gross misconduct.",
      "Infractions of the Company's code of conduct or policies.",
      "Infractions of the codes of conduct of all relevant professional institutions.",
      "Conflict of business interests.",
      "Misuse of Company's assets.",
      "Abuse of authority or discretion.",
      "Breach of contract.",
      "Pilferation of confidential/proprietary information.",
      "Wilful suppression of facts.",
      "Company's funds being used in any unauthorised manner.",
      "Misstatement in the Company's financial records which include balance sheets, sales records and expense reports and distorting the true nature of the transaction.",
      "Falsification of transactions/documents.",
      "Miscarriage of justice or any injustice.",
      "Danger to health or safety of any individual/employee of the Company or public at large.",
      "Discrimination occurring to any member of the staff such as favouritism, bias etc.",
      "Any other form of improper action or conduct.",
    ],
  },
  {
    id: "aim",
    index: "03",
    title: "Aim of the whistleblowing policy",
    body: ["The Policy aims at:"],
    bullets: [
      "Encouraging the Whistleblowers to feel confident in making Protected Disclosures.",
      "Ensuring that the Protected Disclosures are addressed in a timely and effective manner.",
      "Initiating action, where necessary, to set right the concerns raised by the Protected Disclosure.",
      "Ensuring that the Policy is not abused.",
    ],
  },
  {
    id: "coverage",
    index: "04",
    title: "Coverage of the policy",
    body: [
      "This Policy applies to everyone who works for the Company in India or abroad, including:",
    ],
    list: [
      "Employees of the Company.",
      "Employees of other agencies deployed for the Company's activities, whether working from any of the Company's offices or any other location.",
      "Contractors, sub-contractors, vendors, suppliers or agencies (or any of their employees) providing any material or service to the Company.",
      "Consultants.",
      "Retainers, interns or trainees.",
      "Any other person having an association with the Company.",
    ],
    outro: [
      "A person belonging to any of the above mentioned categories can make a Protected Disclosure under this Policy.",
    ],
  },
  {
    id: "duty-to-report",
    index: "05",
    title: "Duty to report",
    body: [
      "Reporting is crucial for early detection, proper investigation and remediation. Accordingly, any Whistleblower is required to report to the Company any actual or suspected violation of any applicable law, any of the Company's code of conduct or policies, accounting or financial reporting violations, insider trading, bribery, or violations of the anti-retaliation aspects of this Policy.",
      "Failure to report any reasonable belief that a violation has occurred or is occurring is itself a violation of this Policy and such failure will be addressed with appropriate disciplinary action, including possible termination of employment.",
    ],
  },
  {
    id: "guiding-principles",
    index: "06",
    title: "Guiding principles and assurance",
    body: [
      "To ensure that this Policy is adhered to, and to assure that the Protected Disclosures will be acted upon seriously, the Company will:",
    ],
    list: [
      "Ensure that the Whistleblower and/or the person processing the Protected Disclosure are not victimized for doing so.",
      "Take steps to minimize difficulties, which the Whistleblower may experience as a result of making the Protected Disclosure.",
      "Ensure that any other Employee assisting in the said investigation shall also be protected to the same extent as the Whistleblower.",
      "Treat victimization as a serious matter, including initiating disciplinary action on person/(s) indulging in victimization.",
      "Ensure complete confidentiality of the Whistleblower and the Protected Disclosure to the extent possible and permitted under law. However, the Company is not accountable for maintaining anonymity where the Whistleblower has told others of the alleged misdemeanour.",
      "Not attempt to conceal evidence of the Protected Disclosure.",
      "Take disciplinary action, if any one destroys or conceals evidence of the Protected Disclosure made/to be made.",
      "Provide an opportunity of being heard to the persons involved especially to the Subject.",
    ],
  },
  {
    id: "false-reporting",
    index: "07",
    title: "Deliberate false reporting",
    body: [
      "If an Employee makes any Protected Disclosure that he/she believes to be true, but which upon investigation proves to be unfounded, no action will be taken against such an Employee. If, however, the investigation reveals that the Employee has made a deliberately false allegation with the intention of discrediting a fellow Employee, or the Company or any other person or for any reason, he/she will be investigated to determine whether disciplinary action should be taken against him/her.",
      "Such disciplinary action could (among other things) also result in termination of employment. Further, this Policy may not be used as a defence by an Employee against whom an adverse personnel action has been taken independent of any disclosure made by him and for legitimate reasons or cause under Company rules and policies.",
      "A Whistleblower, who makes 3 (three) or more Protected Disclosures, which have been subsequently found to be mala fide, frivolous, baseless, malicious, or reported otherwise than in good faith, will be disqualified from reporting further Protected Disclosures under this Policy. In respect of such Whistleblower, the Company would reserve its right to take/recommend appropriate disciplinary action.",
    ],
  },
  {
    id: "raise-a-concern",
    index: "08",
    title: "How should the employee raise the concern",
    body: [
      "“Compliance Officer” will be such person as may be appointed by the Board of Directors, from time to time, as Compliance Officer who shall oversee the compliance and implementation of this Policy. A Whistleblower can approach the Compliance Officer directly to report any such concern by writing to the reporting address below, or forward a sealed envelope marked “For Compliance Officer — Whistleblowing Policy” to the Company Secretary, who will then forward these sealed envelopes to the Compliance Officer.",
      "Employees having any concerns are also encouraged to raise their concerns initially through the management channels by whatever route the Employee may choose to raise his or her concern. If a Protected Disclosure is received by any executive of the Company other than the Compliance Officer, the same should be forwarded to the Compliance Officer for further appropriate action. The identity of the Whistleblower will be kept confidential if asked to do so and will be disclosed only if it becomes necessary for investigation purposes or in certain circumstances where it is legally required to be so disclosed.",
      "While there is no specific format for submitting a Protected Disclosure, the Whistleblower must provide the following information to enable effective investigation:",
    ],
    list: [
      "Name, address and contact details of the Whistleblower.",
      "Brief description of the malpractice, including the names of those alleged to have committed or suspected to commit a malpractice.",
      "Date, time and location of incident.",
      "Value of any money or assets involved.",
      "Evidence (if any).",
      "Any other information that may substantiate the concern.",
    ],
    outro: [
      "Factual data should be provided to the extent possible. Protected Disclosures should be factual and not speculative or in the nature of a conclusion and should contain as much specific information as possible to allow for proper assessment of the nature and extent of the concern and the urgency of a preliminary investigative procedure.",
      "A Whistleblower should make it clear that he/she is making the Protected Disclosure within the terms of this Policy. This will ensure the recipient of the Protected Disclosure realises this and takes the necessary action to investigate the Protected Disclosure and to protect the Whistleblower's identity. Disclosures expressed anonymously will ordinarily not be investigated.",
    ],
  },
  {
    id: "investigation",
    index: "09",
    title: "Investigation",
    body: [
      "The Compliance Officer will acknowledge receipt of the Protected Disclosure as soon as practical to do so, where the Whistleblower has provided his/her contact details. The Compliance Officer will take effective steps to respond to any permitted disclosure that has been reported and will inform the Board of the outcome. In cases where a detailed investigation needs to be conducted, the Compliance Officer may direct such investigation to be conducted by a special committee constituted by the Board or an independent external agency.",
      "The investigation would be conducted on a fact-finding basis in a fair and timely manner and the investigating authority will give appropriate chance to the Subject(s) to present his/her case. If the Compliance Officer has a conflict of interest in any given case, then he/she should recuse himself/herself and the Board shall deal with the matter on hand as it may deem fit.",
      "The Whistleblower will be kept informed of progress and the outcome of the investigation, within the constraints of maintaining confidentiality or observing legal restrictions generally. A confidential record of investigation process will be kept by the Company.",
      "The Protected Disclosure made by the Whistleblower may be handled and treated by the Compliance Officer inter alia in any of the following ways:",
    ],
    bullets: [
      "By adopting procedures, especially with regard to dealing with certain types of complaints relating to accounting and internal controls.",
      "Through other relevant procedures/processes that are already in place.",
      "Internal investigation.",
      "Referring to external regulatory or law enforcement officials.",
      "Referring to external auditors or other investigators or firms, subject to the findings of an independent internal enquiry.",
      "Or a combination of the above.",
    ],
  },
  {
    id: "rights-of-a-subject",
    index: "10",
    title: "Rights of a subject",
    list: [
      "The decision to conduct an investigation taken by the Compliance Officer is by itself not an accusation and is to be treated as a neutral fact-finding process. The outcome of the investigation may not support the conclusion of the Whistleblower that an improper or unethical act was committed.",
      "The identity of a Subject will be kept confidential to the extent possible given the legitimate needs of law and the investigation.",
      "Subjects will normally be informed of the allegations at the outset of a formal investigation and have opportunities for providing their inputs during the investigation.",
      "Subjects shall have a duty to co-operate with the Compliance Officer or any of the investigators during investigation to the extent that such co-operation will not compromise self-incrimination protections available under the applicable laws.",
      "Subjects have a right to consult with a person or persons of their choice, other than the Compliance Officer, investigators and/or the Whistleblower. Subjects shall be free at any time to engage counsel at their own cost to represent them in the investigation proceedings.",
      "Subjects have a responsibility not to interfere with the investigation. Evidence shall not be withheld, destroyed or tampered with, and witnesses shall not be influenced, coached, threatened or intimidated by the Subjects.",
      "Unless there are compelling reasons not to do so, Subjects will be given the opportunity to respond to material findings contained in an investigation report. No allegation of wrongdoing against a Subject shall be considered as maintainable unless there is good evidence in support of the allegation.",
      "Subjects have a right to be informed of the outcome of the investigation. If allegations are not sustained, the Subject should be consulted as to whether public disclosure of the investigation results would be in the best interest of the Subject and the Company.",
      "The investigation shall be completed normally within 45 days of the receipt of the Protected Disclosure.",
    ],
  },
  {
    id: "action",
    index: "11",
    title: "Action arising from the investigation",
    body: [
      "Based on the report of the investigating authority, the Compliance Officer in consultation with the Chief Executive Officer will ensure that remedial action, where required, is taken in a timely manner dependent on the gravity of the misconduct. This action could result in any of the following:",
    ],
    bullets: [
      "Suspension.",
      "Stoppage of increments/promotion.",
      "Dismissal.",
      "Any other action, legal or otherwise, including withholding/non-payment of employee dues, if the misconduct involves fraud, financial irregularities etc.",
    ],
    outro: [
      "Employee(s) who fail to co-operate in an investigation, or deliberately provide false information shall be subject to strict disciplinary action up to and including dismissal.",
    ],
  },
  {
    id: "safeguards",
    index: "12",
    title: "Safeguards for the whistleblower",
    body: [
      "The Company will ensure that no action will be taken against a Whistleblower who makes an allegation/raises a concern in good faith, reasonably believing it to be true. The Company, as a policy, condemns any kind of discrimination, harassment, victimization or any other unfair employment practice being adopted against Whistleblowers.",
      "Complete protection will, therefore, be given to Whistleblowers against any unfair practice like retaliation, threat or intimidation of termination/suspension of service, disciplinary action, transfer, demotion, refusal of promotion, or the like including any direct or indirect use of authority to obstruct the Whistleblower's right to continue to perform his/her duties/functions including making further Protected Disclosure.",
      "In case retaliation by a fellow employee including his immediate superior is brought to the attention of the Compliance Officer, he will direct an investigation against such employee or superior and recommend appropriate disciplinary action, as necessary to be taken.",
    ],
  },
  {
    id: "amendment",
    index: "13",
    title: "Amendment",
    body: [
      "The Company is entitled to amend, suspend or rescind this Policy at any time. Any difficulties or ambiguities will be resolved in line with the broad intent of the Policy. The Company may also establish further rules and procedures, from time to time, to give effect to the intent of this Policy and further the objective of good corporate governance.",
    ],
  },
] as const;

/** Closing block: adoption and where to send a disclosure. */
export const adoption = {
  title: "Influence India Services — “Whistleblowing Policy”",
  adoptedLabel: "Adopted on",
  adoptedValue: "Date to be confirmed",
  addressLabel: "Registered office",
  address: [
    "69, 1st Floor, Opposite Kuntamaramma Temple",
    "Arehalli, Banashankari 3rd Stage",
    "Bengaluru 560061",
  ],
  emailLabel: "Reporting address",
  /** As written in the source document — flagged for review, see the file header. */
  email: "whistleblower@project-lithium.com",
  emailNote:
    "This address appears in the supplied document but sits on another company's domain. Confirm the correct Influence India Services address before this policy is published.",
  contactLabel: "General enquiries",
} as const;
