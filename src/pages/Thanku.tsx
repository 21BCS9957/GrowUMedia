import Navbar from "@/landing/components/Navbar";
import { trackAuditLead, trackSchedulerViewed } from "@/landing/lib/gtm-events";
import { useEffect } from "react";

const RECLAIM_REDIRECT_URL =
  typeof window !== "undefined" ? `${window.location.origin}/sheduled` : "/sheduled";
const RECLAIM_URL =
  `https://meet.reclaimai.com/e/673b1d38-a315-443d-a5f4-8e194af12d28?redirect_url=${encodeURIComponent(RECLAIM_REDIRECT_URL)}`;

export default function Thanku() {
  useEffect(() => {
    trackAuditLead();
    trackSchedulerViewed();

    const reclaimTimer = window.setTimeout(() => {
      window.location.assign(RECLAIM_URL);
    }, 2500);

    return () => {
      window.clearTimeout(reclaimTimer);
    };
  }, []);

  return (
    <main className="landing-page min-h-screen bg-dark-bg text-text-white font-inter">
      <Navbar />
      <section className="px-4 pb-10 pt-28 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
              Audit Request Submitted
            </p>
            <h1 className="mt-4 font-manrope text-4xl font-black leading-tight md:text-5xl">
              <span className="gradient-headline">Thanks. Opening the scheduler.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Your form is in. We'll send you to the call scheduler now.
            </p>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-card px-6 py-14 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] sm:px-10">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
              If the scheduler does not open automatically, use the button below.
            </p>
            <a
              href={RECLAIM_URL}
              className="mt-8 inline-flex w-full max-w-md items-center justify-center rounded-lg bg-brand-yellow px-8 py-5 text-lg font-bold text-dark-bg transition-colors duration-200 hover:bg-brand-yellow-hover"
            >
              Open Scheduler
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
