import { useEffect, useState } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={waLink("Hello Ocean Smile Dental Clinic, I would like to make an enquiry.")}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow wa-pulse hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 wa-ripple" aria-hidden />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      <a
        href={`tel:${SITE.emergencyIntl}`}
        aria-label={`Emergency call ${SITE.emergency}`}
        className="fixed bottom-5 left-5 z-40 sm:hidden inline-flex items-center gap-2 rounded-full bg-destructive px-4 h-12 text-sm font-semibold text-destructive-foreground shadow-glow"
      >
        <Phone className="h-4 w-4" />
        Emergency
      </a>

      {show && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft hover:bg-accent hover:text-accent-foreground transition"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
