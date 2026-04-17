import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Who we serve" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="font-semibold tracking-tight text-[var(--navy)]">
            Lobus Industries
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--navy)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary text-sm font-medium px-4 py-2 rounded-full"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
