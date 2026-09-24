import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={40}
      height={40}
      className={cn("logo-mark size-10 shrink-0 object-contain", className)}
    />
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="ABI Tech home">
      <LogoMark />
      <span className="leading-tight">
        <span className="block text-[17px] font-extrabold tracking-tight text-fg">
          ABI Tech
        </span>
        {!compact ? (
          <span className="hidden sm:block text-[10px] font-medium tracking-[0.04em] text-fg-subtle">
            AI Business Implementation Technology
          </span>
        ) : null}
      </span>
    </Link>
  );
}
