import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getPost, type BlogBlock } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";
import { useUi } from "@/lib/ui-store";
import { JsonLd } from "@/components/seo/json-ld";
import { articleJsonLd, breadcrumbJsonLd, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: async ({ params }) => {
    const post = await getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article — ABI Tech" }] };
    return seoHead({
      title: post.seo_title,
      description: post.seo_description,
      path: `/blog/${post.slug}`,
      image: post.cover_image,
      type: "article",
      published: post.published_at,
      modified: post.updated_at,
    });
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const openConsult = useUi((s) => s.openConsult);
  const faqLd =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      {faqLd ? <JsonLd data={faqLd} /> : null}

      <article>
        <header className="bg-linear-to-b from-bg-hero to-bg">
          <div className="mx-auto max-w-[800px] px-5 py-12 lg:px-8 lg:py-16">
            <Link to="/blog" className="text-sm font-semibold text-primary">
              ← All articles
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              {post.tags.join(" · ")}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-[16px] leading-relaxed text-fg-muted">{post.excerpt}</p>
            <p className="mt-5 text-sm text-fg-subtle">
              {post.author_name}
              {" · "}
              {post.author_role}
              {" · "}
              {new Date(post.published_at).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              {post.reading_minutes} min read
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
          <img
            src={post.cover_image}
            alt={post.cover_alt}
            className="w-full rounded-2xl object-cover aspect-[21/9] shadow-[var(--shadow-card)]"
          />
        </div>

        <div className="mx-auto max-w-[720px] px-5 py-12 lg:px-8">
          <div className="grid gap-5">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {post.faqs.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold tracking-tight">Questions we get from hospital teams</h2>
              <dl className="mt-6 grid gap-4">
                {post.faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl bg-bg-soft p-5">
                    <dt className="font-bold">{f.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <div className="mt-12 rounded-2xl bg-primary-soft p-6">
            <h2 className="text-xl font-extrabold">Put one hospital workflow into production</h2>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              Talk with ABI Tech about after-hours support, scheduling, or document automation — 14 days
              to a live system, on top of the EHR you already have.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button onClick={openConsult}>
                Schedule a consultation
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/case-studies/$slug" params={{ slug: "patient-support" }}>
                  Patient support case study
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-3 text-sm">
            <p className="font-bold">Related</p>
            <Link to="/use-cases/$slug" params={{ slug: "healthcare" }} className="text-primary hover:underline">
              Healthcare AI use cases
            </Link>
            <Link to="/services/$slug" params={{ slug: "automation" }} className="text-primary hover:underline">
              Automation & Integration
            </Link>
            <Link to="/case-studies/$slug" params={{ slug: "patient-support" }} className="text-primary hover:underline">
              AI-Powered Patient Support System
            </Link>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-4 text-2xl font-extrabold tracking-tight">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-2 text-xl font-bold">{block.text}</h3>;
    case "p":
      return <p className="text-[16px] leading-[1.7] text-fg-muted">{block.text}</p>;
    case "ul":
      return (
        <ul className="grid list-disc gap-2 pl-5 text-[16px] leading-[1.7] text-fg-muted">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-5 text-[17px] font-medium leading-relaxed text-fg">
          {block.text}
          {block.cite ? <cite className="mt-2 block text-sm font-normal text-fg-subtle">— {block.cite}</cite> : null}
        </blockquote>
      );
    case "img":
      return (
        <figure className="my-2">
          <img src={block.src} alt={block.alt} className="w-full rounded-2xl object-cover aspect-[16/9]" />
          <figcaption className="mt-2 text-center text-xs text-fg-subtle">{block.alt}</figcaption>
        </figure>
      );
    case "callout":
      return (
        <aside className="rounded-2xl bg-bg-soft p-5">
          <p className="text-sm font-bold text-primary">{block.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-fg-muted">{block.text}</p>
        </aside>
      );
    default:
      return null;
  }
}
