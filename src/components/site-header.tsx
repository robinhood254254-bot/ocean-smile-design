import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown, ArrowRight, Calendar } from "lucide-react";
import logo from "@/assets/ocean-smile-logo-horizontal.png.asset.json";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMega: true },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/blogs", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`relative flex items-center justify-between gap-4 rounded-full border border-border/70 bg-background/90 backdrop-blur px-3 sm:px-5 h-16 md:h-[72px] transition-all ${
            scrolled ? "shadow-[0_10px_30px_-15px_rgba(20,40,80,0.35)]" : "shadow-soft"
          }`}
        >
          <Link to="/" aria-label={`${SITE.name} home`} className="flex items-center min-w-0 shrink-0">
            <img
              src={logo.url}
              alt={SITE.name}
              className="h-11 md:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              if (item.hasMega) {
                return (
                  <div
                    key={item.to}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      to={item.to}
                      className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        active
                          ? "text-primary"
                          : "text-foreground/75 hover:text-primary"
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active
                      ? "text-primary"
                      : "text-foreground/75 hover:text-primary"
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
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 md:px-5 py-2 md:py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-accent hover:text-accent-foreground"
            >
              <Calendar className="h-4 w-4" /> Book Now
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mega menu */}
          {servicesOpen && (
            <div
              className="hidden lg:block absolute left-1/2 top-full mt-3 w-[min(96vw,1080px)] -translate-x-1/2 rounded-3xl border border-border bg-background shadow-[0_30px_60px_-20px_rgba(20,40,80,0.28)] p-6"
              onMouseEnter={openMega}
              onMouseLeave={scheduleClose}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Our services</p>
                  <h3 className="mt-1 text-xl font-bold text-primary">Comprehensive Dental Care</h3>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                >
                  View all services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center gap-3 rounded-2xl p-2 hover:bg-primary-soft/60 transition"
                  >
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border">
                      <img src={s.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary truncate">{s.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{s.short}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden mt-2 mx-4 rounded-3xl border border-border bg-background shadow-[0_20px_40px_-15px_rgba(20,40,80,0.25)] overflow-hidden">
          <nav className="flex flex-col p-3 gap-1">
            {NAV.map((item) => {
              if (item.hasMega) {
                return (
                  <div key={item.to} className="rounded-xl">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-primary-soft hover:text-primary"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-1 ml-2 mb-2 grid gap-1">
                        <Link
                          to="/services"
                          className="rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-primary-soft"
                        >
                          View all services →
                        </Link>
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="rounded-lg px-3 py-2 text-sm text-foreground/75 hover:bg-primary-soft hover:text-primary"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-primary-soft hover:text-primary"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/book"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Calendar className="h-4 w-4" /> Book Now
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
