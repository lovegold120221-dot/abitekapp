import { useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useUi } from "@/lib/ui-store";
import { Button } from "@/components/ui/button";
import { JOBS } from "@/lib/site-data";

export function ApplyModal() {
  const jobId = useUi((s) => s.applyJob);
  const close = useUi((s) => s.closeApply);
  const job = JOBS.find((j) => j.id === jobId);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const existing = JSON.parse(localStorage.getItem("abi-applications") || "[]") as unknown[];
    existing.push({ ...data, job: jobId, at: new Date().toISOString() });
    localStorage.setItem("abi-applications", JSON.stringify(existing));
    setSent(true);
  }

  return (
    <Dialog.Root
      open={Boolean(jobId)}
      onOpenChange={(v) => {
        if (!v) {
          close();
          setSent(false);
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(520px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bg p-6 shadow-[var(--shadow-card)] focus:outline-none sm:p-8">
          <Dialog.Close className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          {sent ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" />
              <Dialog.Title className="mt-4 text-2xl font-bold">Application sent</Dialog.Title>
              <Dialog.Description className="mt-2 text-fg-muted">
                Thanks for your interest. Talent will review and follow up if there's a fit.
              </Dialog.Description>
              <Button className="mt-6" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-2xl font-bold tracking-tight">
                Apply — {job?.title}
              </Dialog.Title>
              <Dialog.Description className="mt-1.5 text-sm text-fg-muted">
                {job?.location} · {job?.type}
              </Dialog.Description>
              <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
                <label className="grid gap-1.5 text-sm font-medium">
                  Full name
                  <input
                    name="name"
                    required
                    className="h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  LinkedIn or portfolio
                  <input
                    name="link"
                    type="url"
                    placeholder="https://"
                    className="h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  Why ABI Tech?
                  <textarea
                    name="why"
                    rows={4}
                    required
                    className="rounded-xl bg-bg-soft px-3.5 py-3 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
                  />
                </label>
                <Button type="submit" className="mt-2 w-full">
                  Submit application
                  <ArrowRight className="size-4" />
                </Button>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
