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
          <span className="block gradient-headline">Most YouTube channels produce.</span>
          <span className="block gradient-headline">Very few actually perform.</span>
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
              className="rounded-2xl border border-dark-border bg-dark-card p-8"
            >
              {/* Large Number */}
              <div className="text-6xl font-black text-dark-border tracking-tight mb-4">
                {issue.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black leading-tight gradient-headline font-manrope text-left md:text-left">
                {issue.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mt-3">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
