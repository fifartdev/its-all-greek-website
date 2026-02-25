import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
