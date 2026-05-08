export default function ScreenshotProof() {
  return (
    <section id="proof" className="bg-dark-bg px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            PROOF IN NUMBERS
          </div>
          <h2 className="mt-6 font-manrope text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            <span className="block gradient-headline">
              The results speak for themselves.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Client messages, milestones, and wins from real channels we run.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-lg border border-brand-yellow-border bg-black shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
          <img
            src="/whatsapp-collage.png"
            alt="Client messages and YouTube growth proof collage"
            className="block w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
