import { IconBadge } from "../components/ui";
import { CONTACT } from "../lib/site";
import { Link } from "react-router-dom";

export function TrainingCenterPage() {
  return (
    <section className="wrap py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <IconBadge name="book" className="h-16 w-16" iconClassName="h-8 w-8" />
        <h1 className="h-display mt-6 text-4xl">Training Center</h1>
        <p className="lead mt-4">
          The Training Center is for enrolled tax professionals. Once you sign
          your agreement, we email you a link to set your password and start
          the training.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/tax-pro-registration" className="btn-navy">
            Not enrolled yet? Apply
          </Link>
          <a href={CONTACT.emailHref} className="btn-ghost">
            Need help signing in?
          </a>
        </div>
      </div>
    </section>
  );
}
