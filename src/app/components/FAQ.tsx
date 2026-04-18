import { SectionHeading } from "./Services";

const faqs = [
  {
    q: "What's the catch? Why is the build free?",
    a: "There isn't one. Most service businesses can't justify a $3,000 upfront website, so they end up with nothing — or a DIY page that costs them customers. We'd rather build for free, host you for a fair monthly fee, and earn that fee every month by keeping your site running well.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel any time, no fees. We'll take the site offline, and if you want to take the code with you to host elsewhere, we'll hand it over.",
  },
  {
    q: "Do I own my domain?",
    a: "Yes — always. The domain is registered in your name. If you don't have one yet, we'll help you pick and register one.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most sites are ready to review in about a week from when we get your info. Once you approve, we launch within a day or two.",
  },
  {
    q: "Can I update content later?",
    a: "Yes — just email us what you want changed. Edits are included in the monthly fee. No more logging into a dashboard you don't have time for.",
  },
  {
    q: "Do you handle SEO and Google?",
    a: "We set up a strong on-page SEO foundation and connect your Google Business Profile so local customers can find you. We don't sell ongoing SEO retainers — just the foundation, done right.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 relative">
      <div
        className="glow-amber"
        style={{ top: "30%", right: "-180px", width: "400px", height: "400px" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions we get asked most."
        />
        <div className="mt-12 max-w-3xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="text-base md:text-lg font-medium text-white">
                  {f.q}
                </span>
                <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[var(--border-strong)] grid place-items-center text-[var(--muted-strong)] group-open:rotate-45 group-open:bg-[var(--accent-soft)] group-open:text-[var(--accent)] group-open:border-[var(--accent)] transition-all">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[var(--muted-strong)] leading-relaxed text-[15px]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
