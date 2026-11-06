import { Icon } from "../components/Icon";
import {
  CheckList,
  CtaBand,
  Faq,
  Hl,
  IconBadge,
  NavyBand,
  Notice,
  OfferCard,
  PageHero,
  PhotoBand,
  PhotoBlock,
  StepBadge,
} from "../components/ui";
import { PHOTOS } from "../lib/photos";
import { Link } from "react-router-dom";

export const HIRING_ROWS = [
  [
    "Who it fits",
    "Preparers without an EFIN who want the simplest start",
    "Preparers who have applied, or plan to apply, for their own EFIN",
  ],
  [
    "Cost to join",
    "Nothing",
    "$99 one time, paid before software access. No annual fee.",
  ],
  [
    "What you keep",
    "70% of the preparation fee you charge. HHCS keeps 30%.",
    "100% of the preparation fee you charge, plus half of the office’s document preparation fee",
  ],
  [
    "Return review",
    "A team lead may review your returns before they are sent",
    "Every return is subject to HHCS review before it is sent",
  ],
  [
    "Getting paid",
    "Within 24 hours after the return funds (Zelle, Cash App or Venmo), or 2 to 3 business days by direct deposit",
    "Same",
  ],
  [
    "Locked terms",
    "Your 70% split for the season",
    "Your 100% share and half of the document fee, locked for your first three seasons",
  ],
  [
    "When your EFIN arrives",
    "If your own EFIN is issued, you can move to your own office on HHCS software",
    "You move to your own office on HHCS software, and your $99 is credited toward your package",
  ],
];
export const HIRING_STEPS = [
  [
    "Apply",
    "About five minutes. We never ask for your Social Security number on the application.",
  ],
  [
    "Talk with us",
    "We verify your PTIN and set up a short call so you can ask questions before you commit.",
  ],
  [
    "Sign your agreement",
    "You read every term and fee in writing and sign electronically. 100% tier: pay the $99 enrollment.",
  ],
  [
    "Train on a practice client",
    "Your software opens with a practice client. Real client information only after you pass the data-protection module.",
  ],
  [
    "Get cleared",
    "Pass the required quizzes and have your practice return accepted. Then transmission opens for you.",
  ],
  [
    "Prepare and get paid",
    "Serve your own clients. Your share goes out within 24 hours after each return funds by instant payment.",
  ],
];
export const FOUNDATIONS = [
  [
    "scale",
    "Compliance",
    "An active PTIN is required. Some states and cities also require a license, registration, test or bond. Check yours and keep it current.",
  ],
  [
    "umbrella",
    "Insurance",
    "HHCS does not require or provide insurance for your work. Errors and omissions coverage is your decision, and training walks you through it.",
  ],
  [
    "chart",
    "Business development",
    "Your client list is your business. Plan where your clients will come from before the season starts.",
  ],
  [
    "briefcase",
    "Presentation",
    "How you look, sound and follow up decides whether clients come back and send their friends.",
  ],
  [
    "megaphone",
    "Marketing",
    "Advertise honestly. Never promise a refund amount or date, and never claim results you have not delivered.",
  ],
];
export const HIRING_FAQ = [
  [
    "Do I need tax experience?",
    "No. The training library covers what you need to prepare a basic return correctly, and your first returns go through a review gate. The application asks about your experience so we can plan your support.",
  ],
  [
    "Do I need a PTIN?",
    "Yes. You need an active PTIN before you prepare any return for pay. You can apply before you have one, and we verify it before you start. A PTIN comes from the IRS, usually online in about 15 minutes.",
  ],
  [
    "Will HHCS give me clients?",
    "No. You find and serve your own clients. HHCS makes no promise of clients, return volume or income.",
  ],
  [
    "Am I an employee?",
    "No. You work as an independent contractor. You set your own schedule and your own preparation fee. We collect a Form W-9 before your first payment and send a 1099-NEC where required.",
  ],
  [
    "What about my state’s rules?",
    "Some states and cities regulate paid preparers. Meeting those requirements is your responsibility, and your agreement requires it. We are not accepting applications from Oregon at this time.",
  ],
  [
    "Can I switch from the 70% team to the 100% tier?",
    "Yes, as long as none of your returns has been transmitted that season. After your first return is sent, you stay in your office until the next season, unless your own EFIN is issued.",
  ],
  [
    "Is the $99 refundable?",
    "It is non-refundable, with one exception: if HHCS ends your agreement without cause during your first season, we refund what you paid. It is not refunded if the IRS does not issue your EFIN, and you can keep preparing in the HHCS office in that case.",
  ],
  [
    "Can I leave?",
    "Yes, at any time. Email us and we remove you from the platform. We still pay your share on returns that fund after you leave.",
  ],
];
export function NowHiringPage() {
  return (
    <>
      <PageHero
        eyebrow="Now enrolling for the 2027 tax season"
        title={
          <>
            Two ways to <Hl>prepare taxes</Hl> with HHCS
          </>
        }
      >
        Prepare taxes for your own clients from anywhere, as an independent
        tax professional under an established HHCS office. Start on the 70% team
        at no cost, or join the 100% tier while you wait for your own EFIN.
      </PageHero>

      <NavyBand
        title={
          <>
            Choose your <Hl>path</Hl>
          </>
        }
        intro="Pick the one that fits where you are with your EFIN."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div id="team" className="flex min-w-0 scroll-mt-28 flex-col [&>*]:flex-1">
            <OfferCard
              label="70% team · No EFIN needed"
              photo={PHOTOS.proWomanLaptop}
              title="Keep 70% of your preparation fee"
              intro="For preparers without an EFIN who want the simplest start."
              bullets={[
                "The office handles transmission and bank products",
                "A team lead may review your returns before they are sent",
                "Paid within 24 hours after a return funds by Zelle, Cash App or Venmo",
              ]}
              priceLabel="Cost to join"
              price="$0"
              cta={{
                to: "/tax-pro-registration?path=team",
                label: "Apply to the 70% team",
              }}
              more={{ to: "#compare", label: "Compare side by side" }}
            />
          </div>
          <div id="tier" className="flex min-w-0 scroll-mt-28 flex-col [&>*]:flex-1">
            <OfferCard
              label="100% tier · EFIN applied for or planned"
              highlight
              photo={PHOTOS.proManLaptop}
              title="Keep 100% of your preparation fee"
              intro="For preparers who have applied, or plan to apply, for their own EFIN."
              bullets={[
                "Plus half of the office’s document preparation fee",
                "Your 100% share locked for your first three seasons",
                "Your $99 is credited toward your software package when your EFIN arrives",
              ]}
              priceLabel="One-time enrollment"
              price="$99"
              priceNote="no annual fee"
              cta={{
                to: "/tax-pro-registration?path=tier",
                label: "Apply to the 100% tier",
              }}
              more={{ to: "#compare", label: "Compare side by side" }}
            />
          </div>
        </div>
      </NavyBand>

      <section id="compare" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="wrap">
          <h2 className="h-display mx-auto max-w-3xl text-center text-3xl leading-tight sm:text-4xl">
            70% team or 100% tier? <Hl>Compare them</Hl>
          </h2>
          <div className="card mt-10 overflow-hidden">
            <table className="w-full text-left text-[14.5px]">
              <caption className="sr-only">
                Comparison of the 70% team and the 100% tier
              </caption>
              <thead className="hidden text-xs uppercase tracking-[0.12em] md:table-header-group">
                <tr>
                  <th
                    className="bg-navy-900 px-5 py-3.5 font-bold text-white"
                    scope="col"
                  >
                    <span className="sr-only">Topic</span>
                  </th>
                  <th
                    className="bg-navy-900 px-5 py-3.5 font-extrabold text-white"
                    scope="col"
                  >
                    70% team
                  </th>
                  <th
                    className="bg-gold-500 px-5 py-3.5 font-extrabold text-navy-950"
                    scope="col"
                  >
                    100% tier
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {HIRING_ROWS.map(([topic, team, tier]) => (
                  <tr className="grid odd:bg-navy-50 md:table-row" key={topic}>
                    <th
                      scope="row"
                      className="px-5 pt-4 text-[13px] font-extrabold uppercase tracking-[0.08em] text-navy-900 md:w-52 md:py-4 md:align-top"
                    >
                      {topic}
                    </th>
                    <td className="px-5 pt-2 leading-6 text-slate-700 md:py-4 md:align-top">
                      <span className="font-semibold text-navy-900 md:hidden">
                        {"70% team: "}
                      </span>
                      {team}
                    </td>
                    <td className="px-5 pb-4 pt-2 leading-6 text-slate-700 md:py-4 md:align-top">
                      <span className="font-semibold text-navy-900 md:hidden">
                        {"100% tier: "}
                      </span>
                      {tier}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Notice>
              Returns you file through an HHCS office carry that office’s fees.
              They come out of your client’s refund only when the bank product
              funds, and every one is listed in your agreement before you sign.
            </Notice>
            <Notice>
              Moving up: you can switch from the 70% team to the 100% tier any
              time before your first return of the season is transmitted.
            </Notice>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-36">
            <h2 className="h-display text-3xl leading-tight sm:text-4xl">
              From application to <Hl>your first return</Hl>
            </h2>
            <PhotoBlock photo={PHOTOS.meeting} className="mt-8" />
          </div>
          <ol className="space-y-4">
            {HIRING_STEPS.map(([title, body], i) => (
              <li className="card flex gap-5 p-6" key={title}>
                <StepBadge n={i + 1} className="h-11 w-11" />
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="wrap">
          <p className="eyebrow flex justify-center">Run it like a business</p>
          <h2 className="h-display mx-auto mt-3 max-w-3xl text-center text-3xl leading-tight sm:text-4xl">
            We teach the foundations. <Hl>You build on them.</Hl>
          </h2>
          <p className="lead mx-auto mt-4 max-w-2xl text-center">
            Every practice looks different. These five foundations apply to
            everyone, and the training covers each one. We guide you, and you
            run your business.
          </p>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {FOUNDATIONS.map(([icon, title, body]) => (
              <div className="text-center" key={title}>
                <IconBadge name={icon} />
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-slate-700">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1 font-bold text-navy-700 underline underline-offset-4 hover:text-navy-900"
            >
              See the official resources for each foundation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <PhotoBand
        gray
        flip
        tag="Before you apply"
        title="What you will need"
        photo={PHOTOS.proPortrait}
      >
        <CheckList
          items={[
            "An active PTIN before you prepare a return for pay",
            "A computer and a reliable internet connection",
            "Time to finish the required training before the season",
            "Your own plan for finding clients",
          ]}
        />
      </PhotoBand>

      <section className="bg-white py-16 sm:py-20">
        <div className="wrap max-w-4xl">
          <h2 className="h-display text-center text-3xl leading-tight sm:text-4xl">
            Common <Hl>questions</Hl>
          </h2>
          <div className="mt-10">
            <Faq items={HIRING_FAQ} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to get started?"
        body="Seats are limited each season. When a tier is full, new applicants join the waitlist."
        primary={{ to: "/tax-pro-registration", label: "Apply now" }}
        secondary={{
          to: "/hhcs-software",
          label: "Already have an EFIN? See software",
        }}
        photo={PHOTOS.manSmiling}
      />
    </>
  );
}
