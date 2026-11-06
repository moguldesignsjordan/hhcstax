import { ADMIN_LOGIN_URL, CONTACT } from "../lib/site";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy-50 text-slate-700">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
            Software, training and support for independent tax professionals.
            You run your business. We stand behind it.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy-900">
            Work with us
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/now-hiring#team">
                70% team
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/now-hiring#tier">
                100% tier
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/hhcs-software">
                Software for EFIN holders
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/tax-pro-registration">
                Apply
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/training-center">
                Training Center
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy-900">
            Contact
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a className="hover:text-navy-700 hover:underline" href={CONTACT.emailHref}>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a className="hover:text-navy-700 hover:underline" href={CONTACT.phoneHref}>
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>{CONTACT.location}</li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/tax-preparation">
                Get your taxes done
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em] text-navy-900">
            Legal
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/terms">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-navy-700 hover:underline" to="/esign-consent">
                E-sign consent
              </Link>
            </li>
            <li>
              <a
                className="hover:text-navy-700 hover:underline"
                href={ADMIN_LOGIN_URL}
                rel="nofollow"
              >
                Team login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="wrap flex flex-col gap-3 py-6 text-xs leading-5 text-slate-600 md:flex-row md:justify-between">
          <p>
            {"© "}
            {new Date().getFullYear()} {CONTACT.legalName}. All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            HHCS is not affiliated with the IRS. Tax professionals who work with
            HHCS are independent contractors. HHCS does not guarantee clients,
            return volume, income or EFIN approval. Images are AI-generated and
            do not show HHCS staff or clients.
          </p>
        </div>
      </div>
    </footer>
  );
}
