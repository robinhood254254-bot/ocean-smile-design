import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Dental Services — Ocean Smile Dental Clinic" },
      { name: "description", content: "Explore the full range of dental services at Ocean Smile Dental Clinic in Mombasa: cleanings, fillings, root canals, orthodontics, emergencies and more." },
      { property: "og:title", content: "Dental Services — Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Preventive, restorative and cosmetic dentistry delivered with care." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            Comprehensive dentistry, delivered <span className="text-gradient-brand">with care.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Preventive, restorative and cosmetic dental treatments for the whole family — planned
            around your comfort, goals and long-term oral health.
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              style={{ animationDelay: `${(i % 6) * 80}ms` }}
              className={`card-elevated card-elevated-hover group overflow-hidden flex flex-col reveal-${i % 2 === 0 ? "left" : "right"}`}
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
                <h2 className="text-lg font-semibold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
