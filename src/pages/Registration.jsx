import { Icon } from "../components/Icon";
import { Field, Notice } from "../components/ui";
import { CONTACT, submitForm } from "../lib/site";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
export const BLOCKED_STATES = ["Oregon"];
export const TRACKS = [
  {
    id: "team",
    title: "70% team",
    sub: "No EFIN. No cost to join. Keep 70% of your preparation fee.",
  },
  {
    id: "tier",
    title: "100% tier",
    sub: "EFIN applied for or planned. $99 one time. Keep 100%.",
  },
  {
    id: "efin",
    title: "EFIN holder software",
    sub: "You hold an EFIN and want to run your office on HHCS software.",
  },
];
export const PACKAGE_OPTIONS = [
  {
    id: "starter",
    name: "Starter",
    price: "$19 up front · $79 per bank return",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$299 up front · $49 per bank return",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$599 up front · $29 per bank return",
  },
];
export const CONTRACTOR_ACK =
  "I understand this is independent contractor work. I find my own clients, and HHCS provides software, training and support.";
export const CONTACT_CONSENT =
  "I agree to be contacted by HutHut Consulting Services by email, phone and text message about this application. Message and data rates may apply. I can opt out at any time by replying STOP or emailing LevelUp@HHCSTAX.COM.";
export function RegistrationPage() {
  const [e] = useSearchParams(),
    t =
      {
        team: "team",
        tier: "tier",
        pending: "tier",
        efin: "efin",
      }[e.get("path")] || "",
    n = ["starter", "growth", "pro"].includes(e.get("package"))
      ? e.get("package")
      : "",
    [r, l] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      state: "",
      path: t,
      package: n,
      ptin_status: "",
      ptin_number: "",
      experience: "",
      estimated_returns: "",
      hours_per_week: "",
      irs_history: "",
      irs_history_detail: "",
      referral_source: "",
      understands_contractor: !1,
      agrees_to_contact: !1,
      company_website: "",
    }),
    [i, o] = useState({}),
    [a, u] = useState("idle"),
    [d, y] = useState(""),
    [p, m] = useState(null),
    x = (c) => (g) =>
      l({
        ...r,
        [c]: g.target.type === "checkbox" ? g.target.checked : g.target.value,
      }),
    v = BLOCKED_STATES.includes(r.state),
    w = r.ptin_status === "active" || r.ptin_status === "renewing",
    k = () => {
      const c = {};
      (r.first_name.trim() || (c.first_name = "Enter your first name."),
        r.last_name.trim() || (c.last_name = "Enter your last name."),
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r.email.trim()) ||
          (c.email = "Enter a valid email address."),
        r.phone.replace(/\D/g, "").length < 10 &&
          (c.phone = "Enter a 10-digit mobile number."),
        r.state || (c.state = "Choose your state."),
        r.path || (c.path = "Choose a path."),
        r.path === "efin" && !r.package && (c.package = "Choose a package."),
        r.ptin_status || (c.ptin_status = "Choose your PTIN status."),
        w &&
          !/^P\d{8}$/i.test(r.ptin_number.trim()) &&
          (c.ptin_number = "A PTIN is the letter P followed by 8 digits."),
        r.experience || (c.experience = "Choose your experience."));
      const g = Number(r.estimated_returns);
      return (
        (r.estimated_returns === "" ||
          !Number.isInteger(g) ||
          g < 0 ||
          g > 500) &&
          (c.estimated_returns = "Enter a whole number from 0 to 500."),
        r.hours_per_week || (c.hours_per_week = "Choose your availability."),
        r.irs_history || (c.irs_history = "Answer this question."),
        r.understands_contractor ||
          (c.understands_contractor = "Required to apply."),
        r.agrees_to_contact ||
          (c.agrees_to_contact =
            "Required so we can reach you about your application."),
        c
      );
    },
    h = async (c) => {
      (c.preventDefault(), y(""));
      const g = k();
      if ((o(g), Object.keys(g).length)) {
        const S = document.getElementById(Object.keys(g)[0]);
        S && S.focus();
        return;
      }
      if (!v) {
        u("sending");
        try {
          const S = await submitForm("application", {
            ...r,
            ptin_number: w ? r.ptin_number.trim().toUpperCase() : "",
            estimated_returns: Number(r.estimated_returns),
            consent_text: `${CONTRACTOR_ACK} ${CONTACT_CONSENT}`,
          });
          (m(S),
            u("done"),
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            }));
        } catch (S) {
          (y(S.message), u("idle"));
        }
      }
    },
    f = useMemo(() => {
      var c;
      return (c = TRACKS.find((g) => g.id === r.path)) == null
        ? void 0
        : c.title;
    }, [r.path]);
  return a === "done" ? (
    <section className="bg-navy-50">
      <div className="wrap py-20">
        <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
          <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-navy-900">
            <Icon name="check" className="h-8 w-8" strokeWidth={2.6} />
          </span>
          <h1 className="h-display mt-6 text-3xl">
            {p != null && p.waitlisted
              ? "You are on the waitlist"
              : "Application received"}
          </h1>
          <p className="lead mt-4">
            {p != null && p.waitlisted
              ? `Thank you, ${r.first_name}. The ${f} is full for now, so your application is on the waitlist. We will email you as soon as a seat opens.`
              : `Thank you, ${r.first_name}. We will review your application and contact you by email or phone.`}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            {"Questions in the meantime? Email "}
            <a
              className="font-semibold text-navy-800 underline"
              href={CONTACT.emailHref}
            >
              {CONTACT.email}
            </a>
            .
          </p>
          <Link to="/resources" className="btn-ghost mt-8">
            While you wait: business foundations
          </Link>
        </div>
      </div>
    </section>
  ) : (
    <section className="bg-navy-50">
      <div className="wrap py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">2027 tax season</p>
          <h1 className="h-display mt-5 text-4xl sm:text-5xl">
            Apply to work with HHCS
          </h1>
          <p className="lead mt-4">
            About five minutes. We never ask for your Social Security number or ID
            on this form.
          </p>
          <form noValidate={!0} onSubmit={h} className="mt-10 space-y-10">
            <fieldset className="card p-6 sm:p-8">
              <legend className="sr-only">Choose your path</legend>
              <h2 className="text-lg font-extrabold">1. Your path</h2>
              <div
                id="path"
                tabIndex={-1}
                className="mt-5 grid gap-3 sm:grid-cols-3"
                role="radiogroup"
                aria-label="Path"
              >
                {TRACKS.map((c) => (
                  <label
                    className={`cursor-pointer rounded-xl border-2 p-4 transition ${r.path === c.id ? "border-navy-900 bg-navy-50" : "border-slate-200 bg-white hover:border-navy-900/40"}`}
                    key={c.id}
                  >
                    <input
                      type="radio"
                      name="path"
                      value={c.id}
                      checked={r.path === c.id}
                      onChange={x("path")}
                      className="sr-only"
                    />
                    <span className="flex items-center justify-between font-extrabold text-navy-900">
                      {c.title}
                      {r.path === c.id && (
                        <Icon
                          name="check"
                          className="h-5 w-5 text-navy-700"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-5 text-slate-600">
                      {c.sub}
                    </span>
                  </label>
                ))}
              </div>
              {i.path && (
                <p className="mt-2 text-xs font-semibold text-red-700">
                  {i.path}
                </p>
              )}
              {r.path === "efin" && (
                <div className="mt-6">
                  <p className="field-label">
                    Package<span className="text-gold-700">{" *"}</span>
                  </p>
                  <div
                    id="package"
                    tabIndex={-1}
                    className="grid gap-3 sm:grid-cols-3"
                  >
                    {PACKAGE_OPTIONS.map((c) => (
                      <label
                        className={`cursor-pointer rounded-xl border-2 p-3 ${r.package === c.id ? "border-navy-900 bg-navy-50" : "border-slate-200 bg-white"}`}
                        key={c.id}
                      >
                        <input
                          type="radio"
                          name="package"
                          value={c.id}
                          checked={r.package === c.id}
                          onChange={x("package")}
                          className="sr-only"
                        />
                        <span className="block font-bold text-navy-900">
                          {c.name}
                        </span>
                        <span className="num block text-xs text-slate-600">
                          {c.price}
                        </span>
                      </label>
                    ))}
                  </div>
                  {i.package ? (
                    <p className="mt-2 text-xs font-semibold text-red-700">
                      {i.package}
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-slate-500">
                      {
                        "You choose your package before you register, and it stays the same for the season. "
                      }
                      <Link className="underline" to="/hhcs-software#packages">
                        Compare packages
                      </Link>
                    </p>
                  )}
                </div>
              )}
              {r.path === "tier" && (
                <div className="mt-5">
                  <Notice>
                    The 100% tier has a one-time $99 enrollment fee. You pay it
                    after you sign your agreement, before software access begins.
                    Nothing is charged when you apply.
                  </Notice>
                </div>
              )}
            </fieldset>
            <fieldset className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
              <legend className="sr-only">About you</legend>
              <h2 className="text-lg font-extrabold sm:col-span-2">
                2. About you
              </h2>
              <Field label="First name" htmlFor="first_name" error={i.first_name}>
                <input
                  id="first_name"
                  className="field"
                  autoComplete="given-name"
                  maxLength={100}
                  value={r.first_name}
                  onChange={x("first_name")}
                />
              </Field>
              <Field label="Last name" htmlFor="last_name" error={i.last_name}>
                <input
                  id="last_name"
                  className="field"
                  autoComplete="family-name"
                  maxLength={100}
                  value={r.last_name}
                  onChange={x("last_name")}
                />
              </Field>
              <Field label="Email" htmlFor="email" error={i.email}>
                <input
                  id="email"
                  type="email"
                  className="field"
                  autoComplete="email"
                  maxLength={200}
                  value={r.email}
                  onChange={x("email")}
                />
              </Field>
              <Field label="Mobile phone" htmlFor="phone" error={i.phone}>
                <input
                  id="phone"
                  type="tel"
                  className="field"
                  autoComplete="tel"
                  maxLength={30}
                  value={r.phone}
                  onChange={x("phone")}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field
                  label="State where you work"
                  htmlFor="state"
                  error={i.state}
                >
                  <select
                    id="state"
                    className="field"
                    value={r.state}
                    onChange={x("state")}
                  >
                    <option value="">Select your state</option>
                    {STATES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                {v && (
                  <div className="mt-3">
                    <Notice tone="warn">
                      We are not accepting applications from Oregon at this time.
                      If you work from another state, choose that state instead.
                    </Notice>
                  </div>
                )}
              </div>
            </fieldset>
            <fieldset className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
              <legend className="sr-only">Your experience</legend>
              <h2 className="text-lg font-extrabold sm:col-span-2">
                3. PTIN and experience
              </h2>
              <Field
                label="PTIN status"
                htmlFor="ptin_status"
                error={i.ptin_status}
                hint="You need an active PTIN before you prepare any return for pay. We verify it before you start."
              >
                <select
                  id="ptin_status"
                  className="field"
                  value={r.ptin_status}
                  onChange={x("ptin_status")}
                >
                  <option value="">Select your status</option>
                  <option value="active">I have an active PTIN</option>
                  <option value="renewing">
                    My PTIN needs renewing for 2027
                  </option>
                  <option value="none">I do not have a PTIN yet</option>
                </select>
              </Field>
              {w ? (
                <Field
                  label="PTIN"
                  htmlFor="ptin_number"
                  error={i.ptin_number}
                  hint="The letter P followed by 8 digits."
                >
                  <input
                    id="ptin_number"
                    className="field uppercase"
                    maxLength={9}
                    placeholder="P00000000"
                    value={r.ptin_number}
                    onChange={x("ptin_number")}
                  />
                </Field>
              ) : (
                <div className="hidden sm:block" />
              )}
              <Field
                label="Tax preparation experience"
                htmlFor="experience"
                error={i.experience}
              >
                <select
                  id="experience"
                  className="field"
                  value={r.experience}
                  onChange={x("experience")}
                >
                  <option value="">Select your experience</option>
                  <option value="none">None</option>
                  <option value="1-2 years">1 to 2 years</option>
                  <option value="3-5 years">3 to 5 years</option>
                  <option value="6+ years">6 or more years</option>
                </select>
              </Field>
              <Field
                label="Returns you could realistically prepare this season"
                htmlFor="estimated_returns"
                error={i.estimated_returns}
              >
                <input
                  id="estimated_returns"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="500"
                  className="field num"
                  value={r.estimated_returns}
                  onChange={x("estimated_returns")}
                />
              </Field>
              <Field
                label="Hours per week during filing season"
                htmlFor="hours_per_week"
                error={i.hours_per_week}
              >
                <select
                  id="hours_per_week"
                  className="field"
                  value={r.hours_per_week}
                  onChange={x("hours_per_week")}
                >
                  <option value="">Select your availability</option>
                  <option value="under 10">Under 10</option>
                  <option value="10-20">10 to 20</option>
                  <option value="20-40">20 to 40</option>
                  <option value="40+">40 or more</option>
                </select>
              </Field>
              <Field
                label="How did you hear about us?"
                htmlFor="referral_source"
                optional={!0}
              >
                <select
                  id="referral_source"
                  className="field"
                  value={r.referral_source}
                  onChange={x("referral_source")}
                >
                  <option value="">Select one</option>
                  <option>Indeed</option>
                  <option>Referral</option>
                  <option>Social media</option>
                  <option>Other</option>
                </select>
              </Field>
              <div className="sm:col-span-2">
                <p className="field-label">
                  Has the IRS ever suspended or sanctioned you, or revoked an EFIN
                  you held?<span className="text-gold-700">{" *"}</span>
                </p>
                <div id="irs_history" tabIndex={-1} className="flex gap-3">
                  {["no", "yes"].map((c) => (
                    <label
                      className={`cursor-pointer rounded-xl border-2 px-5 py-2.5 font-bold capitalize ${r.irs_history === c ? "border-navy-900 bg-navy-50 text-navy-900" : "border-slate-200 text-slate-700"}`}
                      key={c}
                    >
                      <input
                        type="radio"
                        name="irs_history"
                        value={c}
                        checked={r.irs_history === c}
                        onChange={x("irs_history")}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
                {i.irs_history && (
                  <p className="mt-2 text-xs font-semibold text-red-700">
                    {i.irs_history}
                  </p>
                )}
                {r.irs_history === "yes" && (
                  <div className="mt-4">
                    <Field
                      label="Briefly explain"
                      htmlFor="irs_history_detail"
                      optional={!0}
                      hint="A yes does not automatically disqualify you."
                    >
                      <textarea
                        id="irs_history_detail"
                        rows={3}
                        maxLength={1e3}
                        className="field"
                        value={r.irs_history_detail}
                        onChange={x("irs_history_detail")}
                      />
                    </Field>
                  </div>
                )}
              </div>
            </fieldset>
            <fieldset className="card space-y-4 p-6 sm:p-8">
              <legend className="sr-only">Agreements</legend>
              <h2 className="text-lg font-extrabold">4. Confirm</h2>
              {[
                ["understands_contractor", CONTRACTOR_ACK],
                ["agrees_to_contact", CONTACT_CONSENT],
              ].map(([c, g]) => (
                <div key={c}>
                  <label className="flex cursor-pointer gap-3">
                    <input
                      id={c}
                      type="checkbox"
                      checked={r[c]}
                      onChange={x(c)}
                      className="mt-1 h-5 w-5 shrink-0 accent-[#0B2D5C]"
                    />
                    <span className="text-[14.5px] leading-6 text-slate-700">
                      {g}
                    </span>
                  </label>
                  {i[c] && (
                    <p className="ml-8 mt-1 text-xs font-semibold text-red-700">
                      {i[c]}
                    </p>
                  )}
                </div>
              ))}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="company_website">Company website</label>
                <input
                  id="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={r.company_website}
                  onChange={x("company_website")}
                />
              </div>
              <p className="text-xs text-slate-500">
                {"By applying you accept our "}
                <Link className="underline" to="/terms">
                  Terms of Use
                </Link>
                {" and "}
                <Link className="underline" to="/privacy">
                  Privacy Policy
                </Link>
                .
              </p>
            </fieldset>
            {d && <Notice tone="warn">{d}</Notice>}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="btn-navy px-8"
                disabled={a === "sending" || v}
              >
                {a === "sending" ? "Sending…" : "Submit application"}
                {a !== "sending" && <Icon name="send" className="h-4 w-4" />}
              </button>
              <p className="text-sm text-slate-600">
                Seats are limited. If your tier is full, you join the waitlist.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
