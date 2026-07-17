import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Accommodating Company | Residential lettings in Enfield",
    template: "%s | The Accommodating Company",
  },
  description:
    "Independent, family-run residential lettings and property management in Enfield, North London, since 1992.",
  metadataBase: new URL("https://www.theaccommodatingcompany.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "The Accommodating Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
