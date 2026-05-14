import AuditBookingLink from "./AuditBookingLink";

export default function Footer() {
  return (
    <footer className="bg-dark-bg">
      {/* Final CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-manrope font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="block gradient-headline">Ready to become the #1</span>
            <span className="block gradient-headline"> authority in your niche?</span>
          </h2>

          {/* Subtext */}
          <p className="text-base text-text-muted mt-6">
            Apply for a free audit and leave with a sharper path to views, authority, and revenue.
          </p>

          {/* CTA Button */}
          <AuditBookingLink
            href="/landing/audit"
            id="audit"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-brand-yellow-border bg-transparent px-10 py-5 text-lg font-black text-brand-yellow transition duration-200 hover:border-brand-yellow hover:bg-brand-yellow hover:text-dark-bg hover:shadow-[0_18px_60px_rgba(246,196,83,0.2)]"
          >
            Claim My Free Audit →
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
