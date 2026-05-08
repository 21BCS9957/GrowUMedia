import AuditBookingLink from "./AuditBookingLink";

export default function Footer() {
  return (
    <footer className="bg-dark-bg">
      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="block gradient-headline">Ready to make YouTube</span>
            <span className="block gradient-headline">your best channel?</span>
          </h2>

          {/* Subtext */}
          <p className="text-base text-text-muted mt-6">
            Book a free 30-minute channel audit. No pitch. Just clarity.
          </p>

          {/* CTA Button */}
          <AuditBookingLink
            href="/landing/audit"
            id="audit"
            className="inline-block mt-8 bg-brand-yellow text-dark-bg font-bold px-10 py-5 rounded-xl text-lg hover:bg-brand-yellow-hover transition-colors duration-200 cursor-pointer"
          >
            Book Your Free Audit →
          </AuditBookingLink>
        </div>
      </section>

      {/* Footer Strip */}
      <div className="border-t border-dark-border px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>© 2025 GrowUMedia</div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-text-white transition-colors">
              Privacy
            </a>
            <span>·</span>
            <a href="#terms" className="hover:text-text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
