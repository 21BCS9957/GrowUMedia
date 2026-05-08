import Navbar from "@/landing/components/Navbar";
import { trackAuditLead, trackSchedulerViewed } from "@/landing/lib/gtm-events";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RECLAIM_REDIRECT_URL =
  typeof window !== "undefined" ? `${window.location.origin}/schedule` : "/schedule";
const RECLAIM_URL = "https://app.reclaim.ai/m/arsh-groumedia/arsh";

export default function Thanku() {
  const navigate = useNavigate();

  useEffect(() => {
    trackAuditLead();
    trackSchedulerViewed();

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://meet.reclaimai.com") {
        return;
      }

      const eventType =
        typeof event.data === "object" && event.data && "type" in event.data
          ? String(event.data.type)
          : "";

      if (
        [
          "booking_completed",
          "scheduled",
          "booking_failed",
          "failed",
          "error",
          "cancelled",
        ].includes(eventType)
      ) {
        navigate("/schedule");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

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
              <span className="gradient-headline">Thanks. Pick a call time.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Your form is in. Schedule your audit call below.
            </p>
          </div>

          <div className="rounded-lg border border-dark-border bg-dark-card px-6 py-14 text-center shadow-[0_24px_100px_rgba(0,0,0,0.35)] sm:px-10">
            <iframe
              src={RECLAIM_URL}
              title="Schedule your GrowUMedia audit call"
              className="h-[780px] w-full bg-dark-bg"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
