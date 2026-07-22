import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CalendarDays, MessageCircle, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { SITE, waLink } from "@/lib/site";

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Ocean Smile Dental Clinic" },
      { name: "description", content: "Book your dental appointment at Ocean Smile Dental Clinic in Mombasa. Choose your preferred service and time — we'll confirm via WhatsApp." },
      { property: "og:title", content: "Book an Appointment — Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Convenient booking via WhatsApp for a range of dental services." },
    ],
  }),
  component: BookPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a preferred date"),
  notes: z.string().max(500).optional(),
});

function BookPage() {
  const { service: preSelected } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      date: String(form.get("date") ?? ""),
      notes: String(form.get("notes") ?? ""),
    };
    const result = bookingSchema.safeParse(values);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const svc = SERVICES.find((s) => s.slug === result.data.service);
    const message =
      `Hello Ocean Smile Dental Clinic, I would like to book an appointment.\n\n` +
      `• Name: ${result.data.name}\n` +
      `• Phone: ${result.data.phone}\n` +
      `• Email: ${result.data.email}\n` +
      `• Service: ${svc ? svc.title : result.data.service}\n` +
      `• Preferred date: ${result.data.date}\n` +
      (result.data.notes ? `• Notes: ${result.data.notes}\n` : "") +
      `\nThank you.`;
    setSubmitted(true);
    window.location.href = waLink(message);
  }

  const inputCls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
  const labelCls = "text-sm font-semibold text-primary";
  const errCls = "mt-1 text-xs text-destructive";

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-16 md:py-20 text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Book appointment
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            Book your visit in a <span className="text-gradient-brand">few simple steps.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Complete the form below and we'll continue your booking on WhatsApp for quick
            confirmation. For emergencies, call {" "}
            <a href={`tel:${SITE.emergencyIntl}`} className="text-primary font-semibold hover:text-accent">
              {SITE.emergency}
            </a>.
          </p>
        </div>
      </section>

      <section className="container-x py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={onSubmit} noValidate className="card-elevated p-6 md:p-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>Full name</label>
                <input id="name" name="name" type="text" required maxLength={80} autoComplete="name" className={inputCls} placeholder="Your full name" />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone number</label>
                <input id="phone" name="phone" type="tel" required maxLength={20} autoComplete="tel" className={inputCls} placeholder="e.g. 07XX XXX XXX" />
                {errors.phone && <p className={errCls}>{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelCls}>Email address</label>
              <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" className={inputCls} placeholder="you@example.com" />
              {errors.email && <p className={errCls}>{errors.email}</p>}
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelCls}>Preferred service</label>
                <select id="service" name="service" required defaultValue={preSelected ?? ""} className={inputCls}>
                  <option value="" disabled>Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.title}</option>
                  ))}
                  <option value="general-consultation">General consultation</option>
                </select>
                {errors.service && <p className={errCls}>{errors.service}</p>}
              </div>
              <div>
                <label htmlFor="date" className={labelCls}>Preferred date</label>
                <input id="date" name="date" type="date" required min={today} className={inputCls} />
                {errors.date && <p className={errCls}>{errors.date}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="notes" className={labelCls}>Additional notes <span className="font-normal text-muted-foreground">(optional)</span></label>
              <textarea id="notes" name="notes" rows={4} maxLength={500} className={inputCls} placeholder="Tell us anything that would help us prepare for your visit." />
            </div>

            <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground transition">
              <CalendarDays className="h-4 w-4" /> Book Appointment
            </button>

            {submitted && (
              <p className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4 text-accent" /> Redirecting you to WhatsApp…
              </p>
            )}

            <p className="text-xs text-muted-foreground">
              By submitting this form you'll be redirected to WhatsApp with your booking
              details pre-filled. We'll confirm your appointment shortly.
            </p>
          </form>

          <aside className="space-y-6">
            <div className="card-elevated p-6">
              <h2 className="text-lg font-semibold text-primary">Prefer to chat first?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us directly on WhatsApp and we'll help you plan the right care.
              </p>
              <a
                href={waLink("Hello Ocean Smile, I would like to enquire about an appointment.")}
                target="_blank" rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp {SITE.whatsapp}
              </a>
            </div>
            <div className="card-elevated p-6 bg-primary text-primary-foreground">
              <h2 className="text-lg font-semibold">Dental emergency?</h2>
              <p className="mt-2 text-sm text-white/80">Call our emergency line for same-day care.</p>
              <a href={`tel:${SITE.emergencyIntl}`} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
                Call {SITE.emergency}
              </a>
            </div>
            <div className="card-elevated p-6">
              <h3 className="text-sm font-semibold text-primary">Opening hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-foreground/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
