import { Icon } from "../components/Icon";
import { Hl, Notice, PageHero, PhotoBlock, SectionHead, StepBadge } from "../components/ui";
import { PHOTOS } from "../lib/photos";
import { CONTACT, submitForm } from "../lib/site";
import { STATES } from "./Registration";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const TAXPREP_CONSENT =
  "I agree to be contacted by HutHut Consulting Services by phone, text message and email about my tax preparation request. Message and data rates may apply. I can opt out at any time by replying STOP or emailing LevelUp@HHCSTAX.COM.";
export const SSN_PATTERN = /\d{3}[- ]?\d{2}[- ]?\d{4}/;
export const TAXPREP_STEPS = [
  [
    "Send a request",
    "Tell us your name, how to reach you and what you need. Nothing sensitive.",
  ],
  [
    "We contact you",
    "We talk through your situation and tell you what to gather.",
  ],
  [
    "Share documents securely",
    "Through a secure method we set up with you. Never by text or regular email.",
  ],
  [
    "Review and sign",
    "You review your return and approve it before anything is filed.",
  ],
];
export function TaxPrepPage() {
  const [q] = useSearchParams(),
    [e, t] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      state: "",
      preferred_contact: "",
      service_needed: ["individual", "self_employed", "prior_year", "not_sure"].includes(q.get("service"))
        ? q.get("service")
        : "",
      notes: "",
      agrees_to_contact: !1,
      company_website: "",
    }),
    [n, r] = useState({}),
    [l, i] = useState("idle"),
    [o, a] = useState(""),
    u = (p) => (m) =>
      t({
        ...e,
        [p]: m.target.type === "checkbox" ? m.target.checked : m.target.value,
      }),
    d = async (p) => {
      var x;
      p.preventDefault();
      const m = {};
      if (
        (e.first_name.trim() || (m.first_name = "Enter your first name."),
        e.last_name.trim() || (m.last_name = "Enter your last name."),
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email.trim()) ||
          (m.email = "Enter a valid email address."),
        e.phone.replace(/\D/g, "").length < 10 &&
          (m.phone = "Enter a 10-digit phone number."),
        e.state || (m.state = "Choose your state."),
        e.preferred_contact ||
          (m.preferred_contact = "Choose how we should reach you."),
        e.service_needed || (m.service_needed = "Choose a service."),
        SSN_PATTERN.test(e.notes) &&
          (m.notes =
            "Please remove anything that looks like a Social Security number."),
        e.agrees_to_contact ||
          (m.agrees_to_contact = "Required so we can contact you."),
        r(m),
        a(""),
        Object.keys(m).length)
      ) {
        (x = document.getElementById(Object.keys(m)[0])) == null || x.focus();
        return;
      }
      i("sending");
      try {
        (await submitForm("tax_prep", {
          ...e,
          consent_text: TAXPREP_CONSENT,
        }),
          i("done"));
      } catch (v) {
        (a(v.message), i("idle"));
      }
    },
    y = (p, m, x = {}) => (
      <div>
        <label htmlFor={p} className="field-label">
          {m}
          <span className="text-gold-700">{" *"}</span>
        </label>
        <input id={p} className="field" value={e[p]} onChange={u(p)} {...x} />
        {n[p] && (
          <p className="mt-1.5 text-xs font-semibold text-red-700">{n[p]}</p>
        )}
      </div>
    );
  return (
    <>
      <PageHero
        eyebrow="Tax preparation"
        title={
          <>
            Get your <Hl>taxes done</Hl>
          </>
        }
        art={
          <PhotoBlock
            photo={PHOTOS.coupleFinances}
            eager
            position="object-[50%_30%]"
          />
        }
        actions={
          <>
            <Link to="#request" className="btn-navy">
              Request tax preparation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={CONTACT.phoneHref} className="btn-ghost">
              <Icon name="phone" className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
          </>
        }
      >
        We prepare returns for individuals, the self-employed and anyone
        catching up on prior years. Send a short request and we will contact you
        to talk it through.
      </PageHero>
      <section className="wrap py-16 sm:py-20">
        <SectionHead
          eyebrow="What to expect"
          title="Four easy steps, in plain language"
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {TAXPREP_STEPS.map(([p, m], x) => (
            <li className="card p-6" key={p}>
              <StepBadge n={x + 1} />
              <h3 className="mt-4 text-lg">{p}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">{m}</p>
            </li>
          ))}
        </ol>
      </section>
      <section
        id="request"
        className="scroll-mt-24 bg-navy-50 py-16 sm:py-20"
      >
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHead title="Request tax preparation">
              This request does not file a return. We will contact you to talk
              about what you need.
            </SectionHead>
            <div className="mt-8 space-y-4 text-[15px]">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 font-semibold text-navy-900"
              >
                <Icon name="phone" className="h-5 w-5 text-navy-700" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 font-semibold text-navy-900"
              >
                <Icon name="mail" className="h-5 w-5 text-navy-700" />
                {CONTACT.email}
              </a>
              <p className="flex items-center gap-3 font-semibold text-navy-900">
                <Icon name="pin" className="h-5 w-5 text-navy-700" />
                {CONTACT.location}
              </p>
            </div>
            <div className="mt-8">
              <Notice>
                Do not enter Social Security numbers, bank details or other
                sensitive information on this form. We will never ask for them
                here.
              </Notice>
            </div>
          </div>
          {l === "done" ? (
            <div className="card flex flex-col items-center justify-center p-10 text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 text-navy-900">
                <Icon name="check" className="h-8 w-8" strokeWidth={2.6} />
              </span>
              <h3 className="mt-6 text-3xl">Request received</h3>
              <p className="lead mt-3">
                {"Thank you, "}
                {e.first_name}
                {". We will reach out by "}
                {e.preferred_contact === "text"
                  ? "text message"
                  : e.preferred_contact}
                .
              </p>
            </div>
          ) : (
            <form
              noValidate={!0}
              onSubmit={d}
              className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8"
            >
              {y("first_name", "First name", {
                autoComplete: "given-name",
                maxLength: 100,
              })}
              {y("last_name", "Last name", {
                autoComplete: "family-name",
                maxLength: 100,
              })}
              {y("email", "Email", {
                type: "email",
                autoComplete: "email",
                maxLength: 200,
              })}
              {y("phone", "Mobile phone", {
                type: "tel",
                autoComplete: "tel",
                maxLength: 30,
              })}
              <div>
                <label htmlFor="state" className="field-label">
                  State<span className="text-gold-700">{" *"}</span>
                </label>
                <select
                  id="state"
                  className="field"
                  value={e.state}
                  onChange={u("state")}
                >
                  <option value="">Select your state</option>
                  {STATES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
                {n.state && (
                  <p className="mt-1.5 text-xs font-semibold text-red-700">
                    {n.state}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="preferred_contact" className="field-label">
                  Best way to reach you
                  <span className="text-gold-700">{" *"}</span>
                </label>
                <select
                  id="preferred_contact"
                  className="field"
                  value={e.preferred_contact}
                  onChange={u("preferred_contact")}
                >
                  <option value="">Select a method</option>
                  <option value="phone">Phone call</option>
                  <option value="text">Text message</option>
                  <option value="email">Email</option>
                </select>
                {n.preferred_contact && (
                  <p className="mt-1.5 text-xs font-semibold text-red-700">
                    {n.preferred_contact}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service_needed" className="field-label">
                  What do you need help with?
                  <span className="text-gold-700">{" *"}</span>
                </label>
                <select
                  id="service_needed"
                  className="field"
                  value={e.service_needed}
                  onChange={u("service_needed")}
                >
                  <option value="">Select a service</option>
                  <option value="individual">Individual return</option>
                  <option value="self_employed">
                    Self-employed or small business
                  </option>
                  <option value="prior_year">Prior-year or late returns</option>
                  <option value="not_sure">Not sure</option>
                </select>
                {n.service_needed && (
                  <p className="mt-1.5 text-xs font-semibold text-red-700">
                    {n.service_needed}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="field-label">
                  {"Anything we should know? "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  maxLength={500}
                  className="field"
                  value={e.notes}
                  onChange={u("notes")}
                />
                <p
                  className={`mt-1.5 text-xs ${n.notes ? "font-semibold text-red-700" : "text-slate-500"}`}
                >
                  {n.notes || `${e.notes.length}/500`}
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="flex cursor-pointer gap-3">
                  <input
                    id="agrees_to_contact"
                    type="checkbox"
                    checked={e.agrees_to_contact}
                    onChange={u("agrees_to_contact")}
                    className="mt-1 h-5 w-5 shrink-0 accent-[#0B2D5C]"
                  />
                  <span className="text-[14px] leading-6 text-slate-700">
                    {TAXPREP_CONSENT}
                  </span>
                </label>
                {n.agrees_to_contact && (
                  <p className="ml-8 mt-1 text-xs font-semibold text-red-700">
                    {n.agrees_to_contact}
                  </p>
                )}
              </div>
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={e.company_website}
                  onChange={u("company_website")}
                />
              </div>
              {o && (
                <div className="sm:col-span-2">
                  <Notice tone="warn">{o}</Notice>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button className="btn-navy px-8" disabled={l === "sending"}>
                  {l === "sending" ? "Sending…" : "Send request"}
                </button>
                <p className="text-xs text-slate-500">
                  {"See our "}
                  <Link className="underline" to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
