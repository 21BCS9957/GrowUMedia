export default function WhyNotWorking() {
  const issues = [
    {
      number: "01",
      title: "Capacity",
      description:
        "Running YouTube at the level required to compete demands obsessive attention to what's working right now in your specific space. Most founders and agencies are spread too thin to give it that. So they post and hope. Posting and hoping is not a strategy.",
    },
    {
      number: "02",
      title: "Capability",
      description:
        "Most content agencies know how to produce — edit, design, upload. What they can't tell you is which video to make. That decision is the whole game. It requires a research operation, not a content calendar. And it's the decision that determines whether any of it performs.",
    },
    {
      number: "03",
      title: "Intelligence",
      description:
        "Even with time and capable people — without live data on what the algorithm is actually rewarding in your space right now, every decision is a guess. YouTube changes constantly. Without a system tracking it in real time, you're flying blind. And paying someone to fly blind for you.",
    },
  ];

  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-yellow">
          WHY IT'S NOT WORKING
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-left md:text-left">
          <span className="block gradient-headline">Getting views is hard.</span>
          <span className="block bg-gradient-to-r from-brand-yellow via-[#F5E4A8] to-text-white bg-clip-text text-transparent">
            Generating revenue from them is even harder.
          </span>
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl text-text-muted text-base mt-4">
          If your YouTube isn't lowering your CAC and building pipeline — it comes down to three things. All three are fixable. Most agencies only solve one.
        </p>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {issues.map((issue) => (
            <div
              key={issue.number}
              className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card/80 p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-yellow-border hover:bg-dark-card-2/90 hover:shadow-[0_24px_80px_rgba(246,196,83,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-brand-yellow/10 blur-3xl" />
              </div>

              {/* Large Number */}
              <div className="relative text-6xl font-black text-dark-border tracking-tight mb-4 transition duration-300 group-hover:text-brand-yellow/40">
                {issue.number}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-black leading-tight gradient-headline font-manrope text-left md:text-left">
                {issue.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-text-muted leading-relaxed mt-3 transition duration-300 group-hover:text-text-white/80">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
