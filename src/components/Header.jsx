import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const NAV_LINKS = [
  { to: "/tax-preparation", label: "Get your taxes done" },
  { to: "/now-hiring", label: "Prepare taxes with us" },
  { to: "/hhcs-software", label: "Software for EFIN holders" },
  { to: "/resources", label: "Resources" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-slate-200 bg-white transition ${scrolled ? "shadow-[0_6px_20px_-10px_rgba(11,45,92,0.3)]" : ""}`}
    >
      <a
        href="#main"
        onClick={(ev) => {
          ev.preventDefault();
          document.getElementById("main")?.focus();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <div className="bg-navy-900 text-white">
        <div className="wrap flex min-h-10 items-center justify-center gap-x-2 py-2 text-center text-[13.5px] font-medium leading-5 sm:text-sm">
          <span>
            Now enrolling for the 2027 tax season. Seats are limited each
            season.
          </span>
          <Link
            to="/tax-pro-registration"
            className="inline-flex shrink-0 items-center gap-1 font-extrabold text-gold-400 hover:underline"
          >
            Apply now
            <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.6} />
          </Link>
        </div>
      </div>
      <div className="wrap flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link
          to="/"
          aria-label="HutHut Consulting Services home"
          className="shrink-0"
        >
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `border-b-[3px] px-3 py-2 text-[14.5px] font-semibold transition ${isActive ? "border-gold-500 text-navy-900" : "border-transparent text-slate-700 hover:text-navy-900"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/tax-pro-registration" className="btn-navy ml-3 !py-2.5">
            Apply now
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "x" : "menu"} className="h-5 w-5 text-navy-900" />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="wrap flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-semibold ${isActive ? "bg-navy-50 text-navy-900" : "text-slate-700"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/tax-pro-registration" className="btn-navy mt-2">
              Apply now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
