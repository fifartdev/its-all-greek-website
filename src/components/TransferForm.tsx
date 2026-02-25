"use client";

import { useState, type FormEvent } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Luggage,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { transferLocations } from "@/data/tours";
import clsx from "clsx";

type FormState = "idle" | "loading" | "success" | "error";

export default function TransferForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    date: "",
    time: "",
    from: "",
    to: "",
    passengers: "",
    luggages: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/transfer", {
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

  return (
    <section
      id="transfers"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#061525]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #7bc5ea 0%, transparent 60%), radial-gradient(circle at 80% 50%, #7bc5ea 0%, transparent 60%)",
        }}
      />

      {/* Decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7bc5ea]/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#7bc5ea]" />
            <span className="text-xs tracking-[0.35em] uppercase text-[#7bc5ea]">
              Transfer Service
            </span>
            <span className="w-6 h-px bg-[#7bc5ea]" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#eaf4fb] mt-2 mb-4">
            Book Your Transfer
          </h2>
          <p className="text-[#7aabca] text-sm max-w-lg mx-auto leading-relaxed">
            Private airport transfers, port pickups, and custom routes across
            Athens and Attica. Fill in your details and we&apos;ll confirm within
            the hour.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-4xl mx-auto">
          {formState === "error" && (
            <div className="mb-5 px-5 py-4 bg-red-900/20 border border-red-500/30 rounded-xl text-center">
              <p className="text-sm text-red-300">
                Something went wrong. Please try again or contact us directly at{" "}
                <a href="mailto:hello@itsallgreek2me.tours" className="underline">
                  hello@itsallgreek2me.tours
                </a>
                .
              </p>
            </div>
          )}
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 bg-[#0c3060] rounded-2xl border border-[#1a4a7a] text-center">
              <div className="w-16 h-16 rounded-full bg-[#7bc5ea]/10 flex items-center justify-center mb-5">
                <CheckCircle size={32} className="text-[#7bc5ea]" />
              </div>
              <h3 className="font-serif text-2xl text-[#eaf4fb] mb-2">
                Request Received!
              </h3>
              <p className="text-[#7aabca] text-sm max-w-sm">
                Thank you for your transfer request. Our team will get back to you
                within 1 hour with confirmation and pricing details.
              </p>
              <button
                onClick={() => {
                  setFormState("idle");
                  setForm({ date: "", time: "", from: "", to: "", passengers: "", luggages: "", message: "" });
                }}
                className="mt-8 px-6 py-2.5 text-sm text-[#7bc5ea] border border-[#7bc5ea]/30 rounded hover:bg-[#7bc5ea]/10 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="transfer-form bg-[#0c3060] rounded-2xl border border-[#1a4a7a] p-8 md:p-10"
            >
              {/* Row 1: Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <Calendar size={11} className="inline mr-1.5 mb-0.5" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-[#eaf4fb] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <Clock size={11} className="inline mr-1.5 mb-0.5" />
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-[#eaf4fb] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Row 2: From + To */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <MapPin size={11} className="inline mr-1.5 mb-0.5" />
                    From
                  </label>
                  <div className="relative">
                    <select
                      name="from"
                      required
                      value={form.from}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-[#eaf4fb] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors"
                    >
                      <option value="" disabled className="bg-[#0d3a6a]">
                        Select pickup location
                      </option>
                      {transferLocations.map((loc) => (
                        <option key={loc} value={loc} className="bg-[#0d3a6a]">
                          {loc}
                        </option>
                      ))}
                    </select>
                    <ArrowRight
                      size={14}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7aabca] pointer-events-none rotate-90"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <MapPin size={11} className="inline mr-1.5 mb-0.5" />
                    To
                  </label>
                  <div className="relative">
                    <select
                      name="to"
                      required
                      value={form.to}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3 text-sm text-[#eaf4fb] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors"
                    >
                      <option value="" disabled className="bg-[#0d3a6a]">
                        Select drop-off location
                      </option>
                      {transferLocations.map((loc) => (
                        <option key={loc} value={loc} className="bg-[#0d3a6a]">
                          {loc}
                        </option>
                      ))}
                    </select>
                    <ArrowRight
                      size={14}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7aabca] pointer-events-none rotate-90"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Passengers + Luggages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <Users size={11} className="inline mr-1.5 mb-0.5" />
                    Passengers
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    required
                    min={1}
                    max={20}
                    placeholder="Number of passengers"
                    value={form.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                    <Luggage size={11} className="inline mr-1.5 mb-0.5" />
                    Luggages
                  </label>
                  <input
                    type="number"
                    name="luggages"
                    required
                    min={0}
                    max={30}
                    placeholder="Number of luggages"
                    value={form.luggages}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="mb-8">
                <label className="block text-xs tracking-[0.15em] uppercase text-[#7aabca] mb-2">
                  <MessageSquare size={11} className="inline mr-1.5 mb-0.5" />
                  Special Requests{" "}
                  <span className="normal-case text-[#4a7896] tracking-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Flight number, special requirements, child seats, multiple stops..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-[#eaf4fb] placeholder-[#4a7896] rounded bg-white/5 border border-[#7bc5ea]/20 focus:border-[#7bc5ea] focus:outline-none focus:ring-1 focus:ring-[#7bc5ea]/20 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-[#7aabca] leading-relaxed">
                  We typically respond within 1 hour.
                  <br />
                  Available 7 days a week.
                </p>
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
                      Request Transfer
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { icon: "🛡️", label: "Private & Secure" },
            { icon: "⚡", label: "Instant Response" },
            { icon: "🚘", label: "Premium Vehicles" },
            { icon: "📍", label: "All Athens & Attica" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs text-[#7aabca] tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
