import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogs";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog — Ocean Smile Dental Clinic" },
      { name: "description", content: "Practical, evidence-based articles on oral health, dental hygiene, braces, children's dentistry, root canals and preventive dental care." },
      { property: "og:title", content: "Dental Health Blog — Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Trusted guidance for a healthier smile." },
    ],
  }),
  component: Blogs,
});

const CATEGORIES = ["Oral Health", "Preventive Care", "Children", "Orthodontics", "Emergencies"];

function Blogs() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 md:py-24 text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Dental Health Blog
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            Trusted guidance for a <span className="text-gradient-brand">healthier smile.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Practical, evidence-based articles on oral health, preventive care, orthodontics,
            children's dentistry and dental emergencies — from our clinical team.
          </p>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-primary">
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blogs/$slug"
              params={{ slug: p.slug }}
              className="card-elevated card-elevated-hover p-6 flex flex-col group"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                {p.category}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.minutes}</span>
                <span className="inline-flex items-center gap-1 text-accent font-semibold">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-10 md:p-12 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Have a topic you'd like us to cover?</h2>
            <p className="mt-3 text-white/80">
              Let us know what dental health questions matter to you and we'll write about them.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
              Suggest a topic <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
