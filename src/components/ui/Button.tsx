import { ButtonHTMLAttributes, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../utils/cn";

const buttonVariants = cva(
  `inline-flex items-center justify-center text-base font-medium
  transition-colors focus-visible:outline-none gap-1 focus-visible:ring-2 
  focus-visible:ring-gray-100 focus-visible:ring-offset-cyan-400  focus-visible:ring-offset-2 active:scale-95 
  disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: "bg-gray-600 text-white",
        outline: "bg-transparent hover:bg-gray-900 hover:text-white",
      },
      size: {
        default: "py-0 px-3 rounded-lg",
        sm: "py-1 px-7 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
