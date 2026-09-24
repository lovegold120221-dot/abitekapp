import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { CASE_STUDIES } from "@/lib/site-data";
import { CtaBanner } from "@/components/home/cta-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudiesPage,
  head: () =>
    seoHead({
      title: "AI Case Studies — Healthcare, Finance, and Retail Results",
      description:
        "Real ABI Tech implementations: AI patient support, automated document processing, and real-time multilingual retail support — with measured results.",
      path: "/case-studies",
    }),
});

function CaseStudiesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Case studies"
        title="Real results. Real impact."
        lede="A sample of the systems we have put into production. Names of clients are withheld where agreements require it — the numbers are not."
      />
      <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-8">
        <ul className="grid gap-8">
          {CASE_STUDIES.map((cs) => (
            <li key={cs.slug}>
              <article className="grid overflow-hidden rounded-2xl shadow-[var(--shadow-card)] md:grid-cols-[1.1fr_1fr]">
                <img src={cs.image} alt={cs.title} className="h-full min-h-56 w-full object-cover" />
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-fg-subtle">
                    {cs.industry}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">{cs.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{cs.challenge}</p>
                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-xl font-extrabold text-primary">{m.value}</dt>
                        <dd className="text-[11px] text-fg-muted">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Read full case study
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
