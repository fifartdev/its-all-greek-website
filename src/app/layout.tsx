import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "It's All Greek To Me | Athens Tours & Transfers",
  description:
    "Expert-guided tours and private transfers in Athens and across Greece. Skip-the-line Acropolis, Athens by Night, Cape Sounion, and seamless airport transfers — by XIKE Travel.",
  keywords: [
    "Athens tours",
    "Acropolis tour",
    "Athens transfers",
    "Athens by night",
    "Cape Sounion",
    "Greece travel",
    "XIKE Travel",
    "airport transfer Athens",
  ],
  openGraph: {
    title: "It's All Greek To Me | Athens Tours & Transfers",
    description:
      "Expert-guided tours and private transfers in Athens and across Greece.",
    url: "https://itsallgreek2me.tours",
    siteName: "It's All Greek To Me",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="bokun-loader"
          src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=38caf0b7-12dc-4023-82d3-5b6effe9f892"
          strategy="afterInteractive"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
