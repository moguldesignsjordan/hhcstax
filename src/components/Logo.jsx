export function LogoMark({ className: e = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={e} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#0B2D5C" />
      <path d="M7 12h4v10h6V12h4v24h-4V26h-6v10h-4z" fill="#fff" />
      <path d="M27 12h4v10h6V12h4v24h-4V26h-6v10h-4z" fill="#F2B705" />
    </svg>
  );
}
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-tight">
        <span className="block text-[17px] font-extrabold tracking-tight text-navy-900">
          HHCS
        </span>
        <span className="block text-[11.5px] font-semibold text-slate-600">
          HutHut Consulting Services
        </span>
      </span>
    </span>
  );
}
