import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Lobus Industries — what you agree to when you work with us.",
  alternates: { canonical: `${SITE_URL}/tos` },
  robots: { index: false, follow: false },
};

const sections = [
  {
    heading: "Services provided",
    body: "Lobus Industries provides custom website design, development, hosting, SSL certificates, daily backups, and ongoing content updates for service-based businesses. The scope of each client's website is agreed upon at the start of the engagement via email.",
  },
  {
    heading: "Fees and billing",
    body: "There is no charge to build your website. Upon launch, you will be billed $100/month for hosting, maintenance, and content updates. Billing begins on the date your site goes live. Payment is due monthly and processed via the payment method on file.",
  },
  {
    heading: "Cancellation",
    body: "You may cancel your plan at any time with no cancellation fees. Upon cancellation, your website will be taken offline at the end of your current billing period. Upon request, Lobus Industries will provide you with the source code of your website within 7 business days of cancellation.",
  },
  {
    heading: "Content updates",
    body: "Routine content updates — changes to phone numbers, service descriptions, pricing, photos, and similar edits — are included in the monthly fee. Requests for major redesigns or significant new functionality may be quoted separately.",
  },
  {
    heading: "Domain ownership",
    body: "Your domain name is always registered in your name and remains your property. Lobus Industries may assist with domain registration at your direction, but the domain belongs to you regardless of whether your hosting plan is active.",
  },
  {
    heading: "Your responsibilities",
    body: "You are responsible for providing accurate business information, timely feedback during the build process, and any photos, logos, or content you wish to include on your site. Delays caused by late or missing client input may extend the launch timeline.",
  },
  {
    heading: "Intellectual property",
    body: "Upon cancellation and code handoff, you own the website code for your site. Lobus Industries retains the right to use general design patterns, components, and code frameworks across client projects. Client-specific content (copy, photos, branding) belongs to you.",
  },
  {
    heading: "Uptime and performance",
    body: "Lobus Industries targets 99.9% uptime for all hosted sites via its hosting infrastructure. In the event of downtime caused by hosting provider issues, Lobus Industries will work to restore service promptly but cannot guarantee uninterrupted availability.",
  },
  {
    heading: "Limitation of liability",
    body: "Lobus Industries' total liability to you for any claim arising under these terms shall not exceed the total fees paid in the 3 months preceding the claim. Lobus Industries is not liable for indirect, incidental, or consequential damages, including lost revenue or lost customers.",
  },
  {
    heading: "Changes to these terms",
    body: "Lobus Industries may update these Terms of Service from time to time. Clients will be notified of material changes by email at least 14 days before they take effect. Continued use of the service after changes take effect constitutes acceptance.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms? Email us at lobusindustries@gmail.com.",
  },
];

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="relative mx-auto max-w-3xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)] font-semibold mb-4">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              Terms of Service
            </h1>
            <p className="mt-4 text-[var(--muted-strong)]">
              Effective date: April 30, 2026
            </p>
          </div>
        </section>

        <section className="pb-28">
          <div className="mx-auto max-w-3xl px-6">
            <div className="divider-line mb-12" />
            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-lg font-semibold text-white mb-3">{s.heading}</h2>
                  <p className="text-[var(--muted-strong)] leading-relaxed text-[16px]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
