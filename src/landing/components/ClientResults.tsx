export default function ClientResults() {
  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-yellow">
          CLIENT RESULTS
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-left md:text-left">
          <span className="block gradient-headline">Real channels.</span>
          <span className="block gradient-headline">Real business outcomes.</span>
        </h2>

        {/* Subtext */}
        <p className="max-w-xl text-text-muted text-base mt-4">
          Across D2C, SaaS, finance, wellness, and content — the same research-first system produces the same compounding results.
        </p>

        {/* Featured Case Study 01 */}
        <div className="mt-12 rounded-2xl border border-dark-border bg-dark-card overflow-hidden flex flex-col lg:flex-row">
          {/* Left Half - Proof Images */}
          <div className="lg:w-1/2 bg-dark-card-2 p-4 md:p-5">
            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                  <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#D97850]">
                    Before — HairDAO Channel
                  </div>
                  <img
                    src="/case-studies/anagen-before.png"
                    alt="HairDAO channel before GrowUMedia"
                    className="h-full w-full object-cover"
                  />
                  <div className="border-t border-dark-border bg-dark-card px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#D97850]">
                    44-119 views per video · zero research
                  </div>
                </div>

                <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                  <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#D97850]">
                    After — Anagen Channel
                  </div>
                  <img
                    src="/case-studies/anagen-after.png"
                    alt="Anagen channel after GrowUMedia"
                    className="h-full w-full object-cover"
                  />
                  <div className="border-t border-dark-border bg-dark-card px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#D97850]">
                    210K views · 73K views · research-first
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-brand-yellow">
                  Dashboard / Analytics
                </div>
                <img
                  src="/case-studies/anagen-compare.png"
                  alt="Anagen analytics comparison dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Half - Content */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-center gap-4">
            {/* Labels */}
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                CASE STUDY 01
              </span>
              <span className="text-xs text-text-muted">D2C · HAIR CARE</span>
            </div>

            {/* Metric Box */}
            <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit">
              <span className="text-2xl font-bold text-brand-yellow">$45K</span>
              <span className="text-sm text-text-muted ml-2">
                direct revenue · one video · month one
              </span>
            </div>

            {/* Title */}
            <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
              Andrew Verbinnen — Anagen Hair Care
            </h3>

            {/* Body Text */}
            <div className="space-y-3 text-sm text-text-muted leading-relaxed">
              <p>
                Andrew had a hair care product and a group of freelancers running his YouTube. Each one delivering their piece, none talking to each other, zero research behind any decision. Months of consistent output. Nothing moved.
              </p>
              <p>
                His fourth video with us drove 200,000 views and $45,000 in direct product revenue — in a single month. No paid ads. One video. Because for the first time, someone figured out which video to make before anyone touched a camera. YouTube then monetised his channel — the platform now pays him every month just to keep posting.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Case Study 02 */}
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Proof Images */}
            <div className="bg-dark-card-2 p-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                  <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#D97850]">
                    Before — Beyond Social
                  </div>
                  <img
                    src="/case-studies/vista-social-before.png"
                    alt="Vista Social channel before GrowUMedia"
                    className="w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                  <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-brand-yellow">
                    After — Vista Social
                  </div>
                  <img
                    src="/case-studies/vista-social-after.png"
                    alt="Vista Social channel after GrowUMedia"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-8 space-y-4">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  CASE STUDY 02
                </span>
                <span className="text-xs text-text-muted">B2B SAAS</span>
              </div>

              <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit flex-wrap">
                <span className="text-lg font-bold text-brand-yellow">500K views</span>
                <span className="text-sm text-text-muted ml-2">
                  · 90 days · 33% more demos
                </span>
              </div>

              <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
                Vista Social — B2B SaaS Platform
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                Vista Social had a full content team producing YouTube videos every single week. Consistent output. Zero business results from any of it. 90 days after we stepped in — 500,000 views, 33% more qualified demo requests. Same team. Completely different system behind it.
              </p>
            </div>
          </div>

          {/* Case Study 03 */}
          <div className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Proof Image */}
            <div className="bg-dark-card-2 p-4">
              <div className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg">
                <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-brand-yellow">
                  Analytics — 365 Days
                </div>
                <img
                  src="/case-studies/brian-feroldi-analytics.png"
                  alt="Brian Feroldi Long Term Mindset analytics showing 10.9M views"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-8 space-y-4">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                  CASE STUDY 03
                </span>
                <span className="text-xs text-text-muted">FINANCE · INVESTING EDUCATION</span>
              </div>

              <div className="inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit flex-wrap">
                <span className="text-lg font-bold text-brand-yellow">10.9M views</span>
                <span className="text-sm text-text-muted ml-2">
                  · 365 days · up 191% year on year
                </span>
              </div>

              <h3 className="font-manrope font-black text-xl leading-tight gradient-headline text-left md:text-left">
                Brian Feroldi — Long Term Mindset
              </h3>

              <div className="space-y-3 text-sm text-text-muted leading-relaxed">
                <p>
                  Brian Feroldi runs one of the most respected finance and investing education channels on YouTube. The channel was producing consistently — what it didn't have was a research operation telling it which content the algorithm would actually surface at scale.
                </p>
                <p>
                  10,921,351 views in the last 365 days. Up 191% from the previous year. 108,500 new subscribers. A multi-million dollar course business driven directly from YouTube — because the right content decisions compound over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
