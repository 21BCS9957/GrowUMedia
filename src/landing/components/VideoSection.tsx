import AuditBookingLink from "./AuditBookingLink";

export default function VideoSection() {
  return (
    <section className="bg-dark-bg px-6 pb-20 pt-0">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
          Watch the VSL
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-black border border-brand-yellow-border aspect-video shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
          <iframe
            src="https://www.tella.tv/video/stop-guessing-how-to-actually-grow-your-youtube-channel-3noo/embed?feature=oembed"
            title="Stop Guessing: How to Actually Grow Your YouTube Channel"
            className="h-full w-full"
            allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; fullscreen *"
            allowFullScreen
            loading="eager"
            scrolling="no"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center">
          <AuditBookingLink
            href="/landing/audit"
            className="block w-full max-w-lg bg-brand-yellow text-dark-bg font-bold py-5 rounded-xl text-lg text-center hover:bg-brand-yellow-hover transition-colors duration-200 cursor-pointer"
          >
            Book Your Free Channel Audit →
          </AuditBookingLink>
          
          {/* Micro-copy */}
          <p className="text-sm text-text-muted mt-4 text-center">
            Takes 30 seconds · No commitment · Walk away with video ideas regardless
          </p>
        </div>
      </div>
    </section>
  );
}
