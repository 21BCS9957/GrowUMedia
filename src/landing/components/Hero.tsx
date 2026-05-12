export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-dark-bg px-6 pb-8 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center justify-center">
          <div className="rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-text-muted">
            For Founders & Business Owners Serious About YouTube Growth
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-center">
          <span className="block">
            <span className="inline-block gradient-headline">
              We'll Drive Revenue From Your
            </span>
          </span>
          <span className="block">
            <span className="inline-block gradient-headline">
              YouTube In 30 Days Organically .
            </span>
          </span>
          <span className="block">
            <span className="inline-block gradient-headline">
              Or We Work For Free.
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base text-text-muted max-w-sm mx-auto mt-6">
          30 days or we keep working for free. No lock-in. Month on month.
        </p>
      </div>
    </section>
  );
}
