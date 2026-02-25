"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface BokunModalProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function BokunModal({ url, title, onClose }: BokunModalProps) {
  // Ensure we only portal on the client (avoids SSR mismatch)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on Escape key + lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#071e38]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl overflow-hidden border border-[#1a4a7a] shadow-2xl bg-[#0c3060]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a4a7a] shrink-0">
          <h2 className="text-sm font-semibold text-[#eaf4fb] tracking-wide truncate pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close booking window"
            className="p-1.5 rounded-md text-[#7aabca] hover:text-white hover:bg-[#1a4a7a] transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Bokun widget iframe */}
        <div className="flex-1 overflow-hidden bg-white min-h-[500px]">
          <iframe
            src={url}
            title={title}
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "500px" }}
            allow="payment"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
