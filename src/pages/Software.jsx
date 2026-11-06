import { Icon } from "../components/Icon";
import {
  CtaBand,
  Faq,
  Hl,
  NavyBand,
  Notice,
  OfferCard,
  PageHero,
  PhotoBand,
  PhotoBlock,
  StepBadge,
} from "../components/ui";
import { money } from "../lib/site";
import { PHOTOS } from "../lib/photos";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    upfront: 19,
    perReturn: 79,
    bestFor: "Under 10 bank returns",
    includes: [
      "HHCS tax software",
      "Group orientation",
      "Training library",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    upfront: 299,
    perReturn: 49,
    bestFor: "10 to 15 bank returns",
    featured: !0,
    includes: ["Everything in Starter", "Phone and text support"],
  },
  {
    id: "pro",
    name: "Pro",
    upfront: 599,
    perReturn: 29,
    bestFor: "16 or more bank returns",
    includes: [
      "Everything in Growth",
      "One-on-one launch call",
      "Dedicated support line",
      "Quarterly review call",
    ],
  },
];
export const TECH_FEE = 21;
export function PackageCalculator() {
  const [e, t] = useState(12),
    n = PACKAGES.map((l) => ({
      ...l,
      total: l.upfront + l.perReturn * e,
    })),
    r = Math.min(...n.map((l) => l.total));
  return (
    <div id="calculator" className="card scroll-mt-28 p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Which package fits?</h3>
          <p className="mt-1 text-sm text-slate-600">
            Move the slider to the number of bank-product returns you expect
            this season.
          </p>
        </div>
        <p className="num text-4xl font-extrabold text-navy-900">
          {e}
          <span className="ml-2 text-base font-semibold text-slate-600">
            bank returns
          </span>
        </p>
      </div>
      <input
        aria-label="Expected bank-product returns"
        type="range"
        min="0"
        max="60"
        value={e}
        onChange={(l) => t(+l.target.value)}
        className="mt-6 w-full accent-[#F2B705]"
      />
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {n.map((l) => (
          <div
            className={`rounded-xl border p-4 ${l.total === r ? "border-gold-500 bg-gold-100" : "border-slate-200 bg-white"}`}
            key={l.id}
          >
            <p className="flex items-center justify-between text-sm font-bold text-navy-900">
              {l.name}
              {l.total === r && (
                <span className="rounded-full bg-gold-500 px-2 py-0.5 text-[11px] text-navy-950">
                  Lowest
                </span>
              )}
            </p>
            <p className="num mt-2 text-2xl font-extrabold text-navy-900">
              {money(l.total)}
            </p>
            <p className="num mt-1 text-xs text-slate-600">
              {money(l.upfront)}
              {" up front + "}
              {e}
              {" × "}
              {money(l.perReturn)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-600">
        {
          "Total HHCS package and service bureau fees for the season. Each bank return also carries the "
        }
        {money(TECH_FEE)}
        {" technology and transmission fee ("}
        {money(TECH_FEE * e)}
        {" at "}
        {e}
        {
          " returns), the same on every package. Per-return fees come out of the client’s refund only when the bank product funds. This compares fees only. It is not an estimate of income."
        }
      </p>
    </div>
  );
}
export const SOFTWARE_FAQ = [
  [
    "Are the fees locked?",
    "Your HHCS service bureau fee is locked for three tax seasons from your first registration with HHCS. The technology and transmission fee and bank fees follow the provider’s rates and are not locked. Any change comes with written notice.",
  ],
  [
    "When do I pay, and is it refundable?",
    "You pay the package price after we approve your application and before your software access begins. Software access is non-refundable, with one exception: if HHCS ends your access without cause during your first season, we refund what you paid.",
  ],
  [
    "Can I change packages during the season?",
    "No. You choose your package before you register, and it stays the same for the season.",
  ],
  [
    "Is there an annual renewal fee?",
    "No, not while your office stays active. If your office files no bank-product returns through HHCS in a season, the fee lock and support lapse for later seasons.",
  ],
  [
    "Do you charge for referring tax pros to my office?",
    "No. HHCS charges no placement, referral or finder’s fee. Before we refer any tax pro to your office, you complete the HHCS ERO training. Any pro in your office contracts with you, not with HHCS.",
  ],
  [
    "What if the IRS issues me a new EFIN?",
    "Let us know. We set up your office under the new EFIN, and you keep your package and fee lock with no new package price.",
  ],
];
const STEPS = [
  [
    "Apply and choose your package",
    "Pick your package before you register. It stays the same for the season.",
  ],
  [
    "We review your application",
    "We confirm your EFIN and talk through your setup.",
  ],
  [
    "Sign your agreement",
    "Every term and fee in writing, signed electronically.",
  ],
  [
    "Pay and get access",
    "Pay the package price. Your software access begins after payment.",
  ],
  [
    "Register with our bank partner",
    "Bank-product enrollment is required and approved by the bank.",
  ],
  [
    "Train at your pace",
    "The training library is yours. The ERO path is required before HHCS refers any tax pro to your office.",
  ],
];

export function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="For EFIN holders · 2027 tax season"
        title={
          <>
            Run your own tax office on <Hl>HHCS software</Hl>
          </>
        }
      >
        Professional ERO software, bank products, training and support for
        IRS-approved EFIN holders, virtual or storefront. Pick the package that
        fits the number of bank returns you expect to file. Every fee is on this
        page.
      </PageHero>

      <NavyBand
        id="packages"
        title={
          <>
            Three packages, <Hl>every fee shown</Hl>
          </>
        }
        intro="One up-front price and one service bureau fee per bank return, locked for three seasons."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <OfferCard
              key={p.id}
              label={p.featured ? "Lowest total from 10 returns" : p.name}
              highlight={p.featured}
              title={p.name}
              intro={`Best for ${p.bestFor.toLowerCase()}`}
              bullets={p.includes}
              priceLabel="Package price"
              price={money(p.upfront)}
              priceNote="up front"
              extra={
                <div className="num mt-4 rounded-xl bg-navy-50 px-4 py-3 text-sm text-slate-700">
                  <p>
                    <span className="font-extrabold text-navy-900">
                      {money(p.perReturn)}
                    </span>
                    {" service bureau fee per bank return"}
                  </p>
                  <p className="mt-1 text-slate-600">
                    {"plus "}
                    {money(TECH_FEE)}
                    {" technology and transmission fee"}
                  </p>
                </div>
              }
              cta={{
                to: `/tax-pro-registration?path=efin&package=${p.id}`,
                label: `Apply for ${p.name}`,
              }}
              more={{ to: "#calculator", label: "Compare season totals" }}
            />
          ))}
        </div>
      </NavyBand>

      <section className="bg-white py-16 sm:py-20">
        <div className="wrap">
          <h2 className="h-display mx-auto max-w-3xl text-center text-3xl leading-tight sm:text-4xl">
            Find the package that <Hl>fits you</Hl>
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <Notice>
              Service bureau and technology fees apply only to returns with a
              bank product, such as a refund transfer, and only when the bank
              product funds. HHCS does not bill you for fees that could not be
              collected from a refund.
            </Notice>
            <Notice>
              Fees you charge your own clients, including for bank products, are
              set when you register with our bank partner. The bank decides
              eligibility and approval.
            </Notice>
          </div>
          <div className="mt-10">
            <PackageCalculator />
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-36">
            <h2 className="h-display text-3xl leading-tight sm:text-4xl">
              From application to <Hl>open office</Hl>
            </h2>
            <PhotoBlock photo={PHOTOS.officeOwner} className="mt-8" />
          </div>
          <ol className="space-y-4">
            {STEPS.map(([title, body], i) => (
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

      <PhotoBand
        tag="Not an EFIN holder yet"
        title="Still waiting on your EFIN?"
        photo={PHOTOS.proManLaptop}
        action={
          <Link to="/now-hiring#tier" className="btn-navy">
            Learn about the 100% tier
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        }
      >
        Join the 100% tier. For a one-time $99 enrollment, you prepare returns
        for your own clients in an HHCS office and keep 100% of the preparation
        fee you charge. When the IRS approves your EFIN, your $99 is credited
        toward your software package. EFIN approval is up to the IRS.
      </PhotoBand>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="wrap max-w-4xl">
          <h2 className="h-display text-center text-3xl leading-tight sm:text-4xl">
            Common <Hl>questions</Hl>
          </h2>
          <div className="mt-10">
            <Faq items={SOFTWARE_FAQ} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to open your office for the 2027 tax season?"
        body="These packages are software and support. HHCS does not guarantee clients, return volume or income."
        primary={{ to: "/tax-pro-registration?path=efin", label: "Apply now" }}
        secondary={{ to: "/resources", label: "Business foundations" }}
        photo={PHOTOS.supportHeadset}
      />
    </>
  );
}
