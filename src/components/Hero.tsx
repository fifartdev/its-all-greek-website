"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform" style={{ top: "-10%", height: "120%" }}>
        <Image
          src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1920&q=85"
          alt="Athens cityscape with the Acropolis at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071e38]/60 via-[#071e38]/20 to-[#071e38]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071e38]/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-start justify-center px-6 lg:px-16 xl:px-24 max-w-7xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-[#7bc5ea]" />
            <span
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: "#7bc5ea" }}
            >
              Athens, Greece
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-bold text-[#eaf4fb] mb-6 animate-fade-in-up animate-delay-100"
            style={{ maxWidth: "14ch" }}
          >
            Where Every
            <br />
            <em className="not-italic" style={{ color: "#7bc5ea" }}>
              Journey
            </em>
            <br />
            Becomes a
            <br />
            Myth.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#a0c4dc] max-w-md leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
            Expert-guided tours, seamless airport transfers, and
            unforgettable Athens experiences — crafted by locals, for
            the curious traveller.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#tours"
              className="px-8 py-3.5 bg-[#7bc5ea] text-[#071e38] text-sm font-semibold tracking-wide hover:bg-white transition-colors duration-200 rounded"
            >
              Explore Tours
            </a>
            <a
              href="#transfers"
              className="px-8 py-3.5 border border-[#eaf4fb]/30 text-[#eaf4fb] text-sm font-medium tracking-wide hover:border-[#7bc5ea] hover:text-[#7bc5ea] transition-colors duration-200 rounded"
            >
              Book a Transfer
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16 animate-fade-in-up animate-delay-400">
            {[
              { value: "4+", label: "Curated Experiences" },
              { value: "5★", label: "Rated on Viator" },
              { value: "100%", label: "Local Expertise" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold font-serif text-[#eaf4fb]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#7aabca] mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8 animate-bounce">
          <a href="#tours" aria-label="Scroll to tours">
            <ArrowDown size={20} className="text-[#7bc5ea]/60" />
          </a>
        </div>
      </div>

      {/* Decorative corner text */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#7aabca] rotate-90 origin-bottom-right whitespace-nowrap">
          by XIKE Travel — Athens
        </p>
      </div>
    </section>
  );
}
