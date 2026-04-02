import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | It's All Greek To Me",
  description:
    "How It's All Greek To Me collects, uses, and protects your personal data in accordance with the GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#061525] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-[#7bc5ea] mb-3">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-[#eaf4fb] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#4a7896]">
            Last updated: 2 April 2026
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-10 text-[#7aabca] leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              1. Who we are
            </h2>
            <p>
              <strong className="text-[#eaf4fb]">
                It&apos;s All Greek To Me
              </strong>{" "}
              is a brand operated by{" "}
              <strong className="text-[#eaf4fb]">XIKE Travel</strong>, a
              licensed Greek travel agency (GNTO Reg. No 0206E60000614201,
              Company Reg. No 143755201000), located at 27 Zinonos Street,
              Chalandri, Athens, Greece.
            </p>
            <p className="mt-2">
              For data-protection matters, contact us at{" "}
              <a
                href="mailto:info@itsallgreek2me.tours"
                className="text-[#7bc5ea] hover:text-[#eaf4fb] transition-colors"
              >
                info@itsallgreek2me.tours
              </a>
              .
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              2. Data we collect and why
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#133d6b]">
                    <th className="text-left py-2 pr-4 text-[#eaf4fb] font-semibold">
                      Source
                    </th>
                    <th className="text-left py-2 pr-4 text-[#eaf4fb] font-semibold">
                      Data
                    </th>
                    <th className="text-left py-2 text-[#eaf4fb] font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0d2d4a]">
                  <tr>
                    <td className="py-2 pr-4 align-top">Contact form</td>
                    <td className="py-2 pr-4 align-top">
                      Name, email, phone (optional), subject, message
                    </td>
                    <td className="py-2 align-top">
                      To respond to your enquiry
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Transfer form</td>
                    <td className="py-2 pr-4 align-top">
                      Name, email, phone, pick-up/drop-off locations, flight
                      details, passenger count, dates, special requests
                    </td>
                    <td className="py-2 align-top">
                      To arrange and confirm your private transfer
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Tour bookings</td>
                    <td className="py-2 pr-4 align-top">
                      Booking details as entered in the Bokun widget
                    </td>
                    <td className="py-2 align-top">
                      Processed directly by Bokun; see their privacy policy
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Server logs</td>
                    <td className="py-2 pr-4 align-top">IP address, browser, timestamps</td>
                    <td className="py-2 align-top">
                      Security, rate-limiting, abuse prevention
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              We do not collect data for marketing or profiling purposes, and we
              do not sell your data to third parties.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              3. Legal basis (GDPR)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong className="text-[#eaf4fb]">
                  Contractual necessity
                </strong>{" "}
                — processing transfer and booking requests.
              </li>
              <li>
                <strong className="text-[#eaf4fb]">Legitimate interests</strong>{" "}
                — responding to contact enquiries and preventing abuse.
              </li>
              <li>
                <strong className="text-[#eaf4fb]">Consent</strong> — for
                non-essential cookies (where applicable).
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              4. Cookies
            </h2>
            <p className="mb-3">
              We use the following types of cookies:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#133d6b]">
                    <th className="text-left py-2 pr-4 text-[#eaf4fb] font-semibold">
                      Cookie
                    </th>
                    <th className="text-left py-2 pr-4 text-[#eaf4fb] font-semibold">
                      Type
                    </th>
                    <th className="text-left py-2 text-[#eaf4fb] font-semibold">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0d2d4a]">
                  <tr>
                    <td className="py-2 pr-4 align-top">
                      <code className="text-[#7bc5ea]">cookie_consent</code>
                    </td>
                    <td className="py-2 pr-4 align-top">Essential</td>
                    <td className="py-2 align-top">
                      Stores your cookie preference (localStorage)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 align-top">Bokun widgets</td>
                    <td className="py-2 pr-4 align-top">Functional</td>
                    <td className="py-2 align-top">
                      Enable the tour booking widget; set by bokun.io
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              You can reject non-essential cookies at any time using the cookie
              banner or by clearing your browser storage.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              5. Third-party processors
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong className="text-[#eaf4fb]">Resend</strong> — transactional email delivery for form submissions. Data is processed within the EU/EEA.
              </li>
              <li>
                <strong className="text-[#eaf4fb]">Bokun (Viator)</strong> — online booking platform. Subject to Bokun&apos;s own privacy policy.
              </li>
              <li>
                <strong className="text-[#eaf4fb]">Vercel</strong> — web hosting; server logs (IP, timestamps) are retained for up to 30 days.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              6. Data retention
            </h2>
            <p>
              Enquiry and transfer request emails are retained in our mailbox
              for as long as operationally necessary and deleted within 2 years.
              Server logs are deleted after 30 days.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              7. Your rights
            </h2>
            <p className="mb-2">
              Under the GDPR you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
              <li>Object to or restrict processing.</li>
              <li>Lodge a complaint with the Hellenic Data Protection Authority (HDPA) at{" "}
                <a
                  href="https://www.dpa.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7bc5ea] hover:text-[#eaf4fb] transition-colors"
                >
                  www.dpa.gr
                </a>.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any right, email us at{" "}
              <a
                href="mailto:info@itsallgreek2me.tours"
                className="text-[#7bc5ea] hover:text-[#eaf4fb] transition-colors"
              >
                info@itsallgreek2me.tours
              </a>
              .
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-base font-semibold text-[#eaf4fb] mb-3">
              8. Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last
              updated&rdquo; date at the top of this page will reflect any
              changes. We encourage you to review this page periodically.
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
            href="/terms"
            className="text-xs text-[#4a7896] hover:text-[#7bc5ea] transition-colors"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}
