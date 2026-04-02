import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | It's All Greek To Me",
  description:
    "Terms and conditions governing use of the It's All Greek To Me website and booking services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#061525] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7bc5ea] mb-3">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-[#eaf4fb] mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-[#4a7896]">Last updated: 2 April 2026</p>
        </div>

        <div className="space-y-10 text-[#7aabca] leading-relaxed text-sm">
          {/* 1 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              1. Acceptance of terms
            </h2>
            <p>
              By accessing or using this website (
              <strong className="text-[#eaf4fb]">itsallgreek2me.tours</strong>),
              you agree to be bound by these Terms of Use and our{" "}
              <Link
                href="/privacy"
                className="text-[#7bc5ea] hover:text-[#eaf4fb] transition-colors"
              >
                Privacy Policy
              </Link>
              . If you do not agree, please do not use this website.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              2. About us
            </h2>
            <p>
              This website is operated by{" "}
              <strong className="text-[#eaf4fb]">XIKE Travel</strong> trading as{" "}
              <strong className="text-[#eaf4fb]">
                It&apos;s All Greek To Me
              </strong>
              , a licensed Greek travel agency (GNTO Reg. No 0206E60000614201,
              Company Reg. No 143755201000), 27 Zinonos Street, Chalandri,
              Athens, Greece.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              3. Use of the website
            </h2>
            <p className="mb-2">You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Submit false, misleading, or fraudulent information via any form.</li>
              <li>Attempt to gain unauthorised access to any part of the site or its infrastructure.</li>
              <li>Use automated tools to scrape, crawl, or overload the site.</li>
              <li>Use the site in any way that violates applicable Greek, EU, or international law.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              4. Tour bookings
            </h2>
            <p>
              Tours displayed on this website are booked through the Bokun
              booking platform. By completing a booking you also agree to{" "}
              <strong className="text-[#eaf4fb]">Bokun&apos;s</strong> and{" "}
              <strong className="text-[#eaf4fb]">Viator&apos;s</strong> terms
              and conditions, as applicable. Prices, availability, and tour
              content are subject to change without notice. We reserve the right
              to cancel or modify a tour due to weather, safety concerns, or
              circumstances beyond our control; in such cases a full refund or
              alternative date will be offered.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              5. Private transfer requests
            </h2>
            <p>
              Submitting a transfer request via the website does not constitute
              a confirmed booking. A booking is confirmed only when you receive
              a written confirmation email from us. We will endeavour to respond
              to all requests within 24 hours. Rates quoted are estimates until
              confirmed in writing.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              6. Intellectual property
            </h2>
            <p>
              All content on this website — including text, images, logos, and
              design — is the property of XIKE Travel or its licensors and is
              protected by copyright. You may not reproduce, distribute, or
              adapt any content without our prior written consent.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              7. Disclaimer of warranties
            </h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of
              any kind. We do not warrant that the site will be uninterrupted,
              error-free, or free of viruses. Information on the site is for
              general guidance only and may not reflect the most current
              availability or pricing.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              8. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by Greek and EU law, XIKE Travel
              shall not be liable for any indirect, incidental, or consequential
              damages arising from use of or inability to use this website or our
              services. Our total liability for any claim shall not exceed the
              amount paid for the specific service giving rise to the claim.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              9. External links
            </h2>
            <p>
              This site may contain links to third-party websites (e.g. Viator,
              TripAdvisor, social media). We have no control over those sites and
              accept no responsibility for their content or privacy practices.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              10. Governing law
            </h2>
            <p>
              These terms are governed by the laws of the{" "}
              <strong className="text-[#eaf4fb]">Hellenic Republic
              (Greece)</strong>. Any disputes shall be subject to the exclusive
              jurisdiction of the courts of Athens, Greece.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              11. Changes to these terms
            </h2>
            <p>
              We may update these terms at any time. The &ldquo;Last
              updated&rdquo; date will reflect changes. Continued use of the
              website after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              12. Contact
            </h2>
            <p>
              For any questions regarding these terms, contact us at{" "}
              <a
                href="mailto:info@itsallgreek2me.tours"
                className="text-[#7bc5ea] hover:text-[#eaf4fb] transition-colors"
              >
                info@itsallgreek2me.tours
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#133d6b]">
          <Link
            href="/"
            className="text-xs text-[#4a7896] hover:text-[#7bc5ea] transition-colors"
          >
            &larr; Back to home
          </Link>
          <span className="text-[#133d6b] mx-3">|</span>
          <Link
            href="/privacy"
            className="text-xs text-[#4a7896] hover:text-[#7bc5ea] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
