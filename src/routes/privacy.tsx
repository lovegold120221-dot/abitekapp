import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    seoHead({
      title: "Privacy Policy",
      description: "How ABI Tech handles contact and consultation information.",
      path: "/privacy",
    }),
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-fg-subtle">Last updated {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg-muted">
        <p>
          ABI Tech collects only what we need to reply to you. Consultation and career forms
          store your name, email, company, and message in your browser for this demo and are
          not sent to a third-party server from this site.
        </p>
        <p>
          If you email {COMPANY.email} or message us on WhatsApp, we use that correspondence to
          respond and, if we work together, to run the engagement. We do not sell personal
          information.
        </p>
        <p>
          Production systems we build for clients are covered by the contract for that
          engagement, including data-processing terms where required.
        </p>
        <p>
          Questions:{" "}
          <a className="text-primary" href={COMPANY.emailHref}>
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
