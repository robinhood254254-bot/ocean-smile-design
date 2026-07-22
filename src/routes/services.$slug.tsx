import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, CalendarDays, ArrowRight, MessageCircle } from "lucide-react";
import { SERVICES, getService, type Service } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — Ocean Smile Dental Clinic" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Ocean Smile Dental Clinic` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.title} — Ocean Smile Dental Clinic` },
        { property: "og:description", content: loaderData.short },
        { property: "og:image", content: loaderData.image },
        { name: "twitter:image", content: loaderData.image },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-bold text-primary">Service not found</h1>
      <p className="mt-3 text-muted-foreground">The service you're looking for isn't available.</p>
      <Link to="/services" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">
        View all services
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-x py-24 text-center">
      <h1 className="text-2xl font-bold text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">Try again</button>
    </div>
  ),
});

function ServiceDetail() {
  const service = Route.useLoaderData() as Service;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const bookMessage = `Hello Ocean Smile Dental Clinic, I would like to book a ${service.title} appointment.`;

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-14 md:py-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Dental service
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">{service.short}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/book" search={{ service: service.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground transition">
                  <CalendarDays className="h-4 w-4" /> Book this service
                </Link>
                <a
                  href={waLink(bookMessage)}
                  target="_blank" rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsapp}
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-glow">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Who may benefit</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{service.candidates}</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">What to expect</h2>
            <ol className="mt-4 space-y-3">
              {service.procedure.map((step, i) => (
                <li key={i} className="flex gap-4 card-elevated p-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-foreground/85 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {service.recovery && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Recovery & aftercare</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.recovery}</p>
            </div>
          )}

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Frequently asked questions</h2>
            <div className="mt-4 space-y-3">
              {service.faqs.map((f) => (
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
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
          <div className="card-elevated p-6">
            <h3 className="text-lg font-semibold text-primary">Benefits</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-6 bg-primary text-primary-foreground">
            <h3 className="text-lg font-semibold">Book {service.title}</h3>
            <p className="mt-2 text-sm text-white/80">Choose a time that works for you and we'll take it from there.</p>
            <Link to="/book" search={{ service: service.slug }} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-primary px-5 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
              Book this service <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-primary">Explore other services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-elevated card-elevated-hover group overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
