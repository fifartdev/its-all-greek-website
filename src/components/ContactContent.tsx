"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { InstagramIcon, TikTokIcon, TripAdvisorIcon } from "./SocialIcons";
import clsx from "clsx";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactContent() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Athens, Greece",
      sub: "Operating across Athens & Attica",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+30 210 123 4567",
      href: "tel:+302101234567",
      sub: "Mon–Sun · 08:00–20:00",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@itsallgreek2me.tours",
      href: "mailto:hello@itsallgreek2me.tours",
      sub: "We reply within 1 hour",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "08:00 – 20:00",
      sub: "7 days a week",
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <div className="relative pt-16 overflow-hidden">
        <div className="relative h-[280px] md:h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1920&q=85"
            alt="The Parthenon and Acropolis of Athens"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071e38]/70 via-[#071e38]/40 to-[#071e38]" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <span className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#7bc5ea]" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#7bc5ea]">
                Get In Touch
              </span>
              <span className="w-6 h-px bg-[#7bc5ea]" />
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#eaf4fb]">
              Contact Us
            </h1>
            <p className="text-[#a0c4dc] text-sm mt-3 max-w-md">
              Questions, bookings, or just a friendly hello — we&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#eaf4fb] mb-2">
                We&apos;re here to help
              </h2>
              <p className="text-[#7aabca] text-sm leading-relaxed">
                Whether you&apos;re planning a tour, need an airport transfer, or
                have a special request — our team is ready to craft the perfect
                Athens experience for you.
              </p>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex gap-4 p-4 bg-[#0c3060] border border-[#1a4a7a] rounded-xl hover:border-[#7bc5ea]/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-[#7bc5ea]/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#7bc5ea]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#7aabca] mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#eaf4fb] font-medium">
                        {item.value}
                      </p>
                      <p className="text-xs text-[#4a7896] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block group">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#7aabca] mb-3">
                Follow Us
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { href: "https://www.instagram.com/itsallgreektome_tours/", label: "Instagram", icon: <InstagramIcon size={14} /> },
                  { href: "https://www.tripadvisor.com.gr/Attraction_Review-g189400-d32977828-Reviews-It_s_all_Greek_To_Me_Tours_by_Xike_Travel-Athens_Attica.html", label: "TripAdvisor", icon: <TripAdvisorIcon size={14} /> },
                  { href: "https://www.tiktok.com/@its.allgreek2me", label: "TikTok", icon: <TikTokIcon size={14} /> },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0c3060] border border-[#1a4a7a] rounded-lg text-[#7aabca] hover:border-[#7bc5ea]/40 hover:text-[#7bc5ea] transition-colors text-sm"
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Viator badge */}
            <div className="p-4 bg-[#0c3060] border border-[#1a4a7a] rounded-xl">
              <p className="text-xs text-[#7aabca] leading-relaxed">
                <span className="text-[#7bc5ea] font-medium">Verified on Viator</span>
                {" "}— Read reviews and book tours directly through our Viator
                profile.
              </p>
              <a
                href="https://www.viator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#7bc5ea] mt-2 hover:underline"
              >
                View our Viator profile →
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-3">
            <div className="bg-[#0c3060] border border-[#1a4a7a] rounded-2xl p-8">
              {formState === "error" && (
                <div className="mb-5 px-5 py-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                  <p className="text-sm text-red-300 text-center">
                    Something went wrong. Please try again or email us at{" "}
                    <a href="mailto:hello@itsallgreek2me.tours" className="underline">
                      hello@itsallgreek2me.tours
                    </a>
                    .
                  </p>
                </div>
              )}
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#7bc5ea]/10 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-[#7bc5ea]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#eaf4fb] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#7aabca] text-sm max-w-xs">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible — usually within a few hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-8 px-6 py-2.5 text-sm text-[#7bc5ea] border border-[#7bc5ea]/30 rounded hover:bg-[#7bc5ea]/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl font-bold text-[#eaf4fb] mb-6">
                    Send us a message
                  </h3>

                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="transfer-form space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                          Subject *
                        </label>
                        <div className="relative">
                          <select
                            name="subject"
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full appearance-none px-4 py-3 text-sm text-[#eaf4fb] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none transition-colors"
                          >
                            <option value="" disabled className="bg-[#0d3a6a]">
                              Select subject
                            </option>
                            {[
                              "Tour Enquiry",
                              "Transfer Booking",
                              "Group Booking",
                              "Partnership",
                              "General Question",
                            ].map((s) => (
                              <option key={s} value={s} className="bg-[#0d3a6a]">
                                {s}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#7aabca]">
                            ↓
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className={clsx(
                          "flex items-center gap-2 px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all duration-200",
                          formState === "loading"
                            ? "bg-[#5aacda] text-[#071e38] cursor-wait"
                            : "bg-[#7bc5ea] text-[#071e38] hover:bg-white"
                        )}
                      >
                        {formState === "loading" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#071e38]/30 border-t-[#071e38] rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="relative h-64 bg-[#0c3060] border-t border-[#133d6b] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2">
          <MapPin size={28} className="text-[#7bc5ea]/40" />
          <p className="text-[#7aabca] text-sm">Athens, Greece</p>
          <a
            href="https://maps.google.com/?q=Athens,Greece"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7bc5ea] hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#7bc5ea 1px, transparent 1px), linear-gradient(90deg, #7bc5ea 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </>
  );
}
