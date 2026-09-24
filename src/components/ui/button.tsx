import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,box-shadow,transform,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-fg shadow-[0_8px_20px_rgba(29,111,232,0.28)] hover:bg-primary-hover",
        secondary:
          "bg-bg text-fg shadow-[0_0_0_1px_var(--color-border)] hover:bg-bg-soft",
        outline:
          "bg-transparent text-primary-fg shadow-[0_0_0_1.5px_rgba(255,255,255,0.85)] hover:bg-on-media/10",
        ghost: "bg-transparent text-fg hover:bg-primary-soft hover:text-primary",
        link: "bg-transparent text-primary font-semibold hover:underline underline-offset-4 px-0 h-auto",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-pill",
        md: "h-12 px-6 text-[15px] rounded-pill",
        lg: "h-14 px-7 text-base rounded-pill",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
