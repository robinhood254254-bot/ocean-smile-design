import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ocean Smile Dental Clinic, Mombasa" },
      { name: "description", content: "Contact Ocean Smile Dental Clinic in Mombasa. Call, WhatsApp, email or visit us on Kisumu Road, off Moi Avenue." },
      { property: "og:title", content: "Contact Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Reach us by phone, WhatsApp, email or in person." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, title: "Visit us", body: SITE.address, action: { href: SITE.maps, label: "Open in Google Maps", external: true } },
    { icon: Phone, title: "Call us", body: `Bookings: ${SITE.whatsapp}\nEmergency: ${SITE.emergency}`, action: { href: `tel:${SITE.emergencyIntl}`, label: `Call ${SITE.emergency}` } },
    { icon: Mail, title: "Email us", body: SITE.email, action: { href: `mailto:${SITE.email}`, label: "Send an email" } },
    { icon: MessageCircle, title: "WhatsApp", body: SITE.whatsapp, action: { href: waLink("Hello Ocean Smile, I would like to make an enquiry."), label: "Chat on WhatsApp", external: true } },
  ];

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-16 md:py-20 text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Contact
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            We're here to <span className="text-gradient-brand">help you smile.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach us by phone, WhatsApp or email — or stop by our clinic in Mombasa.
          </p>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <div key={c.title} className="card-elevated p-6 flex flex-col">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-base font-semibold text-primary">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line flex-1">{c.body}</p>
              <a
                href={c.action.href}
                target={c.action.external ? "_blank" : undefined}
                rel={c.action.external ? "noreferrer noopener" : undefined}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-primary transition"
              >
                {c.action.label} →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
          <iframe
            title="Ocean Smile Dental Clinic location"
            src={SITE.mapsEmbed}
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>
        <div className="space-y-6">
          <div className="card-elevated p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-primary">Opening hours</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-foreground/85">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-elevated p-6">
            <h2 className="text-lg font-semibold text-primary">Follow us</h2>
            <p className="mt-2 text-sm text-muted-foreground">Stay up to date with news and dental tips.</p>
            <a
              href={SITE.facebook}
              target="_blank" rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft transition"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
