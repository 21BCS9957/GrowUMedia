import AuditBookingLink from "./AuditBookingLink";

export default function VideoSection() {
  return (
    <section className="bg-dark-bg px-6 pb-20 pt-0">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-black border border-brand-yellow-border aspect-video shadow-[0_24px_100px_rgba(0,0,0,0.35)]">
          <iframe
            src="https://www.tella.tv/video/why-your-youtube-channel-isn-t-growing-c1g0/embed?feature=oembed"
            title="Why your YouTube channel isn't growing"
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
            className="group relative block w-full max-w-xl overflow-hidden rounded-xl border border-brand-yellow bg-brand-yellow px-6 py-5 text-center text-lg font-black text-dark-bg shadow-[0_18px_50px_rgba(246,196,83,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow-hover hover:shadow-[0_22px_70px_rgba(246,196,83,0.32)]"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-white/60" />
            Show Me My 30-Day YouTube Plan →
          </AuditBookingLink>
          
          {/* Micro-copy */}
          <p className="mt-4 max-w-md text-center text-sm text-text-muted">
            Answer a few questions. Get clear next-video angles, revenue bottlenecks, and whether we can help.
          </p>
        </div>
      </div>
    </section>
  );
}
