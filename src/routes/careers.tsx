import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { JOBS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";
import { useUi } from "@/lib/ui-store";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () =>
    seoHead({
      title: "Careers — Join ABI Tech in Ortigas, Pasig",
      description:
        "Open roles at ABI Tech: AI engineers, solutions consultants, MLOps, product design, and engagement managers. Ortigas hub, APAC hours.",
      path: "/careers",
    }),
});

function CareersPage() {
  const openApply = useUi((s) => s.openApply);
  return (
    <>
      <InnerHero
        eyebrow="Careers"
        title="Build systems people will still be using next year"
        lede="We hire people who like the unglamorous middle of AI — the integrations, the evals, the Tuesday when a model is wrong and a person has to take over."
      />
      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:px-8">
        <img
          src="/images/careers.jpg"
          alt="Team collaborating at ABI Tech"
          className="w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
        />
        <div>
          <h2 className="text-2xl font-extrabold">How we work</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-fg-muted">
            <li>Small pods. You will know everyone on the engagement.</li>
            <li>Ortigas hub in Pasig, APAC-friendly hours, clients across time zones.</li>
            <li>We write things down. Decisions live in the repo, not in chat.</li>
            <li>No bench-warming. If we hire you, there is real work waiting.</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-8 lg:px-8">
        <h2 className="text-2xl font-extrabold">Open roles</h2>
        <ul className="mt-6 grid gap-4">
          {JOBS.map((job) => (
            <li
              key={job.id}
              className="flex flex-col gap-4 rounded-2xl p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-bold">{job.title}</h3>
                <p className="mt-1 text-sm text-fg-muted">{job.blurb}</p>
                <p className="mt-2 flex flex-wrap gap-3 text-xs text-fg-subtle">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" /> {job.type}
                  </span>
                  <span>{job.team}</span>
                </p>
              </div>
              <Button className="shrink-0" onClick={() => openApply(job.id)}>
                Apply
              </Button>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
