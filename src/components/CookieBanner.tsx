"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!stored);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#061525] border-t border-[#133d6b]"
    >
      <div className="h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-xs text-[#7aabca] leading-relaxed flex-1">
          We use cookies to enable booking functionality and analyse site
          traffic. By clicking{" "}
          <strong className="text-cream">Accept All</strong> you consent to
          our use of cookies.{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="text-xs text-[#7aabca] hover:text-cream transition-colors underline underline-offset-2"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={accept}
            className="text-xs bg-gold text-[#061525] font-semibold px-4 py-2 rounded hover:bg-cream transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={reject}
            aria-label="Close"
            className="text-[#4a7896] hover:text-[#7aabca] transition-colors ml-1"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
