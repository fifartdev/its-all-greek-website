"use client";

import Image from "next/image";
import { Clock, ArrowUpRight } from "lucide-react";
import { tours, type Tour } from "@/data/tours";
import clsx from "clsx";

function TourCard({
  tour,
  className,
}: {
  tour: Tour;
  className?: string;
}) {
  return (
    <a
      href={tour.bokunUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "tour-card group relative overflow-hidden rounded-xl block",
        "bg-[#0c3060] cursor-pointer",
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-full">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071e38] via-[#071e38]/30 to-transparent" />

        {/* Hover overlay */}
        <div className="tour-card-overlay absolute inset-0 bg-[#0c3966]/20 opacity-0" />
      </div>

      {/* Badge */}
      {tour.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#7bc5ea] text-[#071e38] rounded-sm">
            {tour.badge}
          </span>
        </div>
      )}

      {/* Arrow icon */}
      <div className="absolute top-4 right-4 z-10">
        <div className="w-8 h-8 rounded-full bg-[#071e38]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#7bc5ea]/40">
          <ArrowUpRight size={14} className="text-[#7bc5ea]" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        {/* Category */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7bc5ea] mb-2">
          {tour.category}
        </p>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-[#eaf4fb] leading-tight mb-2 group-hover:text-white transition-colors duration-300">
          {tour.shortTitle}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-[#a0c4dc] leading-relaxed mb-3 line-clamp-2">
          {tour.tagline}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#eaf4fb]/10">
          <div className="flex items-center gap-1.5 text-[#7aabca]">
            <Clock size={12} />
            <span className="text-xs">{tour.duration}</span>
          </div>
          <span className="text-xs text-[#7bc5ea] font-medium group-hover:underline">
            Book Now →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ToursSection() {
  const [acropolis, freeWalk, nightTour, sounion] = tours;

  return (
    <section id="tours" className="py-24 md:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-[#7bc5ea]" />
            <span className="text-xs tracking-[0.35em] uppercase text-[#7bc5ea]">
              Curated Experiences
            </span>
          </span>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl font-bold text-[#eaf4fb] leading-tight">
            Tours &amp; <br className="hidden md:block" />
            <em className="not-italic text-[#7bc5ea]">Experiences</em>
          </h2>
        </div>
        <p className="text-[#7aabca] text-sm leading-relaxed max-w-xs md:text-right">
          Handpicked Athens adventures led by passionate local experts. Every
          tour is bookable directly via our Bokun system.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Acropolis — large, spans 2 cols */}
        <div className="md:col-span-2 h-[480px] md:h-[560px]">
          <TourCard tour={acropolis} className="h-full" />
        </div>

        {/* Night Tour — tall, spans 2 rows on right */}
        <div className="h-[340px] md:row-span-2 md:h-full">
          <TourCard tour={nightTour} className="h-full" />
        </div>

        {/* Sounion + Free Walk — bottom row */}
        <div className="h-[340px]">
          <TourCard tour={sounion} className="h-full" />
        </div>
        <div className="h-[340px]">
          <TourCard tour={freeWalk} className="h-full" />
        </div>
      </div>

      {/* View all CTA */}
      <div className="flex justify-center mt-12">
        <p className="text-[#7aabca] text-sm text-center">
          All tours are bookable through our{" "}
          <span className="text-[#7bc5ea]">Bokun booking system</span> — secure,
          instant confirmation.
        </p>
      </div>
    </section>
  );
}
