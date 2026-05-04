"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  Droplets,
  CircleDot,
  RotateCcw,
  Gauge,
  Cog,
  Thermometer,
  ArrowUpDown,
  Wind,
  Star,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const PHONE = "(773) 555-0142";
const PHONE_HREF = "tel:+17735550142";
const ADDRESS = "4218 W. Belmont Ave., Chicago, IL 60641";

const SERVICES = [
  {
    Icon: Droplets,
    name: "Oil Change",
    desc: "Full synthetic or conventional. Done in under an hour. We use the right oil for your vehicle — not whatever's on sale.",
  },
  {
    Icon: CircleDot,
    name: "Brakes",
    desc: "Pads, rotors, calipers, brake lines. We show you what's worn before we replace it. No phantom repairs.",
  },
  {
    Icon: RotateCcw,
    name: "Tires",
    desc: "Mounting, balancing, rotation, alignment. We carry major brands. No pressure to buy what you don't need.",
  },
  {
    Icon: Gauge,
    name: "Engine Diagnostics",
    desc: "Not just reading the code — actually finding the problem. We've seen them all.",
  },
  {
    Icon: Cog,
    name: "Transmission",
    desc: "Fluid service to full rebuild. We'll tell you straight whether it's worth fixing or time to move on.",
  },
  {
    Icon: Thermometer,
    name: "A/C & Heating",
    desc: "Recharge, leak repair, compressor replacement. We charge what it costs, not what we can get away with.",
  },
  {
    Icon: ArrowUpDown,
    name: "Suspension",
    desc: "Struts, shocks, control arms, tie rods. You'll feel the difference the moment you drive off Belmont.",
  },
  {
    Icon: Wind,
    name: "Exhaust",
    desc: "Mufflers, catalytic converters, pipes. Welded right, not patched with a clamp and a prayer.",
  },
];

const TRUST_SIGNALS = [
  {
    display: "27",
    unit: "YRS",
    label: "In Business",
    sub: "Since 1998. Three generations of the Kowalski family working on North Side cars.",
  },
  {
    display: "ASE",
    unit: "",
    label: "Certified Technicians",
    sub: "Every tech on our floor is ASE-certified. No exceptions, no rookies unsupervised.",
  },
  {
    display: "12",
    unit: "MO / 12K",
    label: "Mile Warranty",
    sub: "On all parts and labor. We stand behind our work. If something's wrong, we make it right.",
  },
];

const NEIGHBORHOODS = [
  "Old Irving Park",
  "Portage Park",
  "Albany Park",
  "Avondale",
  "Mayfair",
  "Jefferson Park",
  "Lincoln Square",
  "North Center",
  "Dunning",
  "Irving Park",
  "Belmont Gardens",
  "Cragin",
];

const TESTIMONIALS = [
  {
    name: "Dan R.",
    text: "Took my '07 Silverado in for a noise I couldn't figure out. Two other shops charged me for repairs that didn't fix it. Belmont's guys diagnosed it in 30 minutes — worn sway bar link, $90 fix. Been coming here ever since.",
  },
  {
    name: "Maria S.",
    text: "Check engine light came on mid-winter. They pulled the codes, explained exactly what it was, and gave me a number before touching anything. Picked it up the same day. No drama, no surprises. That's all I ask.",
  },
  {
    name: "Kevin O.",
    text: "Transmission was slipping. I was bracing for a $3,000 rebuild. They told me it needed a fluid flush and one solenoid — $320 out the door. Could've taken me for way more. Honest shop. Rare these days.",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "7:00am – 6:00pm", closed: false },
  { day: "Saturday", time: "8:00am – 2:00pm", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <WhyBelmont />
        <ServiceArea />
        <Testimonials />
        <HoursVisit />
      </main>
      <Footer />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────────────────────

function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#111111] transition-all duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-[1.25rem] tracking-wider text-light leading-none"
        >
          BELMONT AUTO WORKS
        </a>

        {/* Nav links — hidden on small mobile */}
        <nav
          className="hidden items-center gap-7 sm:flex"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {[
            { label: "Services", href: "#services" },
            { label: "Hours", href: "#hours" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-light/40 transition-colors hover:text-light/70"
            >
              {label}
            </a>
          ))}

          {/* Phone — always visible and tappable */}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 rounded-[2px] bg-accent px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-accent-dark"
          >
            <Phone size={13} strokeWidth={2.5} />
            {PHONE}
          </a>
        </nav>

        {/* Mobile: just the phone button */}
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1.5 rounded-[2px] bg-accent px-3.5 py-2.5 text-[13px] font-bold text-white sm:hidden"
          aria-label={`Call us at ${PHONE}`}
        >
          <Phone size={15} strokeWidth={2.5} />
          <span className="font-semibold">{PHONE}</span>
        </a>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent 0px,
          transparent 30px,
          rgba(255,255,255,0.018) 30px,
          rgba(255,255,255,0.018) 32px
        )`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-28 md:px-10">
        {/* Location tag */}
        <p
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Old Irving Park · Chicago, IL
        </p>

        {/* Headline */}
        <h1 className="font-display mb-6 leading-none tracking-wide text-light">
          <span className="block text-[clamp(3.5rem,10vw,9rem)]">
            WE FIX IT RIGHT.
          </span>
          <span className="block text-[clamp(3.5rem,10vw,9rem)] text-accent">
            THE FIRST TIME.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mb-2 max-w-lg text-[16px] leading-relaxed text-light/55"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Family-owned since 1998. ASE-certified technicians. We don&apos;t
          upsell. If it doesn&apos;t need fixing, we&apos;ll tell you.
        </p>
        <p
          className="mb-10 max-w-lg text-[15px] leading-relaxed text-light/40"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Fixed-price quotes. No surprises at pickup.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2.5 rounded-[2px] bg-accent px-7 py-4 text-[14px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-dark"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <Phone size={16} strokeWidth={2.5} />
            Call {PHONE}
          </a>
          <a
            href="#hours"
            className="flex items-center gap-2 rounded-[2px] border border-light/15 px-7 py-4 text-[14px] font-semibold uppercase tracking-[0.1em] text-light/55 transition-colors hover:border-light/30 hover:text-light/80"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Est. tag — bottom right */}
      <div
        className="absolute bottom-8 right-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-light/12"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Est. 1998
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="bg-[#141414] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="mb-1 flex flex-wrap items-baseline gap-5">
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide text-light">
            WHAT WE FIX
          </h2>
        </div>
        <p
          className="mb-12 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          All work backed by our 12-month / 12,000-mile warranty
        </p>

        {/* Grid — gap-px creates hairline dividers via bg bleed */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ Icon, name, desc }) => (
            <div key={name} className="bg-[#141414] p-7 md:p-8">
              <Icon
                size={20}
                strokeWidth={1.5}
                className="mb-5 text-accent"
              />
              <h3 className="font-display mb-2.5 text-[1.5rem] leading-none tracking-wide text-light">
                {name.toUpperCase()}
              </h3>
              <p
                className="text-[13px] leading-relaxed text-light/40"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Why Belmont
// ─────────────────────────────────────────────────────────────────────────────

function WhyBelmont() {
  return (
    <section className="border-y border-border bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display mb-14 text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide text-light">
          WHY BELMONT
        </h2>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {TRUST_SIGNALS.map(({ display, unit, label, sub }, i) => (
            <div
              key={label}
              className={`border-t-2 border-accent pt-8 pb-10 ${
                i < 2 ? "md:pr-12" : ""
              } ${i > 0 ? "md:pl-12 md:border-l md:border-border" : ""} ${
                i > 0 ? "mt-10 md:mt-0 border-t-2 border-accent" : ""
              }`}
            >
              {/* Big number / text */}
              <div className="mb-1 font-display leading-none tracking-wider text-accent">
                <span className="text-[clamp(4.5rem,9vw,7.5rem)]">
                  {display}
                </span>
                {unit && (
                  <span className="ml-2 text-[clamp(1.5rem,3vw,2.5rem)] text-accent/60">
                    {unit}
                  </span>
                )}
              </div>

              {/* Label */}
              <div className="font-display mb-3 text-[clamp(1.4rem,2.5vw,1.9rem)] leading-none tracking-wide text-light">
                {label.toUpperCase()}
              </div>

              {/* Supporting copy */}
              <p
                className="max-w-xs text-[13px] leading-relaxed text-light/40"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Service Area
// ─────────────────────────────────────────────────────────────────────────────

function ServiceArea() {
  return (
    <section className="bg-[#141414] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
          {/* Headline */}
          <div>
            <h2 className="font-display mb-4 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-wide text-light">
              WE SERVE THE WHOLE NORTH SIDE
            </h2>
            <p
              className="text-[13px] leading-relaxed text-light/40"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              If you&apos;re anywhere north of the Kennedy, we&apos;re your
              shop. Drop-offs welcome — we&apos;ll call you when it&apos;s
              ready.
            </p>
          </div>

          {/* Neighborhood list */}
          <div>
            <p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Neighborhoods Served
            </p>
            <p
              className="text-[17px] leading-loose text-light/55"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {NEIGHBORHOODS.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="border-y border-border bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display mb-12 text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide text-light">
          WHAT PEOPLE SAY
        </h2>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {TESTIMONIALS.map(({ name, text }) => (
            <div key={name} className="bg-charcoal p-8">
              {/* Stars */}
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-7 text-[14px] leading-relaxed text-light/65"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                &ldquo;{text}&rdquo;
              </p>

              {/* Attribution */}
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-light/30"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                — {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hours + Visit — dark map with red pin
// ─────────────────────────────────────────────────────────────────────────────

function DarkMap() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "4/3", background: "#1e1e1e" }}
    >
      {/* Blueprint-style grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* N–S streets */}
      {/* Kedzie Ave */}
      <div
        className="absolute inset-y-0"
        style={{ left: "30%", width: "4%", background: "#2c2c2c" }}
      />
      {/* Kimball */}
      <div
        className="absolute inset-y-0"
        style={{ left: "54%", width: "3.5%", background: "#2c2c2c" }}
      />
      {/* Pulaski */}
      <div
        className="absolute inset-y-0"
        style={{ left: "74%", width: "3%", background: "#2c2c2c" }}
      />

      {/* E–W streets */}
      {/* Addison */}
      <div
        className="absolute inset-x-0"
        style={{ top: "18%", height: "3%", background: "#2c2c2c" }}
      />
      {/* Belmont Ave — main, wider */}
      <div
        className="absolute inset-x-0"
        style={{ top: "46%", height: "6%", background: "#333333" }}
      />
      {/* Diversey */}
      <div
        className="absolute inset-x-0"
        style={{ top: "70%", height: "3%", background: "#2c2c2c" }}
      />
      {/* Fullerton */}
      <div
        className="absolute inset-x-0"
        style={{ top: "86%", height: "3%", background: "#2c2c2c" }}
      />

      {/* Belmont Ave label */}
      <div
        style={{
          position: "absolute",
          top: "41%",
          left: "3%",
          fontSize: "7px",
          fontFamily: "var(--font-dm-sans)",
          color: "#555",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        W. Belmont Ave.
      </div>

      {/* Kedzie label */}
      <div
        style={{
          position: "absolute",
          left: "23%",
          top: "50%",
          transform: "rotate(-90deg) translateX(-50%)",
          transformOrigin: "center center",
          whiteSpace: "nowrap",
          fontSize: "7px",
          fontFamily: "var(--font-dm-sans)",
          color: "#444",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        N. Kedzie Ave.
      </div>

      {/* Pin — Belmont & just east of Kedzie (~4218 W Belmont) */}
      <div
        className="absolute"
        style={{ left: "calc(34% - 8px)", top: "calc(49% - 8px)" }}
      >
        <div
          className="pin-pulse absolute rounded-full"
          style={{
            width: "32px",
            height: "32px",
            top: "-8px",
            left: "-8px",
            background: "#d93025",
          }}
        />
        <div
          className="pin-pulse-delayed absolute rounded-full"
          style={{
            width: "32px",
            height: "32px",
            top: "-8px",
            left: "-8px",
            background: "#d93025",
          }}
        />
        <div
          className="relative rounded-full"
          style={{
            width: "16px",
            height: "16px",
            background: "#d93025",
            border: "2.5px solid #1e1e1e",
            boxShadow: "0 0 14px rgba(217,48,37,0.55)",
            zIndex: 10,
          }}
        />
      </div>

      {/* Corner label */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          fontSize: "8px",
          fontFamily: "var(--font-dm-sans)",
          color: "#3a3a3a",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        Old Irving Park
      </div>
    </div>
  );
}

function HoursVisit() {
  return (
    <section id="hours" className="bg-[#111111] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2 className="font-display mb-12 text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-wide text-light">
          HOURS &amp; LOCATION
        </h2>

        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Map */}
          <div className="md:col-span-7">
            <DarkMap />
          </div>

          {/* Info panel */}
          <div
            className="space-y-8 md:col-span-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {/* Address */}
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-light/25">
                Address
              </p>
              <p className="text-[15px] leading-relaxed text-light/70">
                {ADDRESS}
                <br />
                <span className="text-[13px] text-light/35">
                  Old Irving Park — easy off the Kennedy at Addison
                </span>
              </p>
            </div>

            {/* Hours */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-light/25">
                Shop Hours
              </p>
              <div className="space-y-2">
                {HOURS.map(({ day, time, closed }) => (
                  <div
                    key={day}
                    className="flex justify-between"
                    style={{ maxWidth: 240 }}
                  >
                    <span className="text-[14px] text-light/65">{day}</span>
                    <span
                      className={`text-[14px] ${
                        closed ? "text-light/25" : "text-light/45"
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drop-off note */}
            <p className="text-[13px] leading-relaxed text-light/35">
              Drop-off keys available. Call ahead and we&apos;ll have your
              estimate ready before you arrive.
            </p>

            {/* CTA */}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 rounded-[2px] bg-accent px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-dark"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-[#0d0d0d] py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Identity */}
          <div>
            <p className="font-display mb-2 text-[1.7rem] tracking-wider text-light leading-none">
              BELMONT AUTO WORKS
            </p>
            <p
              className="text-[12px] leading-relaxed text-light/30"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Honest work. Three generations on the North Side.
            </p>
          </div>

          {/* Contact */}
          <div style={{ fontFamily: "var(--font-dm-sans)" }}>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-light/20">
              Contact
            </p>
            <a
              href={PHONE_HREF}
              className="mb-1.5 block text-[1.3rem] font-bold text-accent transition-colors hover:text-accent-dark"
            >
              {PHONE}
            </a>
            <p className="text-[13px] text-light/35">{ADDRESS}</p>
          </div>

          {/* Call now CTA */}
          <div className="flex md:justify-end">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 self-start rounded-[2px] bg-accent px-7 py-4 text-[15px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-dark"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <Phone size={17} strokeWidth={2.5} />
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-[11px] text-light/18"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            © 2025 Belmont Auto Works. All rights reserved.
          </p>
          <p
            className="text-[11px] text-light/18"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            ASE-certified · Family-owned since 1998
          </p>
        </div>
      </div>
    </footer>
  );
}
