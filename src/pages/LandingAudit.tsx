import Navbar from "@/landing/components/Navbar";

const TYPEFORM_REDIRECT_URL =
  typeof window !== "undefined" ? `${window.location.origin}/thanku` : "/thanku";
const TYPEFORM_URL =
  `https://form.typeform.com/to/mKGqFyrp?typeform-source=growumedia-landing&redirect_url=${encodeURIComponent(TYPEFORM_REDIRECT_URL)}`;

export default function LandingAudit() {
  return (
    <main className="landing-page min-h-screen bg-dark-bg text-text-white font-inter">
      <Navbar />
      <section className="px-4 pb-10 pt-28 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
              Free Channel Audit
            </p>
            <h1 className="mt-4 font-manrope text-4xl font-black leading-tight md:text-5xl">
              <span className="gradient-headline">Tell us about your channel.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              After submitting, you'll schedule your audit call without leaving the website.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-card shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
            <iframe
              src={TYPEFORM_URL}
              title="GrowUMedia free channel audit form"
              className="h-[760px] w-full bg-dark-bg"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
