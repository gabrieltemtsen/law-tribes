"use client";

import { useState, useEffect } from "react";

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Practice Areas", "Our Team", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#c9a84c] flex items-center justify-center">
            <span className="text-[#c9a84c] font-bold text-xs tracking-widest">LT</span>
          </div>
          <div>
            <span className="font-['Playfair_Display'] text-white text-lg font-semibold tracking-wide">
              Law Tribes
            </span>
            <span className="block text-[#888880] text-[9px] tracking-[0.3em] uppercase">Attorneys</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[#888880] hover:text-[#c9a84c] text-sm tracking-wide transition-colors duration-200 font-['Inter']"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-sm tracking-wider hover:bg-[#c9a84c] hover:text-black transition-all duration-200 font-['Inter'] font-medium"
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-[#888880] hover:text-[#c9a84c]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-[#2a2a2a] px-6 py-4 space-y-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="block text-[#888880] hover:text-[#c9a84c] text-sm tracking-wide transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="block mt-4 px-5 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-sm text-center" onClick={() => setMenuOpen(false)}>
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 80px, #c9a84c 80px, #c9a84c 81px
            ), repeating-linear-gradient(
              90deg, transparent, transparent 80px, #c9a84c 80px, #c9a84c 81px
            )`,
          }}
        />
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c9a84c, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">
              Abuja, Nigeria · Est. 2010
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-white mb-8">
            Justice Is Not
            <br />
            A Privilege —
            <br />
            <em className="text-gradient not-italic">It&apos;s Your Right.</em>
          </h1>

          <p className="text-[#888880] text-lg md:text-xl font-['Inter'] font-light leading-relaxed max-w-2xl mb-12">
            Law Tribes Attorneys delivers formidable legal representation across every
            practice area. From boardrooms to courtrooms, we fight for outcomes that matter.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#c9a84c] text-black font-['Inter'] font-semibold tracking-wider text-sm hover:bg-[#e8c96a] transition-colors duration-200 text-center"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#practice-areas"
              className="px-8 py-4 border border-[#2a2a2a] text-[#888880] font-['Inter'] text-sm tracking-wider hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-200 text-center"
            >
              Explore Practice Areas
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#1a1a1a]">
            {[
              { num: "500+", label: "Cases Won" },
              { num: "15+", label: "Years Experience" },
              { num: "12", label: "Practice Areas" },
              { num: "98%", label: "Client Satisfaction" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-['Playfair_Display'] text-3xl md:text-4xl text-gradient font-semibold">
                  {stat.num}
                </div>
                <div className="text-[#888880] text-xs tracking-widest uppercase font-['Inter'] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]">
        <span className="text-xs tracking-[0.3em] uppercase font-['Inter']">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#444] to-transparent" />
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">Our Story</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              A Law Firm Built on
              <em className="text-gradient not-italic block"> Principle & Precision</em>
            </h2>
            <p className="text-[#888880] font-['Inter'] font-light leading-relaxed mb-6">
              Founded in Abuja, Law Tribes Attorneys has grown from a boutique practice into
              one of Nigeria&apos;s most trusted full-service law firms. We combine the personal
              attention of a close-knit team with the resources and breadth of a major firm.
            </p>
            <p className="text-[#888880] font-['Inter'] font-light leading-relaxed mb-10">
              Every client — individual, startup, or corporation — receives our most strategic
              thinking, most rigorous preparation, and most tenacious advocacy. We don&apos;t just
              represent you; we stand with you.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c9a84c]" />
              <span className="font-['Playfair_Display'] italic text-[#c9a84c] text-lg">
                Frank Mba, Managing Partner
              </span>
            </div>
          </div>

          {/* Right — values */}
          <div className="space-y-px">
            {[
              { title: "Integrity Above All", desc: "We hold ourselves to the highest ethical standards — in counsel, in court, and in client relationships." },
              { title: "Strategic Excellence", desc: "Every case is approached with analytical rigor, creative thinking, and relentless preparation." },
              { title: "Client-Centred Service", desc: "Your goals shape our strategy. We listen first, then act — with your best interest as the only compass." },
              { title: "Deep Nigerian Expertise", desc: "15+ years navigating Nigeria's legal landscape gives our clients a decisive advantage." },
            ].map((v, i) => (
              <div key={i} className="p-6 bg-[#111] border border-[#1a1a1a] hover:border-[#c9a84c]/30 transition-colors duration-300 group">
                <div className="flex items-start gap-4">
                  <span className="text-[#c9a84c] font-['Playfair_Display'] text-2xl font-semibold opacity-40 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-['Inter'] font-medium mb-1">{v.title}</h3>
                    <p className="text-[#888880] font-['Inter'] font-light text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRACTICE AREAS ───────────────────────────────────────────────────────────
const practices = [
  { icon: "⚖️", title: "Corporate & Commercial Law", desc: "Company formation, mergers & acquisitions, corporate governance, contracts, and commercial transactions." },
  { icon: "🏛️", title: "Civil Litigation", desc: "Vigorous representation in disputes involving contracts, torts, property, and constitutional matters." },
  { icon: "🔒", title: "Criminal Defense", desc: "Fearless defense at every stage — from investigation through trial and appeal." },
  { icon: "🏠", title: "Real Estate & Property", desc: "Conveyancing, title registration, landlord/tenant disputes, and property development advisory." },
  { icon: "👪", title: "Family Law", desc: "Divorce, custody, adoption, inheritance, and matrimonial property — handled with discretion." },
  { icon: "✈️", title: "Immigration Law", desc: "Visas, permits, residency applications, and Nigerian immigration compliance for individuals and businesses." },
  { icon: "💼", title: "Employment & Labour", desc: "Workplace disputes, wrongful termination, employment contracts, and labour regulatory compliance." },
  { icon: "💡", title: "Intellectual Property", desc: "Trademark, copyright, patent registration, and IP protection strategies for creators and brands." },
  { icon: "⚡", title: "Energy & Natural Resources", desc: "Oil & gas contracts, regulatory compliance, licensing, and environmental law in Nigeria's energy sector." },
  { icon: "🏦", title: "Banking & Finance", desc: "Loan documentation, regulatory advice, debt recovery, and financial sector compliance." },
  { icon: "🌍", title: "International Arbitration", desc: "Cross-border dispute resolution under ICC, UNCITRAL, and Lagos Court of Arbitration rules." },
  { icon: "📋", title: "Public Law & Governance", desc: "Administrative law, judicial review, public procurement, and government advisory services." },
];

function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">What We Do</span>
            <div className="w-12 h-[1px] bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white mb-4">
            Practice Areas
          </h2>
          <p className="text-[#888880] font-['Inter'] font-light max-w-xl mx-auto">
            Full-spectrum legal services — wherever you need us, whatever the challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {practices.map((p, i) => (
            <div
              key={i}
              className="bg-[#080808] p-8 hover:bg-[#0f0f0f] group transition-colors duration-300 cursor-default"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-['Playfair_Display'] text-white text-lg font-semibold mb-3 group-hover:text-[#c9a84c] transition-colors duration-200">
                {p.title}
              </h3>
              <p className="text-[#888880] font-['Inter'] font-light text-sm leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-6 w-0 h-[1px] bg-[#c9a84c] group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
const team = [
  { name: "Frank Mba", title: "Managing Partner", specialty: "Corporate & Commercial Law", years: "15+ years", initials: "FM" },
  { name: "Adaeze Okonkwo", title: "Senior Partner", specialty: "Civil Litigation & Arbitration", years: "12 years", initials: "AO" },
  { name: "Emeka Nwosu", title: "Partner", specialty: "Energy & Natural Resources", years: "10 years", initials: "EN" },
  { name: "Halima Bello", title: "Associate", specialty: "Criminal Defense & Family Law", years: "7 years", initials: "HB" },
];

function Team() {
  return (
    <section id="our-team" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">Our Attorneys</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            The Minds Behind
            <em className="text-gradient not-italic"> Your Victory</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {team.map((member, i) => (
            <div key={i} className="bg-[#080808] p-8 group hover:bg-[#0f0f0f] transition-colors duration-300">
              {/* Avatar */}
              <div className="w-16 h-16 border border-[#2a2a2a] group-hover:border-[#c9a84c]/50 flex items-center justify-center mb-6 transition-colors duration-300">
                <span className="font-['Playfair_Display'] text-[#c9a84c] text-xl font-semibold">{member.initials}</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-white text-xl font-semibold">{member.name}</h3>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-['Inter'] mt-1 mb-3">{member.title}</p>
              <p className="text-[#888880] text-sm font-['Inter'] font-light mb-4">{member.specialty}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-[1px] bg-[#444]" />
                <span className="text-[#555] text-xs font-['Inter']">{member.years}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Law Tribes handled our company's acquisition with incredible precision. Frank and his team were always three steps ahead. The deal closed without a single complication.",
    author: "Chidi Obi",
    role: "CEO, Obi Group Holdings",
    initials: "CO",
  },
  {
    quote: "I was facing a criminal charge that could have ruined my career. Law Tribes fought relentlessly and secured a complete dismissal. I owe them everything.",
    author: "Ngozi Eze",
    role: "Senior Civil Servant",
    initials: "NE",
  },
  {
    quote: "Their real estate team handled our commercial property dispute in record time. Professional, responsive, and absolutely results-focused.",
    author: "Mohammed Abdullahi",
    role: "Real Estate Developer, Abuja",
    initials: "MA",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">Client Stories</span>
            <div className="w-12 h-[1px] bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#080808] p-10 group hover:bg-[#0f0f0f] transition-colors duration-300">
              <div className="text-[#c9a84c] text-4xl font-['Playfair_Display'] mb-4 opacity-40">&ldquo;</div>
              <p className="text-[#ccc] font-['Inter'] font-light leading-relaxed text-[15px] mb-8 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#c9a84c] text-xs font-semibold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-['Inter'] font-medium text-sm">{t.author}</p>
                  <p className="text-[#555] font-['Inter'] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full bg-[#111] border border-[#2a2a2a] px-4 py-3 text-white placeholder-[#444] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200 font-['Inter'] text-sm";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase font-['Inter']">Get In Touch</span>
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Your First Consultation
              <em className="text-gradient not-italic block">Is Always Free</em>
            </h2>
            <p className="text-[#888880] font-['Inter'] font-light leading-relaxed mb-12">
              Facing a legal challenge? Don&apos;t navigate it alone. Reach out to Law Tribes Attorneys
              and speak directly with one of our experienced lawyers — no obligation, no pressure.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Office",
                  value: "Plot 114, Aminu Kano Crescent, Wuse 2, Abuja, FCT, Nigeria",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+234 803 000 0000",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@lawtribes.ng",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Hours",
                  value: "Mon – Fri: 8:00 AM – 6:00 PM WAT",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#c9a84c] mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] mb-1">{item.label}</p>
                    <p className="text-[#ccc] font-['Inter'] font-light text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-[#c9a84c] text-4xl mb-4">✓</div>
                <h3 className="font-['Playfair_Display'] text-white text-2xl mb-3">Message Received</h3>
                <p className="text-[#888880] font-['Inter'] font-light">
                  Thank you. A member of our team will contact you within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] block mb-2">Full Name *</label>
                    <input
                      type="text" required
                      className={inputClass}
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] block mb-2">Email *</label>
                    <input
                      type="email" required
                      className={inputClass}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] block mb-2">Phone</label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder="+234 ..."
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] block mb-2">Practice Area</label>
                    <select
                      className={inputClass + " cursor-pointer"}
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="" className="bg-[#111]">Select area</option>
                      {practices.map(p => (
                        <option key={p.title} value={p.title} className="bg-[#111]">{p.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[#555] text-xs tracking-widest uppercase font-['Inter'] block mb-2">Brief Description *</label>
                  <textarea
                    required rows={5}
                    className={inputClass + " resize-none"}
                    placeholder="Briefly describe your legal matter..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#c9a84c] text-black font-['Inter'] font-semibold tracking-wider text-sm hover:bg-[#e8c96a] transition-colors duration-200 mt-2"
                >
                  Request Free Consultation
                </button>
                <p className="text-[#444] text-xs font-['Inter'] text-center">
                  All communications are protected by attorney-client privilege.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-[#c9a84c] flex items-center justify-center">
                <span className="text-[#c9a84c] font-bold text-xs">LT</span>
              </div>
              <div>
                <span className="font-['Playfair_Display'] text-white text-lg font-semibold">Law Tribes</span>
                <span className="block text-[#888880] text-[9px] tracking-[0.3em] uppercase">Attorneys</span>
              </div>
            </div>
            <p className="text-[#555] font-['Inter'] font-light text-sm leading-relaxed max-w-xs">
              Full-service legal representation in Abuja, Nigeria. Trusted by individuals, businesses, and institutions since 2010.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-['Inter'] mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Practice Areas", "Our Team", "Testimonials", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-[#555] hover:text-[#c9a84c] text-sm font-['Inter'] transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-['Inter'] mb-4">Contact</h4>
            <div className="space-y-2 text-[#555] text-sm font-['Inter'] font-light">
              <p>Wuse 2, Abuja, FCT</p>
              <p>Nigeria</p>
              <p className="mt-3">+234 803 000 0000</p>
              <p>info@lawtribes.ng</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-xs font-['Inter']">
            © {new Date().getFullYear()} Law Tribes Attorneys. All rights reserved. · Abuja, Nigeria
          </p>
          <p className="text-[#333] text-xs font-['Inter']">
            Licensed by the Nigerian Bar Association
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
