import { trackAuditScheduled } from "@/landing/lib/gtm-events";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingScheduled() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(() => {
    trackAuditScheduled();

    const redirectTimer = window.setTimeout(() => {
      navigate("/landing");
    }, 15000);

    const countdownTimer = window.setInterval(() => {
      setSecondsLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
    };
  }, [navigate]);

  return (
    <main className="landing-page min-h-screen bg-dark-bg px-6 py-24 text-text-white font-inter">
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
          Call Scheduled
        </p>
        <h1 className="mt-6 font-manrope text-4xl font-black leading-tight md:text-6xl">
          Your audit call is confirmed.
        </h1>
        <p className="mt-6 max-w-xl text-base text-text-muted">
          You're booked in. We'll come prepared with clear next steps for your YouTube growth.
        </p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand-yellow">
          Redirecting to landing in {secondsLeft}s
        </p>
      </section>
    </main>
  );
}
