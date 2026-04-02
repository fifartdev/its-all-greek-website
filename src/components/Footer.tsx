"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { tours } from "@/data/tours";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, TikTokIcon, TripAdvisorIcon } from "./SocialIcons";
import BokunModal from "./BokunModal";

export default function Footer() {
  const year = new Date().getFullYear();
  const [modal, setModal] = useState<{ url: string; title: string } | null>(
    null,
  );

  return (
    <footer className="relative bg-[#061525] border-t border-[#133d6b]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7bc5ea]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/logo.jpg"
                alt="It's All Greek To Me"
                width={56}
                height={56}
                className="h-14 w-auto object-contain rounded mb-3"
              />
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#7aabca]">
                by XIKE Travel
              </span>
            </div>
            <p className="text-[#7aabca] text-sm leading-relaxed max-w-xs mb-6">
              Expert-guided tours and private transfers in Athens and across
              Greece. Crafting unforgettable experiences since day one.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <MapPin size={13} className="text-[#7bc5ea] shrink-0" />
                <span className="text-xs text-[#7aabca]">
                  27, Zinonos str., Chalandri-Athens, Greece
                </span>
              </div>
              <a
                href="tel:+302103636000"
                className="flex items-center gap-2.5 hover:text-[#7bc5ea] transition-colors group"
              >
                <Phone size={13} className="text-[#7bc5ea] shrink-0" />
                <span className="text-xs text-[#7aabca] group-hover:text-[#7bc5ea]">
                  +30 210 36 36 000
                </span>
              </a>
              <a
                href="mailto:info@itsallgreek2me.tours"
                className="flex items-center gap-2.5 hover:text-[#7bc5ea] transition-colors group"
              >
                <Mail size={13} className="text-[#7bc5ea] shrink-0" />
                <span className="text-xs text-[#7aabca] group-hover:text-[#7bc5ea]">
                  info@itsallgreek2me.tours
                </span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/itsallgreektome_tours/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded border border-[#1a4a7a] flex items-center justify-center text-[#7aabca] hover:border-[#7bc5ea] hover:text-[#7bc5ea] transition-colors"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="https://www.tripadvisor.com.gr/Attraction_Review-g189400-d32977828-Reviews-It_s_all_Greek_To_Me_Tours_by_Xike_Travel-Athens_Attica.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TripAdvisor"
                className="w-8 h-8 rounded border border-[#1a4a7a] flex items-center justify-center text-[#7aabca] hover:border-[#7bc5ea] hover:text-[#7bc5ea] transition-colors"
              >
                <TripAdvisorIcon size={14} />
              </a>
              <a
                href="https://www.tiktok.com/@its.allgreek2me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded border border-[#1a4a7a] flex items-center justify-center text-[#7aabca] hover:border-[#7bc5ea] hover:text-[#7bc5ea] transition-colors"
              >
                <TikTokIcon size={14} />
              </a>
            </div>
          </div>

          {/* Tours column */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#7bc5ea] mb-5">
              Our Tours
            </h4>
            <ul className="space-y-3">
              {tours.map((tour) => (
                <li key={tour.id}>
                  <button
                    onClick={() =>
                      setModal({ url: tour.bokunUrl, title: tour.title })
                    }
                    className="text-sm text-[#7aabca] hover:text-[#eaf4fb] transition-colors gold-underline text-left"
                  >
                    {tour.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-[#7bc5ea] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Tours", href: "#tours" },
                { label: "Transfers", href: "#transfers" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "/contact" },
                {
                  label: "Viator Reviews",
                  href: "https://www.viator.com",
                  external: true,
                },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#7aabca] hover:text-[#eaf4fb] transition-colors gold-underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[#7aabca] hover:text-[#eaf4fb] transition-colors gold-underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-8 border-t border-[#133d6b]">
          {/* Registration info */}
          <p className="text-[10px] text-[#4a7896] text-center leading-relaxed tracking-wide">
            GNTO REG. No 0206E60000614201&nbsp;&nbsp;|&nbsp;&nbsp;Officially
            Registered Company with No 143755201000
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-[#4a7896]">
              © {year} It&apos;s All Greek To Me — by XIKE Travel. All rights
              reserved.
            </p>
            <p className="text-xs text-[#4a7896]">
              <Link
                href="/privacy"
                className="text-[#7bc5ea]/50 hover:text-[#7bc5ea] transition-colors"
              >
                Privacy Policy
              </Link>
              {" "}·{" "}
              <Link
                href="/terms"
                className="text-[#7bc5ea]/50 hover:text-[#7bc5ea] transition-colors"
              >
                Terms of Use
              </Link>
              {" "}·{" "}
              Powered by{" "}
              <a
                href="https://bokun.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7bc5ea]/50 hover:text-[#7bc5ea] transition-colors"
              >
                Bokun
              </a>{" "}
              ·{" "}
              <a
                href="https://www.viator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7bc5ea]/50 hover:text-[#7bc5ea] transition-colors"
              >
                Viator Partner
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bokun booking popup */}
      {modal && (
        <BokunModal
          url={modal.url}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </footer>
  );
}
