"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import {cva} from "class-variance-authority";

import {cn} from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        inline:
          "font-semibold text-slate-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Label = React.forwardRef(({className, variant, ...props}, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({variant}), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export {Label};
