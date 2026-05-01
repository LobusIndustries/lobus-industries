import Logo from "./Logo";

const topCities = [
  { href: "/website-design/new-york-ny", label: "New York, NY" },
  { href: "/website-design/los-angeles-ca", label: "Los Angeles, CA" },
  { href: "/website-design/chicago-il", label: "Chicago, IL" },
  { href: "/website-design/houston-tx", label: "Houston, TX" },
  { href: "/website-design/phoenix-az", label: "Phoenix, AZ" },
  { href: "/website-design/dallas-tx", label: "Dallas, TX" },
  { href: "/website-design/austin-tx", label: "Austin, TX" },
  { href: "/website-design/atlanta-ga", label: "Atlanta, GA" },
  { href: "/website-design/denver-co", label: "Denver, CO" },
  { href: "/website-design/seattle-wa", label: "Seattle, WA" },
  { href: "/website-design/miami-fl", label: "Miami, FL" },
  { href: "/website-design/nashville-tn", label: "Nashville, TN" },
];

const tradeLinks = [
  { href: "/plumber-websites", label: "Plumber websites" },
  { href: "/electrician-websites", label: "Electrician websites" },
  { href: "/landscaper-websites", label: "Landscaper websites" },
  { href: "/cleaning-websites", label: "Cleaning service websites" },
  { href: "/hvac-websites", label: "HVAC websites" },
  { href: "/contractor-websites", label: "Contractor websites" },
  { href: "/auto-detailing-websites", label: "Auto detailer websites" },
  { href: "/personal-trainer-websites", label: "Personal trainer websites" },
  { href: "/painter-websites", label: "Painter websites" },
  { href: "/roofer-websites", label: "Roofer websites" },
  { href: "/pest-control-websites", label: "Pest control websites" },
  { href: "/pressure-washing-websites", label: "Pressure washing websites" },
  { href: "/handyman-websites", label: "Handyman websites" },
  { href: "/moving-company-websites", label: "Moving company websites" },
  { href: "/pool-service-websites", label: "Pool service websites" },
  { href: "/dog-grooming-websites", label: "Dog grooming websites" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] mt-10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* City links */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] font-medium">
              Cities we serve
            </div>
            <a href="/website-design" className="text-[10px] text-[var(--accent)] hover:underline">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-2">
            {topCities.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-[var(--muted-strong)] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="divider-line mb-8" />

        {/* Trade links */}
        <div className="mb-10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] mb-4 font-medium">
            By industry
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2.5">
            {tradeLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-[var(--muted-strong)] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="divider-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6" />
            <span className="font-semibold text-white text-sm">
              Lobus Industries
            </span>
          </div>
          <div className="text-xs text-[var(--muted-strong)] flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="/#services" className="hover:text-white transition-colors">Services</a>
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/referral" className="hover:text-white transition-colors">Referral program</a>
            <a href="/wix-alternative" className="hover:text-white transition-colors">Wix alternative</a>
            <a href="/squarespace-alternative" className="hover:text-white transition-colors">Squarespace alternative</a>
            <a href="/feed.xml" className="hover:text-white transition-colors">RSS</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/tos" className="hover:text-white transition-colors">Terms</a>
            <a
              href="mailto:lobusindustries@gmail.com"
              className="hover:text-white transition-colors"
            >
              lobusindustries@gmail.com
            </a>
          </div>
          <div className="text-xs text-[var(--muted)]">
            © {year} Lobus Industries
          </div>
        </div>
      </div>
    </footer>
  );
}
