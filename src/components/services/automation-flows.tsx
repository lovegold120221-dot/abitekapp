import { Fragment } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { AutomationFlow } from "@/lib/site-data";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function AutomationFlows({ flows }: { flows: readonly AutomationFlow[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5">
      {flows.map((flow, fi) => (
        <article
          key={flow.title}
          className="min-w-0 rounded-2xl border border-border bg-bg p-5 shadow-[var(--shadow-card)] sm:p-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-primary px-2 text-xs font-extrabold text-primary-fg">
              {pad(fi + 1)}
            </span>
            <span className="rounded-full bg-primary-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
              {flow.aspect}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-extrabold tracking-tight">{flow.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-fg-muted">{flow.tagline}</p>

          <ol
            aria-label={`How the ${flow.title} automation runs`}
            className="mt-5 flex items-stretch gap-1.5 overflow-x-auto pb-2"
          >
            {flow.steps.map((step, si) => (
              <Fragment key={step}>
                {si > 0 ? (
                  <li aria-hidden="true" className="flex items-center px-0.5">
                    <ArrowRight className="size-4 shrink-0 text-primary" strokeWidth={2.4} />
                  </li>
                ) : null}
                <li className="flex min-w-[132px] flex-1 flex-col rounded-xl bg-bg-soft px-3 py-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-fg-subtle">
                    Step {si + 1}
                  </span>
                  <span className="mt-1 text-[13px] font-semibold leading-snug">{step}</span>
                </li>
              </Fragment>
            ))}
          </ol>

          <p className="mt-3 flex items-start gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700">
            <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2.4} />
            {flow.result}
          </p>
        </article>
      ))}
    </div>
  );
}
