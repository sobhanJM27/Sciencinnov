import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center bg-brand-green-light text-sm whitespace-nowrap outline-none select-none focus-visible:ring-3 focus-visible:ring-brand-green disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 cursor-pointer hover:bg-brand-green-dark hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm active:duration-150",
  {
    variants: {
      variant: {
        default: "text-brand-surface",
        outline: "text-brand-surface-dark",
      },
      size: {
        default: "px-14 py-4 w-fit rounded-[40px]",
        lg: "py-4 px-18 w-fit rounded-[33px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
