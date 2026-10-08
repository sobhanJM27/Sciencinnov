import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const inputVariants = cva(
  "w-full rounded-[40px] border text-sm outline-none transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        onDark:
          "border-brand-surface-dark/70 bg-transparent px-5 py-4 text-white placeholder:text-brand-surface-dark/70 focus-visible:border-brand-surface-dark focus-visible:ring-3 focus-visible:ring-brand-surface-dark/30",
        onLight:
          "border-brand-blue-active bg-brand-green-light/27 px-5 py-3.5 text-brand-black placeholder:text-brand-black-light/60 focus-visible:ring-3 focus-visible:ring-brand-green-light/40",
      },
    },
    defaultVariants: {
      variant: "onDark",
    },
  }
);

export function Input({
  className,
  variant,
  ...props
}: ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}