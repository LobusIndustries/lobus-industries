import { SectionHeading } from "./Services";

const testimonials = [
  {
    quote:
      "We were getting zero calls from the web before this. Now I get 3–4 a week just from people finding us on Google. It paid for itself in the first month.",
    name: "Mike Garza",
    business: "Garza Landscaping",
    industry: "Landscaping · Austin, TX",
  },
  {
    quote:
      "I kept putting it off because I assumed it'd cost me thousands upfront. It didn't cost me a dime to get started. The site looks way more professional than I expected.",
    name: "Sarah Chen",
    business: "Sparkle Clean Co.",
    industry: "Residential Cleaning · Portland, OR",
  },
  {
    quote:
      "We were live in under two weeks and our site looks better than competitors who've been around 20 years. Customers actually comment on it.",
    name: "Dave Torres",
    business: "Torres Electrical",
    industry: "Electrical · Phoenix, AZ",
  },
  {
    quote:
      "I was skeptical about the $0 upfront thing but it's exactly what they said. Had a professional site live in 8 days. Already booked two jobs through the contact form.",
    name: "Ray Patel",
    business: "Patel Roofing & Repair",
    industry: "Roofing · Nashville, TN",
  },
  {
    quote:
      "My old site was embarrassing — I'd been avoiding giving out the URL for two years. This one I actually send to every new customer. Night and day difference.",
    name: "Kim Novak",
    business: "Novak Home Cleaning",
    industry: "House Cleaning · Denver, CO",
  },
  {
    quote:
      "Tried building it myself on Squarespace and gave up after a weekend. They built something better in a week and I didn't have to touch a thing. Worth every dollar of the $100.",
    name: "James Okafor",
    business: "Okafor HVAC Services",
    industry: "HVAC · Charlotte, NC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 relative" data-fade>
      <div
        className="glow-cool"
        style={{ top: "10%", left: "-160px", width: "420px", height: "420px" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Results"
          title="Service businesses that made the switch."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-[var(--accent)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--muted-strong)] leading-relaxed text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] grid place-items-center text-white text-sm font-semibold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">{t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
