import { Icon } from "./Icon";
import { Link } from "react-router-dom";

export function SectionHead({
  eyebrow: e,
  title: t,
  children: n,
  center: r = !1,
  id: l,
}) {
  return (
    <div className={`max-w-3xl ${r ? "mx-auto text-center" : ""}`}>
      {e && <p className="eyebrow">{e}</p>}
      <h2 id={l} className="h-display mt-3 text-3xl leading-tight sm:text-4xl">
        {t}
      </h2>
      {n && <p className="lead mt-4">{n}</p>}
    </div>
  );
}

/** Small gold circle with a navy check, used in lists and trust rows. */
export function CheckBadge({ className = "h-6 w-6" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 ${className}`}
    >
      <Icon name="check" className="h-[55%] w-[55%]" strokeWidth={3} />
    </span>
  );
}

/** Gold circle holding a topic icon. */
export function IconBadge({ name, className = "h-14 w-14", iconClassName = "h-7 w-7" }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 ${className}`}
    >
      <Icon name={name} className={iconClassName} />
    </span>
  );
}

/** Gold numbered circle for step lists. */
export function StepBadge({ n, className = "h-10 w-10" }) {
  return (
    <span
      className={`num inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 text-base font-extrabold text-navy-950 ${className}`}
    >
      {n}
    </span>
  );
}

export function CheckList({ items: e, className: n = "" }) {
  return (
    <ul className={`space-y-3 ${n}`}>
      {e.map((r, l) => (
        <li className="flex gap-3" key={l}>
          <CheckBadge className="mt-0.5 h-6 w-6" />
          <span className="text-[15.5px] leading-6 text-slate-700">{r}</span>
        </li>
      ))}
    </ul>
  );
}
export function Faq({ items: e }) {
  return (
    <div className="card divide-y divide-slate-200">
      {e.map(([t, n], r) => (
        <details className="group px-5 py-4 sm:px-6" key={r}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[16px] font-bold text-navy-900">
            {t}
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-navy-700 transition group-open:rotate-45">
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <div className="pt-3 text-[15px] leading-7 text-slate-700">{n}</div>
        </details>
      ))}
    </div>
  );
}
export function Notice({ children: e, tone: t = "info" }) {
  const n =
    t === "warn"
      ? "border-gold-500 bg-gold-100 text-navy-900"
      : "border-slate-200 bg-white text-slate-700";
  return (
    <div
      className={`flex gap-3 rounded-xl border px-4 py-3 text-sm leading-6 ${n}`}
    >
      <Icon
        name={t === "warn" ? "alert" : "info"}
        className="mt-0.5 h-5 w-5 shrink-0 text-navy-700"
      />
      <div>{e}</div>
    </div>
  );
}

/** Responsive local photo. `photo` is an entry from lib/photos. */
export function Photo({ photo, w, h, className = "", eager = false }) {
  if (import.meta.env.VITE_PREVIEW) {
    return (
      <div
        role="img"
        aria-label={photo.alt}
        className={`flex flex-col items-center justify-center gap-1 bg-navy-100 p-4 text-center text-navy-900 ${className}`}
      >
        <span className="text-[11px] font-extrabold uppercase tracking-[0.14em]">Photo</span>
        <span className="text-sm font-semibold">{photo.alt}</span>
      </div>
    );
  }
  return (
    <img
      src={photo.src}
      width={w}
      height={h}
      alt={photo.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`bg-slate-200 ${className}`}
    />
  );
}

/** Rounded photo with a solid gold or navy block offset behind it. */
export function PhotoBlock({
  photo,
  w = 720,
  h = 540,
  eager = !1,
  tone = "gold",
  ratio = "aspect-[4/3]",
  position = "object-center",
  className = "",
}) {
  return (
    <div className={`relative mb-3 mr-3 sm:mb-4 sm:mr-4 ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute left-3 top-3 h-full w-full rounded-3xl sm:left-4 sm:top-4 ${tone === "gold" ? "bg-gold-500" : "bg-navy-900"}`}
      />
      <Photo
        photo={photo}
        w={w}
        h={h}
        eager={eager}
        className={`relative w-full rounded-3xl object-cover ${ratio} ${position}`}
      />
    </div>
  );
}

/** Gold marker bar under the key phrase of a headline. */
export function Hl({ children }) {
  return (
    <span className="underline decoration-gold-400 decoration-[0.16em] underline-offset-[0.12em] [text-decoration-skip-ink:none]">
      {children}
    </span>
  );
}

/** Full-width solid navy band with a centered heading. Children (usually white cards) sit below it. */
export function NavyBand({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-28 bg-navy-900 py-16 sm:py-20">
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="eyebrow text-gold-400">{eyebrow}</p>}
          <h2 className="h-display mt-3 text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-lg leading-relaxed text-slate-200">{intro}</p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function CtaBand({ title: e, body: t, primary: n, secondary: r, photo }) {
  return (
    <section className="bg-navy-900">
      <div
        className={`wrap grid items-center gap-12 py-16 sm:py-20 ${photo ? "lg:grid-cols-2 lg:gap-16" : ""}`}
      >
        <div className="max-w-2xl">
          <h2 className="h-display text-3xl leading-tight text-white sm:text-4xl">
            {e}
          </h2>
          {t && (
            <p className="mt-4 text-lg leading-relaxed text-slate-200">{t}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {n && (
              <Link to={n.to} className="btn-gold">
                {n.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
            {r && (
              <Link to={r.to} className="btn-ghost-light">
                {r.label}
              </Link>
            )}
          </div>
        </div>
        {photo && (
          <PhotoBlock
            photo={photo}
            position="object-[50%_25%]"
            className="mx-auto w-full max-w-xl lg:max-w-none"
          />
        )}
      </div>
    </section>
  );
}

/** Option card: label strip, title, intro, check bullets, price, solid button, text link. */
export function OfferCard({
  label,
  highlight = false,
  title,
  intro,
  bullets = [],
  priceLabel,
  price,
  priceNote,
  extra,
  cta,
  more,
  photo,
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(6,26,54,0.25)] ${highlight ? "ring-4 ring-gold-500" : ""}`}
    >
      <p
        className={`px-6 py-2.5 text-center text-[11.5px] font-extrabold uppercase tracking-[0.14em] ${highlight ? "bg-gold-500 text-navy-950" : "bg-navy-50 text-navy-900"}`}
      >
        {label}
      </p>
      {photo && (
        <Photo photo={photo} w={640} h={300} className="h-44 w-full object-cover object-[50%_25%] sm:h-52" />
      )}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-navy-900">
          {title}
        </h3>
        {intro && (
          <p className="mt-3 text-[15px] font-semibold leading-6 text-slate-700">
            {intro}
          </p>
        )}
        <ul className="mt-5 flex-1 space-y-3">
          {bullets.map((b) => (
            <li className="flex gap-3 text-[15px] leading-6 text-slate-700" key={b}>
              <CheckBadge className="mt-0.5 h-5 w-5" />
              {b}
            </li>
          ))}
        </ul>
        {price && (
          <div className="mt-6">
            {priceLabel && (
              <p className="text-sm font-semibold text-slate-600">{priceLabel}</p>
            )}
            <p className="flex items-baseline gap-2">
              <span className="num text-5xl font-extrabold tracking-tight text-navy-900">
                {price}
              </span>
              {priceNote && (
                <span className="font-semibold text-slate-600">{priceNote}</span>
              )}
            </p>
          </div>
        )}
        {extra}
        {cta && (
          <Link to={cta.to} className="btn-navy mt-6 w-full">
            {cta.label}
          </Link>
        )}
        {more && (
          <Link
            to={more.to}
            className="mt-4 inline-flex items-center gap-1 self-center text-[15px] font-bold text-navy-700 underline underline-offset-4 hover:text-navy-900"
          >
            {more.label}
          </Link>
        )}
      </div>
    </div>
  );
}

/** Two-column band: copy on one side, rounded photo with an offset block on the other. */
export function PhotoBand({ gray = false, flip = false, tag, title, children, photo, action }) {
  return (
    <section className={gray ? "bg-navy-50" : "bg-white"}>
      <div className="wrap grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          {tag && <p className="eyebrow">{tag}</p>}
          <h2 className="h-display mt-3 text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 text-[16.5px] leading-7 text-slate-700">
            {children}
          </div>
          {action && <div className="mt-8">{action}</div>}
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <PhotoBlock photo={photo} position="object-[50%_20%]" />
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow: e,
  title: t,
  children: n,
  art: r,
  actions: l,
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div
        className={`wrap grid items-center gap-12 py-12 sm:py-16 ${r ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" : ""}`}
      >
        <div className="max-w-2xl">
          {e && <p className="eyebrow">{e}</p>}
          <h1 className="h-display mt-3 text-4xl leading-[1.1] sm:text-5xl">
            {t}
          </h1>
          {n && <div className="lead mt-5">{n}</div>}
          {l && <div className="mt-8 flex flex-wrap gap-3">{l}</div>}
        </div>
        {r && <div className="mx-auto w-full max-w-lg lg:max-w-none">{r}</div>}
      </div>
    </section>
  );
}
export function Field({
  label: e,
  htmlFor: t,
  children: n,
  hint: r,
  error: l,
  optional: i,
}) {
  return (
    <div>
      <label htmlFor={t} className="field-label">
        {e}
        {i ? (
          <span className="font-normal text-slate-500">{" (optional)"}</span>
        ) : (
          <span className="text-gold-700">{" *"}</span>
        )}
      </label>
      {n}
      {r && !l && <p className="mt-1.5 text-xs text-slate-500">{r}</p>}
      {l && <p className="mt-1.5 text-xs font-semibold text-red-700">{l}</p>}
    </div>
  );
}
