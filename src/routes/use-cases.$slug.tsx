import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { INDUSTRIES, CASE_STUDIES } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";
import { useUi } from "@/lib/ui-store";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/use-cases/$slug")({
  component: IndustryPage,
  loader: ({ params }) => {
    const industry = INDUSTRIES.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    const cases = CASE_STUDIES.filter((c) => c.industrySlug === industry.slug);
    return { industry, cases };
  },
  head: ({ loaderData }) =>
    seoHead({
      title: `${loaderData?.industry.title ?? "Industry"} AI Use Cases`,
      description:
        loaderData?.industry.summary ??
        "Industry AI use cases implemented by ABI Tech.",
      path: `/use-cases/${loaderData?.industry.slug ?? ""}`,
    }),
});

function IndustryPage() {
  const { industry, cases } = Route.useLoaderData();
  const openConsult = useUi((s) => s.openConsult);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={industry.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative mx-auto max-w-[800px] px-5 py-20 lg:px-8">
          <Link to="/use-cases" className="text-sm font-semibold text-on-media/80">
            ← All industries
          </Link>
          <h1 className="mt-4 text-4xl font-extrabold text-on-media sm:text-5xl">{industry.title}</h1>
          <p className="mt-2 text-lg font-semibold text-on-media/90">{industry.tagline}</p>
          <p className="mt-4 max-w-xl text-on-media/85">{industry.summary}</p>
          <Button className="mt-7" onClick={openConsult}>
            Discuss a {industry.title.toLowerCase()} program
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-14 lg:px-8">
        <h2 className="text-xl font-bold">Typical use cases</h2>
        <ul className="mt-5 grid gap-3">
          {industry.useCases.map((u) => (
            <li key={u} className="flex gap-3 rounded-xl bg-bg-soft px-4 py-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {u}
            </li>
          ))}
        </ul>
        {cases.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-xl font-bold">Related case studies</h2>
            <ul className="mt-4 grid gap-4">
              {cases.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="flex gap-4 overflow-hidden rounded-xl shadow-[var(--shadow-card)]"
                  >
                    <img src={cs.image} alt="" className="h-24 w-36 object-cover" />
                    <span className="flex flex-col justify-center py-3 pr-4">
                      <span className="font-bold">{cs.title}</span>
                      <span className="text-sm text-primary">Read case study →</span>
                    </span>
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
