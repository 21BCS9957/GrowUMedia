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
          href="https://form.typeform.com/to/mKGqFyrp"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-yellow text-dark-bg font-semibold px-5 py-2 rounded-md hover:bg-brand-yellow-hover transition-colors duration-200 cursor-pointer"
        >
          Book a Free Audit
        </AuditBookingLink>
      </div>
    </nav>
  );
}
