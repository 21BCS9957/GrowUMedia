export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "We analyze your niche, competitors, and what the algorithm is rewarding right now. Every decision starts with data, not assumptions.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We map out which videos to make, in what order, and why. You'll know exactly what's being built and the business outcome it's designed to drive.",
    },
    {
      number: "03",
      title: "Production",
      description:
        "Scripts, filming, editing, thumbnails, titles — all executed to the standard required to compete at the top of your space.",
    },
    {
      number: "04",
      title: "Distribution & Optimization",
      description:
        "We publish, monitor performance, and feed learnings back into the research layer. Every video makes the next one smarter.",
    },
  ];

  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-yellow">
          THE SYSTEM
        </div>

        {/* Heading */}
        <h2 className="mt-6 font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight gradient-headline text-left md:text-left">
          Research first. Then we build.
        </h2>

        {/* Steps Container */}
        <div className="mt-16 relative">
          {/* Connecting Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-brand-yellow/20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-brand-yellow text-dark-bg font-bold text-xl flex items-center justify-center mb-6">
                  {step.number}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-xl font-black leading-tight gradient-headline font-manrope mb-3 text-left md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
