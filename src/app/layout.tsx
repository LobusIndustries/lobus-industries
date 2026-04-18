import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lobus Industries — Websites for service businesses. Free to build.",
  description:
    "We build professional websites for service-based businesses at no upfront cost. You only pay $100/month for hosting. Save yourself money.",
  metadataBase: new URL("https://lobusindustries.com"),
  openGraph: {
    title: "Lobus Industries",
    description:
      "Professional websites for service businesses. $0 to build. $100/month for hosting.",
    type: "website",
  },
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
      </body>
    </html>
  );
}
