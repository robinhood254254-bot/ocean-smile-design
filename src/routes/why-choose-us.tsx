import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, HeartHandshake, Sparkles, Clock, Stethoscope, Users,
  Award, Wallet, MessageCircle, Star, Phone, Calendar, CheckCircle2, ArrowRight,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Ocean Smile Dental Clinic" },
      { name: "description", content: "Discover why families across Mombasa trust Ocean Smile Dental Clinic — experienced clinicians, modern equipment, transparent pricing, and truly patient-centred care." },
      { property: "og:title", content: "Why Choose Us — Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Experienced clinicians, modern equipment and transparent, patient-first dental care in Mombasa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyChooseUs,
});

const REASONS = [
  { icon: Stethoscope, title: "Experienced clinicians", body: "Our team combines years of clinical experience with continuous training in modern dentistry techniques." },
  { icon: ShieldCheck, title: "Evidence-based care", body: "Every recommendation is grounded in current dental standards — no upsells, no guesswork." },
  { icon: HeartHandshake, title: "Truly patient-centred", body: "We take time to listen, explain and plan treatment around your comfort, goals and schedule." },
  { icon: Sparkles, title: "Modern equipment", body: "A clean, calm clinic equipped with modern tools for accurate diagnosis and gentle treatment." },
  { icon: Users, title: "Care for every age", body: "From a child's first visit to complex adult restorations — one trusted clinic for the whole family." },
  { icon: Clock, title: "Same-day emergencies", body: "Urgent pain, trauma or swelling? We reserve time daily for same-day emergency appointments." },
  { icon: Wallet, title: "Transparent pricing", body: "Clear treatment plans and honest quotes — you'll always know what to expect before we begin." },
  { icon: Award, title: "Long-term results", body: "We focus on treatments that last, protecting your oral health and your investment for years." },
];

const STATS = [
  { value: "10+", label: "Years of care" },
  { value: "16", label: "Dental services" },
  { value: "5★", label: "Patient rating" },
  { value: "24/7", label: "Emergency line" },
];

const PROMISES = [
  "A gentle, unhurried consultation on every visit",
  "Clear explanations before any treatment begins",
  "Sterilised instruments and strict hygiene protocols",
  "Same-day emergency slots for urgent dental pain",
  "Flexible booking via WhatsApp, phone or online",
  "Follow-up care and long-term maintenance plans",
];

function WhyChooseUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative py-20 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Why families choose Ocean Smile
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-primary leading-tight">
            Care you can trust, <span className="text-gradient-brand">smiles that last.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We're more than a dental clinic — we're your long-term partner in oral health. Here's what sets Ocean Smile Dental Clinic apart in Mombasa.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground transition"
            >
              <Calendar className="h-4 w-4" /> Book an Appointment
            </Link>
            <a
              href={waLink("Hello Ocean Smile Dental Clinic, I'd like to know more about your services.")}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-x -mt-8 md:-mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 rounded-3xl border border-border bg-background p-6 md:p-8 shadow-soft">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons grid */}
      <section className="container-x py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Our promise</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">Eight reasons patients keep coming back</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              style={{ animationDelay: `${(i % 4) * 80}ms` }}
              className={`card-elevated card-elevated-hover p-6 reveal-${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promises */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-16 md:py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">The Ocean Smile promise</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">What every visit includes</h2>
            <p className="mt-4 text-white/80 max-w-lg">
              We hold ourselves to a simple standard: care we'd happily give our own family. Here's what you can count on from your first call to every follow-up.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                <span className="text-sm text-white/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-x py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="mt-6 text-xl md:text-2xl font-medium text-primary leading-relaxed">
            "The team at Ocean Smile made me feel completely at ease. Everything was clearly explained, the clinic is spotless, and my results are honestly better than I expected."
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-muted-foreground">— Verified patient, Mombasa</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/85 text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:justify-between shadow-glow">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready for a smile you'll love?</h3>
            <p className="mt-2 text-white/85 max-w-xl">Book your appointment today or reach us on the emergency line — we'll take it from there.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
            >
              <Calendar className="h-4 w-4" /> Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.emergencyIntl}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/20 transition"
            >
              <Phone className="h-4 w-4" /> {SITE.emergency}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
