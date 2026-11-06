import { ADMIN_LOGIN_URL } from "../lib/site";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="wrap py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-5 text-4xl">We cannot find that page</h1>
      <p className="lead mx-auto mt-4 max-w-lg">
        It may have moved when we rebuilt the site. These links will get you
        back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-navy">
          Home
        </Link>
        <Link to="/now-hiring" className="btn-ghost">
          Prepare taxes with us
        </Link>
        <Link to="/hhcs-software" className="btn-ghost">
          Software
        </Link>
        <Link to="/tax-preparation" className="btn-ghost">
          Get your taxes done
        </Link>
      </div>
    </section>
  );
}
export function AdminRedirect() {
  return (
    <section className="wrap py-24 text-center">
      <h1 className="h-display text-4xl">Team login has moved</h1>
      <p className="lead mx-auto mt-4 max-w-lg">
        The HHCS admin area now has its own address.
      </p>
      <a href={ADMIN_LOGIN_URL} className="btn-navy mt-8" rel="nofollow">
        Go to team login
      </a>
    </section>
  );
}
