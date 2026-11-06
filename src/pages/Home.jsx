import { Icon } from "../components/Icon";
import {
  CheckBadge,
  CheckList,
  CtaBand,
  Hl,
  IconBadge,
  NavyBand,
  OfferCard,
  Photo,
  PhotoBlock,
} from "../components/ui";
import { PHOTOS } from "../lib/photos";
import { Link } from "react-router-dom";

export const PATHS = [
  {
    label: "No EFIN · No cost to join",
    title: "Prepare taxes and keep 70%",
    intro: "Prepare returns for your own clients inside an HHCS office.",
    bullets: [
      "Keep 70% of the preparation fee you charge",
      "The office handles transmission and bank products",
    ],
    priceLabel: "Cost to join",
    price: "$0",
    cta: {
      to: "/tax-pro-registration?path=team",
      label: "Apply to the 70% team",
    },
    more: { to: "/now-hiring#team", label: "Learn more" },
  },
  {
    label: "EFIN on the way · Keep 100%",
    highlight: true,
    title: "Working toward your EFIN?",
    intro: "Prepare under an HHCS office while the IRS reviews your EFIN.",
    bullets: [
      "Keep 100% of your preparation fee plus half the document fee",
      "Your $99 is credited toward a software package when your EFIN is issued",
    ],
    priceLabel: "One-time enrollment",
    price: "$99",
    cta: {
      to: "/tax-pro-registration?path=tier",
      label: "Apply to the 100% tier",
    },
    more: { to: "/now-hiring#tier", label: "Learn more" },
  },
  {
    label: "EFIN holders · Your own office",
    title: "Run your office on HHCS software",
    intro: "Professional software, bank products, training and support.",
    bullets: [
      "Three packages, every fee shown before you apply",
      "Service bureau fee locked for three seasons",
    ],
    priceLabel: "Packages from",
    price: "$19",
    priceNote: "up front",
    cta: { to: "/hhcs-software#packages", label: "See software packages" },
    more: { to: "/hhcs-software", label: "Learn more" },
  },
];
export const FEATURES = [
  [
    "laptop",
    "Professional tax software",
    "Cloud-based ERO software for preparing and e-filing returns, from wherever you work.",
  ],
  [
    "bank",
    "Bank products",
    "Refund transfers through our bank partner. The bank sets eligibility, fees and approval.",
  ],
  [
    "book",
    "Training that builds a business",
    "A training library with quizzes, a practice return and a business-foundations track.",
  ],
  [
    "shield",
    "A review gate while you start",
    "Transmission opens only after you are cleared, and a team lead can review returns before they are sent.",
  ],
  [
    "clock",
    "Fast payouts",
    "Your share is sent within 24 hours after a return funds by Zelle, Cash App or Venmo, or in 2 to 3 business days by direct deposit.",
  ],
  [
    "scale",
    "Every fee in writing",
    "You see every fee in your agreement before you sign. Bank-product fees are collected only when the bank product funds.",
  ],
];
const TAXPAYER_OPTIONS = [
  {
    label: "For individuals",
    title: "Individual return",
    intro: "Your personal tax return, prepared by a pro and approved by you.",
    bullets: [
      "You review and approve your return before anything is filed",
      "Nothing sensitive goes in the request form",
    ],
    cta: {
      to: "/tax-preparation?service=individual",
      label: "Request individual help",
    },
    more: { to: "/tax-preparation", label: "Learn more" },
  },
  {
    label: "For the self-employed",
    title: "Self-employed or small business",
    intro: "Taxes for people who work for themselves or run a small business.",
    bullets: [
      "We talk through your situation and tell you what to gather",
      "Documents are shared securely, never by text or regular email",
    ],
    cta: {
      to: "/tax-preparation?service=self_employed",
      label: "Request self-employed help",
    },
    more: { to: "/tax-preparation", label: "Learn more" },
  },
  {
    label: "For past years",
    title: "Prior-year or late returns",
    intro: "Catching up on past years? We can help you get it done.",
    bullets: [
      "We contact you to talk through your situation and next steps",
      "You review and approve your return before anything is filed",
    ],
    cta: {
      to: "/tax-preparation?service=prior_year",
      label: "Request prior-year help",
    },
    more: { to: "/tax-preparation", label: "Learn more" },
  },
];

const TRUST_ITEMS = [
  ["No SSN online", "Our forms never ask for your Social Security number."],
  ["You approve first", "You review your return before anything is filed."],
  [
    "Documents stay secure",
    "Shared through a secure method, never by text or regular email.",
  ],
  [
    "Every fee in writing",
    "Tax pros who join us see every fee before they sign.",
  ],
];

export function HomePage() {
  return (
    <>
      <section className="bg-white">
        <div className="wrap grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow">Tax preparation for individuals</p>
            <h1 className="h-display mt-3 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-6xl">
              Get your taxes done with <Hl>a pro in your corner</Hl>
            </h1>
            <p className="lead mt-5 max-w-xl">
              Tell us what you need and we will contact you to talk it through.
              You review your return before anything is filed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tax-preparation" className="btn-navy">
                Request tax preparation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/now-hiring" className="btn-ghost">
                Become a tax pro with HHCS
              </Link>
            </div>
          </div>
          <PhotoBlock
            photo={PHOTOS.heroHelp}
            w={1400}
            h={1054}
            eager
            className="mx-auto w-full max-w-xl lg:max-w-none"
          />
        </div>
      </section>

      <NavyBand
        id="tax-help"
        eyebrow="Tax help"
        title={
          <>
            Tax help for <Hl>your situation</Hl>
          </>
        }
        intro="Choose what fits you best and we will take it from there."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {TAXPAYER_OPTIONS.map((o) => (
            <OfferCard key={o.title} {...o} />
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] text-slate-200">
          {"Not sure? "}
          <Link
            to="/tax-preparation"
            className="font-bold text-gold-400 underline underline-offset-4 hover:text-gold-300"
          >
            Request a call
          </Link>
          {" and we will help you choose."}
        </p>
      </NavyBand>

      <section className="bg-white py-14 sm:py-16">
        <ul className="wrap grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map(([title, body]) => (
            <li className="text-center" key={title}>
              <CheckBadge className="h-10 w-10" />
              <p className="mt-3 text-lg font-extrabold text-navy-900">{title}</p>
              <p className="mx-auto mt-1 max-w-[16rem] text-[14.5px] leading-6 text-slate-600">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <NavyBand
        id="paths"
        eyebrow="For tax professionals"
        title={
          <>
            Prepare taxes with <Hl>HHCS</Hl>
          </>
        }
        intro="Join the team at no cost, move up to the 100% tier, or run your own office on our software. Seats are limited each season."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PATHS.map((p) => (
            <OfferCard key={p.title} {...p} />
          ))}
        </div>
      </NavyBand>

      <section className="bg-white py-16 sm:py-20">
        <div className="wrap">
          <h2 className="h-display mx-auto max-w-3xl text-center text-3xl leading-tight sm:text-4xl">
            We bring the tools. <Hl>You run the business.</Hl>
          </h2>
          <p className="lead mx-auto mt-4 max-w-2xl text-center">
            Tax preparation is a business, and the pros who do best treat it
            like one. Here is who does what.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card flex flex-col p-6 sm:p-8">
              <Photo
                photo={PHOTOS.supportHeadset}
                w={400}
                h={400}
                className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl object-cover sm:max-w-xs"
              />
              <p className="eyebrow mx-auto mt-7">What HHCS provides</p>
              <h3 className="mt-2 text-center text-2xl">
                Opportunity, guidance, resources and support
              </h3>
              <CheckList
                className="mt-6"
                items={[
                  "Opportunity: an established office to prepare under, or software to run your own",
                  "Guidance: a training library, a practice return and a review gate while you get started",
                  "Resources: business-foundation lessons and links to the official sources",
                  "Support: help from the HHCS team when you need it",
                ]}
              />
            </div>
            <div className="card flex flex-col border-t-[6px] border-t-gold-500 p-6 sm:p-8">
              <Photo
                photo={PHOTOS.manSmiling}
                w={400}
                h={400}
                className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl object-cover sm:max-w-xs"
              />
              <p className="eyebrow mx-auto mt-7">What you handle</p>
              <h3 className="mt-2 text-center text-2xl">
                Your clients, returns, compliance and growth
              </h3>
              <CheckList
                className="mt-6"
                items={[
                  "Your clients: finding them, serving them and setting your preparation fee",
                  "Your returns: interviewing, collecting documents, verifying information and due diligence",
                  "Your compliance: an active PTIN, plus any state or city license or registration where you work",
                  "Your business: insurance decisions, presentation, marketing and growth",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="wrap">
          <h2 className="h-display mx-auto max-w-3xl text-center text-3xl leading-tight sm:text-4xl">
            What you get with <Hl>HHCS</Hl>
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(([icon, title, body]) => (
              <div className="text-center" key={title}>
                <IconBadge name={icon} />
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-7 text-slate-700">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-slate-600">
            HHCS makes no promise of clients, return volume or income. Results
            depend on your own work and your clients.
          </p>
        </div>
      </section>

      <CtaBand
        title="Seats are limited each season."
        body="We bring on a limited number of tax professionals so every one of them gets real support. When a tier is full, new applicants join the waitlist."
        primary={{ to: "/tax-pro-registration", label: "Apply now" }}
        secondary={{
          to: "/now-hiring",
          label: "Compare the 70% and 100% options",
        }}
        photo={PHOTOS.meeting}
      />
    </>
  );
}
