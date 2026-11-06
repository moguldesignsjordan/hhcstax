import { CONTACT } from "../lib/site";

export const LEGAL_UPDATED = "November 5, 2026";
export function LegalPage({ title: e, children: t }) {
  return (
    <section className="bg-navy-50">
      <div className="wrap py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="h-display mt-5 text-4xl">{e}</h1>
          <p className="mt-3 text-sm text-slate-600">
            {"Last updated "}
            {LEGAL_UPDATED}
          </p>
          <div className="prose-legal card mt-8 p-6 sm:p-10">{t}</div>
          <p className="card mt-12 p-5 text-sm text-slate-700">
            {"Questions: "}
            {CONTACT.legalName}
            {", "}
            {CONTACT.location}
            {". Email "}
            <a className="font-semibold text-navy-700 underline" href={CONTACT.emailHref}>
              {CONTACT.email}
            </a>
            {" or call "}
            <a className="font-semibold text-navy-700 underline" href={CONTACT.phoneHref}>
              {CONTACT.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
export function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        {
          "These terms apply to your use of hhcstax.com (the “site”), operated by "
        }
        {CONTACT.legalName}
        {" (“HHCS,” “we,” “us”). By using the site you agree to them."}
      </p>
      <h2>Information on this site</h2>
      <p>
        The site describes HHCS programs, software packages and tax preparation
        services. It is general information, not legal, tax or financial advice.
        Prices and fees shown apply to the season stated and may change for
        later seasons.
      </p>
      <h2>Applications and requests</h2>
      <p>
        Submitting an application or a tax preparation request does not create
        an agreement, an engagement or an employment relationship. A working
        relationship begins only when both you and HHCS sign a written
        agreement. HHCS decides which applications to accept and may place
        applications on a waitlist when a program is full.
      </p>
      <h2>No guarantees</h2>
      <p>
        HHCS does not guarantee clients, return volume, income, refunds or IRS
        approval of any EFIN. Results depend on your own work and circumstances.
      </p>
      <h2>Accurate information</h2>
      <p>
        You agree to give accurate information in anything you submit. Do not
        submit Social Security numbers, bank details or other sensitive personal
        information through the site’s forms.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not misuse the site, including by attempting to access areas you are
        not authorized to use, interfering with its operation or submitting
        false or automated entries.
      </p>
      <h2>Outside links</h2>
      <p>
        The site links to government and other outside websites. HHCS does not
        control them and is not responsible for their content.
      </p>
      <h2>Ownership</h2>
      <p>
        The site’s text, design and graphics belong to HHCS. You may not copy
        them for commercial use without written permission.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        The site is provided as is. To the extent the law allows, HHCS is not
        liable for indirect or consequential damages arising from use of the
        site.
      </p>
      <h2>Governing law</h2>
      <p>
        Michigan law governs these terms. Any dispute about the site will be
        brought in the state or federal courts located in Wayne County,
        Michigan.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms. The date at the top shows the latest version.
      </p>
    </LegalPage>
  );
}
export function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {"This policy explains what information "}
        {CONTACT.legalName}
        {
          " (“HHCS”) collects through hhcstax.com, how we use it and the choices you have."
        }
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Tax professional applications:</strong>
          {
            " name, email, mobile phone, state, PTIN status and number, experience, availability, the path and package you choose, your answers to our screening question and your consent choices."
          }
        </li>
        <li>
          <strong>Tax preparation requests:</strong>
          {
            " name, email, phone, state, preferred contact method, the service you need and any optional note."
          }
        </li>
        <li>
          <strong>Technical information:</strong>
          {
            " our hosting and database providers keep standard logs, such as IP address, browser type and the time of a request, to keep the site secure and working."
          }
        </li>
      </ul>
      <p>
        Our forms do not ask for Social Security numbers, bank account numbers
        or identification documents. Please do not include them.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To review your application or request and contact you about it</li>
        <li>
          To verify your PTIN and prepare agreements if we move forward together
        </li>
        <li>To keep records of the consents you give</li>
        <li>To protect the site from fraud and abuse</li>
      </ul>
      <h2>Text messages</h2>
      <p>
        If you agree to be contacted by text, we text you only about your
        application or request. Message and data rates may apply. Reply STOP to
        opt out at any time. We do not sell or share your phone number or text
        consent with third parties for their marketing.
      </p>
      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share it only with service
        providers that help us run the site and communicate with you, such as
        our database host and email provider, and only for those purposes, or
        when the law requires it.
      </p>
      <h2>Tax return information</h2>
      <p>
        If you become a tax preparation client, information you provide to
        prepare your return is handled under the federal rules that govern tax
        return preparers, and is not used or disclosed except as those rules
        allow.
      </p>
      <h2>Security and retention</h2>
      <p>
        We use access controls and encrypted connections to protect what you
        submit. We keep application and request records for as long as we need
        them for the purposes above and to meet record-keeping requirements.
      </p>
      <h2>Your choices</h2>
      <p>
        {
          "You can ask us to correct or delete information you submitted, or to stop contacting you, by emailing "
        }
        {CONTACT.email}.
      </p>
      <h2>Children</h2>
      <p>
        The site is not directed to anyone under 18, and we do not knowingly
        collect information from them.
      </p>
      <h2>Changes</h2>
      <p>
        We may update this policy. The date at the top shows the latest version.
      </p>
    </LegalPage>
  );
}
export function EsignPage() {
  return (
    <LegalPage title="Consent to Electronic Records and Signatures">
      <p>
        HHCS provides agreements, notices and other records electronically and
        asks you to sign them electronically. This page explains what that
        means. You give this consent when you check the consent box before
        signing an HHCS agreement.
      </p>
      <h2>What you agree to</h2>
      <ul>
        <li>
          To receive agreements, notices, disclosures and other records from
          HHCS electronically, by email or through HHCS systems
        </li>
        <li>
          To sign electronically by typing your name and confirming, and that
          your electronic signature has the same effect as a handwritten one
        </li>
      </ul>
      <h2>What you need</h2>
      <p>
        A device with a current web browser, an email account you check, and a
        way to save or print PDF or web pages. After you sign, we email you a
        copy of the signed agreement.
      </p>
      <h2>Paper copies</h2>
      <p>
        {
          "You can ask for a paper copy of any record we provided electronically by emailing "
        }
        {CONTACT.email}.
      </p>
      <h2>Withdrawing consent</h2>
      <p>
        {"You can withdraw this consent by emailing "}
        {CONTACT.email}. Withdrawing does not affect records signed before then.
        Because HHCS programs run electronically, withdrawing consent may mean
        we cannot continue working together.
      </p>
      <h2>Keeping your contact information current</h2>
      <p>
        Tell us when your email address changes so you keep receiving records.
      </p>
    </LegalPage>
  );
}
