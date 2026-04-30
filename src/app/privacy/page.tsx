import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SITE_URL = "https://www.lobusindustries.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Lobus Industries — how we collect, use, and protect your information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: false },
};

const sections = [
  {
    heading: "What information we collect",
    body: "When you fill out the contact form on this site, we collect your name, business name, email address, phone number (if provided), and a description of your business. We don't collect any payment information, and we don't require you to create an account.",
  },
  {
    heading: "How we use your information",
    body: "We use the information you submit solely to respond to your inquiry and, if you become a client, to build and manage your website. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    heading: "Contact form processing",
    body: "Form submissions on this site are processed by Formspree (formspree.io), a third-party form service. When you submit a form, your data is transmitted to Formspree's servers and forwarded to us by email. Formspree's privacy policy can be found at formspree.io/legal/privacy-policy.",
  },
  {
    heading: "Analytics",
    body: "This site uses Vercel Analytics and Vercel Speed Insights to understand how visitors use the site. These tools collect anonymized, aggregated data — page views, referral sources, and performance metrics. No personally identifiable information is collected through analytics, and no cookies are used for tracking.",
  },
  {
    heading: "Cookies",
    body: "This site does not use tracking cookies or advertising cookies. Vercel Analytics operates without cookies. If you contact us and we set up a client relationship, no additional cookies are introduced on your end.",
  },
  {
    heading: "Data retention",
    body: "Inquiry data from the contact form is retained only as long as necessary to respond to your request or manage your client relationship. You can request deletion of your data at any time by emailing us.",
  },
  {
    heading: "Third-party links",
    body: "This site may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.",
  },
  {
    heading: "Children's privacy",
    body: "This site is not directed at children under 13. We do not knowingly collect personal information from children.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the updated policy.",
  },
  {
    heading: "Contact",
    body: "If you have questions about this Privacy Policy or want to request deletion of your data, email us at lobusindustries@gmail.com.",
  },
];

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                  <h2 className="text-lg font-semibold text-white mb-3">
                    {s.heading}
                  </h2>
                  <p className="text-[var(--muted-strong)] leading-relaxed text-[16px]">
                    {s.body}
                  </p>
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
