import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | It's All Greek To Me",
  description:
    "Get in touch with It's All Greek To Me for tour bookings, transfer requests, and general enquiries about Athens and Greece.",
};

export default function ContactPage() {
  return <ContactContent />;
}
