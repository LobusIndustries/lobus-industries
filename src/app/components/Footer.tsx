import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="font-semibold text-[var(--navy)] text-sm">
            Lobus Industries
          </span>
        </div>
        <div className="text-xs text-[var(--muted)] flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#services" className="hover:text-[var(--navy)]">
            Services
          </a>
          <a href="#pricing" className="hover:text-[var(--navy)]">
            Pricing
          </a>
          <a href="#faq" className="hover:text-[var(--navy)]">
            FAQ
          </a>
          <a
            href="mailto:lobusindustries@gmail.com"
            className="hover:text-[var(--navy)]"
          >
            lobusindustries@gmail.com
          </a>
        </div>
        <div className="text-xs text-[var(--muted)]">
          © {year} Lobus Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
