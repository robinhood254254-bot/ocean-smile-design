import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, Clock, Download } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt={SITE.name} className="h-20 w-auto bg-white/95 rounded-xl p-2" />
          </div>
          <p className="mt-4 text-sm text-white/75 max-w-xs">
            {SITE.tagline}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.businessCardUrl}
              target="_blank"
              rel="noreferrer noopener"
              download="Ocean-Smile-Business-Card.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition px-4 h-10 text-xs font-semibold"
            >
              <Download className="h-3.5 w-3.5" /> Business card
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blogs", label: "Blogs" },
              { to: "/book", label: "Book Appointment" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-accent transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <div>
                <a href={`tel:${SITE.whatsappIntl}`} className="hover:text-accent block">
                  Bookings: {SITE.whatsapp}
                </a>
                <a href={`tel:${SITE.emergencyIntl}`} className="hover:text-accent block">
                  Emergency: {SITE.emergency}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <div className="space-y-0.5">
                {SITE.hours.map((h) => (
                  <div key={h.day}>
                    <span className="text-white/60">{h.day}: </span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Kisumu Road, Mombasa · Kenya</p>
        </div>
      </div>
    </footer>
  );
}
