import { useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useUi } from "@/lib/ui-store";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, COMPANY } from "@/lib/site-data";

export function ConsultModal() {
  const open = useUi((s) => s.consultOpen);
  const onOpenChange = (v: boolean) => {
    if (v) useUi.getState().openConsult();
    else useUi.getState().closeConsult();
  };
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    setBusy(true);
    window.setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("abi-inquiries") || "[]") as unknown[];
      existing.push({ ...payload, at: new Date().toISOString() });
      localStorage.setItem("abi-inquiries", JSON.stringify(existing));
      setBusy(false);
      setSent(true);
    }, 500);
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) {
          setSent(false);
          setBusy(false);
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/50 data-[state=open]:animate-[fade-up_200ms_ease-out]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(560px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bg p-6 shadow-[var(--shadow-card)] focus:outline-none sm:p-8">
          <Dialog.Close className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft hover:text-fg">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          {sent ? (
            <div className="py-6 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" />
              <Dialog.Title className="mt-4 text-2xl font-bold">Request received</Dialog.Title>
              <Dialog.Description className="mt-2 text-fg-muted">
                A partner from ABI Tech will reach out within one business day. Prefer a faster
                reply? WhatsApp us at {COMPANY.whatsapp} or email {COMPANY.email}.
              </Dialog.Description>
              <Button className="mt-6" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-2xl font-bold tracking-tight">
                Schedule a consultation
              </Dialog.Title>
              <Dialog.Description className="mt-1.5 text-sm text-fg-muted">
                Tell us a little about your business. We'll come back with a point of view, not a pitch deck.
              </Dialog.Description>
              <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
                <Field label="Full name" name="name" required autoComplete="name" />
                <Field label="Work email" name="email" type="email" required autoComplete="email" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Company" name="company" required autoComplete="organization" />
                  <Field label="Role" name="role" autoComplete="organization-title" />
                </div>
                <label className="grid gap-1.5 text-sm font-medium">
                  Industry
                  <select
                    name="industry"
                    className="h-12 rounded-xl border-0 bg-bg-soft px-3.5 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an industry
                    </option>
                    {INDUSTRIES.map((i) => (
                      <option key={i.slug} value={i.title}>
                        {i.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  What are you looking to solve?
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="resize-y rounded-xl border-0 bg-bg-soft px-3.5 py-3 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary"
                  />
                </label>
                <Button type="submit" className="mt-2 w-full" disabled={busy}>
                  {busy ? "Sending…" : "Request a conversation"}
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

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-12 rounded-xl border-0 bg-bg-soft px-3.5 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary"
      />
    </label>
  );
}
