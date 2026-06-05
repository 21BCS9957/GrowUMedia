import { useState } from "react";
import {
  BarChart3,
  Camera,
  ChartNoAxesCombined,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Crosshair,
  FileSearch,
  Lightbulb,
  PackageCheck,
  Search,
  Target,
} from "lucide-react";
import AuditBookingLink from "@/landing/components/AuditBookingLink";

const ctaHref = "/landing/audit";

const proofTiles = [
  {
    label: "Anagen Minoxidil Video",
    src: "/case-studies/anagen-analytics-minoxidil.png",
    alt: "Anagen video analytics showing 214,560 views",
    note: "200K+ views · $45K generated",
  },
  {
    label: "Anagen Rankings Video",
    src: "/case-studies/anagen-analytics-rankings.png",
    alt: "Anagen rankings video analytics showing 76,787 views",
    note: "76.8K views · $15K revenue",
  },
  {
    label: "Anagen Minoxidil Revenue",
    src: "/case-studies/anagen-minoxidil-14k-revenue.jpeg",
    alt: "Anagen revenue analytics showing 14,366 views",
    note: "14.4K views · $21K generated",
  },
  {
    label: "Anagen Channel Growth",
    src: "/case-studies/anagen-channel-growth.jpeg",
    alt: "Anagen channel subscriber growth analytics",
    note: "4,175 subscribers · compounding growth",
  },
];

const brianProofTiles = [
  {
    label: "Brian Balance Sheet Video",
    src: "/case-studies/brian-balance-sheet-analytics.png",
    alt: "Brian Feroldi video analytics showing 206,500 views",
    note: "206.5K views · +3.4K subscribers",
  },
  {
    label: "Brian ETF Video",
    src: "/case-studies/brian-etf-analytics.png",
    alt: "Brian Feroldi video analytics showing 177,211 views",
    note: "177.2K views · +3.2K subscribers",
  },
  {
    label: "Brian Investing Books Video",
    src: "/case-studies/brian-investing-books-analytics.png",
    alt: "Brian Feroldi video analytics showing 109,494 views",
    note: "109.5K views · +1.7K subscribers",
  },
  {
    label: "Brian Channel Growth",
    src: "/case-studies/brian-channel-growth.jpeg",
    alt: "Brian Feroldi channel growth showing 290,926 subscribers",
    note: "290,926 subscribers · lifetime growth",
  },
];

const vistaProofTiles = [
  {
    label: "Vista AI Tools Video",
    src: "/case-studies/vista-ai-tools-analytics.png",
    alt: "Vista Social video analytics showing 6,024 views",
    note: "6.0K views · +56 subscribers",
  },
  {
    label: "Vista Instagram Video",
    src: "/case-studies/vista-instagram-algorithm-analytics.png",
    alt: "Vista Social video analytics showing 5,437 views",
    note: "5.4K views · +37 subscribers",
  },
  {
    label: "Vista Apple Short",
    src: "/case-studies/vista-apple-short-analytics.png",
    alt: "Vista Social short analytics showing 28,835 views",
    note: "28.8K views · +20 subscribers",
  },
  {
    label: "Vista Domino's Short",
    src: "/case-studies/vista-dominos-short-analytics.png",
    alt: "Vista Social short analytics showing 30,560 views",
    note: "30.6K views · +15 subscribers",
  },
];

const phases = [
  {
    label: "Phase 1",
    title: "Intelligence & Architecture",
    items: [
      {
        icon: Target,
        title: "ICP Mapping",
        description:
          "We identify exactly who your buyer is on YouTube, their sophistication level, their research stage, and where they are in their journey.",
      },
      {
        icon: Compass,
        title: "Funnel Architecture",
        description:
          "We design your complete YouTube funnel so every piece of content has a defined role in moving your audience from discovery to purchase.",
      },
      {
        icon: CircleDollarSign,
        title: "Conversion Architecture",
        description:
          "We build the VSL, featured section strategy, CTA system, and attribution layer so you know which content is driving sales.",
      },
    ],
  },
  {
    label: "Phase 2",
    title: "Content Engineering",
    items: [
      {
        icon: Search,
        title: "Cross-Niche Research",
        description:
          "We study what is working in adjacent niches and bring proven formats into your space before competitors discover them.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Outlier Research",
        description:
          "We identify videos that dramatically outperformed a channel's average and reverse engineer exactly why.",
      },
      {
        icon: FileSearch,
        title: "Gap Analysis",
        description:
          "We map active audience demand against weak existing supply, then build where channels compound fastest.",
      },
      {
        icon: Lightbulb,
        title: "Idea Development",
        description:
          "Every concept is informed by ICP mapping, outlier research, and gap analysis before anything goes to camera.",
      },
    ],
  },
  {
    label: "Phase 3",
    title: "Production",
    items: [
      {
        icon: PackageCheck,
        title: "Packaging",
        description:
          "We engineer every title and thumbnail to make the right person stop scrolling and click while filtering everyone else out.",
      },
      {
        icon: Camera,
        title: "Retention Architecture",
        description:
          "We script and edit every video to keep the right viewer watching as long as possible. Every line earns the next.",
      },
    ],
  },
  {
    label: "Phase 4",
    title: "Distribution & Optimisation",
    items: [
      {
        icon: Crosshair,
        title: "Publishing & Channel Management",
        description:
          "We handle uploading, scheduling, descriptions, cards, chapters, and featured sections so the channel operates without your involvement.",
      },
      {
        icon: BarChart3,
        title: "Analytics & Iteration",
        description:
          "We read the data after every publish and make the creative pivots that keep the system accelerating.",
      },
    ],
  },
];

const faqs = [
  {
    question:
      "I've worked with YouTube agencies before and nothing happened. Why is this different?",
    answer:
      "Most YouTube agencies optimise for views and subscribers. We optimise for revenue. The difference is not the content; it is the research and funnel architecture behind every decision. We start with your buyer, your funnel, and the demand signal that tells us which video will move them toward a purchase.",
  },
  {
    question: "I don't have a big subscriber base. Will this still work for me?",
    answer:
      "Yes. Subscriber count is largely irrelevant to how we work. YouTube distributes content based on psychographic signals: who the viewer is, what they watch, and how sophisticated their research is. Andrew had under 1,500 views per video when we started. His third video with us did 214,000 views.",
  },
  {
    question: "How much of my time does this require?",
    answer:
      "One hour a week in front of a camera. Everything else, from ICP mapping and funnel architecture to scripting, editing, publishing, channel management, and analytics, is handled by us.",
  },
  {
    question: "How does the 15-day free trial work exactly?",
    answer:
      "In 15 days we audit your channel completely, map your ICP, build your funnel architecture, and produce a complete video: researched, scripted, edited, and published. No credit card. No contract. No obligation.",
  },
  {
    question: "What does the guarantee actually mean? How do you define 'double my revenue'?",
    answer:
      "We agree on a baseline revenue number from your YouTube channel before we start. Our guarantee is to double that number organically, with no paid ads, within 60 days. If we do not hit it, we keep working at no charge until we do.",
  },
  {
    question: "My product or consultation requires a lot of trust before someone buys. Can YouTube really drive that?",
    answer:
      "This is exactly why YouTube outperforms every other platform for health and wellness brands. Trust is built through time and education, and YouTube is where someone will voluntarily spend 12, 20, or 40 minutes with your expertise before they arrive pre-sold.",
  },
  {
    question: "I've been creating YouTube content for years and it hasn't worked. What makes you think you can fix that?",
    answer:
      "The problem is almost never the content itself. It is the architecture behind it. Most channels that are not converting are missing ICP precision, funnel structure, or the right content engineering methodology. In 15 days you will see exactly where your specific gap is.",
  },
  {
    question: "Why are you working exclusively with healthcare and wellness professionals now?",
    answer:
      "Because this is where the system performs at its peak. Health and wellness buyers need trust, research depth, and authority before they act. Long-form YouTube builds that better than any other platform, and sophisticated audiences convert dramatically when the right content finds them.",
  },
];

function CTAButton({ variant = "solid" }: { variant?: "solid" | "outline" }) {
  const classes =
    variant === "solid"
      ? "border-brand-yellow bg-brand-yellow text-dark-bg shadow-[0_18px_50px_rgba(246,196,83,0.24)] hover:bg-brand-yellow-hover"
      : "border-brand-yellow-border bg-transparent text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow hover:text-dark-bg";

  return (
    <AuditBookingLink
      href={ctaHref}
      className={`inline-flex w-full max-w-xl items-center justify-center rounded-xl border px-6 py-5 text-center text-base font-black transition duration-200 hover:-translate-y-0.5 sm:text-lg ${classes}`}
    >
      Start Your 15-Day Free Trial
    </AuditBookingLink>
  );
}

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-dark-bg px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function HealthcareNavbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-dark-border bg-dark-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="relative h-10 w-40">
          <img
            src="/GUM Logo White.png"
            alt="GUM"
            className="h-full w-full object-contain object-left"
          />
        </div>

        <AuditBookingLink
          href={ctaHref}
          className="group inline-flex items-center gap-2 rounded-md border border-brand-yellow-border bg-dark-card px-4 py-2 text-sm font-bold text-brand-yellow shadow-[0_0_0_1px_rgba(246,196,83,0.06)] transition duration-200 hover:border-brand-yellow hover:bg-brand-yellow-muted"
        >
          <span className="h-2 w-2 rounded-full bg-brand-yellow transition duration-200 group-hover:scale-125" />
          Start Free Trial
        </AuditBookingLink>
      </div>
    </nav>
  );
}

function HealthcareFooter() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-text-muted sm:flex-row">
        <div>© 2025 GrowUMedia</div>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="transition-colors hover:text-text-white">
            Privacy
          </a>
          <span>·</span>
          <a href="#terms" className="transition-colors hover:text-text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

function ProofTileGrid({
  tiles,
}: {
  tiles: {
    label: string;
    src: string;
    alt: string;
    note: string;
  }[];
}) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {tiles.map((tile) => (
        <article
          key={tile.src}
          className="overflow-hidden rounded-lg border border-dark-border bg-dark-bg/70"
        >
          <div className="border-b border-dark-border px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-brand-yellow">
            {tile.label}
          </div>
          <img
            src={tile.src}
            alt={tile.alt}
            className="h-32 w-full object-cover sm:h-36"
            loading="lazy"
          />
          <div className="border-t border-dark-border px-3 py-2 text-[11px] font-bold text-text-muted">
            {tile.note}
          </div>
        </article>
      ))}
    </div>
  );
}

function PhaseAccordion() {
  const [openPhase, setOpenPhase] = useState(0);

  return (
    <div className="premium-phase-stack mt-12 space-y-4">
      {phases.map((phase, phaseIndex) => {
        const isOpen = openPhase === phaseIndex;

        return (
          <article
            key={phase.title}
            className={`premium-phase-panel overflow-hidden rounded-xl border bg-dark-card transition duration-300 ${
              isOpen
                ? "is-open border-brand-yellow-border shadow-[0_24px_90px_rgba(246,196,83,0.12)]"
                : "border-dark-border hover:border-brand-yellow-border/70"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenPhase(isOpen ? -1 : phaseIndex)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
              aria-expanded={isOpen}
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-brand-yellow-border bg-brand-yellow-muted font-manrope text-sm font-black text-brand-yellow">
                  0{phaseIndex + 1}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-brand-yellow">
                    {phase.label}
                  </span>
                  <span className="mt-1 block font-manrope text-xl font-black leading-tight text-text-white md:text-3xl">
                    {phase.title}
                  </span>
                </span>
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-border bg-dark-bg text-brand-yellow transition duration-300 ${
                  isOpen ? "rotate-180 border-brand-yellow-border" : ""
                }`}
              >
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-4 border-t border-dark-border px-5 pb-5 pt-5 md:px-7 md:pb-7 lg:grid-cols-2">
                  {phase.items.map((item, itemIndex) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="premium-step-card rounded-lg border border-dark-border bg-dark-bg/70 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-yellow-border md:p-5"
                        style={{ animationDelay: `${itemIndex * 70}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-dark-bg shadow-[0_0_32px_rgba(246,196,83,0.18)]">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="font-manrope text-lg font-black leading-tight text-text-white">
                              {item.title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function Landing() {
  return (
    <main className="landing-page min-h-screen bg-dark-bg text-text-white font-inter">
      <HealthcareNavbar />

      <section className="flex items-center justify-center bg-dark-bg px-6 pb-12 pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex max-w-4xl rounded-full border border-brand-yellow-border bg-brand-yellow-muted px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">
            For healthcare and wellness professionals with a product, supplement, consultation, or program creating content on YouTube but not generating consistent revenue from it
          </div>

          <h1 className="mt-8 font-manrope text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="gradient-headline">
              We'll Install a YouTube Funnel System That Doubles Your Organic Revenue in 60 Days
            </span>{" "}
            <span className="text-text-white">Or We Keep Working For Free</span>
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-relaxed text-text-muted md:text-xl">
            You have the expertise, the research, the authority. Less credible voices are outranking you, outselling you, outbooking you. YouTube in 2026, done right, puts you in front of the exact people already searching for what only you can offer organically, at scale, without paid ads.
          </p>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-brand-yellow">
            Try the system free for 15 days. No credit card. No contract. No obligation.
          </p>

          <div className="mt-5 flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      <section className="bg-dark-bg px-6 pb-20 pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-xl border border-brand-yellow-border bg-black shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
            <div className="aspect-video">
              <iframe
                src="https://www.tella.tv/video/why-your-youtube-channel-isn-t-growing-c1g0/embed?feature=oembed"
                title="GrowUMedia healthcare YouTube funnel VSL"
                className="h-full w-full"
                allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; fullscreen *"
                allowFullScreen
                loading="eager"
                scrolling="no"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <CTAButton />
            <p className="mt-4 text-center text-sm text-text-muted">
              No credit card. No contract. No obligation.
            </p>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
          Case Study 01 · Healthcare · Hair Loss
        </div>
        <div className="mt-5 inline-flex flex-wrap items-center rounded-lg border border-brand-yellow-border bg-brand-yellow-muted px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-brand-yellow">
          $60K monthly business revenue · organic YouTube · zero paid ads · growing 20% month on month
        </div>
        <h2 className="mt-6 font-manrope text-4xl font-black leading-tight md:text-6xl">
          <span className="gradient-headline">Andrew Verbinnen — Anagen</span>
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-text-muted">
          From averaging 1,500 views per video and zero revenue to $60K a month in business revenue, entirely organic, paid ads never turned back on.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-dark-border bg-black">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/uLm5--cS_Z4?start=2"
              title="Andrew Verbinnen and Pratham Arora testimonial"
              className="h-full w-full"
              allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; fullscreen *"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofTiles.map((tile) => (
            <article
              key={tile.src}
              className="overflow-hidden rounded-lg border border-dark-border bg-dark-card"
            >
              <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand-yellow">
                {tile.label}
              </div>
              <img
                src={tile.src}
                alt={tile.alt}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="border-t border-dark-border px-4 py-3 text-xs font-bold text-text-muted">
                {tile.note}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 text-sm leading-relaxed text-text-muted md:grid-cols-2 md:text-base">
          <p>
            Andrew spent years developing proprietary formulations for hair loss that did not exist anywhere else in the market. He built a teleconsultation process around them, diagnosing each case precisely and administering the right combination of treatments for that specific individual. He had built something complete, something real, something that was genuinely changing lives. But competing against billion dollar incumbents on paid ads was a losing battle. So he turned to YouTube. Both founders on camera. An editor. A social media team. Six months of genuine company level effort. Averaging 1,500 views per video. Zero business revenue. Zero engagement that translated into anything.
          </p>
          <p>
            We applied our research mechanism to identify the exact person on YouTube who was sophisticated enough to understand his formulation, deep enough in their research to recognise it as genuinely different, and ready enough to act. Our content engineering built precise content with precise packaging to reach that person, retain them completely, and take them from cold stranger to someone who trusts Andrew as the authority. His third video with us reached 214,000 views, averaged over 50% retention, and generated $45,000 in direct business revenue. Seven months later, he is at $60,000 a month in business revenue, growing 20% month on month, entirely from organic YouTube.
          </p>
        </div>

        <blockquote className="mt-10 rounded-xl border border-brand-yellow-border bg-brand-yellow-muted p-6 font-manrope text-2xl font-black leading-tight text-text-white md:p-8 md:text-4xl">
          "But more than the revenue, he found his tribe. People who come back, refer others, and actively shape what he builds next. A community that no paid ad could have ever created."
        </blockquote>

        <figure className="mt-8 border-l-4 border-brand-yellow pl-5">
          <blockquote className="font-manrope text-2xl font-black text-text-white md:text-3xl">
            "I'm getting paid to market my own product."
          </blockquote>
          <figcaption className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow">
            Andrew Verbinnen, Co-Founder, Anagen
          </figcaption>
        </figure>
      </SectionShell>

      <SectionShell>
        <h2 className="font-manrope text-4xl font-black leading-tight md:text-6xl">
          <span className="gradient-headline">Not a Content Agency.</span>
          <span className="block text-text-white">A YouTube Acquisition Machine.</span>
        </h2>
        <p className="mt-5 text-lg font-bold text-brand-yellow">
          One hour a week in front of a camera. That's all we need from you.
        </p>

        <PhaseAccordion />
      </SectionShell>

      <SectionShell>
        <h2 className="font-manrope text-4xl font-black md:text-6xl">
          <span className="gradient-headline">FAQ</span>
        </h2>
        <div className="mt-10 divide-y divide-dark-border rounded-xl border border-dark-border bg-dark-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 md:p-6">
              <summary className="cursor-pointer list-none font-manrope text-lg font-black text-text-white">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-text-muted md:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="premium-guarantee-card mx-auto max-w-5xl overflow-hidden rounded-xl border border-brand-yellow-border bg-dark-card px-5 py-8 text-left shadow-[0_24px_90px_rgba(246,196,83,0.1)] sm:px-8 sm:py-10 md:text-center lg:px-12 lg:py-14">
          <div className="premium-text-reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
            Our Guarantee
          </div>
          <h2 className="premium-text-reveal mt-5 font-manrope text-3xl font-black leading-[1.05] tracking-normal sm:text-4xl md:text-6xl">
            <span className="gradient-headline">
              Double Your Business Revenue From Organic YouTube In 60 Days.
            </span>{" "}
            <span className="block text-text-white sm:inline">Or We Keep Working For Free.</span>
          </h2>
          <p className="premium-text-reveal mt-5 max-w-2xl text-base font-bold leading-relaxed text-text-muted md:mx-auto md:text-lg">
            No paid ads. No lock in. Month to month. Everything in writing before day one.
          </p>
          <div className="premium-text-reveal mt-8 flex justify-start md:justify-center">
            <CTAButton />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <p className="mx-auto max-w-4xl text-center font-manrope text-2xl font-black leading-tight text-text-white md:text-4xl">
          This YouTube system works. We've proven it across niches. But in healthcare and wellness, where trust is everything and sophistication is the moat, it performs like nothing else.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-dark-border bg-dark-card p-6 md:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
              Case Study 02 · Finance · Investing Education
            </div>
            <div className="mt-4 inline-flex rounded-lg border border-brand-yellow-border bg-brand-yellow-muted px-4 py-2 text-sm font-black text-brand-yellow">
              10.9M views · 365 days · up 191% year on year
            </div>
            <h3 className="mt-5 font-manrope text-3xl font-black text-text-white">
              Brian Feroldi — Long Term Mindset
            </h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-text-muted">
              Same system. Different niche.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-dark-border bg-black">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/8ritZBOwUWo"
                  title="Brian Feroldi Long Term Mindset case study video"
                  className="h-full w-full"
                  allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; fullscreen *"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <ProofTileGrid tiles={brianProofTiles} />
            <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">
              Brian Feroldi runs one of the most respected finance and investing education channels on YouTube. The channel was producing consistently; what it did not have was a research operation telling it which content the algorithm would actually surface at scale.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
              10,921,351 views in the last 365 days. Up 191% from the previous year. 108,500 new subscribers. A multi-million dollar course business driven directly from YouTube because the right content decisions compound over time.
            </p>
          </article>

          <article className="rounded-xl border border-dark-border bg-dark-card p-6 md:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
              Case Study 03 · B2B SaaS
            </div>
            <div className="mt-4 inline-flex rounded-lg border border-brand-yellow-border bg-brand-yellow-muted px-4 py-2 text-sm font-black text-brand-yellow">
              500K views · 30 days · 33% more demos
            </div>
            <h3 className="mt-5 font-manrope text-3xl font-black text-text-white">
              Vista Social — B2B SaaS Platform
            </h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-text-muted">
              Same system. Different niche.
            </p>
            <ProofTileGrid tiles={vistaProofTiles} />
            <p className="mt-5 text-sm leading-relaxed text-text-muted md:text-base">
              Vista Social had a full content team producing YouTube videos every single week. Consistent output. Zero business results from any of it.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
              90 days after we stepped in, they had 500,000 views and 33% more qualified demo requests. Same team. Completely different system behind it. Because the decision about which video to make is a research decision, not a creative one.
            </p>
          </article>
        </div>
      </SectionShell>

      <section className="bg-dark-bg px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-manrope text-4xl font-black leading-tight md:text-6xl">
            <span className="gradient-headline">
              "Your tribe is already on YouTube looking for exactly what you've built."
            </span>
          </h2>
          <p className="mt-6 text-base font-bold text-text-muted">
            15 days. No credit card. No contract. No obligation.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton />
          </div>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-brand-yellow">
            Double your business revenue from organic YouTube in 60 days or we keep working for free.
          </p>
        </div>
      </section>

      <HealthcareFooter />
    </main>
  );
}
