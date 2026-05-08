import ConversionEventTracker from "@/landing/components/ConversionEventTracker";

export default function LandingScheduled() {
  return (
    <main className="landing-page min-h-screen bg-dark-bg px-6 py-24 text-text-white font-inter">
      <ConversionEventTracker eventName="Schedule" />
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
      </section>
    </main>
  );
}
