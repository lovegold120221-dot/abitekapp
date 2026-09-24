import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";
import { useUi } from "@/lib/ui-store";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  component: CaseDetail,
  loader: ({ params }) => {
    const study = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) =>
    seoHead({
      title: loaderData?.study.title ?? "Case study",
      description: loaderData?.study.challenge ?? "ABI Tech case study.",
      path: `/case-studies/${loaderData?.study.slug ?? ""}`,
      image: loaderData?.study.image,
    }),
});

function CaseDetail() {
  const { study } = Route.useLoaderData();
  const openConsult = useUi((s) => s.openConsult);
  const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);

  return (
    <>
      <section className="bg-linear-to-b from-bg-hero to-bg">
        <div className="mx-auto max-w-[860px] px-5 py-12 lg:px-8">
          <Link to="/case-studies" className="text-sm font-semibold text-primary">
            ← All case studies
          </Link>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-fg-subtle">
            {study.industry}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{study.title}</h1>
        </div>
      </section>
      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
        <img
          src={study.image}
          alt=""
          className="w-full rounded-2xl object-cover aspect-[21/9] shadow-[var(--shadow-card)]"
        />
      </div>
      <section className="mx-auto grid max-w-[860px] gap-10 px-5 py-12 lg:px-8">
        <dl className="grid grid-cols-3 gap-4 rounded-2xl bg-bg-soft p-6">
          {study.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <dt className="text-2xl font-extrabold text-primary sm:text-3xl">{m.value}</dt>
              <dd className="mt-1 text-xs text-fg-muted">{m.label}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h2 className="text-xl font-bold">The challenge</h2>
          <p className="mt-3 leading-relaxed text-fg-muted">{study.challenge}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold">What we built</h2>
          <p className="mt-3 leading-relaxed text-fg-muted">{study.solution}</p>
        </div>
        <div>
          <Button onClick={openConsult}>
            Start a similar program
            <ArrowRight className="size-4" />
          </Button>
        </div>
        {others.length ? (
          <div>
            <h2 className="text-xl font-bold">More results</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="block overflow-hidden rounded-xl shadow-[var(--shadow-card)]"
                  >
                    <img src={cs.image} alt="" className="aspect-[16/9] w-full object-cover" />
                    <span className="block p-4 font-semibold">{cs.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <CtaBanner />
    </>
  );
}
