"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { tours } from "@/data/tours";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToursDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Transfers", href: "#transfers" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#071e38]/95 backdrop-blur-md border-b border-[#1a4a7a]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center shrink-0"
          >
            <Image
              src="/logo.jpg"
              alt="It's All Greek To Me"
              width={48}
              height={48}
              className="h-10 md:h-12 w-auto object-contain rounded"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Tours dropdown — "no-go" link */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToursDropdownOpen((prev) => !prev)}
                className={clsx(
                  "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200",
                  "text-[#a0c4dc] hover:text-[#eaf4fb]"
                )}
                aria-expanded={toursDropdownOpen}
                aria-haspopup="true"
              >
                Our Tours
                <ChevronDown
                  size={14}
                  className={clsx(
                    "transition-transform duration-300",
                    toursDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown */}
              <div
                className={clsx(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72",
                  "bg-[#0c3060] border border-[#1a4a7a] rounded-lg overflow-hidden",
                  "shadow-2xl shadow-black/50",
                  "transition-all duration-300 origin-top",
                  toursDropdownOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                )}
              >
                <div className="px-4 py-3 border-b border-[#1a4a7a]">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#7bc5ea]">
                    Experiences
                  </p>
                </div>
                {tours.map((tour) => (
                  <a
                    key={tour.id}
                    href={tour.bokunUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setToursDropdownOpen(false)}
                    className="flex items-start gap-3 px-4 py-3.5 hover:bg-[#0d3a6a] transition-colors duration-150 group border-b border-[#133d6b] last:border-0"
                  >
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0 bg-[#7bc5ea] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <p className="text-sm text-[#eaf4fb] font-medium group-hover:text-[#7bc5ea] transition-colors">
                        {tour.shortTitle}
                      </p>
                      <p className="text-xs text-[#7aabca] mt-0.5">
                        {tour.duration} · {tour.category}
                      </p>
                    </div>
                  </a>
                ))}
                <div className="px-4 py-3 bg-[#061525]">
                  <p className="text-[10px] text-[#7aabca] text-center">
                    Powered by Bokun Booking System
                  </p>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#a0c4dc] hover:text-[#eaf4fb] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="#transfers"
              className={clsx(
                "px-5 py-2 text-sm font-semibold tracking-wide rounded",
                "bg-[#7bc5ea] text-[#071e38]",
                "hover:bg-white transition-colors duration-200"
              )}
            >
              Book Transfer
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 text-[#a0c4dc] hover:text-[#eaf4fb] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden bg-[#071e38] border-t border-[#1a4a7a]",
          "transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-6 space-y-1">
          {/* Mobile Tours */}
          <div>
            <button
              onClick={() => setToursDropdownOpen((prev) => !prev)}
              className="flex items-center justify-between w-full py-3 text-[#a0c4dc] hover:text-[#eaf4fb] text-sm font-medium tracking-wide"
            >
              Our Tours
              <ChevronDown
                size={14}
                className={clsx("transition-transform", toursDropdownOpen && "rotate-180")}
              />
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300",
                toursDropdownOpen ? "max-h-80" : "max-h-0"
              )}
            >
              <div className="pl-4 pb-2 space-y-1">
                {tours.map((tour) => (
                  <a
                    key={tour.id}
                    href={tour.bokunUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2.5 text-sm text-[#7aabca] hover:text-[#7bc5ea]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#7bc5ea] opacity-50" />
                    {tour.shortTitle}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium tracking-wide text-[#a0c4dc] hover:text-[#eaf4fb] border-t border-[#133d6b]"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4">
            <a
              href="#transfers"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 text-sm font-semibold bg-[#7bc5ea] text-[#071e38] rounded hover:bg-white transition-colors"
            >
              Book a Transfer
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
