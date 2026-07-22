import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, HeartHandshake, Sparkles, Clock, Phone,
  ArrowRight, CheckCircle2, Star, MessageCircle, ShieldPlus,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";
import heroImage from "@/assets/hero-ocean-smile.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ocean Smile Dental Clinic — Modern Dental Care in Mombasa" },
      {
        name: "description",
        content:
          "Patient-centred dental care in Mombasa. Cleanings, fillings, root canals, orthodontics, children's dentistry and emergency care from Ocean Smile Dental Clinic.",
      },
      { property: "og:title", content: "Ocean Smile Dental Clinic — Mombasa" },
      {
        property: "og:description",
        content:
          "Reliable, modern and compassionate dental care for the whole family.",
      },
    ],
  }),
  component: Home,
});

const TRUST = [
  { icon: ShieldCheck, title: "Evidence-based care", body: "Modern techniques and materials rooted in current dental standards." },
  { icon: HeartHandshake, title: "Patient-centred approach", body: "We take time to listen, explain and plan treatment around you." },
  { icon: Sparkles, title: "Comfortable environment", body: "A calm, hygienic clinic designed for children and adults alike." },
  { icon: Clock, title: "Same-day emergencies", body: "Prompt attention for urgent dental pain, trauma and swelling." },
];

const REVIEWS = [
  { name: "Amina H.", rating: 5, text: "Very thorough and gentle. The team explained every step of my root canal and I felt completely at ease throughout the visit." },
  { name: "Brian O.", rating: 5, text: "Spotless clinic and truly friendly staff. My cleaning appointment was efficient, comfortable and finished exactly on time." },
  { name: "Grace M.", rating: 5, text: "My children actually look forward to their dental visits now. So kind, patient and reassuring with the little ones." },
  { name: "Peter K.", rating: 4, text: "Excellent treatment and honest advice. The team took time to explain the plan and made me feel genuinely cared for." },
  { name: "Zainab S.", rating: 5, text: "Fair pricing and transparent recommendations. They only advised what I actually needed — I'll definitely be back." },
  { name: "Daniel W.", rating: 5, text: "Handled my emergency the same day with total professionalism. Calm, skilful and reassuring from start to finish." },
];

const FAQS = [
  { q: "Do I need an appointment or can I walk in?", a: "Appointments help us give you the time and attention you deserve. Walk-ins are welcome for urgent care, subject to availability." },
  { q: "How often should I visit the dentist?", a: "Most patients benefit from a check-up and cleaning every six months. Your dentist may recommend a different interval based on your oral health." },
  { q: "Do you treat children?", a: "Yes. We offer age-appropriate care in a friendly environment to help children build positive dental habits." },
  { q: "What should I do in a dental emergency?", a: `Call our emergency line on ${SITE.emergency}. We reserve time each day for same-day emergency care.` },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-accent text-accent" : "text-border"}`} />
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container-x relative py-16 md:py-24 lg:py-32 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Modern dentistry, Mombasa
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.05]">
              Gentle, reliable dental care <span className="text-gradient-brand">for every smile.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              At Ocean Smile Dental Clinic we combine modern techniques with a warm,
              patient-first approach — from routine cleanings to complete smile restoration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground transition"
              >
                Book an appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.emergencyIntl}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition"
              >
                <Phone className="h-4 w-4" /> {SITE.emergency}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Same-day emergencies", "Family & children", "Modern equipment"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-primary/10">
              <img
                src={heroImage.url}
                alt="Ocean Smile Dental Clinic — Mombasa"
                className="w-full h-full object-cover aspect-[4/5] sm:aspect-[4/4]"
              />
              {/* Futuristic gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />

              {/* Floating stats badge — top left */}
              <div className="absolute top-5 left-5 rounded-2xl bg-background/85 backdrop-blur-md px-4 py-3 shadow-soft ring-1 ring-white/40">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-primary">5.0</span>
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Patient rated
                </div>
              </div>

              {/* Futuristic badge — bottom right */}
              <div className="absolute bottom-5 right-5 max-w-[75%]">
                <div className="rounded-2xl bg-background/90 backdrop-blur-xl px-5 py-4 shadow-glow ring-1 ring-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent blur-md opacity-60" />
                      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                        <ShieldPlus className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">Open now</span>
                      </div>
                      <div className="mt-0.5 text-sm font-bold text-primary leading-tight">
                        Same-day emergency
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        Certified · Modern · Trusted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.title} className="card-elevated p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our dental services</h2>
              <p className="mt-3 text-muted-foreground">
                From preventive care to advanced treatments, we offer a full range of dental
                services delivered with skill and compassion.
              </p>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-elevated card-elevated-hover group overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              About the clinic
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
              Care rooted in trust, comfort and clinical excellence.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ocean Smile Dental Clinic is a modern dental practice based in Mombasa. Our team is
              committed to gentle, informed and unhurried care for patients of all ages. We
              believe every visit should leave you feeling heard, understood and cared for.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Comprehensive treatment planning",
                "Clear pricing and honest recommendations",
                "Strict sterilisation and infection control",
                "Comfortable, family-friendly environment",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition">
                Learn more about us
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition">
                Visit our clinic
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-1 shadow-glow">
              <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-background p-8 grid grid-cols-2 gap-6">
                {[
              { k: "16+", v: "Dental services" },
              { k: "6 days", v: "Open weekly" },
              { k: "All ages", v: "Family care" },
              { k: "Same day", v: "Emergency slots" },
                ].map((s) => (
                  <div key={s.v} className="rounded-2xl bg-secondary p-5">
                    <div className="text-3xl font-bold text-gradient-brand">{s.k}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What our patients share</h2>
            <p className="mt-3 text-muted-foreground">
              Real feedback from people we've had the privilege of caring for.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="card-elevated p-6">
                <Stars n={r.rating} />
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">"{r.text}"</p>
                <p className="mt-4 text-sm font-semibold text-primary">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently asked questions</h2>
            <p className="mt-3 text-muted-foreground">
              Can't find what you're looking for? We're happy to help — reach out and a member of
              our team will get back to you.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft transition">
              Contact us
            </Link>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="card-elevated p-5 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-primary">
                  {f.q}
                  <span className="text-accent transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-14">
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Ready to feel confident about your smile?</h2>
              <p className="mt-3 text-white/80 max-w-lg">
                Book a check-up or reach out on WhatsApp — we'll help you plan the right care.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/book" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
                Book appointment
              </Link>
              <a
                href={waLink("Hello Ocean Smile, I would like to enquire about an appointment.")}
                target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
