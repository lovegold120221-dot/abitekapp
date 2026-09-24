import { createFileRoute } from "@tanstack/react-router";
import { InnerHero } from "@/components/layout/inner-hero";
import { STEPS } from "@/lib/site-data";
import { STEP_ICONS } from "@/components/home/icons";
import { CtaBanner } from "@/components/home/cta-banner";
import { Button } from "@/components/ui/button";
import { useUi } from "@/lib/ui-store";
import { ArrowRight } from "lucide-react";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () =>
    seoHead({
      title: "Our Approach — Discover, Design, Develop, Deploy, Scale",
      description:
        "ABI Tech’s five-step AI delivery path: discover, design, develop, deploy, and scale — with measurable baselines at every gate.",
      path: "/approach",
    }),
});

const DETAIL: Record<string, string> = {
  Discover:
    "Two to four weeks. We interview operators, pull sample data, map the current path of work, and name the constraint. You get a written point of view: where AI will pay, where it will not, and what has to be true before we write a line of code.",
  Design:
    "We prototype the human and the machine together — screens, handoffs, evaluation sets, and the integration sketch. Stakeholders see a working click-through before we staff a build squad.",
  Develop:
    "A dedicated pod ships in weekly increments with a live demo, an eval dashboard, and a written risk log. No black-box sprints. If a metric is sliding, you hear it in the standup — not at UAT.",
  Deploy:
    "We land in your environment with runbooks, access controls, and a rollback. Training is for the people who will use it on day one, not a slide deck left in a shared drive.",
  Scale:
    "After go-live we watch drift, cost, and adoption. Successful patterns get copied to the next workflow. The squad can stay, shrink, or hand over — you choose with data.",
};

function ApproachPage() {
  const openConsult = useUi((s) => s.openConsult);
  return (
    <>
      <InnerHero
        eyebrow="Our approach"
        title="A proven path to AI success"
        lede="Five stages. One owner. No mystery between the workshop and the system in production."
      >
        <Button onClick={openConsult}>
          Walk us through a problem
          <ArrowRight className="size-4" />
        </Button>
      </InnerHero>
      <section className="mx-auto max-w-[800px] px-5 py-12 lg:px-8">
        <ol className="grid gap-6">
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <li
                key={step.n}
                className="grid gap-4 rounded-2xl p-6 shadow-[var(--shadow-card)] sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <span className="text-sm font-extrabold text-primary">{step.n}</span>
                  <Icon className="size-6 text-fg-muted" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{step.title}</h2>
                  <p className="mt-1 text-sm font-medium text-fg-subtle">{step.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">{DETAIL[step.title]}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <CtaBanner />
    </>
  );
}
