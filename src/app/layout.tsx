import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.lobusindustries.com";
const SITE_NAME = "Lobus Industries";
const TAGLINE = "Professional websites for service businesses. Free to build, $100/month to host.";
const DESCRIPTION =
  "Lobus Industries builds professional websites for service-based businesses — plumbers, electricians, landscapers, cleaners, tutors, and more. $0 upfront build cost. $100/month flat for hosting, SSL, backups, and ongoing updates. Launch in about a week. Cancel anytime.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "website for service business",
    "small business website",
    "plumber website",
    "electrician website",
    "landscaper website",
    "contractor website",
    "free website build",
    "website hosting $100 a month",
    "local business website design",
    "lead generation website",
    "service business SEO",
    "Lobus Industries",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Business Services",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${TAGLINE}`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // Geo hints for local-service discovery
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="aurora" aria-hidden />
        {children}
        <StructuredData />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
