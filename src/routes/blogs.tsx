import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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

const POSTS = [
  {
    title: "Brushing and flossing: a simple daily routine that works",
    category: "Oral Health",
    excerpt:
      "Consistent brushing twice a day and daily flossing remain the foundation of good oral health. Here's how to make the most of them.",
    date: "Coming soon",
    minutes: "4 min read",
  },
  {
    title: "How often should you really visit the dentist?",
    category: "Preventive Care",
    excerpt:
      "For most adults, a check-up every six months helps prevent problems early. Some patients benefit from a shorter interval — here's why.",
    date: "Coming soon",
    minutes: "3 min read",
  },
  {
    title: "Your child's first dental visit: what to expect",
    category: "Children",
    excerpt:
      "A calm, positive first visit sets the tone for a lifetime of comfortable dental care. Practical tips for parents.",
    date: "Coming soon",
    minutes: "5 min read",
  },
  {
    title: "Braces vs clear aligners: understanding the options",
    category: "Orthodontics",
    excerpt:
      "Both approaches can produce excellent results. The right choice depends on your bite, lifestyle and treatment goals.",
    date: "Coming soon",
    minutes: "6 min read",
  },
  {
    title: "Toothache at night: what to do before you can see a dentist",
    category: "Emergencies",
    excerpt:
      "Simple steps to manage dental pain safely while you arrange an emergency appointment.",
    date: "Coming soon",
    minutes: "4 min read",
  },
  {
    title: "The truth about teeth whitening",
    category: "Oral Health",
    excerpt:
      "What professional whitening can and can't do — and how to protect your enamel while brightening your smile.",
    date: "Coming soon",
    minutes: "5 min read",
  },
  {
    title: "Root canal treatment: separating fact from fiction",
    category: "Preventive Care",
    excerpt:
      "Root canals have a scary reputation, but modern techniques make them a comfortable, tooth-saving option.",
    date: "Coming soon",
    minutes: "6 min read",
  },
  {
    title: "Diet, sugar and your teeth",
    category: "Preventive Care",
    excerpt:
      "How the frequency of sugary snacks matters more than the amount, and small changes that protect your enamel.",
    date: "Coming soon",
    minutes: "4 min read",
  },
];

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
          {POSTS.map((p) => (
            <article key={p.title} className="card-elevated card-elevated-hover p-6 flex flex-col">
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                {p.category}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-primary leading-snug">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.minutes}</span>
              </div>
            </article>
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
