import AuditBookingLink from "./AuditBookingLink";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="relative h-10 w-40">
          <img
            src="/GUM Logo White.png"
            alt="GUM"
            className="h-full w-full object-contain object-left"
          />
        </div>

        {/* CTA Button */}
        <AuditBookingLink
          href="/landing/audit"
          className="group inline-flex items-center gap-2 rounded-md border border-brand-yellow-border bg-dark-card px-4 py-2 text-sm font-bold text-brand-yellow shadow-[0_0_0_1px_rgba(246,196,83,0.06)] transition duration-200 hover:border-brand-yellow hover:bg-brand-yellow-muted hover:text-brand-yellow"
        >
          <span className="h-2 w-2 rounded-full bg-brand-yellow transition duration-200 group-hover:scale-125" />
          Request Audit
        </AuditBookingLink>
      </div>
    </nav>
  );
}
