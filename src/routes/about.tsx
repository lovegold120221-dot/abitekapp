import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { CtaBanner } from "@/components/home/cta-banner";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/site-data";
import { useUi } from "@/lib/ui-store";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    seoHead({
      title: "About ABI Tech — AI Implementation Firm in Ortigas, Pasig",
      description:
        "ABI Tech is an AI implementation firm in Ortigas Center, Pasig. We take strategy through production support so operators get a system they will actually use.",
      path: "/about",
    }),
});

function AboutPage() {
  const openConsult = useUi((s) => s.openConsult);
  return (
    <>
      <InnerHero
        eyebrow="About ABI Tech"
        title="The implementation firm for teams who are done with AI theatre"
        lede="We were founded in Manila to do one thing well: take an AI idea that sounds expensive and make it a working system your operators will actually use."
      >
        <Button onClick={openConsult}>
          Talk with us
          <ArrowRight className="size-4" />
        </Button>
      </InnerHero>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:px-8">
        <img
          src="/images/about-office.jpg"
          alt="ABI Tech team collaborating around a table"
          className="w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
        />
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Why we exist</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
            Most companies do not have an AI strategy problem. They have an implementation
            problem. Proofs of concept stall. Vendors disappear after the demo. Models never
            meet the system of record. ABI Tech was built to close that gap — strategy through
            support, under one roof.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
            We work with operators in healthcare, finance, retail, education, manufacturing, and
            the public sector. Our home is Ortigas Center, Pasig; our clients are worldwide.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft">
        <div className="mx-auto grid max-w-[1100px] gap-8 px-5 py-14 sm:grid-cols-3 lg:px-8">
          {[
            {
              t: "Operators first",
              d: "We design for the person who will live with the system on a Tuesday afternoon — not the slide that wins the RFP.",
            },
            {
              t: "Measurable or it doesn't ship",
              d: "Every engagement has a baseline, a target, and a way to see whether we hit it. Vanity metrics stay off the dashboard.",
            },
            {
              t: "Stay after go-live",
              d: "Models drift. Processes change. We keep a team on the system so it does not quietly rot six months later.",
            },
          ].map((v) => (
            <article key={v.t} className="rounded-xl bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-bold">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 lg:px-8">
        <h2 className="text-2xl font-extrabold">By the numbers</h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s) => (
            <li key={s.label}>
              <p className="text-4xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-fg-muted">{s.label}</p>
            </li>
          ))}
        </ul>
        <img
          src="/images/workshop.jpg"
          alt="Leadership workshop"
          className="mt-10 w-full rounded-2xl object-cover aspect-[21/9] shadow-[var(--shadow-card)]"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/careers">
              We're hiring
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/contact">Visit us in Ortigas</Link>
          </Button>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
