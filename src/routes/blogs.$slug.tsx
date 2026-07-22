import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from "lucide-react";
import { BLOG_POSTS, getBlog, type BlogPost } from "@/lib/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }): BlogPost => {
    const post = getBlog(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Ocean Smile Dental Clinic" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Ocean Smile Dental Clinic` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogDetail,
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-bold text-primary">Article not found</h1>
      <Link to="/blogs" className="mt-6 inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">All articles</Link>
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

function BlogDetail() {
  const post = Route.useLoaderData() as BlogPost;
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-14 md:py-20 max-w-3xl">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <span className="mt-6 inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Ocean Smile Team</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.minutes}</span>
          </div>
        </div>
      </section>

      <article className="container-x py-14 md:py-16 max-w-3xl">
        <div className="space-y-8">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{block.heading}</h2>
              )}
              <p className={`${block.heading ? "mt-3" : ""} text-foreground/85 leading-relaxed text-base`}>
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold">Have a question about your smile?</h3>
          <p className="mt-2 text-white/80">Our clinical team is here to help. Book a visit and let's talk.</p>
          <Link to="/book" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
            Book an appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>

      <section className="bg-secondary/60 py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-primary">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} to="/blogs/$slug" params={{ slug: p.slug }} className="card-elevated card-elevated-hover p-6 flex flex-col">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</div>
                <h3 className="mt-3 text-lg font-semibold text-primary leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
