import ConversionEventTracker from "@/landing/components/ConversionEventTracker";

export default function LandingThankYou() {
  return (
    <main className="landing-page min-h-screen bg-dark-bg px-6 py-24 text-text-white font-inter">
      <ConversionEventTracker eventName="Lead" />
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
          Audit Request Submitted
        </p>
        <h1 className="mt-6 font-manrope text-4xl font-black leading-tight md:text-6xl">
          Thanks, we got your details.
        </h1>
        <p className="mt-6 max-w-xl text-base text-text-muted">
          We'll review your channel details and follow up with the next step.
        </p>
      </section>
    </main>
  );
}
