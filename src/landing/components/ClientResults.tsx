import { useState } from "react";
import { Play } from "lucide-react";

type ProofImage = {
  label: string;
  src: string;
  alt: string;
  note?: string;
};

type CaseStudy = {
  eyebrow: string;
  category: string;
  metric: string;
  metricDetail: string;
  title: string;
  videoSrc?: string;
  images: ProofImage[];
  body: string[];
  quote?: string;
};

const caseStudies: CaseStudy[] = [
  {
    eyebrow: "CASE STUDY 01",
    category: "D2C · HAIR CARE",
    metric: "$45K",
    metricDetail: "direct revenue · one video · month one",
    title: "Andrew Verbinnen — Anagen Hair Care",
    videoSrc: "https://www.youtube.com/embed/uLm5--cS_Z4?start=2",
    images: [
      {
        label: "Anagen Channel Growth",
        src: "/case-studies/anagen-channel-growth.jpeg",
        alt: "Anagen channel subscriber growth analytics",
        note: "4,175 subscribers · compounding growth",
      },
      {
        label: "Anagen Uploads",
        src: "/case-studies/anagen-uploads.jpeg",
        alt: "Anagen YouTube uploads with research-led topics",
        note: "consistent views · research-led topics",
      },
      {
        label: "Anagen Video Analytics",
        src: "/case-studies/anagen-analytics-pp405.png",
        alt: "Anagen video analytics showing 9,779 views",
        note: "9.8K views · +110 subscribers",
      },
      {
        label: "Anagen Rankings Video",
        src: "/case-studies/anagen-analytics-rankings.png",
        alt: "Anagen video analytics showing 76,787 views",
        note: "76.8K views · +850 subscribers",
      },
      {
        label: "Anagen Minoxidil Video",
        src: "/case-studies/anagen-analytics-minoxidil.png",
        alt: "Anagen video analytics showing 214,560 views",
        note: "214.6K views · +1.5K subscribers",
      },
    ],
    body: [
      "Andrew had a hair care product and a team running his YouTube — real effort, deep expertise, consistent output. Communication gaps and coordination issues, nothing unusual. But more importantly: no research behind any content decision. None of it was compounding. Nothing was getting views.",
      "His fourth video with us drove 200,000 views and $45,000 in direct product revenue — in a single month. No paid ads. One video. Because for the first time, someone figured out which video to make before anyone touched a camera. YouTube then monetised his channel — the platform now pays him every month just to keep posting.",
    ],
    quote: "\"I'm getting paid to market my own product.\" — Andrew Verbinnen",
  },
  {
    eyebrow: "CASE STUDY 02",
    category: "B2B SAAS",
    metric: "500K views",
    metricDetail: "30 days · 33% more demos",
    title: "Vista Social — B2B SaaS Platform",
    images: [
      {
        label: "Vista AI Tools Video",
        src: "/case-studies/vista-ai-tools-analytics.png",
        alt: "Vista Social video analytics showing 6,024 views",
        note: "6.0K views · +56 subscribers",
      },
      {
        label: "Vista Apple Short",
        src: "/case-studies/vista-apple-short-analytics.png",
        alt: "Vista Social short analytics showing 28,835 views",
        note: "28.8K views · +20 subscribers",
      },
      {
        label: "Vista Instagram Video",
        src: "/case-studies/vista-instagram-algorithm-analytics.png",
        alt: "Vista Social video analytics showing 5,437 views",
        note: "5.4K views · +37 subscribers",
      },
      {
        label: "Vista Domino's Short",
        src: "/case-studies/vista-dominos-short-analytics.png",
        alt: "Vista Social short analytics showing 30,560 views",
        note: "30.6K views · +15 subscribers",
      },
      {
        label: "Vista Shorts Strategy",
        src: "/case-studies/vista-shorts-strategy.png",
        alt: "Vista Social shorts strategy views by content table",
        note: "222,769 views · 108 subscribers",
      },
    ],
    body: [
      "Vista Social had a full content team producing YouTube videos every single week. Consistent output. Zero business results from any of it.",
      "30 days after we stepped in — 500,000 views, 33% more qualified demo requests. Same team. Completely different system behind it.",
    ],
  },
  {
    eyebrow: "CASE STUDY 03",
    category: "FINANCE · INVESTING EDUCATION",
    metric: "10.9M views",
    metricDetail: "365 days · up 191% year on year",
    title: "Brian Feroldi — Long Term Mindset",
    videoSrc: "https://www.youtube.com/embed/8ritZBOwUWo",
    images: [
      {
        label: "Brian Balance Sheet Video",
        src: "/case-studies/brian-balance-sheet-analytics.png",
        alt: "Brian Feroldi video analytics showing 206,500 views",
        note: "206.5K views · +3.4K subscribers",
      },
      {
        label: "Brian Channel Growth",
        src: "/case-studies/brian-channel-growth.jpeg",
        alt: "Brian Feroldi channel growth showing 290,926 subscribers",
        note: "290,926 subscribers · lifetime growth",
      },
      {
        label: "Brian Investing Books Video",
        src: "/case-studies/brian-investing-books-analytics.png",
        alt: "Brian Feroldi video analytics showing 109,494 views",
        note: "109.5K views · +1.7K subscribers",
      },
      {
        label: "Brian ETF Video",
        src: "/case-studies/brian-etf-analytics.png",
        alt: "Brian Feroldi video analytics showing 177,211 views",
        note: "177.2K views · +3.2K subscribers",
      },
    ],
    body: [
      "Brian Feroldi runs one of the most respected finance and investing education channels on YouTube. The channel was producing consistently — what it didn't have was a research operation telling it which content the algorithm would actually surface at scale.",
      "10,921,351 views in the last 365 days. Up 191% from the previous year. 108,500 new subscribers. A multi-million dollar course business driven directly from YouTube — because the right content decisions compound over time.",
    ],
  },
];

function VideoSlot({ src, title }: { src?: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeId = src?.match(/youtube\.com\/embed\/([^?]+)/)?.[1];
  const thumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : null;

  if (!src) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-dark-border bg-black">
      <div className="aspect-video">
        {thumbnail && !isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative h-full w-full overflow-hidden bg-black"
            aria-label={`Play ${title} video`}
          >
            <img
              src={thumbnail}
              alt={`${title} video thumbnail`}
              className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-95"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/25" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-yellow-border bg-brand-yellow text-dark-bg shadow-[0_0_30px_rgba(246,196,83,0.32)] transition duration-200 group-hover:scale-105">
              <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        ) : (
          <iframe
            src={isPlaying ? `${src}${src.includes("?") ? "&" : "?"}autoplay=1` : src}
            title={`${title} video`}
            className="h-full w-full"
            allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; fullscreen *"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default function ClientResults() {
  const [zoomedImage, setZoomedImage] = useState<ProofImage | null>(null);

  return (
    <section className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-yellow">
          CLIENT RESULTS
        </div>

        <h2 className="mt-6 font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-left md:text-left">
          <span className="block gradient-headline">Real channels.</span>
          <span className="block gradient-headline">Real business outcomes.</span>
        </h2>

        <p className="max-w-xl text-text-muted text-base mt-4">
          Across D2C, SaaS, finance, wellness, and content — the same research-first system produces the same compounding results.
        </p>

        <div className="mt-12 space-y-8">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.title}
              className="overflow-hidden rounded-2xl border border-dark-border bg-dark-card"
            >
              {caseStudy.videoSrc ? (
                <div className="p-4 md:p-5">
                  <VideoSlot src={caseStudy.videoSrc} title={caseStudy.title} />
                </div>
              ) : null}

              <div className="border-y border-dark-border bg-dark-card-2 px-4 py-5 md:px-5">
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {caseStudy.images.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setZoomedImage(image)}
                      className="min-w-[260px] max-w-[340px] flex-1 overflow-hidden rounded-lg border border-dark-border bg-dark-bg text-left transition duration-200 hover:border-brand-yellow-border"
                    >
                      <div className="border-b border-dark-border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-brand-yellow">
                        {image.label}
                      </div>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-44 w-full object-cover"
                        loading="lazy"
                      />
                      {image.note ? (
                        <div className="border-t border-dark-border bg-dark-card px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-brand-yellow">
                          {image.note}
                        </div>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
                    {caseStudy.eyebrow}
                  </span>
                  <span className="text-xs text-text-muted">{caseStudy.category}</span>
                </div>

                <div className="mt-4 inline-flex items-center bg-brand-yellow-muted border border-brand-yellow-border rounded-lg px-4 py-2 w-fit flex-wrap">
                  <span className="text-2xl font-bold text-brand-yellow">
                    {caseStudy.metric}
                  </span>
                  <span className="text-sm text-text-muted ml-2">
                    {caseStudy.metricDetail}
                  </span>
                </div>

                <h3 className="mt-5 font-manrope font-black text-2xl leading-tight gradient-headline text-left md:text-left">
                  {caseStudy.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-text-muted leading-relaxed">
                  {caseStudy.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {caseStudy.quote ? (
                    <p className="font-semibold text-text-white">{caseStudy.quote}</p>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {zoomedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.label}
          onClick={() => setZoomedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-white"
            onClick={() => setZoomedImage(null)}
          >
            Close
          </button>
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
