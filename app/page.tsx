"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Practice Areas", "Our Team", "Testimonials", "Contact"];

const PRACTICE_AREAS = [
  {
    icon: "⚖️",
    title: "Corporate & Commercial Law",
    desc: "Company formation, mergers & acquisitions, joint ventures, commercial contracts, and regulatory compliance for businesses across Nigeria."
  },
  {
    icon: "🏛️",
    title: "Litigation & Dispute Resolution",
    desc: "Vigorous representation in courts at all levels — from Magistrate to Supreme Court — and skilled arbitration and mediation services."
  },
  {
    icon: "🏘️",
    title: "Real Estate & Property",
    desc: "Property acquisition, title verification, conveyancing, land use matters, and resolving property disputes across the FCT and beyond."
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    desc: "Matrimonial causes, child custody, adoption, succession and estate planning handled with sensitivity, discretion, and legal precision."
  },
  {
    icon: "🔒",
    title: "Criminal Defense",
    desc: "Uncompromising defense for individuals facing criminal charges. We protect your rights from arrest through trial and appeal."
  },
  {
    icon: "📋",
    title: "Employment & Labour",
    desc: "Employment contracts, workplace disputes, wrongful termination, and Labour Court representation for both employers and employees."
  },
  {
    icon: "💡",
    title: "Intellectual Property",
    desc: "Trademark registration, copyright protection, patent advisory, and IP enforcement to safeguard your creative and commercial assets."
  },
  {
    icon: "🌍",
    title: "Immigration Law",
    desc: "Work permits, residency applications, citizenship matters, and immigration compliance for individuals and multinational companies."
  },
];

const TEAM = [
  {
    name: "Frank Mba",
    title: "Managing Partner",
    areas: "Corporate Law · Litigation",
    initial: "FM",
  },
  {
    name: "Adaeze Okonkwo",
    title: "Senior Associate",
    areas: "Real Estate · Family Law",
    initial: "AO",
  },
  {
    name: "Emeka Balogun",
    title: "Associate",
    areas: "Criminal Defense · Employment",
    initial: "EB",
  },
  {
    name: "Ngozi Eze",
    title: "Associate",
    areas: "IP · Immigration",
    initial: "NE",
  },
];

const TESTIMONIALS = [
  {
    quote: "Law Tribes handled our company's acquisition seamlessly. Their attention to detail and deep knowledge of Nigerian corporate law gave us complete confidence throughout the process.",
    author: "Chukwuemeka Obi",
    role: "CEO, TechBridge Nigeria",
  },
  {
    quote: "When my property dispute seemed unwinnable, Law Tribes found angles no other firm had considered. They secured my title within six months. Exceptional team.",
    author: "Mrs. Fatima Al-Hassan",
    role: "Business Owner, Abuja",
  },
  {
    quote: "Frank Mba and his team defended me with integrity and skill. Their professionalism under pressure is unmatched. I would trust no other firm with matters this serious.",
    author: "Oluwaseun Adeyemi",
    role: "Private Client",
  },
];

const STATS = [
  { value: "15+", label: "Years of Practice" },
  { value: "500+", label: "Cases Won" },
  { value: "8", label: "Practice Areas" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(a => (a + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        className="site-nav"
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a84c, #a07830)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: "#080808",
                fontFamily: "'Playfair Display', serif",
                flexShrink: 0,
              }}>LT</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#f5f0e8", letterSpacing: "0.05em" }}>
                  LAW TRIBES
                </div>
                <div style={{ fontSize: 9, color: "#c9a84c", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                  ATTORNEYS
                </div>
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="desktop-nav">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  color: "#888880", fontSize: 13, letterSpacing: "0.08em",
                  textDecoration: "none", textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888880")}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                padding: "9px 22px", border: "1px solid #c9a84c",
                color: "#c9a84c", fontSize: 12, letterSpacing: "0.1em",
                textDecoration: "none", textTransform: "uppercase",
                transition: "all 0.2s", minHeight: 44, display: "flex", alignItems: "center",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#080808"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c9a84c"; }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu-dropdown">
            {[...NAV_LINKS, "Free Consultation"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className={link === "Free Consultation" ? "mobile-menu-link mobile-cta" : "mobile-menu-link"}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="hero-section"
      >
        {/* Background texture lines */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "repeating-linear-gradient(0deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)",
        }} />

        {/* Glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: "min(600px, 100vw)", height: "min(600px, 100vw)", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="hero-content">
          <div style={{
            display: "inline-block", padding: "6px 20px", marginBottom: 32,
            border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c",
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
          }}>
            ⚖ Abuja, Nigeria · Established 2009
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 8vw, 80px)",
            fontWeight: 700, lineHeight: 1.1,
            color: "#f5f0e8", marginBottom: 8,
          }}>
            Law Tribes
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 8vw, 80px)",
            fontWeight: 400, lineHeight: 1.1, fontStyle: "italic",
            background: "linear-gradient(135deg, #e8c96a, #c9a84c, #a07830)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: 32,
          }}>
            Attorneys
          </h1>

          <p style={{
            fontSize: "clamp(15px, 2.5vw, 20px)", color: "#888880",
            lineHeight: 1.8, maxWidth: 620, margin: "0 auto 48px",
            fontWeight: 300,
          }}>
            Premier legal counsel across all practice areas. We combine decades of Nigerian
            legal expertise with unwavering dedication to your cause.
          </p>

          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn-primary"
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(201,168,76,0.4)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.25)")}
            >
              Book Free Consultation
            </a>
            <a
              href="#practice-areas"
              className="btn-outline"
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
            >
              Our Practice Areas
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5,
        }}>
          <div style={{ fontSize: 11, color: "#c9a84c", letterSpacing: "0.2em" }}>SCROLL</div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #c9a84c, transparent)" }} />
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────── */}
      <div className="stats-bar">
        <div className="stats-grid">
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700,
                background: "linear-gradient(135deg, #e8c96a, #c9a84c)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.value}</div>
              <div style={{ color: "#888880", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section id="about" className="section-pad" style={{ background: "#080808" }}>
        <div className="container about-grid">
          {/* Left */}
          <div>
            <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
              About the Firm
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700,
              color: "#f5f0e8", lineHeight: 1.2, marginBottom: 24,
            }}>
              Legal Excellence<br />
              <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Rooted in Integrity</span>
            </h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(to right, #c9a84c, transparent)", marginBottom: 28 }} />
            <p style={{ color: "#888880", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Law Tribes Attorneys is a full-service law firm headquartered in Abuja, Nigeria. 
              We have built our reputation on a simple belief: every client deserves counsel that is 
              brilliant, tenacious, and honest — regardless of the complexity or scale of their matter.
            </p>
            <p style={{ color: "#888880", lineHeight: 1.9, marginBottom: 32, fontSize: 15 }}>
              From multinational corporations structuring billion-naira transactions to individuals 
              navigating sensitive family matters, our attorneys bring the same fierce commitment 
              and depth of expertise to every brief we accept.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Experienced team of qualified Nigerian attorneys", "Licensed by the Nigerian Bar Association", "FCT High Court and Supreme Court practitioners", "Strict confidentiality and client-first approach"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#c9a84c", fontSize: 14 }}>
                  <span style={{ flexShrink: 0, marginTop: 2 }}>✦</span>
                  <span style={{ color: "#aaa098" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — decorative */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #1a1508, #111111)",
              border: "1px solid rgba(201,168,76,0.2)",
              padding: "40px 36px", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: -1, left: -1,
                width: 60, height: 60,
                borderTop: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c",
              }} />
              <div style={{
                position: "absolute", bottom: -1, right: -1,
                width: 60, height: 60,
                borderBottom: "2px solid #c9a84c", borderRight: "2px solid #c9a84c",
              }} />
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 80, color: "rgba(201,168,76,0.1)", lineHeight: 1, marginBottom: 16,
              }}>&ldquo;</div>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(16px, 2vw, 20px)", color: "#f5f0e8", lineHeight: 1.7, fontStyle: "italic", marginBottom: 28,
              }}>
                Justice is not a privilege. It is a right. And we fight to make sure every 
                client we serve can access it fully.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#080808", fontSize: 16,
                  flexShrink: 0,
                }}>FM</div>
                <div>
                  <div style={{ color: "#f5f0e8", fontWeight: 600, fontSize: 15 }}>Frank Mba</div>
                  <div style={{ color: "#c9a84c", fontSize: 12, letterSpacing: "0.05em" }}>Managing Partner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS ─────────────────────────────────── */}
      <section id="practice-areas" className="section-pad" style={{ background: "#0a0a0a" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
              What We Do
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#f5f0e8",
            }}>
              Practice Areas
            </h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(to right, #c9a84c, transparent)", margin: "20px auto 0" }} />
          </div>

          <div className="practice-grid">
            {PRACTICE_AREAS.map((area, i) => (
              <div
                key={i}
                className="practice-card"
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(201,168,76,0.4)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(201,168,76,0.08)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#1a1a1a";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{area.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18, fontWeight: 600, color: "#f5f0e8", marginBottom: 12,
                }}>{area.title}</h3>
                <p style={{ color: "#666660", fontSize: 14, lineHeight: 1.7 }}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────── */}
      <section id="our-team" className="section-pad" style={{ background: "#080808" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
              The People
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#f5f0e8",
            }}>
              Our Team
            </h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(to right, #c9a84c, transparent)", margin: "20px auto 0" }} />
          </div>

          <div className="team-grid">
            {TEAM.map((member, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 100, height: 100, borderRadius: "50%",
                  background: i === 0 ? "linear-gradient(135deg, #c9a84c, #a07830)" : "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
                  border: i === 0 ? "none" : "1px solid #2a2a2a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: 24, color: i === 0 ? "#080808" : "#c9a84c",
                  margin: "0 auto 20px",
                  boxShadow: i === 0 ? "0 8px 32px rgba(201,168,76,0.3)" : "none",
                }}>{member.initial}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20, fontWeight: 600, color: "#f5f0e8", marginBottom: 4,
                }}>{member.name}</h3>
                <div style={{ color: "#c9a84c", fontSize: 12, letterSpacing: "0.1em", marginBottom: 8 }}>{member.title}</div>
                <div style={{ color: "#555550", fontSize: 13 }}>{member.areas}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────── */}
      <section id="testimonials" className="section-pad" style={{
        background: "linear-gradient(135deg, #0f0c07, #0a0a0a)",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}>
        <div className="testimonials-inner">
          <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            Client Voices
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#f5f0e8", marginBottom: 60,
          }}>
            Testimonials
          </h2>

          {/* Quote */}
          <div style={{ position: "relative", minHeight: 160 }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 64, color: "rgba(201,168,76,0.2)", lineHeight: 1,
              position: "absolute", top: -20, left: 0,
            }}>&ldquo;</div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(15px, 2.5vw, 22px)", color: "#c8c0b0",
              lineHeight: 1.8, fontStyle: "italic",
              padding: "0 clamp(20px, 5vw, 40px)",
              transition: "opacity 0.5s",
            }}>
              {TESTIMONIALS[activeTestimonial].quote}
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <div style={{ color: "#f5f0e8", fontWeight: 600, fontSize: 16 }}>
              {TESTIMONIALS[activeTestimonial].author}
            </div>
            <div style={{ color: "#c9a84c", fontSize: 13, marginTop: 4 }}>
              {TESTIMONIALS[activeTestimonial].role}
            </div>
          </div>

          {/* Dots — min 44px touch targets */}
          <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 32 }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  width: 44, height: 44,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "transparent", border: "none", cursor: "pointer", padding: 0,
                }}
              >
                <span style={{
                  display: "block",
                  width: i === activeTestimonial ? 24 : 8, height: 8, borderRadius: 4,
                  background: i === activeTestimonial ? "#c9a84c" : "#2a2a2a",
                  transition: "all 0.3s",
                }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="section-pad" style={{ background: "#080808" }}>
        <div className="container contact-grid">

          {/* Left info */}
          <div>
            <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
              Get in Touch
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f0e8", marginBottom: 20,
            }}>
              Book a Free<br />
              <span style={{ fontStyle: "italic", color: "#c9a84c" }}>Consultation</span>
            </h2>
            <div style={{ width: 60, height: 2, background: "linear-gradient(to right, #c9a84c, transparent)", marginBottom: 28 }} />
            <p style={{ color: "#888880", lineHeight: 1.8, marginBottom: 40, fontSize: 15 }}>
              Your first consultation is always free. Tell us about your legal matter 
              and we will connect you with the right attorney from our team.
            </p>

            {[
              { icon: "📍", label: "Address", value: "Plot 14, Adetokunbo Ademola Crescent, Wuse II, Abuja, FCT" },
              { icon: "📞", label: "Phone", value: "+234 803 000 0000" },
              { icon: "✉️", label: "Email", value: "hello@lawtribesattorneys.com" },
              { icon: "🕐", label: "Hours", value: "Mon–Fri: 8:00am – 6:00pm WAT" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 18, minWidth: 24, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ color: "#aaa098", fontSize: 14 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right form */}
          <div className="contact-form-wrapper">
            <div style={{ position: "absolute", top: -1, left: -1, width: 40, height: 40, borderTop: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c" }} />
            <div style={{ position: "absolute", bottom: -1, right: -1, width: 40, height: 40, borderBottom: "2px solid #c9a84c", borderRight: "2px solid #c9a84c" }} />

            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#f5f0e8", marginBottom: 8 }}>
                  Message Received
                </div>
                <div style={{ color: "#888880", fontSize: 14 }}>
                  We will be in touch within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div className="form-row">
                  {[
                    { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                    { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                  ].map(field => (
                    <div key={field.key} style={{ flex: 1, minWidth: 0 }}>
                      <label style={{ color: "#888880", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{field.label}</label>
                      <input
                        type={field.type} placeholder={field.placeholder} required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                        style={{
                          width: "100%", background: "#0a0a0a",
                          border: "1px solid #2a2a2a", color: "#f5f0e8",
                          padding: "12px 14px", fontSize: 14, outline: "none",
                          boxSizing: "border-box", minHeight: 44,
                        }}
                      />
                    </div>
                  ))}
                </div>
                {[
                  { key: "phone", label: "Phone Number", placeholder: "+234 ...", type: "tel" },
                  { key: "subject", label: "Legal Matter", placeholder: "e.g. Property dispute, Company formation...", type: "text" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ color: "#888880", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{field.label}</label>
                    <input
                      type={field.type} placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                      style={{
                        width: "100%", background: "#0a0a0a",
                        border: "1px solid #2a2a2a", color: "#f5f0e8",
                        padding: "12px 14px", fontSize: 14, outline: "none",
                        boxSizing: "border-box", minHeight: 44,
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ color: "#888880", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea
                    rows={4} placeholder="Briefly describe your situation..."
                    required
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{
                      width: "100%", background: "#0a0a0a",
                      border: "1px solid #2a2a2a", color: "#f5f0e8",
                      padding: "12px 14px", fontSize: 14, resize: "vertical", outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "14px", marginTop: 4,
                    background: "linear-gradient(135deg, #c9a84c, #a07830)",
                    color: "#080808", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    border: "none", cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(201,168,76,0.2)",
                    transition: "box-shadow 0.2s",
                    minHeight: 48,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,168,76,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.2)")}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #a07830)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: "#080808",
                  fontFamily: "'Playfair Display', serif",
                  flexShrink: 0,
                }}>LT</div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#f5f0e8" }}>LAW TRIBES</div>
                  <div style={{ fontSize: 9, color: "#c9a84c", letterSpacing: "0.25em" }}>ATTORNEYS</div>
                </div>
              </div>
              <p style={{ color: "#555550", fontSize: 13, lineHeight: 1.8, maxWidth: 240 }}>
                Full-service legal counsel in Abuja, Nigeria. Principled. Relentless. Trusted.
              </p>
            </div>

            {/* Practice */}
            <div>
              <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Practice</div>
              {["Corporate Law", "Litigation", "Real Estate", "Family Law", "Criminal Defense"].map(l => (
                <a key={l} href="#practice-areas" className="footer-link">{l}</a>
              ))}
            </div>

            {/* Firm */}
            <div>
              <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Firm</div>
              {["About Us", "Our Team", "Testimonials", "Contact"].map(l => (
                <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="footer-link">{l}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ color: "#c9a84c", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
              <div style={{ color: "#555550", fontSize: 13, lineHeight: 1.8 }}>
                <div>Wuse II, Abuja</div>
                <div>FCT, Nigeria</div>
                <div style={{ marginTop: 8 }}>+234 803 000 0000</div>
                <div>hello@lawtribesattorneys.com</div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <div style={{ color: "#333330", fontSize: 12 }}>
              © {new Date().getFullYear()} Law Tribes Attorneys. All rights reserved.
            </div>
            <div style={{ color: "#333330", fontSize: 12 }}>
              Licensed by the Nigerian Bar Association · FCT, Nigeria
            </div>
          </div>
        </div>
      </footer>

      {/* ── GLOBAL RESPONSIVE STYLES ───────────────────────── */}
      <style>{`
        /* ── Reset & Base ── */
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; }

        /* ── Layout Helpers ── */
        .container {
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .section-pad {
          padding: 100px 40px;
        }

        /* ── Nav ── */
        .site-nav { padding: 0; }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 40px;
          transition: padding 0.3s ease;
        }
        .desktop-nav {
          display: flex;
          gap: 36px;
          align-items: center;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #c9a84c;
          padding: 10px;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-dropdown {
          background: #111111;
          border-top: 1px solid #2a2a2a;
          padding: 8px 0;
        }
        .mobile-menu-link {
          display: block;
          padding: 14px 24px;
          border-bottom: 1px solid #1a1a1a;
          color: #f5f0e8;
          text-decoration: none;
          font-size: 15px;
          letter-spacing: 0.05em;
          min-height: 44px;
        }
        .mobile-menu-link.mobile-cta {
          color: #c9a84c;
          font-weight: 600;
        }

        /* ── Hero ── */
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(160deg, #080808 0%, #0f0c07 50%, #0a0808 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 120px 24px 80px;
        }
        .hero-content {
          max-width: 900px;
          text-align: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .hero-cta-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          padding: 15px 36px;
          background: linear-gradient(135deg, #c9a84c, #a07830);
          color: #080808;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 8px 32px rgba(201,168,76,0.25);
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-outline {
          padding: 15px 36px;
          border: 1px solid rgba(201,168,76,0.4);
          color: #c9a84c;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.2s;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Stats ── */
        .stats-bar {
          background: linear-gradient(135deg, #1a1508, #111111);
          border-top: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.2);
          padding: 40px;
        }
        .stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── About ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Practice Areas ── */
        .practice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .practice-card {
          background: #111111;
          border: 1px solid #1a1a1a;
          padding: 36px 28px;
          transition: all 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        /* ── Team ── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 28px;
        }

        /* ── Testimonials ── */
        .testimonials-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        /* ── Contact ── */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .contact-form-wrapper {
          background: #111111;
          border: 1px solid #1a1a1a;
          padding: 40px;
          position: relative;
        }
        .form-row {
          display: flex;
          gap: 16px;
        }

        /* ── Footer ── */
        .site-footer {
          background: #050505;
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 48px 40px 28px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand { /* full-width implied by grid col */ }
        .footer-link {
          display: block;
          color: #555550;
          font-size: 13px;
          margin-bottom: 8px;
          text-decoration: none;
          min-height: 32px;
          line-height: 2;
        }
        .footer-link:hover { color: #c9a84c; }
        .footer-bottom {
          border-top: 1px solid #111111;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* ── TABLET (≤ 900px) ── */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        /* ── MOBILE (≤ 640px) ── */
        @media (max-width: 640px) {
          .section-pad {
            padding: 72px 20px;
          }
          .nav-inner {
            padding: 16px 20px;
          }
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .hero-section {
            padding: 100px 20px 80px;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary,
          .btn-outline {
            width: 100%;
            text-align: center;
            justify-content: center;
            padding: 15px 24px;
          }
          .stats-bar {
            padding: 36px 20px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .practice-grid {
            grid-template-columns: 1fr;
          }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .testimonials-inner {
            padding: 0 4px;
          }
          .contact-form-wrapper {
            padding: 28px 20px;
          }
          .form-row {
            flex-direction: column;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: auto;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .site-footer {
            padding: 40px 20px 24px;
          }
        }

        /* ── VERY SMALL (≤ 380px) ── */
        @media (max-width: 380px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .hero-section {
            padding: 90px 16px 80px;
          }
          .section-pad {
            padding: 60px 16px;
          }
          .nav-inner {
            padding: 14px 16px;
          }
        }

        /* ── Placeholder colors ── */
        input::placeholder,
        textarea::placeholder {
          color: #444440;
        }
        input:focus,
        textarea:focus {
          border-color: rgba(201,168,76,0.4) !important;
        }
      `}</style>
    </div>
  );
}
