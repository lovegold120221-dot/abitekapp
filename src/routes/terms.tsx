import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site-data";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    seoHead({
      title: "Terms of Service",
      description: "Terms for using the ABI Tech website and requesting a conversation.",
      path: "/terms",
    }),
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-fg-subtle">Last updated {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg-muted">
        <p>
          This website describes ABI Tech and lets you request a conversation. Submitting a
          form does not create a contract. Paid work is governed by a signed statement of work.
        </p>
        <p>
          Case-study figures are representative of engagements we have delivered. Client names
          may be withheld. Do not rely on this site as a guarantee of a specific result.
        </p>
        <p>
          Content on this site is owned by ABI Tech unless noted. Partner names are trademarks
          of their owners and do not imply endorsement.
        </p>
        <p>
          Contact:{" "}
          <a className="text-primary" href={COMPANY.emailHref}>
            {COMPANY.email}
          </a>
          {" · "}
          <a className="text-primary" href={COMPANY.whatsappHref} target="_blank" rel="noreferrer">
            {COMPANY.whatsapp}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
