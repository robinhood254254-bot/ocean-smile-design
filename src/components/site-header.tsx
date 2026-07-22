import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border shadow-[0_4px_20px_-12px_rgba(20,40,80,0.15)]"
          : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-24 md:h-28 items-center justify-between gap-4">
        <Link to="/" aria-label={`${SITE.name} home`} className="flex items-center min-w-0">
          <img
            src={logo.url}
            alt={SITE.name}
            className={`w-auto shrink-0 transition-all ${scrolled ? "h-16 md:h-20" : "h-20 md:h-24"}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active
                    ? "text-primary bg-primary-soft"
                    : "text-foreground/70 hover:text-primary hover:bg-primary-soft/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.emergencyIntl}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="tabular-nums">{SITE.emergency}</span>
          </a>
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-accent hover:text-accent-foreground"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${SITE.emergencyIntl}`}
              className="rounded-full border border-primary/20 px-4 py-3 text-center text-sm font-semibold text-primary"
            >
              Emergency: {SITE.emergency}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
