import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Sparkles, Users, Leaf, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ocean Smile Dental Clinic — Our Story & Values" },
      { name: "description", content: "Learn about Ocean Smile Dental Clinic in Mombasa — our patient-centred philosophy, clinical values and the team behind the practice." },
      { property: "og:title", content: "About Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Modern, compassionate dentistry rooted in trust and clinical excellence." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: HeartHandshake, title: "Compassion first", body: "We listen without rush, and treat every patient with dignity and warmth." },
  { icon: ShieldCheck, title: "Clinical integrity", body: "Honest recommendations, transparent pricing and evidence-based treatment." },
  { icon: Sparkles, title: "Attention to detail", body: "From sterilisation to aesthetics, every step is done with care." },
  { icon: Users, title: "Care for all ages", body: "From a child's first visit to advanced adult care, our team adapts to you." },
  { icon: Leaf, title: "Comfort and calm", body: "A soothing clinic environment designed to ease dental anxiety." },
  { icon: GraduationCap, title: "Continuous learning", body: "We stay current with modern dentistry to serve you better." },
];

function About() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              About us
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
              A modern dental clinic built on <span className="text-gradient-brand">trust and care.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Ocean Smile Dental Clinic is a warm, modern practice in Mombasa offering a full
              range of preventive, restorative and cosmetic dental treatments. Our team is
              committed to helping every patient feel comfortable, informed and confident.
            </p>
          </div>
          <div className="card-elevated p-8">
            <h2 className="text-xl font-semibold text-primary">Our promise</h2>
            <p className="mt-3 text-muted-foreground">
              To provide dental care we would trust for our own families — thoughtful,
              unhurried and rooted in modern clinical practice.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our story</h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ocean Smile Dental Clinic was founded on a simple belief: dentistry should feel
              calm, considered and human. We saw the need for a practice that combines modern
              equipment and clinical rigour with a warm, welcoming environment.
            </p>
            <p>
              Today, our team supports patients across Mombasa — from routine check-ups and
              children's dentistry to root canals, orthodontics and full smile restorations.
              Every treatment plan is created with your goals, comfort and long-term oral
              health in mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What guides us</h2>
            <p className="mt-3 text-muted-foreground">
              A set of values that shape every visit and every treatment plan.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="card-elevated p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold">Meet us at the clinic</h2>
            <p className="mt-3 text-white/80 max-w-lg">
              We're happy to answer your questions or arrange a consultation. Reach out any time.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/book" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
              Book appointment
            </Link>
            <Link to="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
