import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { EsignPage, PrivacyPage, TermsPage } from "./pages/Legal";
import { AdminRedirect, NotFoundPage } from "./pages/NotFound";
import { NowHiringPage } from "./pages/NowHiring";
import { RegistrationPage } from "./pages/Registration";
import { ResourcesPage } from "./pages/Resources";
import { SoftwarePage } from "./pages/Software";
import { TaxPrepPage } from "./pages/TaxPrep";
import { TrainingCenterPage } from "./pages/TrainingCenter";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PAGE_META } from "./lib/meta";


export function RouteEffects() {
  const { pathname: e, hash: t } = useLocation();
  return (
    useEffect(() => {
      const n = PAGE_META[e.replace(/\/$/, "") || "/"];
      document.title = n ? n.title : "Page not found | HHCS";
      const r = document.querySelector('meta[name="description"]');
      if ((r && n && r.setAttribute("content", n.description), t)) {
        const l = document.getElementById(t.slice(1));
        if (l) {
          setTimeout(
            () =>
              l.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            40,
          );
          return;
        }
      }
      window.scrollTo(0, 0);
    }, [e, t]),
    null
  );
}
export function App() {
  return (
    <>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-hiring" element={<NowHiringPage />} />
          <Route path="/hhcs-software" element={<SoftwarePage />} />
          <Route path="/tax-pro-registration" element={<RegistrationPage />} />
          <Route path="/tax-preparation" element={<TaxPrepPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/training-center" element={<TrainingCenterPage />} />
          <Route path="/training" element={<TrainingCenterPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/esign-consent" element={<EsignPage />} />
          <Route path="/admin-login" element={<AdminRedirect />} />
          <Route path="/admin" element={<AdminRedirect />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
