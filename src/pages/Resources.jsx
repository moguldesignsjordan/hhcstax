import { Icon } from "../components/Icon";
import { CtaBand, Hl, IconBadge, PageHero } from "../components/ui";

export const RESOURCE_GROUPS = [
  {
    icon: "id",
    title: "Compliance",
    body: "The credentials and rules every paid preparer works under.",
    links: [
      [
        "PTIN requirements for tax return preparers",
        "IRS",
        "https://www.irs.gov/tax-professionals/ptin-requirements-for-tax-return-preparers",
      ],
      [
        "Become an authorized e-file provider (EFIN)",
        "IRS",
        "https://www.irs.gov/e-file-providers/become-an-authorized-e-file-provider",
      ],
      [
        "Publication 1345: rules for e-file providers",
        "IRS · PDF",
        "https://www.irs.gov/pub/irs-pdf/p1345.pdf",
      ],
      [
        "Annual Filing Season Program",
        "IRS",
        "https://www.irs.gov/tax-professionals/annual-filing-season-program",
      ],
      [
        "Circular 230: rules of practice",
        "IRS · PDF",
        "https://www.irs.gov/pub/irs-pdf/pcir230.pdf",
      ],
    ],
    note: "State and city rules: some states and cities require a license, registration, test or bond for paid preparers. Check with the revenue department or licensing board where you work and where your clients live.",
  },
  {
    icon: "lock",
    title: "Data security",
    body: "Protecting client information is the law, not a preference.",
    links: [
      [
        "Publication 4557: safeguarding taxpayer data",
        "IRS · PDF",
        "https://www.irs.gov/pub/irs-pdf/p4557.pdf",
      ],
      [
        "Publication 5708: creating a written information security plan",
        "IRS · PDF",
        "https://www.irs.gov/pub/irs-pdf/p5708.pdf",
      ],
      [
        "FTC Safeguards Rule: what your business needs to know",
        "FTC",
        "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know",
      ],
    ],
  },
  {
    icon: "file",
    title: "Due diligence",
    body: "Getting it right before it is filed.",
    links: [
      [
        "Form 8867: paid preparer’s due diligence checklist",
        "IRS · PDF",
        "https://www.irs.gov/pub/irs-pdf/f8867.pdf",
      ],
      ["IRS e-Services", "IRS", "https://www.irs.gov/e-services"],
    ],
  },
  {
    icon: "briefcase",
    title: "Running the business",
    body: "Structure, insurance and growth.",
    links: [
      [
        "Free small business counseling and mentoring",
        "SBA",
        "https://www.sba.gov/counseling",
      ],
    ],
    note: "Insurance: HHCS does not require or provide insurance for your work. Ask a licensed insurance agent about errors and omissions coverage and decide what fits your volume and risk.",
  },
];
export function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Business foundations for <Hl>tax professionals</Hl>
          </>
        }
      >
        Official sources for the rules you work under, grouped by the
        foundations every practice needs. These are links to government sites.
        HHCS templates and tools will be added here as they are ready.
      </PageHero>
      <section className="bg-navy-50">
        <div className="wrap py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {RESOURCE_GROUPS.map((e) => (
              <div className="card p-7" key={e.title}>
                <div className="flex items-center gap-3">
                  <IconBadge name={e.icon} className="h-11 w-11" iconClassName="h-5 w-5" />
                  <div>
                    <h2 className="text-xl font-semibold">{e.title}</h2>
                    <p className="text-sm text-slate-600">{e.body}</p>
                  </div>
                </div>
                <ul className="mt-6 divide-y divide-slate-200">
                  {e.links.map(([t, n, r]) => (
                    <li key={r}>
                      <a
                        href={r}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-3"
                      >
                        <span>
                          <span className="block font-semibold text-navy-900 group-hover:underline">
                            {t}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                            {n}
                          </span>
                        </span>
                        <Icon
                          name="external"
                          className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-navy-900"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                {e.note && (
                  <p className="mt-4 rounded-xl bg-navy-50 p-4 text-sm leading-6 text-slate-700">
                    {e.note}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-slate-600">
            Links go to outside websites that HHCS does not control. Nothing on
            this page is legal or tax advice.
          </p>
        </div>
      </section>
      <CtaBand
        title="Ready to put the foundations to work?"
        primary={{
          to: "/tax-pro-registration",
          label: "Apply now",
        }}
        secondary={{
          to: "/now-hiring",
          label: "Compare the options",
        }}
      />
    </>
  );
}
