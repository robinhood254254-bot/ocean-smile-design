import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog — Ocean Smile Dental Clinic" },
      { name: "description", content: "Practical, evidence-based articles on oral health, dental hygiene, braces, children's dentistry, root canals and preventive dental care." },
      { property: "og:title", content: "Dental Health Blog — Ocean Smile Dental Clinic" },
      { property: "og:description", content: "Trusted guidance for a healthier smile." },
    ],
  }),
  component: BlogsIndex,
});

const CATEGORIES = ["All", "Oral Health", "Preventive Care", "Children", "Orthodontics", "Emergencies"];
const PAGE_SIZE = 6;

function BlogsIndex() {
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category)),
    [category],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

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
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => { setCategory(c); setPage(1); }}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-primary hover:bg-primary-soft"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing {visible.length} of {filtered.length} article{filtered.length === 1 ? "" : "s"}
          {category !== "All" ? ` in ${category}` : ""}.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
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

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-soft"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === currentPage;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`h-10 min-w-10 px-3 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-primary hover:bg-primary-soft"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {n}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-soft"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

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
