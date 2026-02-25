import Image from "next/image";

export default function AboutSection() {
  const pillars = [
    {
      number: "01",
      title: "Local Expertise",
      description:
        "Born and raised in Athens, our guides share stories and perspectives that no guidebook can replicate.",
    },
    {
      number: "02",
      title: "Small Groups",
      description:
        "Intimate tours of max 15 guests ensure a personal experience and direct access to your guide.",
    },
    {
      number: "03",
      title: "Seamless Transfers",
      description:
        "From airport to hotel, port to city — private, comfortable, and always on time.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      {/* Marquee band */}
      <div className="overflow-hidden border-y border-[#1a4a7a] py-4 mb-20">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.4em] uppercase text-[#7bc5ea]/40 font-light"
            >
              Athens · Greece · Acropolis · Mythology · History · Cuisine ·
              Culture · The Aegean ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85"
                alt="Aerial view of Athens with the Acropolis at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071e38]/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-0 bg-[#0c3060] border border-[#1a4a7a] rounded-xl p-5 shadow-2xl shadow-black/50">
              <p className="text-3xl font-bold font-serif text-[#eaf4fb]">
                2,500
                <span className="text-[#7bc5ea]">+</span>
              </p>
              <p className="text-xs text-[#7aabca] mt-1">Years of history<br />in every tour</p>
            </div>

            {/* Decorative frame accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#7bc5ea]/30 rounded-tl-xl" />
          </div>

          {/* Text side */}
          <div>
            <span className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-[#7bc5ea]" />
              <span className="text-xs tracking-[0.35em] uppercase text-[#7bc5ea]">
                About Us
              </span>
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#eaf4fb] leading-tight mb-6">
              Athens isn&apos;t just a
              <br />
              destination —
              <br />
              <em className="not-italic text-[#7bc5ea]">it&apos;s a feeling.</em>
            </h2>

            <p className="text-[#a0c4dc] text-sm leading-relaxed mb-4">
              <strong className="text-[#eaf4fb]">It&apos;s All Greek To Me</strong>, by
              XIKE Travel, is an Athens-based travel company passionate about
              sharing the real Greece — its myths, its food, its sunsets, and
              its people.
            </p>
            <p className="text-[#7aabca] text-sm leading-relaxed mb-10">
              From skip-the-line Acropolis tours to enchanting evening walks
              with dinner, and seamless airport transfers across Athens and
              Attica — we handle every detail so you can simply experience the
              magic.
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="flex gap-4 group">
                  <span className="text-[11px] font-mono text-[#7bc5ea]/50 mt-1 shrink-0 w-6">
                    {pillar.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#eaf4fb] mb-1">
                      {pillar.title}
                    </p>
                    <p className="text-xs text-[#7aabca] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
